import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        // order_id: String           
        product_name: String,
        quantity: String,       
        first_name: String,         
        last_name: String,         
        user_email: String,         
        user_phoneNumber: String,          
        add_notes: String, 
    },
    {
        timestamps: true
    }
)

const User = mongoose.models.User || mongoose.model("User", userSchema)

export default User