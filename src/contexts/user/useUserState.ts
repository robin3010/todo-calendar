import { useEffect, useState } from 'react'
import { CALENTODO_USER } from 'shared/lib/localStorage'

const useUserState = () => {
  const [user, setUser] = useState(() => {
    const savedUser = sessionStorage.getItem(CALENTODO_USER)

    return savedUser || ''
  })

  useEffect(() => {
    sessionStorage.setItem(CALENTODO_USER, user)
  }, [user])

  const SelectUser = (userName: string) => {
    setUser(userName)
  }

  return {
    user,
    SelectUser,
  }
}

export default useUserState
