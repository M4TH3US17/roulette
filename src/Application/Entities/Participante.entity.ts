import { TABLE } from "src/@metadata/tables";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity(TABLE.PARTICIPANTE)
export class ParticipanteEntity {
    @PrimaryColumn({ type: 'number', name: 'CAMPANHA_ID' })
    campanhaId: number;

    @PrimaryColumn({ type: 'varchar', name: 'CPF' })
    cpf: string;

    @Column({ type: 'varchar', name: 'NOME'}) 
    nome: string;

    @Column({ type: 'number', name: 'VOUCHER_ID' })
    voucherId: number;

    @Column({ type: 'number', name: 'QTDE_GIROS' })
    qtdeGiros: number;

    @Column({ type: 'varchar', name: 'EMAIL' }) 
    email: string;

    @Column({ type: 'number', name: 'DDD' }) 
    ddd: number;

    @Column({ type: 'number', name: 'TELEFONE' })
    telefone: number;

    @Column({ type: 'number', name: 'STATUS' })
    status: number;
};

export class ParticipanteUpdateEntity {

};

export type ParticipanteEntityUniqueRefs = null;