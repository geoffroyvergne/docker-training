import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export class Todo {
    id?: number;
    name?: string;
    todate?: Date;
    done?: boolean;
    parsedDate?:NgbDateStruct;
  }