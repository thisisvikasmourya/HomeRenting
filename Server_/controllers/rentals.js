import RentalMessage from "../models/rentalMessage.js";
import mongoose from 'mongoose';

export const getRentals = async (req,res) =>{
    try {
        const rentalMessage = await RentalMessage.find();

        console.log(RentalMessage);
        res.status(200).json(rentalMessage);
    } catch (error) {
        res.status(404).json({message:error.message});

    }
}
export const getRental = async (req, res) => { 
    const { id } = req.params;

    try {
        const rental = await RentalMessage.findById(id);
        
        res.status(200).json(rental);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const createRental = async (req,res) => {
    const rental = req.body;

    const newRental = new RentalMessage( rental);

    try {
        
       await newRental.save();

       res.status(201).json(newRental);

    } catch (error) {
       res.status(409).json({message:error.message}); 
    }
}
export const updateRental = async (req,res) => {
    const {id:_id } = req.params;
    const rental = req.body;

    if(!mongoose.Type.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
    const updatedRental = await RentalMessage.findByIdAndUpdate(_id, rental,{new:true});
    res.json(updatedRental);

}