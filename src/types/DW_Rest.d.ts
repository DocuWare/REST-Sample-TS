/**
 * Most of DocuWare Objects contain links
 * so this is a base to be used
 *
 * @interface ILinkModel
 */
export interface ILinkModel {
  Links?: ILink[];
}

/**
 * Wraps all necessary logon properties
 *
 * @interface ILogonModel
 */
export interface ILogonModel {
  Username: string;
  Password: string;
  Organization: string;
  HostID: string;
  RedirectToMyselfInCaseOfError: boolean;
  RememberMe: boolean;
}

/**
 *The response after logon
 *
 * @interface ILogonResponse
 * @extends {ILinkModel}
 */
export interface ILogonResponse extends ILinkModel {
  Documentation: {
    Links: ILink[];
  };
}

/**
 * A link
 *
 * @interface ILink
 */
export interface ILink {
  rel: string;
  href: string;
  type: string;
}

/**
 * DocuWare Organization Model
 *
 * @interface IOrganization
 * @extends {ILinkModel}
 */
export interface IOrganization extends ILinkModel {
  Name: string;
  Guid: string;
  AdditionalInfo: {
    Administrator: string;
    EMail: string;
    SystemNumber: number;
    RuntimeVersion: string;
    OrganizationType: string;
  };
}

/**
 *Organization Response
 *
 * @interface IOrganizations
 */
export interface IOrganizations {
  Organization: IOrganization[];
}

/**
 * DocuWare FileCabinet Model
 *
 * @interface IFileCabinet
 * @extends {ILinkModel}
 */
export interface IFileCabinet extends ILinkModel {
  Name: string;
  Color: string;
  Id: string;
  IsBasket: boolean;
  Default: boolean;
  Documents: [IDocument];
}

/**
 *Upload document structure for chunk upload
 *
 * @interface IChunkUploadDocument
 */
export interface IChunkUploadDocument {
  FilesPath: string[];
  UploadFileContentType: string | false;
  UploadFilePath: string;
  XFileName: string;
  XIndexDataContentType: string;
  Document: IDocument | IInputDocument;
  DocumentType: DocuWareSpecificContentType;
  DocumentContent: string;
  DocumentContentType: DocuWareSpecificContentType;
}

/**
 * FileCabinet Response
 *
 * @interface IFileCabinets
 */
export interface IFileCabinets {
  FileCabinet: IFileCabinet[];
}

/**
 * DocuWare Document Model
 *
 * @interface IDocument
 * @extends {ILinkModel}
 */
export interface IDocument extends ILinkModel {
  Fields?: IDocumentIndexField[];
  Flags?: {
    IsCold: boolean;
    IsDBRecord: boolean;
    IsCheckedOut: boolean;
    IsCopyRightProtected: boolean;
    IsVoiceAvailable: boolean;
    HasAppendedDocuments: boolean;
    IsProtected: boolean;
    IsDeleted: boolean;
    IsEmail: boolean;
  };
  Sections?: ISection[];
  ContentType?: string;
  TotalPages?: number;
  Id?: number;
  Title?: string;
  LastModified?: string;
  LastModifiedSpecified?: boolean;
  CreatedAt?: string;
  CreatedAtSpecified?: boolean;
  FileSize?: number;
  SectionCount?: number;
  IntellixTrust?: string;
  VersionStatus?: string;
  FileCabinetId?: string;
  Version?: IDocumentVersion;
  ApplicationProperties?: IDocumentApplicationProperty[];
}

/**
 * DocuWare InputDocument Model
 *
 * @export
 * @interface IInputDocument
 * @extends {ILinkModel}
 */
export interface IInputDocument extends ILinkModel {
  fields?: IDocumentIndexField[];
  flags?: IInputFlags;
  sections?: IInputSection[];
  fileChunk?: IUploadedFileChunk;
}

/**
 * DocuWare DocumentIndexFieldValueBase Model
 *
 * @export
 * @interface IDocumentIndexFieldValueBase
 */
export interface IDocumentIndexFieldValueBase {
  item: any;
  itemElementName: ItemChoiceType;
}

/**
 * DocuWare DocumentIndexField Model
 *
 * @export
 * @interface IDocumentIndexField
 * @extends {IDocumentIndexFieldValueBase}
 */
