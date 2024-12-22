




import { Flex, Space, Text } from "@mantine/core";
import DataProps from "@/components/AboutMe/types";
import ChildrenStyles from "@/components/utils/ChildrenStyles";


const AboutMeLanguageCard = ({data}:{data:DataProps[]}) => {
  return data.map((item, index) => (
    <Flex
      wrap="nowrap"
      style={{ borderRadius: 5 }}
      p={5}
      key={index}
      direction={{ base: 'column', xs: 'row', sm: 'row' }}
      align={{ base: 'center', sm: 'center' }}
    >
      <ChildrenStyles c="gray" p={5} rounded={5}>
        {item.icon}
      </ChildrenStyles>
      <Space w={{ base: '0', md: '20px', sm: '20px' }} />
      <Text c="gray">{item.text}</Text>
    </Flex>
  ));
};

export default AboutMeLanguageCard;