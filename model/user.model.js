const mongoose = require("mongoose");
const user_schema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true
    },
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
    password: {
        type: String,
        required: true
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
})


module.exports = mongoose.model("User",user_schema);