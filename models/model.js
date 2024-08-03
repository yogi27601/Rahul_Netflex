const mongoose= require("mongoose")
async function main(){
    try {
        await mongoose.connect("mongodb+srv://yogi27601:Rahul@27601@cluster0.ztpvtfm.mongodb.net/")
        console.log("database connected successfully with server ")
        
    } catch (error) {
        console.log(error)
    }
}
main();

const postSchema = new mongoose.Schema({
    largeText: { type: String, required: true },
    smallText: { type: String, required: true },
});


let modelpost = new mongoose.model('modelpost', postSchema);
module.exports={modelpost}
