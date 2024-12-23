'use client'

import {LoginField} from "@/components/Login/Login-Fields/Login-Fields";
import InputControlProvider from "@/lib/Providers/ContextProvider/InputProvider";
import SubmitButton from "@/components/Buttons/Submit/SubmitButton";
import {Flex, Title} from "@mantine/core";
import {chakra} from "@/public/fonts";

const Login = ()=>{
    // const [password, setPassword] = useState('');
    // const [login, setLogin] = useState(false);
    // const [scope, animate] = useAnimate();
    // const handlerLogin = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const request = await axios.post(
    //             '/api/login',
    //             {
    //                 password,
    //             },
    //             {
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //             }
    //         );
    //         animate(scope.current, { opacity: 0 });
    //         request.status === 200 && setTimeout(() => setLogin(true), 1000);
    //     } catch {
    //         setError('Password incorrect');
    //     }
    // };
    return (
        <form
            // ref={scope}
            style={{
                width: '100%',
            }}
            // onSubmit={handlerLogin}
        >

                <Flex gap={50} h="100vh" w="100%" direction="column" justify="center" align="center">
                    <Title className={`${chakra.className}`}>Admin Panel</Title>
                    <InputControlProvider>
                        <LoginField id="password" label="Hello admin, maybe)" desc="Give me your data" placeholder="Password" />
                        <LoginField  id="nameUser" desc="Yep, here name" placeholder="Name"/>
                    </InputControlProvider>


                    <SubmitButton insideText="Submit" />
                </Flex>


        </form>

            )
            }

            export default Login