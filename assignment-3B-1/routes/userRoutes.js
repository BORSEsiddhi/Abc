import express from "express";
import { deleteuser, getalluser, getuser, updateuser } from "../controllers/userCtrls.js";


const router=express.Router();

// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send("hello user you are login ");
// })
// router.get("/checkuser/:id",verifyuser,(req,res,next)=>{
//     res.send("hello user ,you are logged in and you can delete your account");
// })
// router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("hello Admin ,you are logged in and you can delete all account");
// })

//UPDATE
router.put("/:id",updateuser);
//DELETE
router.delete("/:id",deleteuser);
//GET
router.get("/:id",getuser);
//GETALL
router.get("/",getalluser);

 
export default router