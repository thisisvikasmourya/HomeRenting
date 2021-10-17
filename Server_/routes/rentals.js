import express  from "express";
import { getRentals,getRental, createRental,updateRental} from '../controllers/rentals.js'
import auth from "../middleware/auth.js";

const router = express.Router();


router.get('/', getRentals);
router.get('/:id', getRental);
router.post('/',auth, createRental);
router.patch('/:id',auth, updateRental);



export default router;
