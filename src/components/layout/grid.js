import * as React from "react"
import * as Styles from "./grid.module.css"

export const Section = ({ alignsCenter=false, children }) => {
  let classNames = [ Styles.section ]
  if (alignsCenter) {
    classNames.push(Styles.dFlex);
    classNames.push(Styles.alignItemsCenter);
  }

  return (
    <div className={ classNames.join(" ") }>
      { children }
    </div>
  )
}
export const Container = ({ children }) => {
  return (
    <div className={ Styles.container }>{ children }</div>
  )
}

export const Row = ({ children }) => {
  return (
    <div className={ Styles.row }>{ children }</div>
  )
}

export const Column = ({ size, children }) => {
  let columnClass = Styles.col
  switch (size) {
    case "small":
      columnClass = Styles.colSm
      break
    case "medium":
      columnClass = Styles.colMd
      break
    case "large":
      columnClass = Styles.colLg
      break
    default:
      columnClass = Styles.col
      break
  }

  return (
    <div className={ columnClass }>{ children}</div>
  )
}