import { TaskStatus } from "../enum/TaskStatus";
import { TaskType } from "../enum/TaskType";

<<<<<<< HEAD
export type TaskModel ={
    id:number,
    type:TaskType,
    title:string,
    description: string,
    user: string,
    responsible: number,
    status: TaskStatus,
=======
export type TaskModel = {
    id: number;
    type: TaskType;
    title: string;
    description: string;
    userId: Number;
    responsibleId: Number;
    status: TaskStatus;
>>>>>>> 87b7ced2f0868002abe940b5cc0175bb985a47ff
}