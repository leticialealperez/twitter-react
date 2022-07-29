import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Timeline from "../page/Timeline/Timeline"

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Timeline />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes