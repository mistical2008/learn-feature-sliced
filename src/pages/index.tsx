import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const TestPage = lazy(() => import('./test'))
const HomePage = lazy(() => import('./home'))
const NotFoundPage = lazy(() => import('./not-found'))

export const Routing = () => {
    return (
        <Routes>
            <Route key="test" path="test" element={<TestPage />} />
            <Route key="root" path="/" element={<HomePage />} />
            <Route key="other" path="*" element={<NotFoundPage />} />
        </Routes>
    )
}
