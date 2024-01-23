import React from 'react'
// import { Navbar } from "flowbite-react";
import {
    Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarMenu,
    NavbarMenuItem, NavbarItem, Link, Button
} from "@nextui-org/react";
import DropDown from '../Dropdown/DropDown';


const NavbarTest = () => {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);


    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} height='5rem' maxWidth='xl' position='sticky'>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <img src='/images/vinayan-logo.png' alt='Vinayan Logo' className='w-28' />
                    {/* <p className="font-bold text-inherit">ACME</p> */}
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex justify-center items-center gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="/Index">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/About" className='text-black'>
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <DropDown />
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/Services">
                        Services
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/Blogs">
                        Blogs
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} className='bg-blue-800 text-white p-3 rounded-md text-xl' href="#contact" variant="flat">
                        Contact Us
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                <NavbarMenuItem>
                    <Link
                        color='white'
                        className="w-full"
                        href="/Index"
                        size="lg"
                    >
                        Home
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link
                        color='white'
                        className="w-full"
                        href="/About"
                        size="lg"
                    >
                        About
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <DropDown />
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link
                        color='white'
                        className="w-full"
                        href="/Services"
                        size="lg"
                    >
                        Services
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link
                        color='white'
                        className="w-full"
                        href="/Blogs"
                        size="lg"
                    >
                        Blogs
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    )
}

export default NavbarTest