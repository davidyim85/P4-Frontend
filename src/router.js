import {createBrowserRouter, createRoutesFromElements, Route, Routes} from "react-router-dom"
import App from "./App"
import Index from "./pages/WillIndex"
import Index from "./pages/AssetIndex"
import Show from "./pages/WillShow"
import Show from "./pages/AssetShow"


const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route path="" element={<Index/>}/>
            <Route path="will/:id" element={<Show/>}/>
            <Route path="create"/>
            <Route path="update/:id"/>
            <Route path="delete/:id"/>
        </Route>
    </>
))

export default router