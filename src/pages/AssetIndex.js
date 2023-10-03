import AssetComponent from "../components/AssetComponent";
import { useLoaderData } from "react-router-dom";

const AssetIndex = (props) => {
    const assets = useLoaderData();

    return <>
    <div style={{textAlign: "center"}}>
        <h2>Create a New Asset</h2>
        <Form action="/create" method="post">
            {/* <label for=""></label><br/>
            <input type="text" id="" name="" placeholder=""/> */}
            <label for="name">Name of asset:</label><br/>
            <input type="text" id="name" name="name" placeholder="Asset Name"/>
            <label for="description"></label>Description of asset (the more detailed, the better!):<br/>
            <input type="text" id="description" name="description" placeholder="Asset description"/>
            <label for="quantity"></label>Quantity of asset:<br/>
            <input type="text" id="quantity" name="quantity" placeholder="Number/amount"/>
            <label for="location"></label>Location of asset (the more detailed, the better!):<br/>
            <input type="text" id="location" name="location" placeholder="Asset location"/>
            <button>Create Asset</button>
        </Form>
    </div>
    {assets.map((asset) => <AssetComponent asset={asset} key={asset.id} />)}
    </>;
};

export default AssetIndex;