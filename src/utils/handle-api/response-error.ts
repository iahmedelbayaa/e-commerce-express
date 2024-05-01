import {StatusCode} from './status-code';

export class ResponseError extends Error {
    status
  constructor(message : string, status :string) {
    super(message);
    this.status = status;
  }
}
