import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import { willIndexLoader, willShowLoader } from "./loaders"
import { assetIndexLoader, assetShowLoader } from "./loaders"
import WillIndex from "./pages/WillIndex"
import AssetIndex from "./pages/AssetIndex"
import WillShow from "./pages/WillShow"
import AssetShow from "./pages/AssetShow"
import { createWillAction, updateWillAction, deleteWillAction } from "./actions"
import { createAssetAction, updateAssetAction, deleteAssetAction } from "./actions"


const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route path="" element={<WillIndex/>} loader={willIndexLoader}/>
            <Route path=":id" element={<WillShow/>} loader={willShowLoader}/>
            <Route path="create" action={createWillAction}/>
            <Route path="update/:id" action={updateWillAction}/>
            <Route path="delete/:id" action={deleteWillAction}/>
        </Route>

        {/* <Route path="/asset" element={<App/>}>
            <Route path="" element={<AssetIndex/>} loader={assetIndexLoader}/>
            <Route path=":id" element={<AssetShow/>} loader={assetShowLoader}/>
            <Route path="create" action={createAssetAction}/>
            <Route path="update/:id" action={updateAssetAction} />
            <Route path="delete/:id" action={deleteAssetAction} />
        </Route> */}
    </>
))

// const router = createBrowserRouter(createRoutesFromElements(([
//     {
//         path: "/",
//         element: <App/>,
//         children: [
//             {
//                 path: "will/",
//                 element: <WillIndex/>,
//                 loader: <willIndexLoader/>,
//             },
//             {
//                 path: "will/:id",
//                 element: <WillShow/>,
//                 loader: <willShowLoader/>,
//             },
//             {
//                 path: "will/create",
//                 action: {createWillAction},
//             },
//             {
//                 path: "will/update/:id",
//                 action: {updateWillAction},
//             },
//             {
//                 path: "will/delete/:id",
//                 action: {deleteWillAction},
//             },

//         ],
//     },
// ])
// ));

export default router