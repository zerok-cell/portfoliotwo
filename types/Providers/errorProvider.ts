import {ReactNode} from "react";

export interface ErrorProviderProps {
    children?: ReactNode;
}


export interface ErrorProviderContext {
    error: boolean;
    sucess?: boolean;

}
