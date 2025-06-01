import { Tag, TagLabel, TagLeftIcon } from "@chakra-ui/react";
import { TAGS_DATA } from "./tags";

export default function CustomTag ({
    id
}){
    const tagData = TAGS_DATA.find(item=>item.id === id);
    if (!tagData) {
        return;
    }

    return (
        <Tag size={'lg'} variant='outline' colorScheme={tagData.color} borderRadius={'4px'} minW="fit-content">
            <TagLeftIcon color='white' boxSize='12px' as={tagData.icon} />
            <TagLabel fontSize={12} color='white'>{tagData.text}</TagLabel>
        </Tag>
    )
}