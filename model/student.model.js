const mongoose = require("mongoose");
const student_schema = new mongoose.Schema({
    name: String,
    
    email: {
        type: String,
        required: [true, "Vui lòng nhập email"],
        minLength: 6,
        unique: true,
        validate: {
            validator: (v) => {
                const regex = /^\S+@\S+\.\S+$/ ;
                return v.match(regex);
            },
            message: (t)=> `${t.value} không phải định dạng email`
        }

    },
    dob: Date,
    mark: {
        type: Number,
        required: true,
        validate: {
            validator: (v)=>{
                if(v >=0 && v<= 10)
                    return true;
                return false;
            },
            message: t => `Điểm thi phải nằm trong khoảng từ 0 đến 10`
        }
    },
    classroom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Classroom"
    }
});
module.exports = mongoose.model("Student",student_schema);