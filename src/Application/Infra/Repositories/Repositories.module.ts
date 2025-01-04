
import { Module } from "@nestjs/common";
import { KEY_INJECTION } from "src/@metadata/keys";
import { RoletaEntity } from "src/Application/Entities/Roleta.entity";
import { EntityModule } from "src/Application/Entities/Entities.module";
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoletaTypeOrmRepository } from "./RoletaRepository/RoletaTypeOrm.repository";

@Module({
  imports: [
  ],
  providers: [
    RoletaTypeOrmRepository
  ],
  exports: [
  ],
})
export class RepositoriesModule { }