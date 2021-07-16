import * as DWRest from "../types/DW_Rest";

import { exception } from "console";
import mime from "mime-types"; //https://www.npmjs.com/package/mime-types
import path from "path";
import tar from "tar";

/**
 *This class represent the standard behavior for chunk uploading documents with single or multiple sections.
 *
 * @export
 * @class StandardChunkUploadDocument
 * @implements {DWRest.IChunkUploadDocument}
 */
export class StandardChunkUploadDocument
  implements DWRest.IChunkUploadDocument
{
  //Interface values
  private _FilesPath: string[] = [];
  private _UploadFileContentType: string | false = "";
  private _UploadFilePath = "";
  private _XIndexDataContentType = "";
  private _XFileName = "";
  private _IndexEntries?: DWRest.IDocumentIndexField[];
  private _InputSection?: DWRest.IInputSection[];
  private _Document: DWRest.IDocument | DWRest.IInputDocument;
  private _DocumentType: DWRest.DocuWareSpecificContentType;
  private _DocumentContent = "";
  private _DocumentContentType: DWRest.DocuWareSpecificContentType =
    DWRest.DocuWareSpecificContentType.Unknown;

  //X-File-Name Tarball format style
  private readonly _ContainerFileNamesPrefix = "Tar file names:";
  private readonly _ContainerFileNamesSeparator = "/";
  private readonly _ContainerPath = path.resolve("./container.tar");

  // Error messages
  private _ErrorFilesPathNotSet =
    "StandardChunkUploadDocument FilesPath contains no elements!";

  /**
   *Returns a string array with all file path
   *
   * @readonly
   * @type {string[]}
   * @memberof StandardUploadDocument
   */
  public get FilesPath(): string[] {
    return this._FilesPath;
  }

  /**
   *Returns the upload file content-type and in the case of multiple files the tarball file type
   *
   * @readonly
   * @type {string}
   * @memberof StandardUploadDocument
   */
  public get UploadFileContentType(): string {
    // Return value directly if already set
    if (this._UploadFileContentType !== "") {
      return this._UploadFileContentType.toString();
    }

    // Throw exception when FilesPath contains no element
    if (this.FilesPath.length < 1) {
      throw exception(this._ErrorFilesPathNotSet);
    }

    // Return content-type of the single file or the container
    if (this.FilesPath.length === 1) {
      const fileName = path.basename(this.FilesPath[0]);
      this._UploadFileContentType = mime.contentType(fileName);
    } else {
      this._UploadFileContentType =
        DWRest.DocuWareSpecificContentType.FilesContainerTar;
    }

    return this._UploadFileContentType.toString();
  }

  /**
   *Returns the path to the file that should be uploaded.
   *In case of multiple files a tarball will be created and its path returned.
   *
   * @readonly
   * @type {string}
   * @memberof StandardUploadDocument
   */
  public get UploadFilePath(): string {
    // Return value directly if already set
    if (this._UploadFilePath !== "") {
      return this._UploadFilePath;
    }

    // Throw exception when FilesPath contains no element
    if (this.FilesPath.length < 1) {
      throw exception(this._ErrorFilesPathNotSet);
    }

    // Return for single file its path or for more files creates a container and return its path
    if (this.FilesPath.length === 1) {
      //Set to the path of the first file path
      this._UploadFilePath = this.FilesPath[0];
    } else {
      //Create tarball and set to its path
      this._UploadFilePath = this.CreateTarball();
    }

    return this._UploadFilePath;
  }

  public get XIndexDataContentType(): string {
    // Return value directly if already set
    if (this._XIndexDataContentType !== "") {
      return this._XIndexDataContentType;
    }

    // Throw exception when FilesPath contains no element
    if (this.FilesPath.length < 1) {
      throw exception(this._ErrorFilesPathNotSet);
    }

    if (this.FilesPath.length === 1 || this.IsOnlySection) {
        this._XIndexDataContentType = DWRest.DocuWareSpecificContentType.Json;

        return this._XIndexDataContentType;
    }

    this._XIndexDataContentType = DWRest.DocuWareSpecificContentType.InputDocument;

    return this._XIndexDataContentType;
  }

  /**
   *Returns the necessary file name format for the chunk upload
   *
   * @readonly
   * @type {string}
   * @memberof StandardUploadDocument
   */
  public get XFileName(): string {
    // Return value directly if already set
    if (this._XFileName !== "") {
      return this._XFileName;
    }

    // Throw exception when FilesPath contains no element
    if (this.FilesPath.length < 1) {
      throw exception(this._ErrorFilesPathNotSet);
    }

    // Set the correct file name format depending on single or multiple files
    if (this.FilesPath.length === 1) {
      // Set to the file name from file path
      this._XFileName = path.basename(this._FilesPath[0]);
    } else if (this._FilesPath.length > 1) {
      // TL/DR Create the Tarball files information string
      // In the case of more files
      //
      // Set prefix before all files name
      // concat
      // Map all files path to files name
      // Join all files name together with the separator
      this._XFileName =
        this._ContainerFileNamesPrefix +
        this._FilesPath
          .map((f) => path.basename(f))
          .join(this._ContainerFileNamesSeparator);
    }

    return this._XFileName;
  }

  /**
   *Returns the correct document format for the single or multiple section application properties
   *
   * @readonly
   * @type {(DWRest.IDocument | DWRest.IInputDocument)}
   * @memberof StandardChunkUploadDocument
   */
  public get Document(): DWRest.IDocument | DWRest.IInputDocument {
    // Return value directly if already set
    if (Object.keys(this._Document).length !== 0) {
      return this._Document;
    }

    // Throw exception when FilesPath contains no element
    if (this.FilesPath.length < 1) {
      throw exception(this._ErrorFilesPathNotSet);
    }

    // Return in Document format if it is only a single section and multiple section with only one application properties
    if (this.FilesPath.length === 1 || this.IsOnlySection) {
      const document: DWRest.IDocument = {
        ApplicationProperties:
          this._InputSection === undefined || this._InputSection.length === 0
            ? undefined
            : this._InputSection[0].applicationProperties,
        Fields: this._IndexEntries,
      };
      return document;
    }

    // Return a InputDocument in case of multiple sections application properties
    const inputDocument: DWRest.IInputDocument = {
      fields: this._IndexEntries,
      sections: this._InputSection,
    };

    return inputDocument;
  }


  private get IsOnlySection(): boolean {
    return this._InputSection === undefined
      ? false
      : this._InputSection.length === 1;
  }

  /**
   *Returns the document content-type
   *
   * @readonly
   * @type {DWRest.DocuWareSpecificContentType}
   * @memberof StandardChunkUploadDocument
   */
  public get DocumentType(): DWRest.DocuWareSpecificContentType {
    // Return value directly if already set
    if (this._DocumentType !== DWRest.DocuWareSpecificContentType.Unknown) {
      return this._DocumentType;
    }

    // Throw exception when FilesPath contains no element
    if (this.FilesPath.length < 1) {
      throw exception(this._ErrorFilesPathNotSet);
    }

    // Always return content-type json format
    return DWRest.DocuWareSpecificContentType.Json;
  }

  /**
   *That property contains the document content like index values and/or application properties
   *
   * @type {string}
   * @memberof StandardUploadDocument
   */
  public get DocumentContent(): string {
    return this._DocumentContent;
  }
  public set DocumentContent(value: string) {
    this._DocumentContent = value;
  }

  /**
   *Contains the type of content like xml or json
   *
   * @type {DWRest.DocumentContentType}
   * @memberof StandardUploadDocument
   */
  public get DocumentContentType(): DWRest.DocuWareSpecificContentType {
    return this._DocumentContentType;
  }
  public set DocumentContentType(value: DWRest.DocuWareSpecificContentType) {
    this._DocumentContentType = value;
  }

  /**
   *Creates an instance of StandardChunkUploadDocument.
   * @param {string[]} filesPath contains the file path of every file that should be uploaded
   * @param {DWRest.IDocumentIndexField} indexEntries contains the index entries for a document
   * @param {DWRest.IInputSection} inputSection contains the section with the application properties
   * @memberof StandardChunkUploadDocument
   */
  constructor(filesPath: string[]);
  constructor(
    filesPath: string[],
    indexEntries?: DWRest.IDocumentIndexField[],
    inputSection?: DWRest.IInputSection[]
  );
  constructor(
    filesPath: string[],
    public indexEntries?: DWRest.IDocumentIndexField[],
    public inputSection?: DWRest.IInputSection[]
  ) {
    // Resolve for every file the full path
    this._FilesPath = filesPath.map((f) => path.resolve(f));
    this._IndexEntries =
      indexEntries === null || indexEntries === undefined
        ? undefined
        : indexEntries;
    this._InputSection =
      inputSection === null || inputSection === undefined
        ? undefined
        : inputSection;

    this._Document = {};
    this._DocumentType = DWRest.DocuWareSpecificContentType.Unknown;
  }

  /**
   *Creates a tarball/tar container with all files and return its path
   *
   * @private
   * @returns {string} The path to the created tarball
   * @memberof StandardUploadDocument
   */
  private CreateTarball(): string {
    // Creates a string which contains every working directory from each file that is in the FilesPath array
    const directories: string =
      this.GetFilesPathDirectoriesFullPathConcatenatedAsString(
        this._FilesPath,
        " "
      );

    tar.create(
      {
        gzip: false,
        file: this._ContainerPath,
        sync: true, // Force to synchronously behavior
        cwd: directories,
        preservePaths: false,
      },
      this.FilesPath
    );

    return this._ContainerPath;
  }

  /**
   *Concatenates the directory paths of the files path into a string separated by a separator character.
   *
   * @private
   * @param {string[]} filesPath
   * @param {string} separator
   * @returns {string}
   * @memberof StandardChunkUploadDocument
   */
  private GetFilesPathDirectoriesFullPathConcatenatedAsString(
    filesPath: string[],
    separator: string
  ): string {
    const hashMap: Map<string, boolean> = new Map<string, boolean>();

    //Get the directories from every file
    const filesPathDirectoryPathsUnfiltered: string[] = filesPath.map((f) =>
      path.dirname(f)
    );

    //Filter out duplicated directories with the use of a hash map
    const filesPathDirectoryPaths: string[] =
      filesPathDirectoryPathsUnfiltered.filter(function (item: string) {
        return hashMap.has(item) ? false : hashMap.set(item, true);
      });

    //Concatenates the directories path together separated by a separator character.
    const directories: string = filesPathDirectoryPaths.join(separator);

    return directories;
  }
}
