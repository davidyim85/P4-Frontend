import { redirect } from "react-router-dom";

// DEPLOYED API BASE URL
const URL = "https://will-friend-backend.onrender.com"

// CREATE NEW WILL 
export const createWillAction = async ({request}) => {
    // Get form data
    const formData = await request.formData()

    // Construct request body
    const newWill = {
        user_name: formData.get("user_name"),
        user_address: formData.get("user_address"),
        user_phone: formData.get("user_phone"),
        user_tax_id: formData.get("user_tax_id"),
        created_when: new Date(),
    }

    // Send request to backend
    await fetch(URL + "/will/", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newWill)
    })

    // Redirect back to Index page
    return redirect("/will")
};

// UPDATE A WILL
export const updateWillAction = async ({request, params}) => {
    // Get form data
    const formData = await request.formData()

    // Get Will id
    const id = params.id

    // Construct request body
    const updatedWill = {
        user_name: formData.get("user_name"),
        user_address: formData.get("user_address"),
        user_phone: formData.get("user_phone"),
        user_tax_id: formData.get("user_tax_id"),
        created_when: created_when,
    }

    // Send request to backend
    await fetch(URL + `/will/${id}/`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedWill)
    })

    // Redirect back to Show page
    return redirect(`/will/${id}`)
};


// DELETE A WILL
export const deleteWillAction = async ({params}) => {
    // Get Will id
    const id = params.id

    // Send request to backend
    await fetch(URL + `/will/${id}`, {
        method: "delete"
    })

    // Redirect back to Show page
    return redirect("/will")
}



// CREATE NEW ASSET 
export const createAssetAction = async ({request}) => {
    // Get form data
    const formData = await request.formData()

    // Construct request body

    // Send request to backend

    // Redirect back to Index page
    return redirect("/asset")
}


// UPDATE AN ASSET
export const updateAssetAction = async ({request, params}) => {
    // Get form data
    const formData = await request.formData()

    // Get Asset id

    // Construct request body

    // Send request to backend

    // Redirect back to Show page
    return redirect(`/asset/${id}`)
}

// DELETE A WILL
export const deleteAssetAction = async ({params}) => {
    // Get Asset id

    // Send request to backend

    // Redirect back to Show page
    return redirect("/asset")
}