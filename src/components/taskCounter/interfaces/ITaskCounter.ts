import { Status } from '../../createTaskForm/enum/Status';

export type TaskCounterStatusType =
  | Status.todo
  | Status.inProgress
  | Status.inProgress;

export interface ITaskCounter {
  count?: number;
  status?: TaskCounterStatusType;
}