export interface IDocumentIndexField extends IDocumentIndexFieldValueBase {
  pointAndShootInfo?: IPointAndShootInfo;
  fieldName: string;
  fieldLabel?: string;
  isNull?: boolean;
  readOnly?: boolean;
}

/**
 * DocuWare PointAndShootInfo Model
 *
 * @export
 * @interface IPointAndShootInfo
 */
export interface IPointAndShootInfo {
  box: IDWRectangle[];
  pageNumber: number;
}

/**
 * DocuWare DWRectangle Model
 *
 * @export
 * @interface IDWRectangle
 */
export interface IDWRectangle {
  left: number;
  top: number;
  width: number;
  height: number;
}

/**
 * DocuWare InputFlags Model
 *
 * @export
 * @interface IInputFlags
 */
export interface IInputFlags {
  isEmail: boolean;
}

/**
 * DocuWare InputSection Model
 *
 * @export
 * @interface IInputSection
 */
export interface IInputSection {
  applicationProperties: IDocumentApplicationProperty[];
}

/**
 * DocuWare UploadedFileChunk Model
 *
 * @export
 * @interface IUploadedFileChunk
 */
export interface IUploadedFileChunk {
  links: ILink[];
  finished: boolean;
  lastChunkId: string;
  bytesWritten: number;
}

/**
 * DocuWare Section Model
 *
 * @interface ISection
 */
export interface ISection extends ILinkModel {
  Id: string;
  ContentType: string;
  HaveMorePages: boolean;
  PageCount: number;
  FileSize: number;
  OriginalFileName: string;
  ContentModified: string;
  Pages: ILinkModel;
}

/**
 *DocuWare Page Model
 *
 * @interface IPage
 * @extends {ILinkModel}
 */
export interface IPage extends ILinkModel {
  PageNum: number;
  Data: {
    DpiX: number;
    DpiY: number;
    Width: number;
    Height: number;
    LowQualitySize: number;
    TileSize: number;
    RenderedImageFormat: string;
    ContentArea: {
      Left: number;
      Top: number;
      Width: number;
      Height: number;
    };
  };
}

/**
 * DocuWare Pages Model
 *
 * @interface IPages
 * @extends {ILinkModel}
 */
export interface IPages extends ILinkModel {
  Page: IPage[];
}

/**
 * List of Fields
 *
 * @interface IFieldList
 */
export interface IFieldList {
  Field: IDocumentIndexField[];
}

/**
 * DocuWare Dialog Field Model
 *
 * @interface IDlgField
 * @extends {ILinkModel}
 */
export interface IDlgField extends ILinkModel {
  DBFieldName: string;
  DlgLabel: string;
  DWFieldType: ItemChoiceType;
  Visible: boolean;
  Length?: number;
  AllowExtendedSearch: boolean;
  AllowFiltering: boolean;
  AssignedInternalSelectList: boolean;
}

/**
 * DocuWare Document Index Field Table
 *
 * @interface IDocumentIndexFieldTable
 * @extends {IDocumentIndexFieldValueBase}
 */
export interface IDocumentIndexFieldTable extends IDocumentIndexFieldValueBase {
  Rows: ITableFieldRow[];
}

/**
 * A single row of DocuWare table field
 *
 * @interface ITableFieldRow
 */
export interface ITableFieldRow {
  Columns: ITableFieldColumn[];
}

/**
 * A siongle column of DocuWare Table Field
 *
 * @interface ITableFieldColumn
 */
export interface ITableFieldColumn {
  FieldName: string;
  FieldLabel?: string;
  Item: number | string | null;
}

/**
 * Keywords
 *
 * @interface IDocumentIndexFieldKeywords
 */
export interface IDocumentIndexFieldKeywords {
  Keyword: string[];
}

/**
 * Application properties
 *
 * @interface IDocumentApplicationProperties
 */
export interface IDocumentApplicationProperties {
  DocumentApplicationProperty: IDocumentApplicationProperty[];
}

/**
 * Application property
 *
 * @interface IDocumentApplicationProperty
 */
export interface IDocumentApplicationProperty {
  Name: string;
  Value: string;
}

/**
 * DocuWare Query Result
 *
 * @interface IDocumentsQueryResult
 * @extends {ILinkModel}
 */
export interface IDocumentsQueryResult extends ILinkModel {
  Count: number;
  Items: IDocument[];
  Next: string;
  Download: string;
}

