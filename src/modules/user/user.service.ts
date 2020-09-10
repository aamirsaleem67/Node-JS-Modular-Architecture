import { Service } from 'typedi';

@Service()
export default class UserService {
  constructor() {}

  getUser() {
    return {
      firstName: 'Aamir',
      projects: 4,
    };
  }
}
