import { Entity, TStatus } from "../../../kernel/types";

export type TUser = Entity<number> & {
    username: string;
    password?: string;
    status?: TStatus;
    person?: any;
};