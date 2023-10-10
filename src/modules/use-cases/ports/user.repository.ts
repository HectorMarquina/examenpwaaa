import { TUser } from "modules/user/entities/user";

export interface IuserRepository {
    findAll():Promise<TUser[]>;
    findById(id: number):Promise<TUser[]>;
    save(user: TUser):Promise<boolean>;
    update(user: TUser):Promise<boolean>;
    delete(id: number):Promise<boolean>;
};