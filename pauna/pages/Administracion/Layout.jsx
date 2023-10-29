import { useState } from "react";
import NavBar from "./Components/Sidebar/Sidebar";
import Footer from "./Components/Sidebar/Footer";
import { Container, Navbar } from "react-bootstrap";


export default function Layout({ children }) {
    return (
        <>
                <NavBar />
                <Container>
                    {children}
                </Container>
                <Footer/>
        </>
    )
}