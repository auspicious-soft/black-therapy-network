import mongoose from "mongoose"

const notesSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'therapists',
        required: true
    },
    note: {
        type: String,
        required: true
    }

})

export const notesModel = mongoose.model("notes", notesSchema)