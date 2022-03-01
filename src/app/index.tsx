import './index.css'
import { withProviders } from 'app/providers'
import { Routing } from 'pages'

function App() {
    return (
        <div className="App">
            <Routing />
        </div>
    )
}

export default withProviders(App)