/**
 * DocuWare Dialog Model
 *
 * @interface IDialog
 * @extends {ILinkModel}
 */
export interface IDialog extends ILinkModel {
  Id: string;
  FileCabinetId: string;
  FileCabinetName: string;
  DisplayName: string;
  IsForMobile: boolean;
  AssignedDialogId: string;
  Color: string;
  IsDefault: boolean;
  Type: DialogType;
  Fields: IDlgField[];
  Query: {
    Expression: string;
    Fields: string[];
    Links: ILink[];
  };
  Properties: {
    LogicalOperator: {
      DefaultOperator: Operation;
      Show: boolean;
    };
  };
}

/**
 * Dialog Response
 *
 * @interface IDialogsResponse
 */
export interface IDialogsResponse {
  Dialog: IDialog[];
}

/**
 * Dialog Expression
 *
 * @interface IDialogExpression
 */
export interface IDialogExpression {
  Condition: ICondition[];
  Operation: Operation;
}

/**
 *Dialog Condition
 *
 * @interface ICondition
 */
export interface ICondition {
  Value: string[] | null;
  DBName: string;
}

/**
 * Check in parameters in case of versioning
 *
 * @interface ICheckInActionParameters
 */
export interface ICheckInActionParameters {
  DocumentAction: DocumentAction;
  Comments: string;
  DocumentVersion: IDocumentVersion;
  CheckInReturnDocument?: CheckInReturnedDocument;
}

/**
 * Document version
 *
 * @interface IDocumentVersion
 */
export interface IDocumentVersion {
  Major: number;
  Minor: number;
}

/**
 * Stamp Placement
 *
 * @interface IStampPlacement
 */
export interface IStampPlacement {
  StampId: string;
  Layer: number;
  Location?: IDWPoint;
  Field?: IFormFieldValue[];
  Password?: string;
}

/**
 * Annotation Placement
 *
 * @interface IAnnotationPlacement
 */
export interface IAnnotationPlacement {
  Items: (IAnnotation | IStampPlacement)[];
}

/**
 * FormFieldValue
 *
 * @interface IFormFieldValue
 */
export interface IFormFieldValue {
  Name: string;
  Value: string;
  TypedValue: {
    Item: any;
    ItemElementName?: ItemChoiceType;
  };
}

/**
 * DWPoint
 *
 * @interface IDWPoint
 */
export interface IDWPoint {
  X: number;
  Y: number;
}

/**
 * Documents Transfer Info
 *
 * @interface IDocumentsTransferInfo
 */
export interface IDocumentsTransferInfo {
  SourceFileCabinetId: string;
  UseDefaultDialog: boolean;
  KeepSource: boolean;
  FillIntellix: boolean;
  Documents: IDocument[];
}

/**
 * FileCabinet Transfer Info
 *
 * @interface IFileCabinetTransferInfo
 */
export interface IFileCabinetTransferInfo {
  SourceDocId: number[];
  SourceFileCabinetId: string;
  KeepSource: boolean;
  FillIntellix: boolean;
}

/**
 * Information for merging
 *
 * @interface IContentMergeOperationInfo
 */
export interface IContentMergeOperationInfo {
  Documents: number[];
  Operation: ContentMergeOperation;
  Force: boolean;
}

/**
 * Information for dividing
 *
 * @interface IContentDivideOperationInfo
 */
export interface IContentDivideOperationInfo {
  Operation: ContentDivideOperation;
  Force: boolean;
}

/**
 * Annotation
 *
 * @interface IAnnotation
 */
export interface IAnnotation {
  Layer: ILayer[];
}

/**
 * Layer
 *
 * @interface ILayer
 */
export interface ILayer {
  Items?: (
    | IDeleteEntry
    | ITextEntry
    | ILineEntry
    | IRectEntry
    | IPolyLineEntry
  )[];
  Id: number;
}

/**
 * Entry base
 *
 * @interface IEntryBase
 */
export interface IEntryBase {
  $type: string;
  Created?: ICreateInfo;
  Color?: string; //#000000
  Rotation?: Rotation;
  Transparent?: boolean;
  StrokeWidth?: number;
  Id?: string;
}

/**
 * Info of creation
 *
 * @interface ICreateInfo
 */
export interface ICreateInfo {
  User: string;
  Time: string;
}

