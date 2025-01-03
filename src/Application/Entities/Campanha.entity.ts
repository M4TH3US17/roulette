import { TABLE } from "src/@metadata/tables";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity(TABLE.CAMPANHA)
export class CampanhaEntity {
    @PrimaryColumn({ type: 'number', name: 'P903ID' })
    campanhaId: number;

    @PrimaryColumn({ type: 'number', name: 'P903SEQ' })
    campanhaSequence: number;

    @Column({ type: 'varchar', name: 'P903OBS' })
    observacao: string;
};

export class CampanhaUpdateEntity {
    campanhaId: number;
    campanhaSequence: number;
};

export type CampanhaEntityUniqueRefs =
    | Pick<CampanhaEntity, "campanhaId">
    | Pick<CampanhaEntity, "campanhaSequence">;