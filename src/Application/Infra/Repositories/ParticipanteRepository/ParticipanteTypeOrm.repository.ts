import { ParticipanteEntity, ParticipanteUpdateEntity } from "src/Application/Entities/Participante.entity";
import { IParticipanteRepositoryContract } from "./IParticipanteRepository.contract";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ParticipanteTypeOrmRepository implements IParticipanteRepositoryContract {
    
    constructor(
        @InjectRepository(ParticipanteEntity)
        private readonly participanteRepository: Repository<ParticipanteEntity>,
    ) {}

    create(entity: ParticipanteEntity): Promise<ParticipanteEntity> {
        throw new Error("Method not implemented.");
    }

    getBy(unqRef: null): Promise<ParticipanteEntity> {
        throw new Error("Method not implemented.");
    }

    update(unqRef: null, UpdateEntity: ParticipanteUpdateEntity): Promise<ParticipanteEntity> {
        throw new Error("Method not implemented.");
    }

    delete(unqRef: null): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
    getAll(): Promise<ParticipanteEntity[]> {
        throw new Error("Method not implemented.");
    }
}