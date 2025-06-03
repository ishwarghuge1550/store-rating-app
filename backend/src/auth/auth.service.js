const bcrypt = require("bcryptjs");
const { Injectable } = require("@nestjs/common");
const { JwtService } = require("@nestjs/jwt");
const { getRepositoryToken } = require("@nestjs/typeorm");
const { User } = require("../entities/user.entity");

class AuthService {
  constructor(userRepository, jwtService) {
    this.userRepository = userRepository;
    this.jwtService = jwtService;
  }

  async login(loginDto) {
    const user = await this.userRepository.findOne({
      where: { email: loginDto.email },
    });

    if (!user || !bcrypt.compareSync(loginDto.password, user.password)) {
      throw new Error("Invalid credentials");
    }

    const payload = { email: user.email, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };
  }

  async register(registerDto) {
    const existingUser = await this.userRepository.findOne({
      where: { email: registerDto.email },
    });

    if (existingUser) {
      throw new Error("Email already exists");
    }

    const hashedPassword = bcrypt.hashSync(registerDto.password, 10);
    const user = this.userRepository.create({
      ...registerDto,
      password: hashedPassword,
    });

    return this.userRepository.save(user);
  }
}

// Manual dependency configuration
const AuthServiceProvider = {
  provide: "AuthService",
  useFactory: (userRepository, jwtService) => {
    return new AuthService(userRepository, jwtService);
  },
  inject: [getRepositoryToken(User), JwtService],
};

module.exports = { AuthService, AuthServiceProvider };
