// export const Login=({setUsername})=>{
//     return(
//         <div>
//           <input onChange={(event)=>{
//             setUsername(event.target.value)
//           }}></input>
//         </div>
//     )
// }
import { useContext } from "react"
import {Appcontext} from './UserContext'
export const Login=()=>{
    const {setUsername} = useContext(Appcontext);
    return(
        <div>
          <input onChange={(event)=>{
            setUsername(event.target.value)
          }}></input>
        </div>
    )
}