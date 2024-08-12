import css from "./index.less"
import React, { useEffect, useState } from "react"

export default function RadioBtns({ options, binding }) {
  const [from, key] = binding
  const [select, setSelect] = useState(from[key])

  useEffect(() => {
    setSelect(from[key])
  }, [from[key]])

  return (
    <div className={css.edt}>
      {options.map((opt) => {
        return (
          <div
            key={opt.value}
            className={`${css.opt} ${opt.value === select ? css.selected : ""}`}
            onClick={() => {
              from[key] = opt.value
              setSelect(opt.value)
            }}
          >
            {opt.title}
          </div>
        )
      })}
    </div>
  )
}
