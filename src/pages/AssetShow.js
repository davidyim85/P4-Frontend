import { Link, useLoaderData, Form } from "react-router-dom";

// Destructuring the props needed to get Will Component
const AssetShow = (props) => {
    const asset = useLoaderData();

    // Styling
    const div = {
        textAlign: "center",
        border: "3px solid blue",
        width: "80%",
        margin: "30px auto",
    };

    return (
        <div style={div}>
            <h1>{asset.name}</h1>
            <h2>{asset.quantity}</h2>
            <h2>{asset.location}</h2>
            <h2>{asset.description}</h2>
            {/* <div style={{ textAlign: "center" }}>
                <h2>{`Edit ${will.user_name}'s information`}</h2> */}
                {/* <Form action={`/will/update/${will.id}`} method="post">
                    <input type="text" id="user_name" name="user_name" placeholder="FirstName LastName" defaultValue={will.user_name}/>
                    <input type="text" id="user_address" name="user_address" placeholder="1000 Main Street, City, State, Zip" defaultValue={will.user_address}/>
                    <input type="text" id="user_phone" name="user_phone" placeholder="999-999-9999" defaultValue={will.user_phone}/>
                    <input type="text" id="user_tax_id" name="user_tax_id" placeholder="###-##-####" defaultValue={will.user_tax_id}/>
                    <button>Update details</button>
                </Form>
                <Form action={`/will/delete/${will.id}`} method="post">
                    <button>{`Delete Will #${will.id}`}</button>
                </Form> */}
            {/* </div> */}
            <Link to="/asset">
                <button>Go back to all assets</button>
            </Link>
        </div>
    )
};

export default AssetShow;