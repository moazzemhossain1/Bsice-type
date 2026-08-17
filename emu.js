"use strict";
var Role;
(function (Role) {
    Role["admin"] = "Admin";
    Role["User"] = "User";
    Role["getst"] = "Gest";
})(Role || (Role = {}));
let myRole = Role.admin;
console.log(myRole);
