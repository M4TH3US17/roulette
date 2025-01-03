import { Module } from '@nestjs/common';
import { RetaguardaDatabaseModule } from './Application/Infra/Database/Retaguarda/RetaguardaDatabase.module';

@Module({
  imports: [],
  controllers: [],
  providers: [
    RetaguardaDatabaseModule,
  ],
})
export class MainModule {}
