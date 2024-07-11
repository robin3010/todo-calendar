import { FC, FormEvent, useRef, useState } from 'react'
import './header.scss'
import useUser from 'contexts/user/useUser'
import UserSelectBtn from './header-user-select/__btn/headerUserSelectBtn'

const Header: FC = () => {
  const { user, SelectUser } = useUser()

  const checkUsernameValid = (userName: string) => {
    const userNamePattern =
      /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){2,18}[a-zA-Z0-9]$/g
    return userNamePattern.test(userName)
  }

  const [isReadonly, setIsReadonly] = useState(!!user)
  const [userInput, setUserInput] = useState(user)
  const ref = useRef<HTMLInputElement | null>(null)

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (checkUsernameValid(userInput)) {
      SelectUser(userInput)
      ref.current?.blur()
      setIsReadonly(true)
      return undefined
    }
    // alert('invalid userName')
    return undefined
  }

  return (
    <header className="header">
      <div className="header__app-title">CalenToDo</div>
      <form onSubmit={submitHandler}>
        <div className="header-user-select">
          <input
            className="header-user-select__input"
            placeholder="Пользователь"
            value={userInput}
            disabled={isReadonly}
            ref={ref}
            onChange={(e) => setUserInput(e.target.value.replace(/[\s]/g, ''))}
            size={isReadonly ? userInput.length : undefined}
          />
          <UserSelectBtn
            isReadonly={isReadonly}
            setIsReadonly={setIsReadonly}
            userInput={userInput}
            inputRef={ref}
          />
        </div>
      </form>
    </header>
  )
}

export default Header
