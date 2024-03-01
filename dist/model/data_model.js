"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dataSchema = new mongoose_1.default.Schema({
    sr: { type: Number, default: 1 },
    data: {
        name: { type: String, required: true },
        email: { type: String, required: true },
        mobile: { type: Number, required: true },
        address: { type: String, required: true },
        added_date: { type: Date, default: Date.now },
    },
    add_count: { type: Number, default: 1 },
    update_count: { type: Number, default: 0 },
});
exports.DataModel = mongoose_1.default.model("Data", dataSchema);
//# sourceMappingURL=data_model.js.map