declare namespace DWRest {

    /**
     * Most of DocuWare Objects contain links 
     * so this is a base to be used
     * 
     * @interface ILinkModel
     */
    interface ILinkModel {
        Links?: ILink[]
    }

    /**
     * Wraps all neccessary logon properties
     *
     * @interface ILogonModel
     */
    interface ILogonModel {
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
    interface ILogonResponse extends ILinkModel {
        Documentation: {
            Links: ILink[]
        }
    }

    /**
     * A link
     *
     * @interface ILink
     */
    interface ILink {
        rel: string;
        href: string;
    }

    /**
     * DocuWare Organization Model
     *
     * @interface IOrganization
     * @extends {ILinkModel}
     */
    interface IOrganization extends ILinkModel {
        Name: string;
        Guid: string;
        AdditionalInfo: {
            Administrator: string;
            EMail: string;
            SystemNumber: number;
            RuntimeVersion: string;
            OrganizationType: string;
        }
    }

    /**
     *Organization Response
     *
     * @interface IOrganizations
     */
    interface IOrganizations {
        Organization: DWRest.IOrganization[];
    }

    /**
     * DocuWare FileCabinet Model
     *
     * @interface IFileCabinet
     * @extends {ILinkModel}
     */
    interface IFileCabinet extends ILinkModel {
        Name: string;
        Color: string;
        Id: string;
        IsBasket: boolean;
        Default: boolean;
        Documents: [DWRest.IDocument]
    }

    /**
     * FileCabinet Response
     *
     * @interface IFileCabinets
     */
    interface IFileCabinets {
        FileCabinet: DWRest.IFileCabinet[]
    }

    /**
     * DocuWare Document Model
     *
     * @interface IDocument
     * @extends {ILinkModel}
     */
    interface IDocument extends ILinkModel {
        Fields: IField[];
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
        },
        Sections?: DWRest.ISection[];
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
        Version?: DWRest.IDocumentVersion;
    }


