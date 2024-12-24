import {domAnimation, LazyMotion, useAnimate} from "motion/react";
import * as m from "motion/react-m";
import Image from "next/image";
import {Card} from "@mantine/core";
import {ImagesTextData} from "@/components/MyStack/types.mystack";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import {FC} from "react";

const MyStackPhoto:FC<{data:ImagesTextData<StaticImport>}> = ({data}) => {
    const [scope, animate]=useAnimate()

    const animateImage = ()=>{

        animate(scope.current, {rotate: 360, scale:1},{duration:2, type:'spring'})
        animate(scope.current, {opacity: 1},)

    }

    return(
        <Card.Section>
            <LazyMotion features={domAnimation}>
                <m.div initial={{rotate: 80, scale:0.5,opacity:0}} ref={scope} onViewportEnter={animateImage}>
                    <Image ref={scope} loading="lazy" height={100} width={100} src={data.imageIcon}
                           alt={data.alt ? data.alt : 'Logotype Technology'}/>

                </m.div>
            </LazyMotion>
        </Card.Section>
    )
}

export default MyStackPhoto