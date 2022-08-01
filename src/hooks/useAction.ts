import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import {UsersAction} from '../store/reducers/UserSlice'

export const useActionUsers = () => {
  const dispatch = useDispatch()
  return bindActionCreators(UsersAction, dispatch)
}
