import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = () => {
  return (
    <HStack  justifyContent='space-between' padding='10px'>
      <Image src={logo} boxSize='60px' />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar