import { RoletaEntity, RoletaUpdateEntity } from "src/Application/Entities/Roleta.entity";
import { IRoletaRepositoryContract } from "./IRoletaRepository.contract";


export class RoletaTypeOrmRepository implements IRoletaRepositoryContract {
    
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