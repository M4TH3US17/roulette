import { Response } from "express";
import { Controller, Post, Res } from "@nestjs/common";
import { SpinRoletaUseCase } from "./UseCases/SpinRoletaUseCase";
import { ServerResponse } from "http";

@Controller({path: "roleta"})
export class RoletaController {

    constructor(
        private readonly spinRoletaUseCase: SpinRoletaUseCase,
    ) {}

    @Post()
    public async girarRoleta(@Res() res: Response) {
        //const response = new ServerResponse(code: 200, message: "OK")
        //return this.spinRoletaUseCase.execute()
        return res.status(400).json({message: "OK"})
    }

}