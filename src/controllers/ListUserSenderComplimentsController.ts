import { Request, Response} from "express"
import { ListUserSendComplimentService } from "../services/ListUserSendComplimentService"

class ListUserSenderComplimentsController{
    async handle(request: Request, response: Response){
        const { user_id } = request

        const listUserSender = new ListUserSendComplimentService()

        const compliments = await listUserSender.execute(user_id)

        return response.json(compliments)
    }
}

export {ListUserSenderComplimentsController}