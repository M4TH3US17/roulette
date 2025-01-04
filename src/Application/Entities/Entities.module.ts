import { Module } from "@nestjs/common";
import { RoletaEntity } from "./Roleta.entity";

@Module({
    imports: [
        RoletaEntity,
    ],
    exports: [
        RoletaEntity,
    ],
})
export class EntityModule { }