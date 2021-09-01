import { useEffect, useState } from 'react'
import {useRouter} from 'next/router'
import { addDays, subDays } from 'date-fns'
import{ useFecth} from '@refetty/react'

import { ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons'
import { Button, Container, IconButton, Box } from '@chakra-ui/react'
import { Logo, useAuth, formatDate } from '../components'  
import { axios} from 'axios'
import { getToken } from '../config/firebase/client'

const getAgenda = async (when) => {
    const token = await getToken()
    return axios({
        method: 'get',
        url: '/api/agenda',
        params:{when},
        headers:{
            Autorization: `Bearer ${token}` 
        }
        
    })
}

const Header = ({children}) =>(
    <Box p={4} display="flex" alignIntens="center" justifyContent="space-between" >
        {children}
    </Box>
)

export default function Agenda() {
    const [auth,{logout}] = useAuth()
    const router = useRouter()
    const [when, setWhen] = useState(() => new Date())
    const [data,{loading,status,error}, fetch] = useFecth(getAgenda, {lazy:true})
    const addDay = () =>setWhen(prevState => addDays(prevState, 1))
    const removeDay = () => setWhen(prevState => subDays(prevState,1))

    useEffect(() =>{
        !auth.user && router.push('/')
      },[auth.user])

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
            
        
        </Container>
    )
}
