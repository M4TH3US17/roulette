import { Inject, Injectable } from "@nestjs/common";
import { KEY_INJECTION } from "src/@metadata/keys";
import { ICampanhaRepositoryContract } from "src/Application/Infra/Repositories/CampanhaRepository/ICampanhaRepository.contract";

@Injectable()
export class IncrementCampanhaSequenceUseCase {
    constructor(
        @Inject(KEY_INJECTION.CAMPANHA_REPOSITORY_CONTRACT)
        private readonly campanhaRepository: ICampanhaRepositoryContract,
    ) { };

    async execute() {
        /*try {

        } catch (error) {

        } finally {

        }*/
    };

};