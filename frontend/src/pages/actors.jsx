import ListView from "../components/list-view/ListView";

const Actors = () => (
    <ListView  
        const columns = {[

            {
                name:"id",
                value:"#",
            },
            {
                name: 'first_name',
                value: 'First Name',
            },
            {
                name: 'last_name',
                value: 'Last Name',
            },
            {
                name: 'createdAt',
                value: 'Created At',
            },
            {
                name: 'updatedAt',
                value: 'Updated At',
            },
        ]}
        title="Actors" 
        endpoint="actor"/>
 
);

export default Actors;