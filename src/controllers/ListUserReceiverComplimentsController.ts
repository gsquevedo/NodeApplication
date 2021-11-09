import { Request, Response} from "express"
import { ListUserReceiverComplimentService } from "../services/ListUserReceiverComplimentService"

class ListUserReceiverComplimentsController{
    async handle(request: Request, response: Response){
        const { user_id } = request

        const listUserReceiver = new ListUserReceiverComplimentService()

        const compliments = await listUserReceiver.execute(user_id)

        return response.json(compliments)
    }
}

export {ListUserReceiverComplimentsController}