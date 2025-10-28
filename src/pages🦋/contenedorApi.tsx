import RandomCharacter from "../api☀️/api"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";


export default function Contenedor(){
    //navegacion
    const navigate=useNavigate();
    return(
   <div>
    <ArrowBackIcon 
    onClick={()=>navigate("/")}
    style={{fontSize:'40px', paddingLeft:'100px',marginTop:'-15px'}}/>
    <RandomCharacter/>
   </div>
    )
}