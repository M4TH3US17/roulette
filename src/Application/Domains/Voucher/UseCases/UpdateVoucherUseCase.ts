import { Inject } from "@nestjs/common";
import { KEY_INJECTION } from "src/@metadata/keys";
import { IVoucherRepositoryContract } from "src/Application/Infra/Repositories/VoucherRepository/IVoucherRepository.contract";

export class UpdateVoucherUseCase {
    constructor(
        @Inject(KEY_INJECTION.VOUCHER_REPOSITORY_CONTRACT)
        private readonly voucherRepository: IVoucherRepositoryContract,
    ) {}

    async execute() {

    }
}