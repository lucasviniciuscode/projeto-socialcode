import { Navbar, Container, Nav } from "react-bootstrap";
import { useRouter } from "next/router";
import Image from 'next/image';
import img from '../../public/logo-extrafilmes.png';

const routers = [
    {
        path: "/actors",
        name: "Actors",
    },
    {
        path: "/categories",
        name: "Categories",
    },
    {
        path: "/films",
        name: "Films",
    },
    {
        path: "/outros",
        name: "Outros",
    },
]

const Header = () => { 
    const router = useRouter();
    
    return(
        <section>
        <header className="topo"><Image
        src={img}
        alt="My Image"
        width={300}
        height={300}
        /></header>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand onClick={() => router.push("/")}>SociaCode+</Navbar.Brand>
                <Nav className="me-auto">
                    {routers.map((routerInfo) => (<Nav.Link key={routerInfo.path} active={router.pathname === routerInfo.path} onClick={() => router.push(routerInfo.path)}>{routerInfo.name}</Nav.Link>))}                  
                </Nav>
            </Container>
        </Navbar>
        </section>
    );
}

export default Header;