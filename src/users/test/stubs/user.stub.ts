import { User } from "../../schemas/user.schema"

export const userStub = (): User => {
    return {
        userId: '111',
        email: 'test@example.com',
        age: 23,
        favoriteFoods: ['apples', 'pizza']
    }
}

export const userStubErr = () => {
    return {
        userId: '111',
        email: 'test@example.com',
        age: 23,
        favoriteFoods: ['apples', 'pizza'],
        bug: "HAHAHA"
    }
}