import { Injectable, NotFoundException } from '@nestjs/common';
import { ResponseResgistrationType, ResgistrationType, loginType } from './dto/authentication.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthenticationService {
  constructor(
    @InjectModel('Users') private readonly AthenticationModal: Model<ResponseResgistrationType>
  ) {

  }

  private readonly users: ResponseResgistrationType[] = [];

  async registeration(user: ResgistrationType) {
    const { password, username } = user;
    const isExistUser = await this.AthenticationModal.findOne({ username });
    try {

      if (isExistUser) {
        throw 'Username "' + username + '" is already taken';
      }
    } catch (error) {
      throw new NotFoundException(` Username ${username} is already taken`);
    }
    const registeredUser = new this.AthenticationModal(user);
    // hash password
    if (password) {
      const saltOrRounds = 10;
      const hash = await bcrypt.hash(password, saltOrRounds);
      registeredUser.hash = hash;
    }
    const userResponse = await registeredUser.save();
    return userResponse;
  }

  async login(user) {
    const { username, password } = user;

    let isExistUser = await this.AthenticationModal.findOne({ username });

    if (isExistUser) {
      const isMatch = await bcrypt.compare(password, isExistUser.hash);
      if (isMatch) {
        return isExistUser
      }
      else throw new NotFoundException(`Invalid user name or password`);
    }
    else {
      throw new NotFoundException(`user does not exist`);
    }
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.AthenticationModal.findOne({ username });
    const isMatch = user && await bcrypt.compare(pass, user.hash);
    if (user && isMatch) {
      const { ...result } = user;
      return result;
    }
    return null;
  }
}
