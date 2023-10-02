import { Link } from "react-router-dom";

// Destructure the post from props
const WillComponent = ({ will }) => {
    // Style objects
    const div = {
        textAlign: "center",
        border: "3px solid",
        margin: "10px auto",
        width: "80%",
    };
    return (
        <div style={div}>
            <Link to={`/will/${will.id}`}>
                <h2>{`Will #${will.id}`}</h2>
            </Link>
        </div>
    )
};

export default WillComponent;