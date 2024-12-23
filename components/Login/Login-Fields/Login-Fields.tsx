'use client';
import {FC, useContext, useEffect} from 'react';
import {PasswordInput} from '@mantine/core';
import {InputControl} from "@/lib/Providers/ContextProvider/InputProvider";
import FieldProps from "@/components/Login/types";


export const LoginField:FC<FieldProps> = ({secondary,label,desc, placeholder, id}) => {
    const context = useContext(InputControl);



    useEffect(() => {
        context.trackInstrument?.startTracking(id ? id :'')
    },[])


  return(

        <>
            <PasswordInput
                // error={error}
                onChange={(e) => {
                    context.trackInstrument?.updateTrackValue(id?id:'',e.target.value)
                }}
                variant="default"
                w="50%"
                label= {secondary? '':label}
                description={desc?desc:'Field'}
                placeholder={placeholder? placeholder: 'text'}
            />
        </>

  )
};
