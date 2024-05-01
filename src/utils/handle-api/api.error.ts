import {ResponseError} from './response-error';
import {StatusCode} from './status-code';

class ApiError extends Error {
  static badRequest(message = 'Invalid request') {
    return new ResponseError(message, StatusCode.BAD_REQUEST.toString());
  }

  static internalServerError(message = 'Internal server error') {
    return new ResponseError(
      message,
      StatusCode.INTERNAL_SERVER_ERROR.toString()
    );
  }

  static unauthorized(message = 'Your not authorized to do this action') {
    return new ResponseError(message, StatusCode.UNAUTHORIZED.toString());
  }

static from(error: any) {
    error.status = error.status || StatusCode.INTERNAL_SERVER_ERROR;
    return new ResponseError(error.message, error.status);
  }
  
  static forbidden(message = 'Forbidden') {
    return new ResponseError(message, StatusCode.FORBIDDEN.toString());
  }
}

export default ApiError;