const Team=require('../Model/teams');
class OurTeamController {
    getTeam=async (req,res)=>{
        const teamData=await Team.findAll();
        const finalData=teamData.map((ele)=>{
            return{
                'id':ele.id,
                'name':ele.name,
                'image':'http://localhost:4000/images/'+ele.image
            }
        })
        res.json({status:true,message:'Success',data:finalData});

    }
}
module.exports=OurTeamController;