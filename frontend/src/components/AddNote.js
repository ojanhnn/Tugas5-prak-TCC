import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils";

const AddNote = () => {
    const [judul, setJudul] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const navigate = useNavigate();

    const saveNote = async (e) =>{
        e.preventDefault();
        try{
            await axios.post(`${BASE_URL}/note`,{
                judul,
                deskripsi
            });
            navigate("/");
        }catch (error){
            console.log(error);
        }
    }
  return (
    <div className="coloumns mt-5 is-centered">
        <div className="coloumn is-half"> 
            <form onSubmit={saveNote}>
                <div className="field">
                    <label className="label">Judul</label>
                    <div className="control">
                        <input type="text" className="input" value={judul} onChange={(e)=> setJudul(e.target.value)} placeholder="Judul" />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Deskripsi</label>
                    <div className="control">
                        <input type="text" className="textarea" value={deskripsi} onChange={(e)=> setDeskripsi(e.target.value)} placeholder="Deskripsi" />
                    </div>
                </div>
                
                <div className="field">
                    <button type='submit' className="button is-sucrss">Save</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddNote
