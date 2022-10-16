
import { UserDocument } from '../type'
import {User} from '../models'

const resolvers = {
    Query: {
        me: async(
            root,
            args: {username:String},
            context
            ):
            Promise<UserDocument | null> =>{
                return await User.findById(args)
            }
    },

    Mutation: {
        signUp: async(
            root,
            args: {email: String, password:String},
            context
        ): Promise<UserDocument> =>{

            console.log("added to server")
            return await User.create({email:args.email, password:args.password, logged:false})
        },

        logIn: async(
                    root,
                    args: {email: String, password:String},
                    context
                    ): Promise<UserDocument>=>
                    {
                        return await User.findOneAndUpdate(args, {logged: true})
                    }
    }
}

export default resolvers