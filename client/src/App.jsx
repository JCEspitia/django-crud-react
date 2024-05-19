import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import TaskPage from "./pages/TaskPage.jsx";
import TaskFormPage from "./pages/TaskFormPage.jsx";
import {Navigation} from "./components/Navigation.jsx";
import {Toaster} from "react-hot-toast";

function App() {
    return (
        <BrowserRouter>
            <div className="container mx-auto">
                <Navigation/>

                <Routes>
                    <Route path='/' element={<Navigate to={'/tasks'}/>}/>
                    <Route path='/tasks' element={<TaskPage/>}/>
                    <Route path='/task-create' element={<TaskFormPage/>}/>
                    <Route path='/tasks/:id' element={<TaskFormPage/>}/>
                </Routes>

                <Toaster/>
            </div>


        </BrowserRouter>
    )
}

export default App
