import { RoletaEntity, RoletaUpdateEntity } from "src/Application/Entities/Roleta.entity";
import { IRoletaRepositoryContract } from "./IRoletaRepository.contract";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";


export class RoletaTypeOrmRepository implements IRoletaRepositoryContract {

    constructor(
        @InjectRepository(RoletaEntity)
        private readonly roletaRepository: Repository<RoletaEntity>,
    ) { }

    create(entity: RoletaEntity): Promise<RoletaEntity> {
        throw new Error("Method not implemented.");
    }

    getBy(unqRef: null): Promise<RoletaEntity> {
        throw new Error("Method not implemented.");
    }

    update(unqRef: null, UpdateEntity: RoletaUpdateEntity): Promise<RoletaEntity> {
        throw new Error("Method not implemented.");
    }

    delete(unqRef: null): Promise<void> {
        throw new Error("Method not implemented.");
    }

    getAll(): Promise<RoletaEntity[]> {
        throw new Error("Method not implemented.");
    }
}