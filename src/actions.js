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
    //const date = params.created_when

    // Need to fix the date situation to grab the original date created
    // Might add to the model "last_edited" 
    // Get date Will created
    //const date_created = formData.created_when

    // Construct request body
    const updatedWill = {
        user_name: formData.get("user_name"),
        user_address: formData.get("user_address"),
        user_phone: formData.get("user_phone"),
        user_tax_id: formData.get("user_tax_id"),
        created_when: new Date()
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
    const newAsset = {
        //will_id = models.ForeignKey("Will", on_delete=models.DO_NOTHING)
        name: formData.get("name"),
        description: formData.get("description"),
        quantity: formData.get("quantity"),
        location: formData.get("location"),
    }

    // Send request to backend
    await fetch(URL + "/asset/", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newAsset)
    })

    // Redirect back to Index page
    return redirect("/asset")
}


// UPDATE AN ASSET
export const updateAssetAction = async ({request, params}) => {
    // Get form data
    const formData = await request.formData()

    // Get Asset id
    const id = params.id

    // Construct request body
    const updatedAsset = {
        //will_id = models.ForeignKey("Will", on_delete=models.DO_NOTHING)
        name: formData.get("name"),
        description: formData.get("description"),
        quantity: formData.get("quantity"),
        location: formData.get("location"),
    }

    // Send request to backend
    await fetch(URL + `/asset/${id}/`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedAsset)
    })

    // Redirect back to Show page
    return redirect(`/asset/${id}`)
}

// DELETE AN ASSET
export const deleteAssetAction = async ({params}) => {
    // Get Asset id
    const id = params.id

    // Send request to backend
    await fetch(URL + `/asset/${id}/`, {
        method: "delete",
    })

    // Redirect back to Show page
    return redirect("/asset")
}