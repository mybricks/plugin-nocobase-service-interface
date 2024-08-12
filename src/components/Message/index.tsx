import React, { FC } from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { error, success, warning } from "../../icon"

import styles from "./index.less"

type MessageProps = {
  type: string
  message: string
}
let dom = null
let timer = null
type OptionType = {
  type?: string
  timeout?: number
}

export const notice = (
  message = "",
  option: OptionType = { type: "error", timeout: 2000 }
) => {
  const container = document.querySelector("div[data-id=plugin-panel]")
    ?.parentNode?.parentNode

  if (!container) {
    return
  }

  if (
    !dom ||
    !(dom = document.querySelector("div[data-id=http-plugin-panel-message]"))
  ) {
    dom = document.createElement("div")
    dom.setAttribute("data-id", "http-plugin-panel-message")
  }
  document.body.appendChild(dom)
  clearTimeout(timer)
  render(<Message type={option.type} message={message} />, dom)

  timer = setTimeout(() => unmountComponentAtNode(dom), option.timeout || 2000)
}

const Message: FC<MessageProps> = (props) => {
  const { type = "error", message } = props

  return message ? (
    <div className={styles.message}>
      {type === "error" ? error : null}
      {type === "warning" ? warning : null}
      {type === "success" ? success : null}
      <span className={styles.content}>{message}</span>
    </div>
  ) : null
}

export default Message
