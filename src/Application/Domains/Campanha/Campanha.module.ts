import { Module } from "@nestjs/common";
import { KEY_INJECTION } from "src/@metadata/keys";
import { CampanhaTypeOrmRepository } from "src/Application/Infra/Repositories/CampanhaRepository/CampanhaTypeOrm.repository";
import { IncrementCampanhaSequenceUseCase } from "./UseCases/IncrementCampanhaSequenceUseCase";

@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: KEY_INJECTION.CAMPANHA_REPOSITORY_CONTRACT,
      useClass: CampanhaTypeOrmRepository
    },

    // use cases
    IncrementCampanhaSequenceUseCase,
  ],
})
export class CampanhaModule {}