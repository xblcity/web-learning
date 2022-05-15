import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import store from './rootStore'

interface IProps {
  children: ReactNode
}

const StoreProvider = ({ children }: IProps) => {
  return <Provider store={store}>{children}</Provider>
}

export default StoreProvider

export { useAppDispatch, useAppSelector } from './hooks'
