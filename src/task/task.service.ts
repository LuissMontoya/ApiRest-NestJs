import { Get, Injectable } from "@nestjs/common";

@Injectable()
export class TaskService{

    getTask(){
        return ['task 1', 'task 2', 'task 3'];
    }

    createTask(){
        return 'creando task';
    }

    updateTask(){
        return 'actualizando tarea';
    }

    deleteTask(){
        return 'eliminando tarea';
    }

    updateTaskStatus(){
        return 'actualizando el estado de una tarea';
    }

}