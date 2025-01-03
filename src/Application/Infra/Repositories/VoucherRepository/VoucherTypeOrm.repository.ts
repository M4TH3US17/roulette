import { VoucherEntity, VoucherEntityUniqueRefs, VoucherUpdateEntity } from "src/Application/Entities/Voucher.entity";
import { IVoucherRepositoryContract } from "./IVoucherRepository.contract";

export class VoucherTypeOrmRepository implements IVoucherRepositoryContract {

    create(entity: VoucherEntity): Promise<VoucherEntity> {
        throw new Error("Method not implemented.");
    }
    
    getBy(unqRef: VoucherEntityUniqueRefs): Promise<VoucherEntity> {
        throw new Error("Method not implemented.");
    }

    update(unqRef: VoucherEntityUniqueRefs, UpdateEntity: VoucherUpdateEntity): Promise<VoucherEntity> {
        throw new Error("Method not implemented.");
    }

    delete(unqRef: VoucherEntityUniqueRefs): Promise<void> {
        throw new Error("Method not implemented.");
    }

    getAll(): Promise<VoucherEntity[]> {
        throw new Error("Method not implemented.");
    }

}