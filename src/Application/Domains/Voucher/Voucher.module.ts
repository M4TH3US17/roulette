import { Module } from "@nestjs/common";
import { KEY_INJECTION } from "src/@metadata/keys";
import { VoucherTypeOrmRepository } from "src/Application/Infra/Repositories/VoucherRepository/VoucherTypeOrm.repository";
import { CreateVoucherUseCase } from "./UseCases/CreateVoucherUseCase";
import { FindVoucherByCpfAndCampaignId } from "./UseCases/FindVoucherByCpfAndCampaignId";
import { UpdateVoucherUseCase } from "./UseCases/UpdateVoucherUseCase";

@Module({
  imports: [],
  controllers: [],
  providers: [
    {
      provide: KEY_INJECTION.VOUCHER_REPOSITORY_CONTRACT,
      useClass: VoucherTypeOrmRepository
    },

    // use cases
    CreateVoucherUseCase,
    FindVoucherByCpfAndCampaignId,
    UpdateVoucherUseCase,
  ],
})
export class VoucherModule {}