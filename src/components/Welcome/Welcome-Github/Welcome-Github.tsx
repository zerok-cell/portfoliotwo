import {Button, Flex} from "@mantine/core";
import Image from "next/image";
import avatar from "~/public/avatar_zerok.webp";
import {redirect} from "next/navigation";
import {IconBrandGithub} from "@tabler/icons-react";

const Github = () => {



    return (
        <Flex gap="md" direction="column">
            <Image src={avatar} width={150} alt="My github avatar"  style={{
                borderRadius:'50%',
                border:"3px solid var(--color-blue-pastel)",
            }}/>
            <Button bg="var(--color-blue)" onMouseUp={()=>redirect('https://github.com/zerok-cell')} className="light-button" variant="default"> <IconBrandGithub/> My github</Button>
        </Flex>
    )
}
export default Github;