    /**
     * DocuWare Section Model
     *
     * @interface ISection
     */
    interface ISection extends DWRest.ILinkModel {
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
     * @extends {DWRest.ILinkModel}
     */
    interface IPage extends DWRest.ILinkModel {
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
            }
        }
    }


    /**
     * DocuWare Pages Model
     *
     * @interface IPages
     * @extends {DWRest.ILinkModel}
     */
    interface IPages extends DWRest.ILinkModel {
        Page: DWRest.IPage[];
    }

    /**
     * DocuWare Field Model
     *
     * @interface IField
     */
    interface IField {
        FieldName: string;
        FieldLabel?: string;
        IsNull?: boolean;
        ReadOnly?: boolean;
        SystemField?: boolean;
        Item: any;
        ItemElementName?: ItemChoiceType;
    }

    /**
     * List of Fields
     *
     * @interface IFieldList
     */
    interface IFieldList {
        Field: DWRest.IField[]
    }

    /** 
     * DocuWare Dialog Field Model
     *
     * @interface IDlgField
     * @extends {ILinkModel}
     */
    interface IDlgField extends ILinkModel {
        DBFieldName: string;
        DlgLabel: string;
        DWFieldType: DWRest.ItemChoiceType;
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
    interface IDocumentIndexFieldTable extends IDocumentIndexFieldValueBase {
        Rows: ITableFieldRow[]
    }

    /**
     * A single row of DocuWare table field
     *
     * @interface ITableFieldRow
     */
    interface ITableFieldRow {
        Columns: ITableFieldColumn[]
    }

    /**
     * A siongle column of DocuWare Table Field
     *
     * @interface ITableFieldColumn
     */
    interface ITableFieldColumn {
        FieldName: string;
        FieldLabel?: string;
        Item: number | string | null;
    }

    /**
     * DocuWare Field Value Base
     *
     * @interface IDocumentIndexFieldValueBase
     */
    interface IDocumentIndexFieldValueBase {

    }

    /**
     * Keywords
     *
     * @interface IDocumentIndexFieldKeywords
     * @extends {IDocumentIndexFieldValueBase}
     */
    interface IDocumentIndexFieldKeywords extends IDocumentIndexFieldValueBase {
        Keyword: string[]
    }

    /**
     * Application properties
     *
     * @interface IDocumentApplicationProperties
     */
    interface IDocumentApplicationProperties {
        DocumentApplicationProperty: DWRest.IDocumentApplicationProperty[];
    }

    /**
     * Application property
     *
     * @interface IDocumentApplicationProperty
     */
    interface IDocumentApplicationProperty {
        Name: string;
        Value: string;
    }

    /**
     * DocuWare Field Type Enum
     *
     * @export
     * @enum {number}
     */
    export const enum ItemChoiceType {
        Int = 'Int',
        DateTime = 'DateTime',
        String = 'String',
        Decimal = 'Decimal',
        Date = 'Date',
        Table = 'Table',
        Keywords = 'Keywords'
    }

    /**
     * DocuWare Dialog Types
     *
     * @export
     * @enum {number}
     */
    export const enum DialogType {
        Search = 'Search',
        Store = 'Store',
        ResultList = 'ResultList',
        InfoDialog = 'InfoDialog',
        TaskList = 'TaskList'
    }

    /**
     * DocuWare Query Result
     *
     * @interface IDocumentsQueryResult
     * @extends {ILinkModel}
     */
    interface IDocumentsQueryResult extends ILinkModel {
        Count: number;
        Items: DWRest.IDocument[];
        Next: string;
        Download: string;
    }

    /**
     * DocuWare Dialog Model
     *
     * @interface IDialog
     * @extends {ILinkModel}
     */
    interface IDialog extends ILinkModel {
        Id: string;
        FileCabinetId: string;
        FileCabinetName: string;
        DisplayName: string;
        IsForMobile: boolean;
        AssignedDialogId: string;
        Color: string;
        IsDefault: boolean;
        Type: DialogType;
        Fields: DWRest.IDlgField[];
        Query: {
            Expression: string;
            Fields: string[];
            Links: DWRest.ILink[]
        }
        Properties: {
            LogicalOperator: {
                DefaultOperator: DWRest.Operation;
                Show: boolean;
            }
        }
    }

    /**
     * Dialog Response
     *
     * @interface IDialogsResponse
     */
    interface IDialogsResponse {
        Dialog: IDialog[];
    }

    /**
     * Dialog Expression
     *
     * @interface IDialogExpression
     */
    interface IDialogExpression {
        Condition: ICondition[];
        Operation: DWRest.Operation;
    }

    /**
     *Dialog Condition
     *
     * @interface ICondition
     */
    interface ICondition {
        Value: string[] | null;
        DBName: string;
    }

    /**
     * Checkin parameters in case of versioning
     *
     * @interface ICheckInActionParameters
     */
    interface ICheckInActionParameters {
        DocumentAction: DWRest.DocumentAction
        Comments: string;
        DocumentVersion: DWRest.IDocumentVersion;
        CheckInReturnDocument?: DWRest.CheckInReturnedDocument;
    }

    /**
     * Document version
     *
     * @interface IDocumentVersion
     */
    interface IDocumentVersion {
        Major: number;
        Minor: number;
    }

    /**
     * Stamp Placment
     *
     * @interface IStampPlacement
     */
    interface IStampPlacement {
        StampId: string;
        Layer: number;
        Location?: DWRest.IDWPoint;
        Field?: IFormFieldValue[];
        Password?: string;
    }

    /**
     * Annotation Placement
     *
     * @interface IAnnotationPlacement
     */
    interface IAnnotationPlacement {
        Items: (DWRest.IAnnotation | DWRest.IStampPlacement)[];
    }

    /**
     * FormFieldValue
     *
     * @interface IFormFieldValue
     */
    interface IFormFieldValue {
        Name: string;
        Value: string;
        TypedValue: {
            Item: any;
            ItemElementName?: ItemChoiceType;
        }
    }

    /**
     * DWPoint 
     *
     * @interface IDWPoint
     */
    interface IDWPoint {
        X: number;
        Y: number;
    }

    /**
     * Documents Transfer Info
     *
     * @interface IDocumentsTransferInfo
     */
    interface IDocumentsTransferInfo {
        SourceFileCabinetId: string;
        UseDefaultDialog: boolean;
        KeepSource: boolean;
        FillIntellix: boolean;
        Documents: DWRest.IDocument[];
    }

    /**
     * FileCabinet Transfer Info
     *
     * @interface IFileCabinetTransferInfo
     */
    interface IFileCabinetTransferInfo {
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
    interface IContentMergeOperationInfo {
        Documents: number[],
        Operation: ContentMergeOperation,
        Force: boolean
    }

    /**
     * Information for deviding
     *
     * @interface IContentDivideOperationInfo
     */
    interface IContentDivideOperationInfo {
        Operation: ContentDivideOperation,
        Force: boolean
    }

    /**
     * Annotation
     *
     * @interface IAnnotation
     */
    interface IAnnotation {
        Layer: DWRest.ILayer[];
    }

    /**
     * Layer
     *
     * @interface ILayer
     */
    interface ILayer {
        Items?: (DWRest.IDeleteEntry | DWRest.ITextEntry | DWRest.ILineEntry | DWRest.IRectEntry | DWRest.IPolyLineEntry)[];
        Id: number;
    }

    /**
     * Entry base
     *
     * @interface IEntryBase
     */
    interface IEntryBase {
        $type: string;
        Created?: DWRest.ICreateInfo;
        Color?: string; //#000000
        Rotation?: DWRest.Rotation;
        Transparent?: boolean;
        StrokeWidth?: number;
        Id?: string
    }

    /**
     * Info of creation
     *
     * @interface ICreateInfo
     */
    interface ICreateInfo {
        User: string;
        Time: string;
    }

    /**
     * Deletion entry
     *
     * @interface IDeleteEntry
     * @extends {IEntryBase}
     */
    interface IDeleteEntry extends IEntryBase {

    }

    /**
     * Text entry
     *
     * @interface ITextEntry
     * @extends {IEntryBase}
     */
    interface ITextEntry extends IEntryBase {
        Font: DWRest.IFont;
        Value: string;
        Location: IAnnotationRectangle
    }

    /**
     * Annotation rectangle
     *
     * @interface IAnnotationRectangle
     */
    interface IAnnotationRectangle {
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
    interface IAnnotationPoint {
        X: number;
        Y: number;
    }

    /**
     * Font
     *
     * @interface IFont
     */
    interface IFont {
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
    interface IRectEntry extends IEntryBase {
        Location: DWRest.IAnnotationPoint;
        Filled?: boolean;
        Ellipse?: boolean;
    }

    /**
     * Line entry
     *
     * @interface ILineEntry
     * @extends {IEntryBase}
     */
    interface ILineEntry extends IEntryBase {
        From: DWRest.IAnnotationPoint;
        To: DWRest.IAnnotationPoint;
        Arrow?: boolean;
    }

    /**
     * Poly line entry
     *
     * @interface IPolyLineEntry
     * @extends {IEntryBase}
     */
    interface IPolyLineEntry extends IEntryBase {
        Stroke: DWRest.IStroke[]
    }

    /**
     * A stroke
     *
     * @interface IStroke
     */
    interface IStroke {
        Point: DWRest.IAnnotation;
    }

    /**
     * New user
     *
     * @interface INewUser
     */
    interface INewUser {
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
     * @extends {DWRest.ILinkModel}
     */
    interface IUser extends DWRest.ILinkModel {
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
        OutOfOffice: DWRest.IOutOfOffice;
    }

    /**
     * Regional Settings
     *
     * @interface IRegionalSettings
     */
    interface IRegionalSettings {
        Language?: string;
        Culture?: string;
        Calendar?: string;
    }

    /**
     * Out of office
     *
     * @interface IOutOfOffice
     */
    interface IOutOfOffice {
        IsOutOfOffice?: boolean;
        StartDateTime?: string;
        EndDateTime?: string;
    }

    /**
     * Operation about assignments
     *
     * @interface IAssignmentOperation
     */
    interface IAssignmentOperation {
        Ids: string[],
        OperationType: AssignmentOperationType
    }

    /**
     * A role
     *
     * @interface IRole
     * @extends {DWRest.ILinkModel}
     */
    interface IRole extends DWRest.ILinkModel {
        Id?: string;
        Name: string;
        Active: boolean;
        Type?: DWRest.RoleTypes
    }

    /**
     * Roles
     *
     * @interface IRoles
     */
    interface IRoles {
        Item: DWRest.IRole[];
    }

    /**
     * Group
     *
     * @interface IGroup
     * @extends {DWRest.ILinkModel}
     */
    interface IGroup extends DWRest.ILinkModel {
        Id?: string;
        Name: string;
        Active: boolean;
    }

    /**
     * Groups
     *
     * @interface IGroups
     */
    interface IGroups {
        Item: DWRest.IGroup[];
    }

    /**
     * Export Settings
     *
     * @interface IExportSettings
     */
    interface IExportSettings {
        ExportHistory?: boolean;
        ExportTextShots?: boolean;
    }

    /**
     * Import Settings
     *
     * @interface IImportSettings
     */
    interface IImportSettings {
        PreserveSystemFields?: boolean;
        FieldMappings: DWRest.IFieldMapping[];
    }

    /**
     * Import results
     *
     * @interface IImportResult
     */
    interface IImportResult {
        Results: DWRest.IImportResultEntry[];
        FileChunk?: DWRest.IUploadedResultChunk;
    }

    /**
     * Import results entry
     *
     * @interface IImportResultEntry
     */
    interface IImportResultEntry {
        EntryVersions: DWRest.IImportEntryVersion[];
        ErrorMessage?: string;
        Status: DWRest.ImportEntryStatus;
    }

    /**
     * Import Entry Version
     *
     * @interface IImportEntryVersion
     */
    interface IImportEntryVersion {
        Id: number;
        Status: DWRest.ImportEntryStatus
    }

    /**
     * Upload result chunk
     *
     * @interface IUploadedResultChunk
     * @extends {DWRest.ILinkModel}
     */
    interface IUploadedResultChunk extends DWRest.ILinkModel {
        Finished?: boolean;
        LastChunkId?: string;
        BytesWritten?: number;
    }

    /**
     * Field mapping
     *
     * @interface IFieldMapping
     */
    interface IFieldMapping {
        Source: string;
        Destination?: string;
    }

    /**
     * Lock information
     *
     * @interface ILockInfo
     */
    interface ILockInfo {
        Operation?: string;
        Interval?: string; //http://msdn.microsoft.com/en-us/library/se73z7b9.aspx 
    }

    /**
     * Workflow
     *
     * @interface IWorkflow
     * @extends {DWRest.ILinkModel}
     */
    interface IWorkflow extends DWRest.ILinkModel {
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
    interface IWorkflows {
        Workflow: DWRest.IWorkflow[];
    }

    /**
     * List of workflow tasks
     *
     * @interface IWorkflowTasks
     * @extends {DWRest.ILinkModel}
     */
    interface IWorkflowTasks extends DWRest.ILinkModel {
        Task: DWRest.IWorkflowTask[];
        Count: number;
        TimeStamp: string;
    }

    /**
     * Workflow task
     *
     * @interface IWorkflowTask
     * @extends {DWRest.ILinkModel}
     */
    interface IWorkflowTask extends DWRest.ILinkModel {
        TaskOperations: DWRest.ITaskOperations;
        ColumnValues: IColumnValues;
        Decisions: DWRest.IDecision[];
        DefaultDecisionId: number;
        Id: string;
        InstanceId: string;
        IsRead: boolean;
        AllowDecisionStamp: boolean;
        ActivityDescription: string;
        DocId: number;
        ActivityType: DWRest.ActivityTypeEnum;
        NodeId: number;
        WorkflowVersionId: string;
    }

    /**
     * Task operations
     *
     * @interface ITaskOperations
     * @extends {DWRest.ILinkModel}
     */
    interface ITaskOperations extends DWRest.ILinkModel {
        BaseTaskOperations: DWRest.IBaseTaskOperations;
        ExtendedControllerOperations: DWRest.IExtendedControllerOperations;
        ExtendedUserOperations: DWRest.IExtendedUserOperations;

    }

    /**
     * Base task operations
     *
     * @interface IBaseTaskOperations
     * @extends {DWRest.ILinkModel}
     */
    interface IBaseTaskOperations extends DWRest.ILinkModel {

    }

    /**
     * Extended controller operations
     *
     * @interface IExtendedControllerOperations
     * @extends {DWRest.ILinkModel}
     */
    interface IExtendedControllerOperations extends DWRest.ILinkModel {

    }

    /**
     * Extended user operations
     *
     * @interface IExtendedUserOperations
     * @extends {DWRest.ILinkModel}
     */
    interface IExtendedUserOperations extends DWRest.ILinkModel {

    }

    /**
     * Column values
     *
     * @interface IColumnValues
     */
    interface IColumnValues {
        ColumnValue: DWRest.IColumnValue[];
    }

    /**
     * Column value
     *
     * @interface IColumnValue
     */
    interface IColumnValue {
        Id: string;
        Value: any;
    }

    /**
     * Workflow decision
     *
     * @interface IDecision
     */
    interface IDecision {
        Id: number;
        Description: string;
        Label: string;
        Color: string;
        TaskFormField: ITaskFormField[];
        DecisionOperations: DWRest.IDecisionOperations;
    }

    /**
     * A task form field
     *
     * @interface ITaskFormField
     */
    interface ITaskFormField {
        Item: DWRest.ILinkForm | DWRest.IDescriptionFormField
        | DWRest.ITaskTextField | DWRest.ITaskNumberField
        | DWRest.ITaskDateTimeField | DWRest.IUserField
        | DWRest.IRoleField | DWRest.ISubstitutionRuleField
        | DWRest.IKeywordsField | DWRest.ITaskTableField;
    }

    /**
     * Base form
     *
     * @interface IBaseForm
     */
    interface IBaseForm {
        FormFieldType: DWRest.FormTypeEnum;
        Label: string;
        Id: number;
    }

    /**
     * Common form field
     *
     * @interface ICommonFormField
     * @extends {DWRest.IBaseForm}
     */
    interface ICommonFormField extends DWRest.IBaseForm {
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
     * @extends {DWRest.ICommonFormField}
     */
    interface IMultiValueField extends DWRest.ICommonFormField {
        IsMultiselect: boolean;
    }

    /**
     * Link parameter
     *
     * @interface ILinkParameter
     */
    interface ILinkParameter {
        Url: string;
        Label: string;
    }

    /**
     * Link form
     *
     * @interface ILinkForm
     * @extends {DWRest.IBaseForm}
     */
    interface ILinkForm extends DWRest.IBaseForm {
        Url: string;
    }

    /**
     * Description form field
     *
     * @interface IDescriptionFormField
     * @extends {DWRest.IBaseForm}
     */
    interface IDescriptionFormField extends DWRest.IBaseForm {
        LinkParameters: DWRest.ILinkParameter[];
        DescriptionText: string;
    }

    /**
     * Task text field
     *
     * @interface ITaskTextField
     * @extends {DWRest.ICommonFormField}
     */
    interface ITaskTextField extends DWRest.ICommonFormField {
        Length: number;
        FieldMask: DWRest.IFieldMask;
    }

    /**
     * Task date field
     *
     * @interface ITaskDateTimeField
     * @extends {DWRest.ICommonFormField}
     */
    interface ITaskDateTimeField extends DWRest.ICommonFormField {

    }

    /** 
     * Task keyword field
     *
     * @interface IKeywordsField
     * @extends {DWRest.ITaskTextField}
     */
    interface IKeywordsField extends DWRest.ITaskTextField {

    }

    /**
     * Task number field
     *
     * @interface ITaskNumberField
     * @extends {DWRest.ICommonFormField}
     */
    interface ITaskNumberField extends DWRest.ICommonFormField {
        Precision: number;
    }

    /**
     * Task table field
     *
     * @interface ITaskTableField
     * @extends {DWRest.IBaseForm}
     */
    interface ITaskTableField extends DWRest.IBaseForm {
        Columns: DWRest.ITaskTableColumn[];
    }

    /**
     * Task table column
     *
     * @interface ITaskTableColumn
     */
    interface ITaskTableColumn {
        BaseData: (DWRest.ITaskTextField | DWRest.ITaskTableNumberField | DWRest.ITaskDateTimeField | DWRest.ITaskNumberField);
        FieldName: string;
    }

    /**
     * Task table number field
     *
     * @interface ITaskTableNumberField
     * @extends {DWRest.ITaskNumberField}
     */
    interface ITaskTableNumberField extends DWRest.ITaskNumberField {
        PrefillWithBalance: boolean;
        BalanceField: string;
    }

    /**
     * Task user field
     *
     * @interface IUserField
     * @extends {DWRest.IMultiValueField}
     */
    interface IUserField extends DWRest.IMultiValueField {

    }

    /**
     * Task role field
     *
     * @interface IRoleField
     * @extends {DWRest.IMultiValueField}
     */
    interface IRoleField extends DWRest.IMultiValueField {

    }

    /**
     * Task substitution field
     *
     * @interface ISubstitutionRuleField
     * @extends {DWRest.IMultiValueField}
     */
    interface ISubstitutionRuleField extends DWRest.IMultiValueField {

    }

    /**
     * Task field mask
     *
     * @interface IFieldMask
     */
    interface IFieldMask {
        ErrorText: string;
        RegularExpression: string;
        SampleEditText: string;
    }

    /**
     * Task decision operation
     *
     * @interface IDecisionOperations
     */
    interface IDecisionOperations {
        BaseDecisionOperations: DWRest.IBaseDecisionOperations;
        ExtendedDecisionOperations: DWRest.IExtendedDecisionOperations;
    }

    /**
     * Task base decision operation
     *
     * @interface IBaseDecisionOperations
     * @extends {DWRest.ILinkModel}
     */
    interface IBaseDecisionOperations extends DWRest.ILinkModel {

    }

    /**
     * Task extended decision operations
     *
     * @interface IExtendedDecisionOperations
     * @extends {DWRest.ILinkModel}
     */
    interface IExtendedDecisionOperations extends DWRest.ILinkModel {

    }

    /**
     * Task confirmed data object
     *
     * @interface IConfirmedData
     */
    interface IConfirmedData {
        ConfirmedFields: DWRest.IConfirmedField[];
    }

    /**
     * Task confirmed field
     *
     * @interface IConfirmedField
     */
    interface IConfirmedField {
        Id?: number;
        Value: {
            Item: any;
            ItemElementName?: ItemChoiceType;
        };
    }

    /**
     * Specifies the activity type of a task
     *
     * @enum {number}
     */
    export const enum ActivityTypeEnum {
        GeneralTask = 'GeneralTask',
        ParallelTask = 'ParallelTask',
        UserCredentials = 'UserCredentials',
        GeneralError = 'GeneralError'
    }

    /**
     * Specifies the form type of a task input
     *
     * @enum {number}
     */
    export const enum FormTypeEnum {
        Link = 'Link',
        Description = 'Description',
        Password = 'Password',
        Text = 'Text',
        Decimal = 'Decimal',
        Date = 'Date',
        DateTime = 'DateTime',
        User = 'User',
        Role = 'Role',
        SubstitutionRule = 'SubstituionRule',
        Keyword = 'Keyword',
        Table = 'Table'
    }

    /**
     * Status of import entry
     *
     * @enum {number}
     */
    export const enum ImportEntryStatus {
        Succeeded = 'Succeeded',
        Failed = 'Failed',
    }

    /**
     * Status of import version entry 
     *
     * @enum {number}
     */
    export const enum ImportEntryVersionStatus {
        Succeeded = 'Succeeded',
        Failed = 'Failed',
        Aborted = 'Aborted'
    }

    /**
     * Different kind of roles
     *
     * @enum {number}
     */
    export const enum RoleTypes {
        Standard = 'Standard',
        Default = 'Default',
        Administrator = 'Administrator'
    }

    /**
     * Assignment type
     *
     * @enum {number}
     */
    export const enum AssignmentOperationType {
        Add = 'Add',
        Remove = 'Remove'
    }

    /**
     * Kind of merge operation
     *
     * @enum {number}
     */
    export const enum ContentMergeOperation {
        Clip = 'Clip',
        Staple = 'Staple'
    }

    /**
     * Kind of devide operation
     *
     * @enum {number}
     */
    export const enum ContentDivideOperation {
        Unclip = 'Unclip',
        Unstaple = 'Unstaple',
        Split = 'Split'
    }

    /**
     * Rotation
     *
     * @enum {number}
     */
    export const enum Rotation {
        Zero = 0,
        Ninety = 90,
        HundredEighty = 180,
        TwoHundredSeventy = 270
    }

    /**
     * Logical combine operation
     *
     * @enum {number}
     */
    export const enum Operation {
        And = 'And',
        Or = 'or'
    }

    /**
     * Sort order
     *
     * @enum {number}
     */
    export const enum SortOrder {
        Asc = 'Asc',
        Desc = 'Desc'
    }

    /**
     * Target file type
     *
     * @enum {number}
     */
    export const enum TargetFileType {
        Auto = 'Auto',
        Zip = 'Zip',
        PDF = 'PDF'
    }

    /**
     * Action for document
     *
     * @enum {number}
     */
    export const enum DocumentAction {
        CheckIn = 'CheckIn',
        CheckOut = 'CheckOut'
    }

    /**
     * Expected return after checkin
     *
     * @enum {number}
     */
    export const enum CheckInReturnedDocument {
        Original = 'Original',
        CheckedIn = 'CheckedIn'
    }
}