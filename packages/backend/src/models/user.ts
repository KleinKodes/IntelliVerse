import { model, Schema} from 'mongoose'
import { UserDocument } from '../type'

const userSchema = new Schema(
    {
        email:String,
        password: String,
        logged:Boolean
    }
)

const User = model<UserDocument>('User', userSchema)
export default User