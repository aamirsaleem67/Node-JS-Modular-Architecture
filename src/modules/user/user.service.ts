import { User } from './entities/user.entity';
import { Service } from 'typedi';
import { getRepository } from 'typeorm';

@Service()
export default class UserService {
  private userRepository = getRepository(User);

  constructor() {}

  async getUser() {
    return await this.userRepository.find();
  }
}
