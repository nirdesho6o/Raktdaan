const Donor=require("../Model/Donor");
class DonorController{
    add=async (req,res)=>{
        const newDonor = await Donor.create(req.body);
        res.json({status:true,message:'success'});
    }
}
module.exports=DonorController;