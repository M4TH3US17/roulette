import { TABLE } from 'src/@metadata/tables';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity(TABLE.VOUCHER)
export class VoucherEntity {
    @Column({type: 'number', name: 'P151ID'})
    currentSequence: number;

    @Column({type: 'number', name: 'P15ID'})
    @PrimaryGeneratedColumn()
    campanhaId: number;

    @Column({type: 'number', name: 'P151IDCONT', default: 0})
    P151IDCONT: number;

    @Column({type: 'char', name: 'P151CPF'})
    cpf: string;

    @Column({type: 'varchar', name: 'P151NOME'})
    nome: string;

    @Column({type: 'varchar', name: 'P151VOUCHE'}) // igual ao P151CPF
    P151VOUCHE: string;

    @Column({type: 'number', name: 'P151QTDUTI', default: 0})
    P151QTDUTI: number;

    @Column({type: 'number', name: 'P151INDEXC', default: 0})
    P151INDEXC: number;

    @Column({type: 'date', name: 'P15DTVOUCH'}) // SYSDATE DO FRONT
    P15DTVOUCH: Date;

    @Column({type: 'date', name: 'P15DTUTIL'}) // DATA NULA ORACLE
    P15DTUTIL: Date;

    @Column({type: 'number', name: 'P15LJUTIL', default: 0})
    P15LJUTIL: number;

    @Column({type: 'number', name: 'P15VLVOUCH'}) 
    valor: number;

    @Column({type: 'number', name: 'P15LOJGER', default: 999})
    P15LOJGER: number;

    @Column({type: 'number', name: 'P15DOCGER'}) // igual ao P151ID
    P15DOCGER: number;

    @Column({type: 'number', name: 'P15TPVOUCH', default: 3})
    P15TPVOUCH: number;
};

export class VoucherUpdateEntity {
    valor: number;
};

export type VoucherEntityUniqueRefs = 
       | Pick<VoucherEntity, "currentSequence">
       | Pick<VoucherEntity, "cpf">
       | Pick<VoucherEntity, "campanhaId">;