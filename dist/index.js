"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});
app.listen(port, () => {
    console.log(process.env.PORT, port);
    console.log(`La aplicación está escuchando en el puerto ${process.env.PORT}`);
});
//# sourceMappingURL=index.js.map