"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = exports.swaggerDocument = void 0;
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const fs_1 = __importDefault(require("fs"));
const js_yaml_1 = __importDefault(require("js-yaml"));
const path_1 = __importDefault(require("path"));
// Define the path to your YAML file
const yamlFilePath = path_1.default.join(__dirname, "..", "..", "docs", "swagger.yaml");
let swaggerDocument = {};
exports.swaggerDocument = swaggerDocument;
try {
    // Read and parse the YAML file
    exports.swaggerDocument = swaggerDocument = js_yaml_1.default.load(fs_1.default.readFileSync(yamlFilePath, "utf8"));
}
catch (error) {
    console.warn("Warning: Swagger YAML file not found or invalid. Swagger UI will not be available.");
}
const setupSwagger = (app) => {
    if (Object.keys(swaggerDocument).length > 0) {
        // Serve the Swagger UI and the YAML file
        app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
        app.get("/swagger.json", (_req, res) => {
            res.setHeader("Content-Type", "application/json");
            res.send(swaggerDocument);
        });
    }
};
exports.setupSwagger = setupSwagger;
