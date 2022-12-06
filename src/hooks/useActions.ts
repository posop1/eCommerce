import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { cartActions } from '../redux/cart/carSlice'

const AllACtions = {
  ...cartActions
}

const useActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(AllACtions, dispatch)
}

export default useActions
