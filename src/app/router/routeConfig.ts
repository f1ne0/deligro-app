import { RouterProvider } from 'react-router-dom'
import { appRouter } from './AppRouter'

export const AppRouter = () => {
  return <RouterProvider router={appRouter} />
}