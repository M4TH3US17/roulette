import { Inject } from "@nestjs/common";
import { KEY_INJECTION } from "src/@metadata/keys";
import { IRoletaRepositoryContract } from "src/Application/Infra/Repositories/RoletaRepository/IRoletaRepository.contract";

export class SpinRoletaUseCase {
    constructor(
        @Inject(KEY_INJECTION.ROLETA_REPOSITORY_CONTRACT)
        private readonly roletaRepository: IRoletaRepositoryContract,
    ) {}

    async execute() {

    }
}