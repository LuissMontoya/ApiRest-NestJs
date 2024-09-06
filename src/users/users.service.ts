import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private users = [
        {
            id: 1,
            name: 'John Doe',
            phone: '3112485745'
        },
        {
            id: 2,
            name: 'Camilo Doe',
            phone: '3112444775'
        },
        {
            id: 3,
            name: 'Andres Doe',
            phone: '3112485888'
        },
        {
            id: 4,
            name: 'Jose Doe',
            phone: '3112480321'
        },
        {
            id: 5,
            name: 'Ana Doe',
            phone: '3112480005'
        },
        {
            id: 6,
            name: 'Andrea Doe',
            phone: '3112484475'
        },
    ]

    getUsers(){
        return this.users;
    }

}
