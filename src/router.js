import {createBrowserRouter, createRoutesFromElements, Route, Routes} from "react-router-dom"
import App from "./App"
import { willIndexLoader, willShowLoader } from "./loaders"
import { assetIndexLoader, assetShowLoader } from "./loaders"
import WillIndex from "./pages/WillIndex"
import AssetIndex from "./pages/AssetIndex"
import WillShow from "./pages/WillShow"
import AssetShow from "./pages/AssetShow"


const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/will" element={<App/>}>
            <Route path="" element={<WillIndex/>} loader={willIndexLoader}/>
            <Route path=":id" element={<WillShow/>} loader={willShowLoader}/>
            <Route path="create"/>
            <Route path="update/:id"/>
            <Route path="delete/:id"/>
        </Route>

        <Route path="/asset" element={<App/>}>
            <Route path="" element={<AssetIndex/>} loader={assetIndexLoader}/>
            <Route path=":id" element={<AssetShow/>} loader={assetShowLoader}/>
            <Route path="create"/>
            <Route path="update/:id"/>
            <Route path="delete/:id"/>
        </Route>
    </>
))

export default router