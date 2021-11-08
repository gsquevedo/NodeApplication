import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

interface IAuthenticateUserService{
    email: string,
    password: string
}

class AuthenticateUserService{
    async execute({email, password}: IAuthenticateUserService){
        
        const userRepositories = getCustomRepository(UsersRepositories)

        const user = await userRepositories.findOne({
            email
        })

        if(!user){
            throw new Error("Email/Password incorrect");
        }
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("Email/Password incorrect");
        }

        const token = sign({
            email: user.email,
        }, "182dcfvghbb58bnkmkjhy8564eswxdcvb",{
            subject: user.id,
            expiresIn: "1d"
        })

        return token
    }    
}

export { AuthenticateUserService }