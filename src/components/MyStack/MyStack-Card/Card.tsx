'use client'

import { ImagesTextData } from "@/components/MyStack/types.mystack";
import {Card, Text, Title} from "@mantine/core";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import {chakra} from "~/public/fonts";
import { memo} from "react";
import MyStackPhoto from "@/components/MyStack/MyStack-Photo/MyStack-Photo";


const CardMyStack = memo(({ data }: {data:ImagesTextData<StaticImport>}) => {


    return (
        <Card className="light-block noisy" style={{border:"1px solid gray", overflow:'clip'}} p={30} h={400} w={300} bg="#090909">
                <MyStackPhoto  data={data}/>
            <Title className={`${chakra.className}`}><span style={{color:"var(--color-blue)"}}>{data.text?.slice(0,1)}</span>{data.text?.slice(1)}
                <hr />
            </Title>
            <Text>{data.description}</Text>
        </Card>
    );
})

export default CardMyStack;