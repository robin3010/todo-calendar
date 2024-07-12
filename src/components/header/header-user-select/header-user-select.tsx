import useUser from 'contexts/user/useUser'
import { FC, FormEvent, useRef, useState } from 'react'
import clsx from 'clsx'
import HeaderUserSelectBtn from './__btn/header-user-select__btn'

const HeaderUserSelect: FC = () => {
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

  const logoutHandler = () => {
    SelectUser('')
    setUserInput('')
  }

  return (
    <div className="header-user-select">
      <form className="header-user-select-form" onSubmit={submitHandler}>
        <input
          className={clsx('header-user-select__input', {
            active: !isReadonly,
          })}
          placeholder="Пользователь"
          value={userInput}
          disabled={isReadonly}
          ref={ref}
          onChange={(e) => setUserInput(e.target.value.replace(/[\s]/g, ''))}
          size={isReadonly ? userInput.length : undefined}
        />
        <HeaderUserSelectBtn
          isReadonly={isReadonly}
          setIsReadonly={setIsReadonly}
          userInput={userInput}
          inputRef={ref}
        />
      </form>
      <button
        className="header-user-select__btn header-user-select__btn_logout"
        type="button"
        onClick={() => logoutHandler}
        disabled={!user}
      >
        {}
        <span className="icon" />
      </button>
    </div>
  )
}

export default HeaderUserSelect
