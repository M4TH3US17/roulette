import { CampanhaEntity, CampanhaEntityUniqueRefs, CampanhaUpdateEntity } from "src/Application/Entities/Campanha.entity";
import { IBaseRepositoryContract } from "../IBase.repository-contract";

export interface ICampanhaRepositoryContract
    extends IBaseRepositoryContract<
        CampanhaEntity,
        CampanhaUpdateEntity,
        CampanhaEntityUniqueRefs
    > {
        
};