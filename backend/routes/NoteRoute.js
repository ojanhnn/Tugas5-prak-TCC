import express from "express";
import {
    getNote, 
    getNoteById, 
    createNote,
    updateNote,
    deleteNote
} from "../controller/NoteController.js";

const router  = express.Router();
 
router.get('/note', getNote);
router.get('/note/:id', getNoteById);
router.post('/note', createNote);
router.patch('/note/:id', updateNote);
router.delete('/note/:id', deleteNote);

export default router;