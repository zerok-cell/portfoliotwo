'use client'


import dataStack from "@/components/MyStack/data.stack";
// import CardMyStack from "@/components/MyStack/MyStack.card";
import {Flex, Title} from "@mantine/core";
import {chakra} from "~/public/fonts";
import {IconStack2} from "@tabler/icons-react";
import {lazy, Suspense, } from "react";
const LazyCard = lazy(()=>import('@/components/MyStack/MyStack-Card/Card'))

const MyStack = () => {







    return (
        <Flex  justify="center"  direction="column" >

            <Flex justify="center" align="center" gap={10} mb="1%">
                <IconStack2/>
                <Title id="MyStack" className={`${chakra.className}`} size="250%" >My stack</Title>
            </Flex>
            <Flex  wrap="wrap" gap={20}  justify="center" align="center" w="100%">
                {
                    dataStack.map((item, index) => (
                        <Suspense  key={index} fallback={<p>Load</p>}>
                            <LazyCard data={item}  />
                        </Suspense>
                    ))
                }
            </Flex>
        </Flex>

    )

}

export default MyStack