import React, { FC, ReactNode, useRef, useEffect, useState, forwardRef } from "react"
import classNames from "classnames"
import { Portal } from "react-portal"
import useOnclickOutside from "react-cool-onclickoutside"
import * as PropTypes from "prop-types"

type DropdownProps = {
  children: ReactNode
  className?: string
  trigger?: string | ReactNode
  margin?: number
  portal?: HTMLElement | null
  isAnimated?: boolean
  openOnMount?: boolean
  hideOnLinkClick?: boolean
}

const Dropdown: FC<DropdownProps> = ({
  children,
  className = '',
  trigger = 'Open dropdown',
  margin = 20,
  portal = null,
  isAnimated = true,
  openOnMount = false,
  hideOnLinkClick = true,
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

  const handleContentClick = (e: React.MouseEvent) => {
    if (hideOnLinkClick && (e.target as HTMLElement).closest("a.dropdown-item")) {
      hide()
    }
  }

  const triggerEl =
    typeof trigger === "string" ? <button className="button">{trigger}</button> : trigger

  return (
    <div ref={ref} className="dropdown">
      <Trigger onClick={onToggleClick}>{triggerEl}</Trigger>
      {isOpen && (
        <Menu
          onClick={handleContentClick}
          className={className}
          ref={ref}
          onClickOutside={hide}
          isAnimated={isAnimated}
          portal={portal}
          margin={margin}
        >
          {children}
        </Menu>
      )}
    </div>
  )
}
Dropdown.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  trigger: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  margin: PropTypes.number,
  portal: PropTypes.instanceOf(HTMLElement),
  isAnimated: PropTypes.bool,
  openOnMount: PropTypes.bool,
  hideOnLinkClick: PropTypes.bool,
}

export default Dropdown

const Trigger = ({ children, onClick }) => {
  return (
    <div className="dropdown-trigger" onClick={onClick}>
      {children}
    </div>
  )
}

type MenuProps = {
  children: ReactNode
  onClick: (e: React.MouseEvent) => void
  className: string
  onClickOutside: () => void
  isAnimated: boolean
  portal: HTMLElement | null
  margin: number
}

const Menu = forwardRef<HTMLDivElement, MenuProps>(
  (props, ref: React.RefObject<HTMLDivElement>) => {
    const { children, onClick, className, onClickOutside, isAnimated, portal, margin } = props
    const contentRef = useRef(null)
    const triggerRef = useRef(null)
    const [top, setTop] = useState(0)
    const [left, setLeft] = useState(0)
    const [maxHeight, setMaxHeight] = useState(0)
    const [isMenuMounted, setMenuMounted] = useState(false)

    const menuRef = useOnclickOutside(onClickOutside)

    useEffect(() => {
      const elToListen = portal === null
        ? window
        : portal

      setMenuMounted(true)
      triggerRef.current = ref.current.querySelector(".dropdown-trigger")

      calculatePos()
      elToListen.addEventListener("scroll", calculatePos)

      return () => elToListen.removeEventListener("scroll", calculatePos)
    }, [])

    const calculatePos = () => {
      let portalScroll: number,
          portalHeight: number,
          portalOffsetX: number,
          portalOffsetY: number

      if (portal === null) {
        portalScroll = window.scrollY
        portalHeight = window.innerHeight
        portalOffsetX = 0
        portalOffsetY = 0
      } else {
        const portalRect = portal.getBoundingClientRect()
        portalScroll = portal.scrollTop
        portalHeight = portal.offsetHeight
        portalOffsetX = portalRect.x
        portalOffsetY = portalRect.y
      }

      const triggerRect = triggerRef.current.getBoundingClientRect()
      const triggerYBottom = triggerRect.y + triggerRect.height

      setTop(triggerYBottom + portalScroll - portalOffsetY)
      setLeft(triggerRect.x - portalOffsetX)
      setMaxHeight(portalHeight - triggerYBottom + portalOffsetY - margin)
    }

    return (
      <Portal node={portal}>
        <div
          className={classNames("dropdown-portal", className, {
            "is-active": isMenuMounted,
            "is-animated": isAnimated,
          })}
        >
          <div
            className="dropdown-menu"
            style={{ top: `${top}px`, left: `${left}px` }}
            ref={menuRef}
          >
            <div
              className="dropdown-content"
              onClick={onClick}
              ref={contentRef}
              style={{ maxHeight: `${maxHeight}px` }}
            >
              {children}
            </div>
          </div>
        </div>
      </Portal>
    )
  }
)
