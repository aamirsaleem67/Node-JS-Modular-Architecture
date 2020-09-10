import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateUser1599741165524 implements MigrationInterface {
  name = 'UpdateUser1599741165524';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `user` CHANGE `firstNamer` `firstName` varchar(255) NOT NULL');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `user` CHANGE `firstName` `firstNamer` varchar(255) NOT NULL');
  }
}
