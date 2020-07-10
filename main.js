"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var customer_1 = require("./customer");
var Helpers = __importStar(require("./utility"));
var customer = new customer_1.Customer();
document.getElementById('loadInfo').addEventListener('click', function () {
    customer.forename = Helpers.getValue('forename');
    customer.nickname = Helpers.getValue('nickname');
    customer.surname = Helpers.getValue('surname');
    customer.emailAddress = Helpers.getValue('email');
    customer.role = Helpers.getValue('role');
    customer.dateCreated = new Date();
    customer.firstName();
    customer.fullName();
});
document.getElementById('isLocked').addEventListener('click', function () {
    var element = document.getElementById("loadInfo");
    var checkBox = document.getElementById("isLocked");
    element.disabled = !checkBox.checked;
    checkBox.onclick = function () {
        element.disabled = !checkBox.checked;
        customer.locked = true;
    };
    customer.locked = false;
});
//# sourceMappingURL=main.js.map