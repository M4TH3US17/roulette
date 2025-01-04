import { Module } from "@nestjs/common";
import { KEY_INJECTION } from "src/@metadata/keys";
import { ParticipanteTypeOrmRepository } from "src/Application/Infra/Repositories/ParticipanteRepository/ParticipanteTypeOrm.repository";
import { CreateParticipanteUseCase } from "./UseCases/CreateParticipanteUseCase";
import { FindParticipanteByCpfAndIdCampaignUseCase } from "./UseCases/FindParticipanteByCpfAndIdCampaignUseCase";
import { UpdateParticipanteQtdeGirosAndStatusUseCase } from "./UseCases/UpdateParticipanteQtdeGirosAndStatusUseCase";

@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: KEY_INJECTION.PARTICIPANTE_REPOSITORY_CONTRACT,
      useClass: ParticipanteTypeOrmRepository
    },

    // use cases
    CreateParticipanteUseCase,
    FindParticipanteByCpfAndIdCampaignUseCase,
    UpdateParticipanteQtdeGirosAndStatusUseCase,
    UpdateParticipanteQtdeGirosAndStatusUseCase,
    UpdateParticipanteQtdeGirosAndStatusUseCase,
  ],
})
export class ParticipanteModule {}