import React, { useRef, useEffect, useState, forwardRef } from 'react';
import classNames from 'classnames'
import { Portal } from 'react-portal'
import useOnclickOutside from 'react-cool-onclickoutside'

export default ({
  children,
  className,
  trigger = 'Open dropdown',
  margin = 20,
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

  const triggerEl = typeof trigger === 'string'
    ? <button className="button">{trigger}</button>
    : trigger

  return (
    <div ref={ref} className="dropdown">
      <Trigger onClick={onToggleClick}>
        { triggerEl }
      </Trigger>
      {isOpen &&
        <Menu
          onClick={handleContentClick}
          className={className}
          ref={ref}
          onClickOutside={hide}
          isAnimated={isAnimated}
          portal={portal}
          margin={margin}
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
  const { children, onClick, className, onClickOutside, isAnimated, portal, margin } = props
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
    let portalScroll, portalHeight, portalOffsetX, portalOffsetY

    if (portal === window) {
      portalScroll = portal.scrollY
      portalHeight = portal.innerHeight
      portalOffsetX = 0
      portalOffsetY = 0
    } else {
      portalScroll = portal.scrollTop
      portalHeight = portal.offsetHeight
      const portalRect = portal.getBoundingClientRect()
      portalOffsetX = portalRect.x
      portalOffsetY = portalRect.y
    }

    const triggerRect = triggerRef.current.getBoundingClientRect()
    const triggerYBottom = triggerRect.y + triggerRect.height

    setTop(triggerYBottom + portalScroll - portalOffsetY + 'px')
    setLeft(triggerRect.x - portalOffsetX + 'px')
    setMaxHeight(portalHeight - triggerYBottom + portalOffsetY - margin + 'px')
  }

  useOnclickOutside(menuRef, onClickOutside)

  return (
    <Portal node={portal === window ? false : portal}>
      <div className={classNames(
          'dropdown-portal', className, {
            'is-active':  isMenuMounted,
            'is-animated': isAnimated
          }
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
