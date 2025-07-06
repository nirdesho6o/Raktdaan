const Service=require('../Model/service');
class ServiceController{
        getData=async(req,res)=>{
            const services=await Service.findAll();
            if(services.length>0){
                const ServiceArr=services.map((item)=>{
                    return{
                        id: item.id,
                        name: item.name,
                        image: 'http://localhost:4000/images/'+item.image
                    }
                });
                res.json({status:true,message:'success',data:ServiceArr});
            }
            else{
                res.json({status:false,message:'Services not found'})
            }
        }
}

module.exports=ServiceController;