import { HttpException, HttpStatus } from '@nestjs/common';

export class ResourceAlreadyExistsException extends HttpException {
  constructor(msg = 'Resource already exists') {
    super(msg, HttpStatus.BAD_REQUEST);
  }
}
