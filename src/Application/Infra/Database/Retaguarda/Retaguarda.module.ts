
import { Module } from "@nestjs/common";
import { ReturnUseFactoryUseCase } from "./UseCases/ReturnUseFactoryUseCase";
import { KEY_INJECTION } from "src/@metadata/keys";

@Module({
  providers: [
    {
      provide: KEY_INJECTION.RETAGUARDA_DATA_SOURCE,
      useFactory: async () => new ReturnUseFactoryUseCase().execute(),
    },
  ],
  exports: [KEY_INJECTION.RETAGUARDA_DATA_SOURCE],
})
export class RetaguardaModule {}