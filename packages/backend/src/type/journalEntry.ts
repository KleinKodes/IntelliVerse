import { Document,  Model } from 'mongoose'

export interface JournalEntryDocument extends Document {
    userId:String
    input:String
    sentiment:String
}