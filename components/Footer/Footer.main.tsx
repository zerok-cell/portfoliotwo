'use client'
import {Flex, Button, CopyButton, Text, } from "@mantine/core";
import {IconBrandTelegram,  IconMail, IconPhone, } from "@tabler/icons-react";
import logotype from "@/public/logotype.svg"
import Image from "next/image";
import { useViewportSize} from "@mantine/hooks";
import adaptiveTable from "@/components/adaptiveTable";
import {CSSProperties, FC,  ReactNode, } from "react";
import {redirect} from "next/navigation";

interface SocialLinks {
    hintText:string
    linkText:string
    action: 'copy'|'redirect'
    copiedTextDisplay?:string
    displayText:string|ReactNode

}

const ButtonSocial:FC<SocialLinks> = ({hintText,displayText,linkText, action,copiedTextDisplay, })=>{
        const style:CSSProperties = {
            width:"max-content"
        }


        return (
            action === 'copy' ? (
                <CopyButton  value={linkText}>
                    {({copied,copy})=>(
                        <Button bg={'var(--color-blue)'} style={style} title={hintText} onMouseUp={copy}>
                            {copied ? copiedTextDisplay : displayText }
                        </Button>
                    )}
                </CopyButton>
            ): <Button bg={'var(--color-blue)'} title={hintText} onMouseUp={()=>redirect(linkText)}>
                {displayText}
            </Button>
        )

}

const FooterMain = () => {
    const {width} = useViewportSize()


    const data:SocialLinks[] = [
        {
            displayText:<IconBrandTelegram/>,
            linkText:'https://t.me/zerokcell',
            hintText:'Go to my telegram @zerokcell',
            action:'redirect'
        },
        {
            displayText:<><IconPhone/> <Text> My number </Text></>,
            linkText:'+7 915 661 8387',
            hintText:"Phone number",
            action:'copy',
            copiedTextDisplay:'Phone number copy'

        },
        {
            displayText:<IconMail/>,
            linkText:"swiftkey382@gmail.com",
            hintText:'My gmail',
            action:'copy',
            copiedTextDisplay:'Mail copy'
        }
    ]



    return (

        <Flex p={10}  wrap="nowrap" direction={
            width<adaptiveTable.sm ? "column":'row'
        } justify="space-between" align="center" style={{
            background:"var(--darks-color)",
            width:'100%',
            height:width<adaptiveTable.sm ? '7rem':'5rem',
            marginTop:'5%',
            borderTop:"1px solid gray",
            boxShadow:'0px 100px 200px rgba(255,255,255,0.30)',

        }}  >

            <Flex visibleFrom="sm" w={width<adaptiveTable.sm? '100%':"fit-content"} gap={100} justify="start" align="center" wrap="nowrap">
                <Image style={{marginTop:10, marginLeft:5}} width={40} src={logotype} alt="My logotype"/>

            </Flex>


            <Flex  align="center" wrap="nowrap" w="50%" justify="center">
                <Text w="max-content">By Shakhsinov Murad</Text>

            </Flex>
            <Flex gap={20}  wrap="nowrap" align="center" h="max-content" w="max-content" justify="end" >
                {data.map((item,index)=>(
                    <ButtonSocial key={index} hintText={item.hintText} copiedTextDisplay={item.copiedTextDisplay} linkText={item.linkText} action={item.action} displayText={item.displayText}/>
                ))}
            </Flex>
        </Flex>

    )

}
export default FooterMain;