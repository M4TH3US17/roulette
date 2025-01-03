import { VoucherEntity, VoucherEntityUniqueRefs, VoucherUpdateEntity } from "src/Application/Entities/Voucher.entity";
import { IBaseRepositoryContract } from "../IBase.repository-contract";

export interface IVoucherRepositoryContract
    extends IBaseRepositoryContract<
        VoucherEntity,
        VoucherUpdateEntity,
        VoucherEntityUniqueRefs
    > {
        
};