import './index.css'
import { withProviders } from 'src/app/providers'
import { Routing } from 'src/pages/routes'

function App() {
    return (
        <div className="App">
            <Routing />
        </div>
    )
}

export default withProviders(App)
