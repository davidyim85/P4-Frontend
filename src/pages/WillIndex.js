import WillComponent from "../components/WillComponent";
import { useLoaderData, Form } from "react-router-dom";

const WillIndex = (props) => {
    const wills = useLoaderData()
    
    // For each post render a WILL COMPONENT
    return (
        <>
        {/* <h1>{`${wills.user_name}'s Wills`}</h1> */}
        {wills.map((will) => <WillComponent will={will} key={will.id} />)};

        <div style={{textAlign: "center"}}>
            <h2>Create a New Will</h2>
            <Form action="/will/create" method="post">
                <label htmlFor="user_name"></label>Name of the person that the will belongs to:<br/>
                <input type="text" id="user_name" name="user_name" placeholder="FirstName LastName"/>
                <label htmlFor="user_address"></label>Person's address:<br/>
                <input type="text" id="user_address" name="user_address" placeholder="1000 Main Street, City, State, Zip"/>
                <label htmlFor="user_phone"></label>Person's phone number:<br/>
                <input type="text" id="user_phone" name="user_phone" placeholder="999-999-9999"/>
                <label htmlFor="user_tax_id"></label>Person's tax ID or other unique identifier:<br/>
                <input type="text" id="user_tax_id" name="user_tax_id" placeholder="###-##-####"/>
                <button>Create Will</button>
            </Form>
        </div>
        </>
    )
};

export default WillIndex;