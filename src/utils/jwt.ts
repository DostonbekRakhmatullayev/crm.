import { HttpException, HttpStatus } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';
dotenv.config();

class JwtStrategy {
  private readonly JWT_SECRET = process.env.SECRET_KEY;

  sign(payload: any): string {
    return jwt.sign(payload, this.JWT_SECRET, { expiresIn: '6h' });
  }

  verify(token: string): any {
    try {
      const decoded = jwt.verify(token, this.JWT_SECRET);
      return decoded;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}

export default new JwtStrategy();