import clsx from 'clsx'
import { FC } from 'react'

interface HeaderUserSelectBtnProps {
  isReadonly: boolean
  setIsReadonly: (param: boolean) => void
  userInput: string
  inputRef?: React.MutableRefObject<HTMLInputElement | null>
}

const HeaderUserSelectBtn: FC<HeaderUserSelectBtnProps> = ({
  isReadonly,
  setIsReadonly,
  userInput,
  inputRef: ref,
}) => {
  const changeUserHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    if (ref && ref.current !== null) ref.current.focus()
    e.preventDefault()
    setIsReadonly(false)
  }

  return (
    <div
      className={clsx('header-user-select__btn', {
        'header-user-select__btn_edit': isReadonly,
        'header-user-select__btn_save': !isReadonly,
        disabled: !isReadonly && !userInput,
      })}
    >
      <button
        type={isReadonly ? 'button' : 'submit'}
        onClick={isReadonly ? changeUserHandler : undefined}
        disabled={!userInput}
      >
        {}
      </button>
    </div>
  )
}

export default HeaderUserSelectBtn
