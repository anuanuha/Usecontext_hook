import { useState , createContext} from "react"
import { Login } from "./Login";
import { User } from "./User";

export const Appcontext = createContext(null);
export const UserContext=()=>{
    const[username, setUsername] = useState("");
    return(
        <div>
            <Appcontext.Provider value={{username, setUsername}}>
            <Login />
            <User />
            </Appcontext.Provider>
        </div>
    )
}