import { ParticipanteEntity, ParticipanteEntityUniqueRefs, ParticipanteUpdateEntity } from "src/Application/Entities/Participante.entity";
import { IBaseRepositoryContract } from "../IBase.repository-contract";

export interface IParticipanteRepositoryContract
    extends IBaseRepositoryContract<
        ParticipanteEntity,
        ParticipanteUpdateEntity,
        ParticipanteEntityUniqueRefs
    > {
        
};