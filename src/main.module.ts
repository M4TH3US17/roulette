import { Module } from '@nestjs/common';
//import { RetaguardaDatabaseModule } from './Application/Infra/Database/Retaguarda/RetaguardaDatabase.module';
import { RoletaModule } from './Application/Domains/Roleta/Roleta.module';
import { RepositoriesModule } from './Application/Infra/Repositories/Repositories.module';
import { EntityModule } from './Application/Entities/Entities.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RetaguardaDatabaseModule } from './Application/Infra/Database/Retaguarda/RetaguardaDatabase.module';

@Module({
  imports: [
    RoletaModule,
    EntityModule,
    //RepositoriesModule,
    RetaguardaDatabaseModule,
  ],
})
export class MainModule { }
