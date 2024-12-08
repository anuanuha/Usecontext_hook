// export const  User=({Username})=>{
//     return(
//         <div>
//             name:{sername}
//         </div>
//     )
// }
import { useContext } from "react";
import {Appcontext} from "./UserContext"
export const  User=()=>{
   
    const {username} = useContext(Appcontext)
    return(
        <div>
            name:{username}
        </div>
    )
}