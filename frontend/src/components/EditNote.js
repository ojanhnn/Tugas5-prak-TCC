import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../utils";

const EditNote = () => {
    const [judul, setJudul] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() =>{
        getNoteById();
    }, []);

    const updateNote = async (e) =>{
        e.preventDefault();
        try{
            await axios.patch(`${BASE_URL}/note/${id}`,{
                judul,
                deskripsi
            });
            navigate("/");
        }catch (error){
            console.log(error);
        }
    }

    const getNoteById = async () =>{
        const response = await axios.get(`${BASE_URL}/note/${id}`);
        setJudul(response.data.judul);
        setDeskripsi(response.data.deskripsi);
    }
  return (
    <div className="coloumns mt-5 is-centered">
        <div className="coloumn is-half"> 
            <form onSubmit={updateNote}>
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
                    <button type="submit" className="button is-sucrss">Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditNote
