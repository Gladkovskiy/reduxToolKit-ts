import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IUsers, UserState} from '../../types/users'
import {fetchUsers, fetchUsers2} from './ActionCreator'

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: '',
}

//иммутабельность, не надо разворачивать state
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    usersFetching: state => {
      state.isLoading = true
    },
    usersFetchingSuccess: (state, action: PayloadAction<IUsers[]>) => {
      state.users = action.payload
      state.error = ''
      state.isLoading = false
    },
    usersFetchingError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
      state.isLoading = false
    },
  },
  extraReducers: {
    [fetchUsers2.fulfilled.type]: (state, action: PayloadAction<IUsers[]>) => {
      state.users = action.payload
      state.error = ''
      state.isLoading = false
    },
    [fetchUsers2.pending.type]: state => {
      state.isLoading = true
    },
    [fetchUsers2.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload
      state.isLoading = false
    },
  },
})

export default userSlice.reducer
export const UsersAction = {...userSlice.actions, fetchUsers, fetchUsers2}
