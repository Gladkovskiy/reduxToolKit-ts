import React, {FC, useEffect} from 'react'
import {useActionUsers} from '../hooks/useAction'
import {useAppSelector} from '../hooks/useSelector'

const UserList: FC = () => {
  const {users, isLoading, error} = useAppSelector(state => state.user)
  const {fetchUsers, fetchUsers2} = useActionUsers()

  useEffect(() => {
    // fetchUsers()
    fetchUsers2()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      {isLoading && <h1>Идёт загрузка...</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)}
    </div>
  )
}

export default UserList
