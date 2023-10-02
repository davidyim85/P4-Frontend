// DEPLOYED API BASE URL
const URL = "https://will-friend-backend.onrender.com"

// willIndexLoader - Get all WILLS for Will Index Route
export const willIndexLoader = async () => {
    const response = await fetch(URL + "/will/")
    const wills = await response.json()
    return wills
}

// willShowLoader - Get one WILL for Will Show Route
export const willShowLoader = async ({params}) => {
    const response = await fetch(URL + `/will/${params.id}/`)
    const will = await response.json()
    return will
}

// assetIndexLoader - Get all ASSETS for Asset Index Route
export const assetIndexLoader = async () => {
    const response = await fetch(URL + "/asset/")
    const assets = await response.json()
    return assets
}

// assetShowLoader - Show one ASSET for Asset Show Route
export const assetShowLoader = async ({params}) => {
    const response = await fetch(URL + `/asset/${params.id}`)
    const asset = await response.json()
    return asset
}

