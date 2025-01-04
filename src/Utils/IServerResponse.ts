import { HttpStatus } from "@nestjs/common";

export class ServerResponse {
    code: HttpStatus;
    message?: string;
    data?: any;
}