/**
 * Deletion entry
 *
 * @interface IDeleteEntry
 * @extends {IEntryBase}
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IDeleteEntry extends IEntryBase {}

/**
 * Text entry
 *
 * @interface ITextEntry
 * @extends {IEntryBase}
 */
export interface ITextEntry extends IEntryBase {
  Font: IFont;
  Value: string;
  Location: IAnnotationRectangle;
}

/**
 * Annotation rectangle
 *
 * @interface IAnnotationRectangle
 */
export interface IAnnotationRectangle {
  Left: number;
  Top: number;
  Width: number;
  Height: number;
}

/**
 * Annotation point
 *
 * @interface IAnnotationPoint
 */
export interface IAnnotationPoint {
  X: number;
  Y: number;
}

/**
 * Font
 *
 * @interface IFont
 */
export interface IFont {
  FontName: string;
  Bold: boolean;
  Italic: boolean;
  Underlinded: boolean;
  StrikeThrough: boolean;
  FontSize: number;
  Spacing: number;
}

/**
 * Rect entry
 *
 * @interface IRectEntry
 * @extends {IEntryBase}
 */
export interface IRectEntry extends IEntryBase {
  Location: IAnnotationPoint;
  Filled?: boolean;
  Ellipse?: boolean;
}

/**
 * Line entry
 *
 * @interface ILineEntry
 * @extends {IEntryBase}
 */
export interface ILineEntry extends IEntryBase {
  From: IAnnotationPoint;
  To: IAnnotationPoint;
  Arrow?: boolean;
}

/**
 * Poly line entry
 *
 * @interface IPolyLineEntry
 * @extends {IEntryBase}
 */
export interface IPolyLineEntry extends IEntryBase {
  Stroke: IStroke[];
}

/**
 * A stroke
 *
 * @interface IStroke
 */
export interface IStroke {
  Point: IAnnotation;
}

/**
 * New user
 *
 * @interface INewUser
 */
export interface INewUser {
  Name: string;
  DBName: string;
  Email: string;
  Password: string;
  NetworkId?: string;
}

/**
 * User
 *
 * @interface IUser
 * @extends {ILinkModel}
 */
export interface IUser extends ILinkModel {
  Id: string;
  Name: string;
  FirstName: string;
  LastName: string;
  Salutation: string;
  DBName: string;
  Active: boolean;
  NetworkID?: string;
  EMail: string;
  DefaultWebBasket: string;
  OutOfOffice: IOutOfOffice;
}

/**
 * Regional Settings
 *
 * @interface IRegionalSettings
 */
export interface IRegionalSettings {
  Language?: string;
  Culture?: string;
  Calendar?: string;
}

/**
 * Out of office
 *
 * @interface IOutOfOffice
 */
export interface IOutOfOffice {
  IsOutOfOffice?: boolean;
  StartDateTime?: string;
  EndDateTime?: string;
}

/**
 * Operation about assignments
 *
 * @interface IAssignmentOperation
 */
export interface IAssignmentOperation {
  Ids: string[];
  OperationType: AssignmentOperationType;
}

/**
 * A role
 *
 * @interface IRole
 * @extends {ILinkModel}
 */
export interface IRole extends ILinkModel {
  Id?: string;
  Name: string;
  Active: boolean;
  Type?: RoleTypes;
}

/**
 * Roles
 *
 * @interface IRoles
 */
export interface IRoles {
  Item: IRole[];
}

/**
 * Group
 *
 * @interface IGroup
 * @extends {ILinkModel}
 */
export interface IGroup extends ILinkModel {
  Id?: string;
  Name: string;
  Active: boolean;
}

/**
 * Groups
 *
 * @interface IGroups
 */
export interface IGroups {
  Item: IGroup[];
}

/**
 * Export Settings
 *
 * @interface IExportSettings
 */
export interface IExportSettings {
  ExportHistory?: boolean;
  ExportTextShots?: boolean;
}

/**
 * Import Settings
 *
 * @interface IImportSettings
 */
export interface IImportSettings {
  PreserveSystemFields?: boolean;
  FieldMappings: IFieldMapping[];
}

/**
 * Import results
 *
 * @interface IImportResult
 */
export interface IImportResult {
  Results: IImportResultEntry[];
  FileChunk?: IUploadedResultChunk;
}

