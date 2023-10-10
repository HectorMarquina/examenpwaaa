export type Entity<ID extends number | String> = {
    id: ID;
};

export type TPagination = {
    filter?: string;
    page?: number;
    limit?: number;
    sortBy?: string;
    total_pages?: number;
    sort?: string;
    total?: number;
    offset?: number;
};

export enum Errors {
    NO_DATA_FOUND = 'NoDataFound',
    INTERNAL_SERVER_ERROR = 'InternalServerError',
    NOT_AUTHORIZED = 'NotAuthorized',
    MISSING_FIELDS = 'MissingFields',
    RECORD_NOT_REGISTERED = 'RecordNotRegistered',
};

export type TStatus = Entity<number> & {
    description?: string
};

export type TJson = {
    [x: string]: any
};

export type TJsonArray = TJson[];