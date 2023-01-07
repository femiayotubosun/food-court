import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundException extends HttpException {
  constructor(msg = 'Resource not found') {
    super(msg, HttpStatus.NOT_FOUND);
  }
}