/**
 * Import results entry
 *
 * @interface IImportResultEntry
 */
export interface IImportResultEntry {
  EntryVersions: IImportEntryVersion[];
  ErrorMessage?: string;
  Status: ImportEntryStatus;
}

/**
 * Import Entry Version
 *
 * @interface IImportEntryVersion
 */
export interface IImportEntryVersion {
  Id: number;
  Status: ImportEntryStatus;
}

/**
 * Upload result chunk
 *
 * @interface IUploadedResultChunk
 * @extends {ILinkModel}
 */
export interface IUploadedResultChunk extends ILinkModel {
  Finished?: boolean;
  LastChunkId?: string;
  BytesWritten?: number;
}

/**
 * Field mapping
 *
 * @interface IFieldMapping
 */
export interface IFieldMapping {
  Source: string;
  Destination?: string;
}

/**
 * Lock information
 *
 * @interface ILockInfo
 */
export interface ILockInfo {
  Operation?: string;
  Interval?: string; //http://msdn.microsoft.com/en-us/library/se73z7b9.aspx
}

/**
 * Workflow
 *
 * @interface IWorkflow
 * @extends {ILinkModel}
 */
export interface IWorkflow extends ILinkModel {
  Id: string;
  Name: string;
  TaskCount: number;
  FileCabinetId: string;
  TimeStamp: string;
}

/**
 * List of Workflows
 *
 * @interface IWorkflows
 */
export interface IWorkflows {
  Workflow: IWorkflow[];
}

/**
 * List of workflow tasks
 *
 * @interface IWorkflowTasks
 * @extends {ILinkModel}
 */
export interface IWorkflowTasks extends ILinkModel {
  Task: IWorkflowTask[];
  Count: number;
  TimeStamp: string;
}

/**
 * Workflow task
 *
 * @interface IWorkflowTask
 * @extends {ILinkModel}
 */
export interface IWorkflowTask extends ILinkModel {
  TaskOperations: ITaskOperations;
  ColumnValues: IColumnValues;
  Decisions: IDecision[];
  DefaultDecisionId: number;
  Id: string;
  InstanceId: string;
  IsRead: boolean;
  AllowDecisionStamp: boolean;
  ActivityDescription: string;
  DocId: number;
  ActivityType: ActivityTypeEnum;
  NodeId: number;
  WorkflowVersionId: string;
}

/**
 * Task operations
 *
 * @interface ITaskOperations
 * @extends {ILinkModel}
 */
export interface ITaskOperations extends ILinkModel {
  BaseTaskOperations: IBaseTaskOperations;
  ExtendedControllerOperations: IExtendedControllerOperations;
  ExtendedUserOperations: IExtendedUserOperations;
}

/**
 * Base task operations
 *
 * @interface IBaseTaskOperations
 * @extends {ILinkModel}
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IBaseTaskOperations extends ILinkModel {}

/**
 * Extended controller operations
 *
 * @interface IExtendedControllerOperations
 * @extends {ILinkModel}
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IExtendedControllerOperations extends ILinkModel {}

/**
 * Extended user operations
 *
 * @interface IExtendedUserOperations
 * @extends {ILinkModel}
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IExtendedUserOperations extends ILinkModel {}

/**
 * Column values
 *
 * @interface IColumnValues
 */
export interface IColumnValues {
  ColumnValue: IColumnValue[];
}

/**
 * Column value
 *
 * @interface IColumnValue
 */
export interface IColumnValue {
  Id: string;
  Value: any;
}

/**
 * Workflow decision
 *
 * @interface IDecision
 */
export interface IDecision {
  Id: number;
  Description: string;
  Label: string;
  Color: string;
  TaskFormField: ITaskFormField[];
  DecisionOperations: IDecisionOperations;
}

/**
 * A task form field
 *
 * @interface ITaskFormField
 */
export interface ITaskFormField {
  Item:
    | ILinkForm
    | IDescriptionFormField
    | ITaskTextField
    | ITaskNumberField
    | ITaskDateTimeField
    | IUserField
    | IRoleField
    | ISubstitutionRuleField
    | IKeywordsField
    | ITaskTableField;
}

/**
 * Base form
 *
 * @interface IBaseForm
 */
export interface IBaseForm {
  FormFieldType: FormTypeEnum;
  Label: string;
  Id: number;
}

