
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PlayerContextProvider } from './context/PlayerContext.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
const client= new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(

  <QueryClientProvider client={client}>
 <PlayerContextProvider>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </PlayerContextProvider>
    </QueryClientProvider>
)
