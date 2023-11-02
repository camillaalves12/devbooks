import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from "./styles/global"
import { theme } from './styles/theme'


import { SignIn } from './pages/Auth/SignIn'


function App() {
  return (
    <>
    <ThemeProvider theme={theme} />
    <GlobalStyle/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignIn/>}/>
    </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
