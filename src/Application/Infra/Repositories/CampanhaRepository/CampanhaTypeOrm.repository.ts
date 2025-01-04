import { CampanhaEntity, CampanhaEntityUniqueRefs, CampanhaUpdateEntity } from "src/Application/Entities/Campanha.entity";
import { ICampanhaRepositoryContract } from "./ICampanhaRepository.contract";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CampanhaTypeOrmRepository implements ICampanhaRepositoryContract {

    constructor(
        @InjectRepository(CampanhaEntity)
        private readonly campanhaRepository: Repository<CampanhaEntity>,
    ) { }

    create(entity: CampanhaEntity): Promise<CampanhaEntity> {
        throw new Error("Method not implemented.");
    }

    getBy(unqRef: CampanhaEntityUniqueRefs): Promise<CampanhaEntity> {
        throw new Error("Method not implemented.");
    }

    update(unqRef: CampanhaEntityUniqueRefs, UpdateEntity: CampanhaUpdateEntity): Promise<CampanhaEntity> {
        throw new Error("Method not implemented.");
    }

    delete(unqRef: CampanhaEntityUniqueRefs): Promise<void> {
        throw new Error("Method not implemented.");
    }

    getAll(): Promise<CampanhaEntity[]> {
        throw new Error("Method not implemented.");
    }

}
