const Classroom = require("./../model/classroom.model");
exports.get = async (req,res)=>{
    try {
        const classes = await Classroom.find().populate("students").exec();
        console.log(classes);
        res.render("classroom/list",{
            classes: classes
        });
    } catch (error) {
        
    }
    
}
exports.create = (req,res)=>{
    res.render("classroom/new");
}
exports.save = async (req,res)=>{
    try {
        const classroom = new Classroom(req.body);
        await classroom.save();
        res.redirect('/classroom');
    } catch (error) {
        
    }
}
