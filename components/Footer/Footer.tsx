'use client'
import {Flex, Text, } from "@mantine/core";
import logotype from "@/public/logotype.svg"
import Image from "next/image";
import { useViewportSize} from "@mantine/hooks";
import adaptiveTable from "@/components/adaptiveTable";
import './footer.scss'
import data from '@/components/Footer/data'
import FooterButtonSocial from "@/components/Footer/Footer-ButtonSocial/Footer-ButtonSocial";

const Footer = () => {
    const {width} = useViewportSize()





    return (

        <Flex p={10}  wrap="nowrap" direction={
            width<adaptiveTable.sm ? "column":'row'
        } justify="space-between" align="center" id="custom-footer" className="Footer Footer_noisy" >

            <Flex className="Footer-Logotype" visibleFrom="sm" w={width<adaptiveTable.sm? '100%':"fit-content"} gap={100} justify="start" align="center" wrap="nowrap">
                <Image  width={40} src={logotype} alt="My logotype"/>
            </Flex>


            <Flex align="center" wrap="nowrap" w="50%" justify="center">
                <Text w="max-content">By Shakhsinov Murad</Text>
            </Flex>
            <Flex gap={20}  wrap="nowrap" align="center" h="max-content" w="max-content" justify="end" >
                {data.map((item,index)=>(
                    <FooterButtonSocial key={index} hintText={item.hintText} copiedTextDisplay={item.copiedTextDisplay} linkText={item.linkText} action={item.action} displayText={item.displayText}/>
                ))}
            </Flex>
        </Flex>

    )

}
export default Footer;