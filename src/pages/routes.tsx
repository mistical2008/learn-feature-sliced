import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const TestPage = lazy(() => import('./test'))
const HomePage = lazy(() => import('./home'))
const NotFoundPage = lazy(() => import('./not-found'))

export const Routing = () => {
    return (
        <Routes>
            <Route path="test" element={<TestPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}
