import {createContext, FC} from "react";
import {ErrorProviderContext, ErrorProviderProps} from "@/src/types/Providers/errorProvider";

const Error = createContext<ErrorProviderContext>({error:false})

export const ErrorProvider:FC<ErrorProviderProps> = ({children})=>{

    console.log(Error.Provider.arguments)
    return (
       <Error.Provider value={Error.Provider.arguments}>
           {children}
       </Error.Provider>
    )
}