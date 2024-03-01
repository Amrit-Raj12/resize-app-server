import express from "express"
import { dataManagement } from "../controller/dataManagement"
const router = express.Router()

export default (): express.Router => {
  router.use("/update-user/:id", dataManagement.update_user)
  router.use("/add-user", dataManagement.add_user)
  router.use("/get-user", dataManagement.get_user)

  router.use("/get-add-count/:id/", dataManagement.get_add_count)

  return router
}
