import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const UnderConstruction = (props: Props) => {
    return (
        <div>
            <h1>Settings</h1>
            <Box m="auto">
                <Image src="https://www.pngall.com/wp-content/uploads/2018/04/Under-Construction-PNG-Image-File.png" alt="under-construction page" h="50vh" m="auto" />
                <Text textAlign="center" fontSize="2xl" fontWeight="bold">This WebPage is under Construction.</Text>
                <Text textAlign="center" fontSize="2xl" fontWeight="bold" color="#FFCB05" fontFamily={"'Rubik 80s Fade', cursive"}>Coming soon !</Text>
            </Box>
        </div>
    )
}

export default UnderConstruction