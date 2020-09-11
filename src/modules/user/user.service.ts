import { USER_REPOSITORY } from './user.providers';
import { User } from './entities/user.entity';
import { Service, Inject } from 'typedi';
import { Repository } from 'typeorm';

@Service()
export default class UserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private userRepository: Repository<User>,
  ) {}

  async getUser(id: string) {
    return await this.userRepository.findOne(id);
  }

  async getUsers() {
    return await this.userRepository.find();
  }
}
