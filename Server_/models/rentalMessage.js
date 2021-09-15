import mongoose from 'mongoose';

const rentalSchema = mongoose.Schema({
    title:String,
    description:String,
    name:String,
    address:String,
    rentaltype: String,
    tags:[String],
    selectedFile:String,
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:new Date(),
    }

});

const RentalMessage = mongoose.model('RentalMessage' , rentalSchema);

export default RentalMessage;