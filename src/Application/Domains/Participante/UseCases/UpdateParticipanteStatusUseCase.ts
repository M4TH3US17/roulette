import { Inject, Injectable } from "@nestjs/common";
import { KEY_INJECTION } from "src/@metadata/keys";
import { IParticipanteRepositoryContract } from "src/Application/Infra/Repositories/ParticipanteRepository/IParticipanteRepository.contract";

@Injectable()
export class UpdateParticipanteStatusUseCase {
    constructor(
        @Inject(KEY_INJECTION.PARTICIPANTE_REPOSITORY_CONTRACT)
        private readonly participanteRepository: IParticipanteRepositoryContract,
    ) {}

    async execute() {

    }
}