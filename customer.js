"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = (function () {
    function Customer() {
    }
    Customer.prototype.firstName = function () {
        console.log("First name " + this.forename);
        return this.forename;
    };
    ;
    Customer.prototype.fullName = function () {
        console.log("Full name " + this.forename + "" + this.surname);
        return this.forename + " " + this.surname;
    };
    ;
    return Customer;
}());
exports.Customer = Customer;
//# sourceMappingURL=customer.js.map