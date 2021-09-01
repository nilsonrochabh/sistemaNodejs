import { useEffect, useState } from 'react'
import {useRouter} from 'next/router'
import { addDays, subDays } from 'date-fns'
import{ useFecth} from '@refetty/react'

import { ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons'
import { Button, Container, IconButton, Box, Spinner } from '@chakra-ui/react'
import { Logo, useAuth, formatDate } from '../components'  
import { axios} from 'axios'
 



const getSchedule = async (when) => axios({
        method: 'get',
        url: '/api/schedule',
        params:{when, username:window.location.pathname},
        headers:{
            Autorization: `Bearer ${token}` 
        }
        
    })


const Header = ({children}) =>(
    <Box p={4} display="flex" alignIntens="center" justifyContent="space-between" >
        {children}
    </Box>
)

const  timeBlock=()=>{
    return(
        <Button p={8}  bg="blue.500" color="white">
            {time}
        </Button>

    )
}
export default function Agenda() {
    const [auth,{logout}] = useAuth()
    const router = useRouter()
    const [when, setWhen] = useState(() => new Date())
    const [data,{loading,status,error}, fetch] = useFecth(getSchedule, {lazy:true})
    const addDay = () =>setWhen(prevState => addDays(prevState, 1))
    const removeDay = () => setWhen(prevState => subDays(prevState,1))

 
      useEffect(()=>{
        fetch(when)
      },[when])

    return (
        <Container>
            <Header>
                <Logo size={150} />
                 <div>
                    <Button onClick={logout}>Sair</Button>
                </div>

            </Header>

        
            <Box mt={8} display="flex" alignIntens="center">
                <IconButton icon={<ChevronLeftIcon />} bg="trasparent" onClick={removeDay}/>
                <Box flex={1} textAlign="center">{formatDate(when,'PPPP')}</Box>
                <IconButton icon={<ChevronRightIcon />} bg="trasparent" onClick={addDay}/>
            </Box>
            <SimpleGrid p={4} columns={2} spacing={4}>
                {loading && <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl"/>}
                {data?.map(time => <timeBlock key={time} time={time} />)}
            </SimpleGrid>
        
        </Container>
    )
}
