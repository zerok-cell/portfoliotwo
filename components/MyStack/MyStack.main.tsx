'use server'


import dataStack from "@/components/MyStack/data.stack";
import CardMyStack from "@/components/MyStack/MyStack.card";
import {Flex, Title} from "@mantine/core";
import {chakra} from "@/public/fonts";
import {IconStack2} from "@tabler/icons-react";

const MyStackMain = () => {
    return (
        <Flex mt="10%" justify="center"  direction="column" >

            <Flex justify="center" align="center" gap={10} mb="3%">
                <IconStack2/>
                <Title  id="my-stack" className={`${chakra.className}`} size="250%">My stack</Title>

            </Flex>
            <Flex  wrap="wrap" gap={20}  justify="center" align="center" w="100%">
                {
                    dataStack.map((item, index) => (
                        <CardMyStack data={item} index={index} key={index}/>
                    ))
                }
            </Flex>
        </Flex>

    )

}

export default MyStackMain