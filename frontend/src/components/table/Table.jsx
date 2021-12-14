import { Table } from "react-bootstrap";

const TableComponent = ({ columns, rows }) => {
    return(
        <Table  hover striped
        >
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column.name}>{column.value}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index}>
                            {columns.map((column) => (
                            <td key={column.name}> {row[column.name]} </td>
                        ))}
                        </tr>
                    ))}    
                </tbody>
            </Table>
    );
};

export default  TableComponent;