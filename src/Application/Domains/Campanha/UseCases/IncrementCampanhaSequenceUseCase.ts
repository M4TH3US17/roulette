import { Inject } from "@nestjs/common";
import { KEY_INJECTION } from "src/@metadata/keys";
import { ICampanhaRepositoryContract } from "src/Application/Infra/Repositories/CampanhaRepository/ICampanhaRepository.contract";

export class IncrementCampanhaSequenceUseCase {
    constructor(
        @Inject(KEY_INJECTION.CAMPANHA_REPOSITORY_CONTRACT)
        private readonly campanhaRepository: ICampanhaRepositoryContract,
    ) {}

    async execute() {

    }
}