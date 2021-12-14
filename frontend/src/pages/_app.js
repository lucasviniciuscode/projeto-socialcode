import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/header/Header';
import "../styles/globals.css"; 

import { Container } from "react-bootstrap";

function MyApp({ Component, pageProps }) {
  return (
    <div> 
      <Header></Header>
      <Container className="mt-4">
        <Component {...pageProps} />
      </Container>
    </div>
  );  
}

export default MyApp;
  