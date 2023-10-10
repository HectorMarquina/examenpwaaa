"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = exports.UserController = void 0;
const express_1 = __importDefault(require("express"));
const user_storage_gateway_1 = require("./user.storage.gateway");
const gat_all_users_interactor_1 = require("../../../modules/use-cases/gat-all-users-interactor");
class UserController {
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const repository = new user_storage_gateway_1.UserStorageGateway();
                const interactor = new gat_all_users_interactor_1.GetAllUsersInteractor(repository);
                const data = yield interactor.execute();
                res.status(200).json(data);
            }
            catch (error) {
                console.log(error);
                res.status(400).json({ message: "Error" });
            }
        });
    }
}
exports.UserController = UserController;
exports.userRouter = express_1.default.Router();
exports.userRouter.get("/", [], UserController.getAll);
//# sourceMappingURL=user.controller.js.map