const bcrypt = require("bcryptjs");

class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async create(user) {
    const hashedPassword = bcrypt.hashSync(user.password, 10);
    const newUser = this.userRepository.create({
      ...user,
      password: hashedPassword,
    });
    return this.userRepository.save(newUser);
  }

  async findOneByEmail(email) {
    return this.userRepository.findOne({ where: { email } });
  }
}

module.exports = UserService;
