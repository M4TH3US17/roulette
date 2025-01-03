import { CampanhaEntity, CampanhaEntityUniqueRefs, CampanhaUpdateEntity } from "src/Application/Entities/Campanha.entity";
import { ICampanhaRepositoryContract } from "./ICampanhaRepository.contract";

export class CampanhaTypeOrmRepository implements ICampanhaRepositoryContract {
    
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
