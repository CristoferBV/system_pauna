import { Container } from "react-bootstrap";


export default function Footer() {
    return (
        <div className="text-white mt-1 py-3 text-center " style={{ backgroundColor: '#041a34', padding:'4rem' }} >
            <Container className="text-center" style={{ color: 'white' }}>
                <p className='mt-3'>Derechos reservados: Desarrolladores PAUNA 2023</p>
            </Container>
        </div>
    )
}