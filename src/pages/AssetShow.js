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
            <div style={{ textAlign: "center" }}>
                <h2>{`Edit ${asset.name}`}</h2>
                <Form action={`/asset/update/${asset.id}`} method="post">
                    <input type="text" id="name" name="name" placeholder="Asset Name" defaultValue={asset.name}/>
                    <input type="text" id="description" name="description" placeholder="Asset description" defaultValue={asset.description}/>
                    <input type="text" id="quantity" name="quantity" placeholder="Number/amount" defaultValue={asset.quantity}/>
                    <input type="text" id="location" name="location" placeholder="Asset location" defaultValue={asset.location}/>
                    <button>Update asset</button>
                </Form>
                <Form action={`/asset/delete/${asset.id}`} method="post">
                    <button>{`Delete ${asset.name}`}</button>
                </Form>
            </div>
            <Link to="/asset">
                <button>Go back to all assets</button>
            </Link>
        </div>
    )
};

export default AssetShow;