import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { BASE_URL } from "../utils";

const NoteList = () => {
    const [note, setNote] = useState([]);
    
    useEffect(() => {
        getNote();
    }, []);

    const getNote = async () => {
        const response = await axios.get(`${BASE_URL}/note`);
        setNote(response.data);
    };

    const deleteNote= async (id) =>{
        try{
            await axios.delete(`${BASE_URL}/note/${id}`);
            getNote();
        }catch (error){
            console.log(error);
        }
    }

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <Link to={`add`} className="button is-success">Add Note</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Judul</th>
                        <th>Deskripsi</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {note.map((note, index) => (
                        <tr key={note.id}>
                            <td>{index + 1}</td>
                            <td>{note.judul}</td>
                            <td>{note.deskripsi}</td>
                            <td>
                                <Link to={`edit/${note.id}`} className="button is-small is-info">Edit</Link>
                                <button onClick={()=> deleteNote(note.id)} className="button is-small is-denger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default NoteList
