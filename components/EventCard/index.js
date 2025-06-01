import React, { useState } from "react";
import { Box, Image, Link, Text, useBreakpointValue, Button } from "@chakra-ui/react";
import CustomTag from "../CustomTag";
import EventSignupFormModal from "../EventSignupFormModal/EventSignupFormModal";

export default function EventCard({
  image,
  link,
  name,
  tags,
  date
}) {
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  let linkThing = (<Text fontSize={14}>&#62; Coming Soon</Text>)

  const isSignUpEmbedLink = link?.includes("https://docs.google.com/forms") || link?.includes("https://forms.gle")
  
  if(link && isSignUpEmbedLink) {
    linkThing = (<Link target="_blank" fontSize={14} onClick={()=>setIsModalOpen(true)} >&#62; Sign Up</Link>)
  } 
  else if (link){
    linkThing = (<Link href={link} target="_blank" fontSize={14} >&#62; Learn More</Link>)
  }

  return (
    <Box
      _hover={{
        borderColor: link ? "white" : "transparent", textDecoration: "none"
      }}
      as={Link}
      href={!isSignUpEmbedLink && link}
      onClick={()=>{
        if (isSignUpEmbedLink) {
          setIsModalOpen(true)
        }
      }}
      target="_blank"
      textDecoration='none'
      transition='all .3s ease-in-out'
      bg={'blackAlpha.400'}
      cursor={link ? 'pointer' : 'auto'}
      borderWidth="1px"
      borderColor={"transparent"}
      rounded={'8px'}
    >
      <Image
        src={image}
        alt={name}
        roundedTop={'8px'}
        objectFit={'contain'}
      />

      <Box p="6">
        <Box
          display="flex"
          alignItems="baseline"
          gap={4}
          overflowX="auto"
          whiteSpace="nowrap"
          className="custom-scrollbar"
          pb="8px"
        >
          {tags.map((tagId, i) => {
            return (
              <CustomTag key={i} id={tagId} />
            )
          })}
        </Box>

        <Text
          mt={4}
          fontWeight={useBreakpointValue({ base: '600', md: '600' })}
          fontSize={useBreakpointValue({ base: '18', md: '24' })}
          lineHeight="tight"
          noOfLines={1}
          color={"white"}
        >
          {name}
        </Text>

        <Box display="flex" mt="2" alignItems="center">
          {linkThing}
        </Box>

        {/* EventSignupFormModal Component */}
        <EventSignupFormModal
            titleName={`${name} Sign Up Form`}
            link={link}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
        />
      </Box>
    </Box>
  );
};

