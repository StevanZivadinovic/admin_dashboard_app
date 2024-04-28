import mongoose from "mongoose";
const {isEmail}=require('validator')
const userSchema = new mongoose.Schema(
  {
    username: {
        type: String,
        required: [true, 'Please enter username!'],
        minlength: [3, 'Username is minimum 3 characters!'],
        maxlength: [50,'Max length is 50 characters!'],
        unique: true,
    },
    email: {
        type: String,
        required: [true, 'Please enter email!'],
        maxlength: [50,'Max length is 50 characters!'],
        unique: true,
        lowercase:true,
        validate:[isEmail,'Please enter valid email!']
    },
    password: {
        type: String,
        required: [true, 'Please enter password!'], 
        minlength: [6, 'Password is minimum 6 characters!'],
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    phone: {
      type: Number,
      minlength: [9, 'Number is minimum 9 characters!'],
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);
export const User = mongoose.models.User || mongoose.model("User", userSchema);