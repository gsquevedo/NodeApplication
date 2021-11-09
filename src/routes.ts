import { Router } from "express"
import { CreateUserController } from "./controllers/CreateUserController"
import { CreateTagController } from "./controllers/CreateTagController"
import { ensureAdmin } from "./middlewares/ensureAdmin"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController"
import { CreateComplimentController  } from "./controllers/CreateComplimentController"
import { ensureAuthenticate } from "./middlewares/ensureAuthenticate"
import { ListUserSenderComplimentsController } from "./controllers/ListUserSenderComplimentsController"
import { ListUserReceiverComplimentsController } from "./controllers/ListUserReceiverComplimentsController"
import { ListTagsController } from "./controllers/ListTagsController"
import { ListUserController } from "./controllers/ListUserController"

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const listUserReceiver = new ListUserReceiverComplimentsController()
const listUserSender = new ListUserSenderComplimentsController()
const listTags = new ListTagsController()
const listUser = new ListUserController()

router.post("/users", createUserController.handle)
router.post("/tags", ensureAuthenticate,ensureAdmin, createTagController.handle)
router.post("/login", authenticateUserController.handle)
router.post("/compliment", ensureAuthenticate, createComplimentController.handle)

router.get("/users/compliments/send", ensureAuthenticate, listUserSender.handle)
router.get("/users/compliments/receive", ensureAuthenticate, listUserReceiver.handle)
router.get("/tags", ensureAuthenticate, listTags.handle)
router.get("/users", ensureAuthenticate, listUser.handle)

export { router }