import { Document,  Model } from 'mongoose'

export interface ExpressionDocument extends Document {
    userId:String
    input:String
    sentiment:String
}