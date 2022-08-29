import { StatusCodes } from 'http-status-code';
import CustomApiError from './custom-api.js';

class NotFoundError extends CustomApiError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

export default NotFoundError;
