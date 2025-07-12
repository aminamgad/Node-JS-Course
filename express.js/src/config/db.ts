import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://aminamjud:T3IFhNpqa3Z1yESP@cluster-nodejs.ryup0wv.mongodb.net/store?retryWrites=true&w=majority&appName=Cluster-NodeJS")
        console.log('DB is connected');
        
    } catch (error) {
        console.log('problem in mongo', error);
        process.exit(1)
    }
}

export default connectDB