'use client'

import {Flex, PasswordInput, Title} from "@mantine/core";
import {chakra} from "@/public/fonts";
import SubmitButton from "@/components/Buttons/Submit/SubmitButton";
import axios from "axios";
import {useState} from "react";
import {useAnimate, useAnimateMini} from "motion/react";

export const LoginField = () => {
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);
    const [error, setError] = useState("");
    const [scope, animate] = useAnimate()
    const handlerLogin = async (e)=>{
        e.preventDefault()
        try {
            const request  = await axios.post('/api/login',{
                password,
            },{
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            animate(scope.current,{opacity:0})
            request.status === 200 && setTimeout(()=>setLogin(true), 1000);

        }catch {
            setError("Password incorrect")
        }

    }


    return (
        !login ? (<form ref={scope} style={{

            width: "100%",
        }} onSubmit={handlerLogin}>
            <Flex  gap={50} h="100vh" w="100%" direction="column" justify="center" align="center">

                <Title className={`${chakra.className}`}>Admin Panel</Title>
                <PasswordInput   error={error} onChange={(e) => {
                    setError('')
                    setPassword(e.target.value)
                }} variant="default" w="50%" label="Hello Admin"
                               description="Give me your password"
                               placeholder="Password"
                />

                <SubmitButton  insideText="Submit"/>
            </Flex>

        </form>): <p>Logined</p>
    )
}