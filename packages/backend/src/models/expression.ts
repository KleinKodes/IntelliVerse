
import { model, Schema} from 'mongoose'
import { ExpressionDocument } from '../type'

const expressionSchema = new Schema(
    {
        userId:String,
        input:String,
        sentiment:String
    }
)

const Expression = model<ExpressionDocument>('Expression', expressionSchema)
export default Expression