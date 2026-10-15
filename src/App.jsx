
import Layout from './components/Layout.jsx'
import { BrowserRouter } from 'react-router'
import { ProviderAutor } from './context/ProviderAutor.jsx'
function App() {

  return (
    <>
      <ProviderAutor>
        <BrowserRouter>

          <Layout></Layout>
        </BrowserRouter>
      </ProviderAutor>
    </>
  )
}

export default App
