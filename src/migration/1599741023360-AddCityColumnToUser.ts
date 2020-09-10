import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCityColumnToUser1599741023360 implements MigrationInterface {
  name = 'AddCityColumnToUser1599741023360';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `firstNamer` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `age` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `user`');
  }
}
