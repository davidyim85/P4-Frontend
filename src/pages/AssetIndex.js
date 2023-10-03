import AssetComponent from "../components/AssetComponent";
import { useLoaderData, Form} from "react-router-dom";

const AssetIndex = (props) => {
    const assets = useLoaderData();

    return <>
    <div style={{textAlign: "center"}}>
    {assets.map((asset) => <AssetComponent asset={asset} key={asset.id} />)}
        <h2>Create a New Asset</h2>
        <Form action="/create" method="post">
            {/* <label for=""></label><br/>
            <input type="text" id="" name="" placeholder=""/> */}
            <label htmlFor="name">Name of asset:</label><br/>
            <input type="text" id="name" name="name" placeholder="Asset Name"/>
            <label htmlFor="description"></label>Description of asset:<br/>
            <input type="text" id="description" name="description" placeholder="Asset description"/>
            <label htmlFor="quantity"></label>Quantity of asset:<br/>
            <input type="text" id="quantity" name="quantity" placeholder="Number/amount"/>
            <label htmlFor="location"></label>Location of asset:<br/>
            <input type="text" id="location" name="location" placeholder="Asset location"/>
            <button>Create Asset</button>
        </Form>
    </div>
    </>;
};

export default AssetIndex;