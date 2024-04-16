const BookSchema = require("../model/BookSchema");

//Add new Book 

exports.addNewBook = async (req, res) => {
    const { title, author, year } = req.body;
    if (!title || !author || !year) {
        return res.status(401).json({
            success: false,
            message: "Field is missing !"
        })
    }

    const response = await BookSchema.create({ title, author, year });

    return res.status(201).json({
        success: true,
        data: response,
        message: "successFully Book is Added"
    })
}


//find all Book 

exports.getAllBook = async (req, res) => {
    try {

        const response = await BookSchema.find({});

        return res.status(201).json({
            success: true,
            data: response,
            message: "all Book are Fetched successfully"
        })




    } catch (error) {
        return res.status(501).json({
            success: false,
            message: "age book errror ..........",
            message: error.message

        })

    }
}


//delete book by id 


exports.removeBook = async (req, res) => {
    try {

        const { id } = req.params;
        console.log("id for delete", id);
        if (!id) {
            return res.status(500).json({
                success: false,
                message: "Id is missing "
            })
        }

        const response = await BookSchema.findByIdAndDelete({ _id: id });
        return res.status(201).json({
            success: true,
           
            message: "successFully deleted Book"
        })
    }
    catch (error) {
        return res.status(501).json({
            success: false,
            message: 'book is not deleted'
        })
    }
}


//update the book 

exports.updateBook = async (req, res) => {
    try {
        const {id}=req.params;
        const {title ,author ,year }=req.body;
        const response=await BookSchema.findByIdAndUpdate({_id:id} ,{title ,author ,year},{new:true})

        return res.status(201).json({
            success:true ,
            data:response ,
            message:'Book updated succesfully'
        })



    }
    catch (error) {
        return res.status(501).json({
            success:false ,
            message:"Book not updated successfully"
        })

    }
}

