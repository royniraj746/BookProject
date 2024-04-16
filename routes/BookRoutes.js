const express=require("express");
const router=express.Router();


//import here controller 

const {addNewBook ,getAllBook,updateBook ,removeBook}=require("../controller/createBook")


//routes 

router.post("/addBook" ,addNewBook);
router.get("/getAllBook" ,getAllBook);
router.delete("/removeBook/:id" ,removeBook)
router.put("/updateBook/:id",updateBook);




module.exports =router;