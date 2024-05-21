'use client'

import React from "react"
import { Image, Container, Row, Col } from "react-bootstrap"
import InactivityTimer from "../InactivityTime";


export default function Landing() {
    const imageContainerStyle = {
        display: 'block',
        margin: '0 auto',
        position: 'relative', // Contenedor con posición relativa
    };

    const imageStyle = {
        maxWidth: '100%',
        height: 'auto',
    };

    const textStyle = {
        position: 'absolute', // Texto con posición absoluta
        top: '50%', // Centra verticalmente
        left: '50%', // Centra horizontalmente
        transform: 'translate(-50%, -50%)', // Centra en el centro del contenedor
        fontSize: '30px',
        color: 'black',
    };
    const handleLogout = () => {
        router.push("/LoginAndRegister/Login/Login");
    };

    return (
        <>
        <InactivityTimer logoutFunction={handleLogout} />
            <div style={imageContainerStyle}>
                <Image src="/landing.jpg" style={imageStyle} />

                <div className="text-center" style={textStyle}>
                    <Container style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: 2, borderRadius: '10px' }}>
                        <p>Bienvenido a la Administración del Inventario</p>
                    </Container>
                </div>

            </div>
        </>
    );
}