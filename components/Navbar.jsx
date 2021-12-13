import Link from 'next/link'
import {
  Flex,
  Box,
  Text,
  Button,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  Spacer,
} from '@chakra-ui/react'
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc'
import { BsSearch } from 'react-icons/bs'
import { FiKey } from 'react-icons/fi'

const Navbar = () => {
  return (
    <Flex p='2' borderBottom='1px' borderColor='gray.100'>
      <Box fontSize='3xl' color='blue.400' fontWeight='bold'>
        <Link href='/' paddingLeft='2'>
          Listings
        </Link>
      </Box>
      <Spacer />
      <Box>
        <Menu id='navmenu' isLazy>
          <MenuButton
            as={IconButton}
            icon={<FcMenu />}
            variant='outlined'
            color='red.400'
          />
          <MenuList id='navmenulist'>
            <Link href='/' passHref>
              <MenuItem id='navmenu1' icon={<FcHome />}>
                Home
              </MenuItem>
            </Link>
            <Link href='/search' passHref>
              <MenuItem id='navmenu2' icon={<BsSearch />}>
                Search
              </MenuItem>
            </Link>

            <Link href='/search?purpose=for-rent' passHref>
              <MenuItem id='navmenu3' icon={<FiKey />}>
                Rent Property
              </MenuItem>
            </Link>

            <Link href='/search?purpose=for-sale' passHref>
              <MenuItem id='navmenu4' icon={<FcAbout />}>
                Buy Property
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  )
}

export default Navbar
