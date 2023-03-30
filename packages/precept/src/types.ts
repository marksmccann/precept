type Attributes = Record<string, null | string>;

type Handlers = Record<string, (...args: any) => void>;

export interface SchemaResult {
    attributes: Record<string, Attributes | Attributes[]>;
    handlers: Record<string, Handlers | Handlers[]>;
}

export type SchemaOptions = Record<
    string,
    string | number | number[] | boolean | ((...args: any) => void)
>;

export type Options = Record<
    string,
    {
        type: { new (...args: any[]): any };
        default: unknown;
    }
>;
