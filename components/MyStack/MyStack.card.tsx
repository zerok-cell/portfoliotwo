'use client'

import { ImagesTextData } from "@/components/MyStack/types.mystack";
import {Card, Text, Title} from "@mantine/core";
import Image from "next/image";
import * as m from "motion/react-m"
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import {chakra} from "@/public/fonts";
import {domAnimation, LazyMotion, useAnimate} from "motion/react";
import {lazy, memo} from "react";


const CardMyStack = memo(({ data }: {data:ImagesTextData<StaticImport>}) => {
    const [scope,animate] = useAnimate();
    const animateImage = ()=>{

        animate(scope.current, {rotate: 360, scale:1},{duration:2, type:'spring'})
        animate(scope.current, {opacity: 1},)

    }

    return (
        <Card className="light-block noisy" style={{border:"1px solid gray", overflow:'clip'}} p={30} h={400} w={300} bg="#090909">
            <Card.Section>
                <LazyMotion features={domAnimation}>
                    <m.div initial={{rotate: 80, scale:0.5,opacity:0}} ref={scope} onViewportEnter={animateImage}>
                        <Image ref={scope} loading="lazy" height={100} width={100} src={data.imageIcon}
                               alt={data.alt ? data.alt : 'Logotype Technology'}/>

                    </m.div>
                </LazyMotion>
            </Card.Section>
            <Title className={`${chakra.className}`}><span style={{color:"var(--color-blue)"}}>{data.text?.slice(0,1)}</span>{data.text?.slice(1)}
                <hr />
            </Title>
            <Text>{data.description}</Text>
        </Card>
    );
})

export default CardMyStack;