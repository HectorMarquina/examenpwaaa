"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_pool_1 = __importDefault(require("pg-pool"));
require('dotenv').config();
const config = {
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    max: 5
};
exports.pool = new pg_pool_1.default(config);
//# sourceMappingURL=postgres.js.map