import { Link, useLoaderData } from "react-router-dom";

// Destructuring the props needed to get Will Component
const WillShow = (props) => {
    const will = useLoaderData();

    // Styling
    const div = {
        textAlign: "center",
        border: "3px solid blue",
        width: "80%",
        margin: "30px auto",
    };

    return (
        <div style={div}>
            <h1>{`${will.user_name}'s Will (ID#: ${will.id})`}</h1>
            <Link to="/will">
                <button>Go back to all wills</button>
            </Link>
        </div>
    )
};

export default WillShow;