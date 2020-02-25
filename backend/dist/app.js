"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const db_1 = require("./config/db");
const heroes_1 = __importDefault(require("./routes/heroes"));
const app = express_1.default();
app.use(body_parser_1.json());
app.use('/heroes', heroes_1.default);
app.get('/', (req, res) => {
    res.send('Working!');
});
db_1.connectDb();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is listening on ${PORT}...`));
