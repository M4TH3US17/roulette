import { RoletaEntity, RoletaEntityUniqueRefs, RoletaUpdateEntity } from "src/Application/Entities/Roleta.entity";
import { IBaseRepositoryContract } from "../IBase.repository-contract";

export interface IRoletaRepositoryContract
    extends IBaseRepositoryContract<
        RoletaEntity,
        RoletaUpdateEntity,
        RoletaEntityUniqueRefs
    > {
        
};