const Contact=require('../Model/contact');
class ContactController{
    add=async (req,res)=>{

        const newContact = await Contact.create(req.body);
        res.json({ status: true, message: 'Success', data:newContact });
    }
}
module.exports=ContactController;