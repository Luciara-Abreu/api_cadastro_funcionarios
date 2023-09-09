import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1694207134097 implements MigrationInterface {
    name = 'Default1694207134097'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`pessoas\` (\`id_pessoa\` int NOT NULL AUTO_INCREMENT, \`nome\` text NOT NULL, \`rg\` text NOT NULL, \`cpf\` text NOT NULL, \`data_nascimento\` date NOT NULL, \`data_admissao\` date NOT NULL, \`funcao\` text NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id_pessoa\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`pessoas\``);
    }

}
