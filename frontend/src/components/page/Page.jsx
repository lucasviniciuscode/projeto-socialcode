import { Container } from "react-bootstrap"

const Page = ({ children, title}) => {
    return <Container className="mt-3">
        <h1>{title}</h1>
        <div className="mt-2">{children}</div>
    </Container>;
};

export default Page;