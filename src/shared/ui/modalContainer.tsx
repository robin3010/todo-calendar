import { FC, PropsWithChildren, useEffect } from 'react'
import { createPortal } from 'react-dom'
import './modalContainer.scss'

interface ModalProps extends PropsWithChildren {
  closeHandler: () => void
}

const ModalContent: FC<ModalProps> = ({ closeHandler, children }) => {
  useEffect(() => {
    const closeByEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler()
      }
    }

    document.addEventListener('keydown', closeByEsc)
    return () => {
      document.removeEventListener('keydown', closeByEsc)
    }
  }, [closeHandler])

  const closeByXmark = () => closeHandler()

  return (
    <div className="modal-content">
      {children}
      <button onClick={closeByXmark} type="button" className="modal-btn_close">
        {`\u26CC`}
      </button>
    </div>
  )
}

interface ModalContainerProps extends ModalProps {
  isOpen: boolean
}

const ModalContainer: FC<ModalContainerProps> = ({
  isOpen,
  closeHandler,
  children,
}) => {
  useEffect(() => {
    const $body = document.body

    if (isOpen) return $body.classList.remove('overflow')
    return $body.classList.add('overflow')
  }, [isOpen])

  if (!isOpen) return null

  const closeByClickContainer = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (e.currentTarget === e.target) {
      closeHandler()
    }
  }

  return createPortal(
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div onMouseDown={closeByClickContainer} className="modal-container">
      <ModalContent closeHandler={closeHandler}>{children}</ModalContent>
    </div>,
    document.getElementById('modal-root')!,
  )
}

export default ModalContainer
