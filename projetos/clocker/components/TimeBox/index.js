
import {Button, Modal, ModalBody, ModalCloseButton, ModalFooter, ModalOverlay, } from "@chakra-ui/react"
import { useState } from "react"

const ModalTimeBlock = ({ isOpen, onClose, time}) =>(
    <Modal isOpen = {isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                Horário: {time}
            </ModalBody>
            <ModalFooter>
                <Button variant="ghost" onClick={onClose}> Cancelar</Button>
                <Button colorScheme="blue" mr={3} onClick={onClick} >
                    Reservar Horário
                </Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
)
export const TimeBlock =({time}) =>{
    const {isOpne, setIsOpen} = useState(false)
    const toggle = () =>setIsOpen(prevState = !prevState)

    return (
        <Button p={8} bg="blue.500" color="white"  onClick={toggle}>
            {time}
            <ModalTimeBlock isOpen={isOpen} onClose={toggle}  time={time}/>
        </Button>
        
    )

}
