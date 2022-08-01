import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {AppDispatch} from '..'
import {IUsers} from '../../types/users'
import {userSlice} from './UserSlice'

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(userSlice.actions.usersFetching)
    const {data} = await axios.get<IUsers[]>(
      'https://jsonplaceholder.typicode.com/users'
    )
    dispatch(userSlice.actions.usersFetchingSuccess(data))
  } catch (error) {
    dispatch(userSlice.actions.usersFetchingError('Ошибка запроса'))
  }
}

export const fetchUsers2 = createAsyncThunk(
  'user/fetchAll',
  async (_, thunkApi) => {
    try {
      const {data} = await axios.get<IUsers[]>(
        'https://jsonplaceholder.typicode.com/users'
      )
      return data
    } catch (error) {
      thunkApi.rejectWithValue('Ошибка запроса')
    }
  }
)
