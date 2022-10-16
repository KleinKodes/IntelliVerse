
import { Document,  Model } from 'mongoose'

export interface UserDocument extends Document {
    email:String
    password:String
    logged:Boolean
}