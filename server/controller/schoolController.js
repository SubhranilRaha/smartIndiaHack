const { Classroom } = require("../model/Classroom");

const createClassroom = async(req,res) => {
    if(req?.user?.userType != "School"){
        return res.status(401).json({message : "Access Denied"})
    }
    const { subject , learningOutcomes } = req.body;
    
    const newClassroom = await Classroom.create({ 
        subject: subject,
        learningOutcomes: learningOutcomes,
    });
    res.status(200).json({ newClassroom: newClassroom });
}

const addTeacher = async(req , res) =>{
    if(req?.user?.userType != "School"){
        return res.status(401).json({message : "Access Denied"})
    }
    // Complete the remaining

}
const addStudent = async(req , res) =>{
    if(req?.user?.userType != "School"){
        return res.status(401).json({message : "Access Denied"})
    }
    // Complete the remaining

}

module.exports.createClassroom = createClassroom;
module.exports.addTeacher = addTeacher;
module.exports.addStudent = addStudent;