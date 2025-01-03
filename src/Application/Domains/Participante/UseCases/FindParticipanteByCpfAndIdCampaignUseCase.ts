import { Inject } from "@nestjs/common";
import { KEY_INJECTION } from "src/@metadata/keys";
import { IParticipanteRepositoryContract } from "src/Application/Infra/Repositories/ParticipanteRepository/IParticipanteRepository.contract";

export class FindParticipanteByCpfAndIdCampaignUseCase {
    constructor(
        @Inject(KEY_INJECTION.PARTICIPANTE_REPOSITORY_CONTRACT)
        private readonly participanteRepository: IParticipanteRepositoryContract,
    ) {}

    async execute() {

    }
}