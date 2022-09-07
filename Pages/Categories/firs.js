import React, { useEffect, useState } from 'react'
import { Box, Center, FlatList, Icon, Input, Text, VStack } from 'native-base'
import { AntDesign, Ionicons } from "@expo/vector-icons";


function First() {

    return (
        <Box flex={1} backgroundColor={'#181A18'}>

            {/* <FlatList
                numColumns={'2'}
                data={apidata}
                renderItem={({ item }) => (
                    <VStack my={3} w='50%'>
                        <Text color={'white'}>{item.title}</Text>
                    </VStack>
                )}
            /> */}
            Hello
        </Box>
    )
}
export default First