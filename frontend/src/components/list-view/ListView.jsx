import { useState,useEffect } from "react";
import Page from "../page/Page";
import Table from "../table/Table"

const ListView = ({ columns,  endpoint, title }) => {
 // Lembrar Sempre do array-string vazio v
    const [rows, setRows] = useState([]);

    useEffect(() => {
       fetch(`http:localhost:3333/api/`)
       .then((response) => response.json())
       .then((data) => setRows(data.data));
    
    }, []);

    return(
        <Page title={title}>
           
        </Page>
    );
};

export default ListView;