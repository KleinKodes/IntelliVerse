
import { model, Schema} from 'mongoose'
import { JournalEntryDocument } from '../type'

const journalEntrySchema = new Schema(
    {
        userId:String,
        input:String,
        sentiment:String
    }
)

const JournalEntry = model<JournalEntryDocument>('JournalEntry', journalEntrySchema)
export default JournalEntry