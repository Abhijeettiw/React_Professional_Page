import { createBrowserRouter, RouterProvider } from "react-router-dom"
import PageLayout from './CommomCmpts/PageLayout'
import ErrorPage from "./CommomCmpts/ErrorPage"
import Home from './Routes/Home/Home'
import EduAndSkills from "./Routes/EducationAndSkils/EduAndSkills"
import Exp from "./Routes/ProfessionExperience/Exp"
import PersonalInfo from "./Routes/Profile/PersonalInfo"


function App() {
  const routes = createBrowserRouter([
    {
    
      element: <PageLayout/>,
      errorElement: <ErrorPage/>,
      children : [
        {
          path:"/",
          element: <Home/>

        },{
          path:"/info",
          element: <PersonalInfo/>

        },{
          path: "/education-skills",
          element: <EduAndSkills/>
        },{
          path: "/professional-exp",
          element: <Exp/>
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
