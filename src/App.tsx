import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AppRutas from './routes/AppRutas';
import { BrowserRouter } from 'react-router-dom';
import "./app.css"
import { Toaster } from 'sonner';

function App() {
  
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <Toaster position="top-right" richColors/>
        <AppRutas />
      </BrowserRouter>

      <Footer />
    </div>
  )
}

export default App
