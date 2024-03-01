import express from "express"
import { DataModel } from "../model/data_model"
import { UserModel } from "../model/user"

export class dataManagement {
  static async add_user(req: express.Request, res: express.Response) {
    const start = process.hrtime() // Record the start time

    try {
      const { name, mobile, address, email } = req.body
      if (!name) {
        return res.status(400).json({ message: "Please enter name" })
      } else if (!mobile) {
        return res.status(400).json({ message: "Please enter mobile number" })
      } else if (!address) {
        return res.status(400).json({ message: "Please enter address" })
      } else if (!email) {
        return res.status(400).json({ message: "Please enter email" })
      }
      const check_data = await UserModel.find()
      if (check_data.length == 0) {
        await new UserModel({
          name,
          mobile,
          address,
          email,
        })
          .save()
          .then((newdata) => newdata.toObject())
        return res.status(201).json({ message: "Data added successfully!" })
      }
      const addCount = 1 + check_data[0].add_count
      const old_sr = check_data[0].sr
      const UpdateData = await UserModel.findOneAndReplace(
        { sr: old_sr },
        { name, email, mobile, address, add_count: addCount }
      )
      if (!UpdateData) {
        return res
          .status(400)
          .json({ message: "Unable to Replace existing data!" })
      }
      const end = process.hrtime(start) // Record the end time
      const executionTimeInMs = (end[0] * 1000 + end[1] / 1000000).toFixed(2) // Calculated execution time in milliseconds
      return res.status(201).json({
        message: "New record added successfully!",
        executionTime: `${executionTimeInMs} ms`,
      })
    } catch (error) {
      console.log(error)
      return res.status(400).json({ message: "Something went wrong!" })
    } finally {
      const end = process.hrtime(start) // Record the end time
      const executionTimeInMs = (end[0] * 1000 + end[1] / 1000000).toFixed(2) // Calculate execution time in milliseconds
      console.log(`add_user function executed in ${executionTimeInMs} ms`)
    }
  }

  static async update_user(req: express.Request, res: express.Response) {
    const id = req.params.id
    const newData = req.body
    const start = process.hrtime() // Record the start time

    try {
      const user = await UserModel.findByIdAndUpdate(
        id,
        { $inc: { update_count: 1 }, ...newData },
        {
          new: true,
        }
      )

      if (!user) {
        return res.status(404).json({ message: "Data entry not found" })
      }
      const end = process.hrtime(start) // Record the end time
      const executionTimeInMs = (end[0] * 1000 + end[1] / 1000000).toFixed(2) // Calculated execution time in milliseconds
      return res.status(201).json({
        message: "Updated successfully!",
        executionTime: `${executionTimeInMs} ms`,
      })
      // res.json(user)
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: "Server Error" })
    } finally {
      const end = process.hrtime(start) // Record the end time
      const executionTimeInMs = (end[0] * 1000 + end[1] / 1000000).toFixed(2) // Calculate execution time in milliseconds
      console.log(`add_user function executed in ${executionTimeInMs} ms`)
    }
  }

  static async get_user(req: express.Request, res: express.Response) {
    const start = process.hrtime() // Record the start time
    try {
      const User = await UserModel.find()
      if (User.length == 0) {
        return res.status(404).json({ message: "No User Found!" })
      }

      const end = process.hrtime(start) // Record the end time
      const executionTimeInMs = (end[0] * 1000 + end[1] / 1000000).toFixed(2) // Calculated execution time in milliseconds
      return res.status(200).json({
        User,
        executionTime: `${executionTimeInMs} ms`,
      })
      return res.status(200).json(User)
    } catch (error) {
      return res.status(400).json({ message: "Something went wrong!" })
    } finally {
      const end = process.hrtime(start) // Record the end time
      const executionTimeInMs = (end[0] * 1000 + end[1] / 1000000).toFixed(2) // Calculate execution time in milliseconds
      console.log(`add_user function executed in ${executionTimeInMs} ms`)
    }
  }
}
