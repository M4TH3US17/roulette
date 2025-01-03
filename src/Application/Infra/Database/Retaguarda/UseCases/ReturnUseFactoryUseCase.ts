import { CampanhaEntity } from "src/Application/Entities/Campanha.entity";
import { ParticipanteEntity } from "src/Application/Entities/Participante.entity";
import { RoletaEntity } from "src/Application/Entities/Roleta.entity";
import { VoucherEntity } from "src/Application/Entities/Voucher.entity";
import { DataSource } from "typeorm";


export class ReturnUseFactoryUseCase {

    public async execute(): Promise<DataSource> {
        console.log("Checking existing database connection...");
        const dataSource = new DataSource({
            name: process.env.DB_NAME,
            type: process.env.DB_TYPE as any,
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT),
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            serviceName: process.env.DB_SERVICE_NAME,
            thickMode: true,
            entities: [ParticipanteEntity, VoucherEntity, CampanhaEntity, RoletaEntity],
            synchronize: false,
        });

        if (dataSource.isInitialized) {
            console.log("Database connection already initialized, reusing existing connection.");
            return dataSource;
        }
        console.log("Connecting to the [VAR] database...");

        try {
            await dataSource.initialize();
            console.warn("Connection to the [VAR] database established successfully.");
            return dataSource;
        } catch (error) {
            console.error("Error to connect database:", error);
            throw error;
        }
    }
}