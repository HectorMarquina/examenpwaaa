import express, { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { UserStorageGateway } from "./user.storage.gateway";
import { GetAllUsersInteractor } from "../../../modules/use-cases/gat-all-users-interactor";
import { TUser } from "modules/user/entities/user";

export class UserController {
  static async getAll(req: Request, res: Response) {
    try {
      const repository = new UserStorageGateway();
      const interactor = new GetAllUsersInteractor(repository);
      const data = await interactor.execute();
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error" });
    }
  }

  static async registerUser(req: Request, res: Response) {
    try {
      const { username, password, ...otrosDatos } = req.body;

      if (!username || !password) {
        return res.status(400).json({ error: "Nombre de usuario y contraseña son obligatorios." });
      }

    
      const saltRounds = 10; 
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const repository = new UserStorageGateway();

      const nuevoUsuario: TUser = {
        username,
        password: hashedPassword,
        ...otrosDatos,
      };

      await repository.save(nuevoUsuario);

      res.status(201).json({ message: "Usuario registrado con éxito." });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al registrar el usuario." });
    }
  }
}

export const userRouter = express.Router();

userRouter.get("/", [], UserController.getAll);
userRouter.post("/register", [], UserController.registerUser);