import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa';

const FooterBibliotecaAdmin = () => {
    return (
        <div>
            <footer style={{ backgroundColor: '#021730' }} className="text-white mt-4 py-2 text-center">
                <p>Derechos reservados: @Desarrolladores PAUNA 2023</p>
                <div className="mt-3">
                    <Button
                        variant="primary"
                        className="m-2 bg-dark border border-white" // Cambia el fondo del botón a color negro y establece los bordes en blanco
                        onClick={() => window.location.href = 'URL_DEL_BOTON_1'}
                    >
                        <FaInstagram/>
                    </Button>
                    <Button
                        variant="primary"
                        className="m-2 bg-dark border border-white" // Cambia el fondo del botón a color negro y establece los bordes en blanco
                        onClick={() => window.location.href = 'URL_DEL_BOTON_2'}
                    >
                        <FaFacebook/>
                    </Button>
                    <Button
                        variant="primary"
                        className="m-2 bg-dark border-white" // Cambia el fondo del botón a color negro y establece los bordes en blanco
                        onClick={() => window.location.href = 'URL_DEL_BOTON_3'}
                    >
                        <FaGithub/>
                    </Button>
                </div>
            </footer>
        </div>
    )
}

export default FooterBibliotecaAdmin;
