import { Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";
import { TaskService } from "./task.service";

@Controller({})
export class TaskController{
    constructor(private taskService: TaskService){}

    @Get('/tasks')
    getAllTask(){
        return this.taskService.getTask();
    }

   /* @Get('/')
    index(){
        return 'Home page';
    } */

    @Post('/task')
    createTask(){
        return this.taskService.createTask();
    }

    @Put('/task')
    updateTask(){
        return this.taskService.updateTask();
    }

    @Delete('/task')
    deleteTask(){
        return this.taskService.deleteTask();
    }

    @Patch('/task')
    patchTaskStatus(){
        return this.taskService.updateTaskStatus();
    }
}