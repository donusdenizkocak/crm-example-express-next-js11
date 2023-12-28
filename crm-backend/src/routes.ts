import { AddressController } from "./controller/AddressController";
import { AuthController } from "./controller/AuthController"
import { EmailController } from "./controller/EmailController";
import { PhoneController } from "./controller/PhoneController"
import { TaskController } from "./controller/TaskController";
import { UserController } from "./controller/UserController"

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "post",
    route: "/new-user",
    controller: UserController,
    action: "newUser"
}, {
    method: "put",
    route: "/users/:id",
    controller: UserController,
    action: "update"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
}, {
    method: "post",
    route: "/login",
    controller: AuthController,
    action: "login"
}, {
    method: "post",
    route: "/register",
    controller: AuthController,
    action: "register"
}, {
    method: "put",
    route: "/user/update",
    controller: AuthController,
    action: "update"
}, {
    method: "put",
    route: "/user/change-password",
    controller: AuthController,
    action: "changePassword"
}, {
    method: "get",
    route: "/phones",
    controller: PhoneController,
    action: "all"
}, {
    method: "get",
    route: "/phones/:id",
    controller: PhoneController,
    action: "one"
}, {
    method: "post",
    route: "/phones",
    controller: PhoneController,
    action: "save"
}, {
    method: "put",
    route: "/phones/:id",
    controller: PhoneController,
    action: "update"
}, {
    method: "delete",
    route: "/phones/:id",
    controller: PhoneController,
    action: "remove"
}, {
    method: "get",
    route: "/email",
    controller: EmailController,
    action: "all"
}, {
    method: "get",
    route: "/email/:id",
    controller: EmailController,
    action: "one"
}, {
    method: "post",
    route: "/email",
    controller: EmailController,
    action: "save"
}, {
    method: "put",
    route: "/email/:id",
    controller: EmailController,
    action: "update"
}, {
    method: "delete",
    route: "/email/:id",
    controller: EmailController,
    action: "remove"
}, {
    method: "get",
    route: "/addresses",
    controller: AddressController,
    action: "all"
}, {
    method: "get",
    route: "/addresses/:id",
    controller: AddressController,
    action: "one"
}, {
    method: "post",
    route: "/addresses",
    controller: AddressController,
    action: "save"
}, {
    method: "put",
    route: "/addresses/:id",
    controller: AddressController,
    action: "update"
}, {
    method: "delete",
    route: "/addresses/:id",
    controller: AddressController,
    action: "remove"
}, {
    method: "get",
    route: "/tasks",
    controller: TaskController,
    action: "all"
}, {
    method: "get",
    route: "/tasks/:id",
    controller: TaskController,
    action: "one"
}, {
    method: "post",
    route: "/tasks",
    controller: TaskController,
    action: "save"
}, {
    method: "put",
    route: "/tasks/:id",
    controller: TaskController,
    action: "update"
}, {
    method: "delete",
    route: "/tasks/:id",
    controller: TaskController,
    action: "remove"
}];
