import { Text, Box, HStack, Icon, Heading, Input, VStack } from "native-base";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TopTab from "./Categories/TopTab";


function Home() {
    const [apidata, setApidata] = useState([])
    const [search, setSearch] = useState('')


    useEffect(() => {
        const data = async () => {
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
                const items = await res.data
                const filtred = await items.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
                console.log(search)
                setApidata(filtred)
            } catch (err) {
                console.log(err);
            }
        }
        data()
    }, [search])


    return (
        <Box px={3} py={5} flex={1} backgroundColor={'#181A18'}>
            <VStack space={3}>
                <Box rounded={'md'} bg={'violet.300'} h={100}>
                </Box>
                <Input
                    size={'lg'} placeholder="Search" variant='outline' width="100%" borderRadius="10" borderWidth="1" p={1} my={3}
                    InputRightElement={<Icon mr="3" size="4" color="gray.400"
                        as={<Ionicons name="ios-search" />} />}
                    onChangeText={(value) => setSearch(value)} />
                <TopTab data={apidata} />
            </VStack>
        </Box>

    )
}

export default Home