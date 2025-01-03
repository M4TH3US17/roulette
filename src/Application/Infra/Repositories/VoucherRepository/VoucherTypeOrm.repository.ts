import { VoucherEntity, VoucherEntityUniqueRefs, VoucherUpdateEntity } from "src/Application/Entities/Voucher.entity";
import { IVoucherRepositoryContract } from "./IVoucherRepository.contract";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

export class VoucherTypeOrmRepository implements IVoucherRepositoryContract {

    constructor(
        @InjectRepository(VoucherEntity)
        private readonly voucherRepository: Repository<VoucherEntity>,
    ) {}
    
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