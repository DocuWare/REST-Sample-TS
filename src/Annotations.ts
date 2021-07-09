import * as DWRest from './types/DW_Rest';

/**
 *
 *
 * @export
 * @class TextEntry
 * @implements {DWRest.ITextEntry}
 */
export class TextEntry implements DWRest.ITextEntry {
    //type has to be first!!!!
    public $type = 'TextEntry';
    public Value: string;
    public Font: DWRest.IFont;
    public Location: DWRest.IAnnotationRectangle;
    public Created?: DWRest.ICreateInfo | undefined;
    public Color?: string | undefined;
    public Rotation?: DWRest.Rotation | undefined;
    public Transparent?: boolean | undefined;
    public StrokeWidth?: number | undefined;
    public Id?: string | undefined;

    constructor(value: string, font: DWRest.IFont, location: DWRest.IAnnotationRectangle) {
        this.Value = value;
        this.Font = font;
        this.Location = location;
    }

}

/**
 *
 *
 * @export
 * @class LineEntry
 * @implements {DWRest.ILineEntry}
 */
export class LineEntry implements DWRest.ILineEntry {
    //type has to be first!!!!
    public $type = 'LineEntry';
    public From: DWRest.IAnnotationPoint;
    public To: DWRest.IAnnotationPoint
    public Arrow?: boolean | undefined;
    public Created?: DWRest.ICreateInfo | undefined;
    public Color?: string | undefined;
    public Rotation?: DWRest.Rotation | undefined;
    public Transparent?: boolean | undefined;
    public StrokeWidth?: number | undefined;
    public Id?: string | undefined;

    constructor(from: DWRest.IAnnotationPoint, to: DWRest.IAnnotationPoint) {
        this.From = from;
        this.To = to;
    }

}

/**
 *
 *
 * @export
 * @class RectEntry
 * @implements {DWRest.RectEntry}
 */
export class RectEntry implements DWRest.IRectEntry {
    //type has to be first!!!!
    public $type = 'RectEntry';
    public Location: DWRest.IAnnotationPoint;
    public Filled?: boolean | undefined;
    public Ellipse?: boolean | undefined;
    public Created?: DWRest.ICreateInfo | undefined;
    public Color?: string | undefined;
    public Rotation?: DWRest.Rotation | undefined;
    public Transparent?: boolean | undefined;
    public StrokeWidth?: number | undefined;
    public Id?: string | undefined;

    constructor(location: DWRest.IAnnotationPoint) {
        this.Location = location;
    }

}

/**
 *
 *
 * @export
 * @class PolyLineEntry
 * @implements {DWRest.IPolyLineEntry}
 */
export class PolyLineEntry implements DWRest.IPolyLineEntry {
    //type has to be first!!!!
    public $type = 'PolyLineEntry';
    public Stroke: DWRest.IStroke[];
    public Created?: DWRest.ICreateInfo | undefined;
    public Color?: string | undefined;
    public Rotation?: DWRest.Rotation | undefined;
    public Transparent?: boolean | undefined;
    public StrokeWidth?: number | undefined;
    public Id?: string | undefined;

    constructor(stroke: DWRest.IStroke[]) {
        this.Stroke = stroke;
    }

}
