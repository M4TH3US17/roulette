import { Module } from "@nestjs/common";
import { RoletaController } from "./Roleta.controller";
import { SpinRoletaUseCase } from "./UseCases/SpinRoletaUseCase";
import { RetaguardaDatabaseModule } from "src/Application/Infra/Database/Retaguarda/RetaguardaDatabase.module";

@Module({
  imports: [
    RetaguardaDatabaseModule
  ],
  controllers: [
    RoletaController,
  ],
  providers: [
    SpinRoletaUseCase
  ],
})
export class RoletaModule { }