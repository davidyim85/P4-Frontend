import AssetComponent from "../components/AssetComponent";
import { useLoaderData } from "react-router-dom";

const AssetIndex = (props) => {
    const assets = useLoaderData();
    
    return (assets.map((asset) => <AssetComponent asset={asset} key={asset.id} />))
    // <Form action="/create" method="post">
    //             <label for=""></label><br/>
    //             <input type="text" id="" name="" placeholder=""/>
    //             <label for=""></label><br/>
    //             <input type="text" id="" name="" placeholder=""/>
    //             <label for=""></label><br/>
    //             <input type="text" id="" name="" placeholder=""/>
    //             <label for=""></label><br/>
    //             <input type="text" id="" name="" placeholder=""/>
    //             <label for=""></label><br/>
    //             <input type="text" id="" name="" placeholder=""/>
    //             <label for=""></label><br/>
    //             <input type="text" id="" name="" placeholder=""/>
    //         </Form>
};

export default AssetIndex;