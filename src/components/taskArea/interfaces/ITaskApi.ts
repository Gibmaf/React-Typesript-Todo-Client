import { Priority } from '../../createTaskForm/enum/Priority';
import { Status } from '../../createTaskForm/enum/Status';

export interface ITaskApi {
  id: string;
  data: string;
  title: string;
  description: string;
  priority: `${Priority}`;
  status: `${Status}`;
}