/**
 * Common form field
 *
 * @interface ICommonFormField
 * @extends {IBaseForm}
 */
export interface ICommonFormField extends IBaseForm {
  Mandatory: boolean;
  Description: string;
  HasSelectList: boolean;
  IsReadonly: boolean;
  IsSelectListOnly: boolean;
  SelectListGuid: string;
}

/**
 * Multi value field
 *
 * @interface IMultiValueField
 * @extends {ICommonFormField}
 */
export interface IMultiValueField extends ICommonFormField {
  IsMultiselect: boolean;
}

/**
 * Link parameter
 *
 * @interface ILinkParameter
 */
export interface ILinkParameter {
  Url: string;
  Label: string;
}

/**
 * Link form
 *
 * @interface ILinkForm
 * @extends {IBaseForm}
 */
export interface ILinkForm extends IBaseForm {
  Url: string;
}

/**
 * Description form field
 *
 * @interface IDescriptionFormField
 * @extends {IBaseForm}
 */
export interface IDescriptionFormField extends IBaseForm {
  LinkParameters: ILinkParameter[];
  DescriptionText: string;
}

/**
 * Task text field
 *
 * @interface ITaskTextField
 * @extends {ICommonFormField}
 */
export interface ITaskTextField extends ICommonFormField {
  Length: number;
  FieldMask: IFieldMask;
}

/**
 * Task date field
 *
 * @interface ITaskDateTimeField
 * @extends {ICommonFormField}
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ITaskDateTimeField extends ICommonFormField {}

/**
 * Task keyword field
 *
 * @interface IKeywordsField
 * @extends {ITaskTextField}
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IKeywordsField extends ITaskTextField {}

/**
 * Task number field
 *
 * @interface ITaskNumberField
 * @extends {ICommonFormField}
 */
export interface ITaskNumberField extends ICommonFormField {
  Precision: number;
}

/**
 * Task table field
 *
 * @interface ITaskTableField
 * @extends {IBaseForm}
 */
export interface ITaskTableField extends IBaseForm {
  Columns: ITaskTableColumn[];
}

/**
 * Task table column
 *
 * @interface ITaskTableColumn
 */
export interface ITaskTableColumn {
  BaseData:
    | ITaskTextField
    | ITaskTableNumberField
    | ITaskDateTimeField
    | ITaskNumberField;
  FieldName: string;
}

/**
 * Task table number field
 *
 * @interface ITaskTableNumberField
 * @extends {ITaskNumberField}
 */
export interface ITaskTableNumberField extends ITaskNumberField {
  PrefillWithBalance: boolean;
  BalanceField: string;
}

/**
 * Task user field
 *
 * @interface IUserField
 * @extends {IMultiValueField}
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IUserField extends IMultiValueField {}

/**
 * Task role field
 *
 * @interface IRoleField
 * @extends {IMultiValueField}
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IRoleField extends IMultiValueField {}

/**
 * Task substitution field
 *
 * @interface ISubstitutionRuleField
 * @extends {IMultiValueField}
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ISubstitutionRuleField extends IMultiValueField {}

/**
 * Task field mask
 *
 * @interface IFieldMask
 */
export interface IFieldMask {
  ErrorText: string;
  RegularExpression: string;
  SampleEditText: string;
}

/**
 * Task decision operation
 *
 * @interface IDecisionOperations
 */
export interface IDecisionOperations {
  BaseDecisionOperations: IBaseDecisionOperations;
  ExtendedDecisionOperations: IExtendedDecisionOperations;
}

/**
 * Task base decision operation
 *
 * @interface IBaseDecisionOperations
 * @extends {ILinkModel}
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IBaseDecisionOperations extends ILinkModel {}

/**
 * Task extended decision operations
 *
 * @interface IExtendedDecisionOperations
 * @extends {ILinkModel}
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IExtendedDecisionOperations extends ILinkModel {}

/**
 * Task confirmed data object
 *
 * @interface IConfirmedData
 */
export interface IConfirmedData {
  ConfirmedFields: IConfirmedField[];
}

/**
 * Task confirmed field
 *
 * @interface IConfirmedField
 */
export interface IConfirmedField {
  Id?: number;
  Value: {
    Item: any;
    ItemElementName?: ItemChoiceType;
  };
}

/**
 * DocuWare Field Type Enum
 *
 * @enum {number}
 */
