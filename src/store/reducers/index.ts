import {postsApi} from '../../services/PostsService'
import userReducer from '../reducers/UserSlice'

export const rootReducer = {
  user: userReducer,
  [postsApi.reducerPath]: postsApi.reducer,
}
