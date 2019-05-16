import { User } from "../models/user.interface";

const userList: User[] = [
    {
        name: 'Maria',
        company: 'Doe and Co.',
        location: 'London, UK',
        bio: 'I love Ionic!',
        avatar_url: 'http://i.imgur.com/jav62p6.jpg',
        email: 'maria@doe.com'
    },
    {
        name: 'Alexandra',
        company: 'Doe and Co.',
        location: 'London, UK',
        bio: 'I love Ionic!',
        avatar_url: 'http://i.imgur.com/jav62p6.jpg',
        email: 'maria@doe.com'
    }
]

//Can access the userList inside the other components
export const USER_LIST = userList;