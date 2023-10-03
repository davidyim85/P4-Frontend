import { Link } from "react-router-dom";

// Destructure the Asset from props
const AssetComponent = ({ asset }) => {
    // Style objects
    const div = {
        textAlign: "center",
        border: "3px solid",
        margin: "10px auto",
        width: "80%",
    };
    return (
        <div style={div}>
            <Link to={`/asset/${asset.id}`}>
                <h1>{asset.name}</h1>
            </Link>
            <h2>{asset.description}</h2>
        </div>
    );
};

export default AssetComponent;