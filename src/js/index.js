import React, { useRef, useEffect, useState, forwardRef } from 'react';
import classNames from 'classnames'
import { Portal } from 'react-portal'
import useOnclickOutside from 'react-cool-onclickoutside'

export default ({
  children,
  className,
  trigger,
  portal = window,
  isAnimated = true,
  openOnMount = false,
  hideOnLinkClick = true
}) => {
  const ref = useRef()
  const [isOpen, setOpen] = useState(openOnMount)

  const onToggleClick = () => {
    if (isOpen) {
      hide()
    } else {
      open()
    }
  }

  const hide = () => {
    setOpen(false)
  }

  const open = () => {
    setOpen(true)
  }

  const handleContentClick = (e) => {
    if (hideOnLinkClick && e.target.closest('a.dropdown-item')) {
      hide()
    }
  }

  return (
    <div ref={ref} className="dropdown">
      <Trigger
        onClick={onToggleClick}
        >
        { trigger }
      </Trigger>
      {isOpen &&
        <Menu
          onClick={handleContentClick}
          className={className}
          ref={ref}
          onClickOutside={hide}
          isAnimated={isAnimated}
          portal={portal}
          >
          { children }
        </Menu>
      }
    </div>
  )
}

const Trigger = ({ children, onClick }) => {
  return (
    <div
      className="dropdown-trigger"
      onClick={onClick}
      >
      { children }
    </div>
  )
}

const Menu = forwardRef((props, ref) => {
  const { children, onClick, className, onClickOutside, isAnimated, portal } = props
  const contentRef = useRef(null)
  const triggerRef = useRef(null)
  const menuRef = useRef(null)
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)
  const [maxHeight, setMaxHeight] = useState(0)
  const [isMenuMounted, setMenuMounted] = useState(false)

  useEffect(() => {
    setMenuMounted(true)
    triggerRef.current = ref.current.querySelector('.dropdown-trigger')

    calculatePos()
    portal.addEventListener('scroll', calculatePos)

    return () => portal.removeEventListener('scroll', calculatePos)
  }, [])

  const calculatePos = () => {
    const triggerRect = triggerRef.current.getBoundingClientRect()
    const margin = 20
    const triggerYBottom = triggerRect.y + triggerRect.height

    setTop(triggerYBottom + portal.scrollY + 'px')
    setLeft(triggerRect.x + 'px')
    setMaxHeight(portal.innerHeight - triggerYBottom - margin + 'px')
  }

  useOnclickOutside(menuRef, onClickOutside)

  return (
    <Portal node={portal === window ? false : portal}>
      <div className={classNames(
          'dropdown-portal', className, { 'is-active':  isMenuMounted, 'is-animated': isAnimated }
        )}>
        <div className="dropdown-menu" style={{top, left}} ref={menuRef}>
          <div
            className="dropdown-content"
            onClick={onClick}
            ref={contentRef}
            style={{maxHeight}}
            >
            { children }
          </div>
        </div>
      </div>
    </Portal>
  )
})
