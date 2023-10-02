import WillComponent from "../components/WillComponent";
import { useLoaderData, Form } from "react-router-dom";

const WillIndex = (props) => {
    const wills = useLoaderData()
    
    // For each post render a WILL COMPONENT
    return (
        <>
        {/* <h1>{`${wills.user_name}'s Wills`}</h1> */}

        {wills.map((will) => <WillComponent will={will} key={will.id} />)};
        </>
    )
};

export default WillIndex;