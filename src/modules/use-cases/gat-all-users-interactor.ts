import { TUser } from "modules/user/entities/user";
import { UseCase } from "../../kernel/contact";
import { IuserRepository } from "./ports/user.repository";

export class GetAllUsersInteractor 
implements UseCase<void, TUser[]>{
    constructor(private readonly repository: IuserRepository) {}
    async execute(playload?: void | undefined): Promise<TUser[]> {
        return await this.repository.findAll();
    }

}