const enum ItemChoiceType {
  Int = "Int",
  DateTime = "DateTime",
  String = "String",
  Decimal = "Decimal",
  Date = "Date",
  Table = "Table",
  Keywords = "Keywords",
}

/**
 * DocuWare Dialog Types
 *
 * @enum {number}
 */
const enum DialogType {
  Search = "Search",
  Store = "Store",
  ResultList = "ResultList",
  InfoDialog = "InfoDialog",
  TaskList = "TaskList",
}

/**
 * Specifies the activity type of a task
 *
 * @enum {number}
 */
const enum ActivityTypeEnum {
  GeneralTask = "GeneralTask",
  ParallelTask = "ParallelTask",
  UserCredentials = "UserCredentials",
  GeneralError = "GeneralError",
}

/**
 * Specifies the form type of a task input
 *
 * @enum {number}
 */
const enum FormTypeEnum {
  Link = "Link",
  Description = "Description",
  Password = "Password",
  Text = "Text",
  Decimal = "Decimal",
  Date = "Date",
  DateTime = "DateTime",
  User = "User",
  Role = "Role",
  SubstitutionRule = "SubstituionRule",
  Keyword = "Keyword",
  Table = "Table",
}

/**
 * Status of import entry
 *
 * @enum {number}
 */
const enum ImportEntryStatus {
  Succeeded = "Succeeded",
  Failed = "Failed",
}

/**
 * Status of import version entry
 *
 * @enum {number}
 */
const enum ImportEntryVersionStatus {
  Succeeded = "Succeeded",
  Failed = "Failed",
  Aborted = "Aborted",
}

/**
 * Different kind of roles
 *
 * @enum {number}
 */
const enum RoleTypes {
  Standard = "Standard",
  Default = "Default",
  Administrator = "Administrator",
}

/**
 * Assignment type
 *
 * @enum {number}
 */
const enum AssignmentOperationType {
  Add = "Add",
  Remove = "Remove",
}

/**
 * Kind of merge operation
 *
 * @enum {number}
 */
const enum ContentMergeOperation {
  Clip = "Clip",
  Staple = "Staple",
}

/**
 * Kind of devide operation
 *
 * @enum {number}
 */
const enum ContentDivideOperation {
  Unclip = "Unclip",
  Unstaple = "Unstaple",
  Split = "Split",
}

/**
 * Rotation
 *
 * @enum {number}
 */
const enum Rotation {
  Zero = 0,
  Ninety = 90,
  HundredEighty = 180,
  TwoHundredSeventy = 270,
}

/**
 * Logical combine operation
 *
 * @enum {number}
 */
const enum Operation {
  And = "And",
  Or = "or",
}

/**
 * Sort order
 *
 * @enum {number}
 */
const enum SortOrder {
  Asc = "Asc",
  Desc = "Desc",
}

/**
 * Target file type
 *
 * @enum {number}
 */
const enum TargetFileType {
  Auto = "Auto",
  Zip = "Zip",
  PDF = "PDF",
}

/**
 * Action for document
 *
 * @enum {number}
 */
const enum DocumentAction {
  CheckIn = "CheckIn",
  CheckOut = "CheckOut",
}

/**
 * Expected return after checkin
 *
 * @enum {number}
 */
const enum CheckInReturnedDocument {
  Original = "Original",
  CheckedIn = "CheckedIn",
}

/**
 * DocuWareSpecificContentType Enum
 *
 * @enum {number}
 */
const enum DocuWareSpecificContentType {
  FilesContainerTar = "application/vnd.docuware.platform.filescontainer+tar",
  FileCabinetTransferInfoJson = "application/vnd.docuware.platform.filecabinettransferinfo+json",
  DocumentsTransferInfoJson = "application/vnd.docuware.platform.documentstransferinfo+json",
  CreateOrganizationUserJson = "application/vnd.docuware.platform.createorganizationuser+json",
  FilesContainerDwx = "application/vnd.docuware.platform.filescontainer+dwx",
  InputDocument = "application/vnd.docuware.platform.inputdocument",
  InputDocumentJson = "application/vnd.docuware.platform.inputdocument+json",
  InputDocumentXml = "application/vnd.docuware.platform.inputdocument+xml",
  Json = "application/json",
  Xml = "application/xml",
  Unknown = "unknown",
}
// }
