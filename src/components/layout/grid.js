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

export const Column = ({ size, span=null, children }) => {
  let columnClass = Styles.col
  switch (span) {
    case 2:
      switch (size) {
        case "small":
          columnClass = Styles.colSm2
          break
        case "medium":
          columnClass = Styles.colMd2
          break
        case "large":
          columnClass = Styles.colLg2
          break
        default:
          columnClass = Styles.col2
          break
      }
      break
    case 4:
      switch (size) {
        case "small":
          columnClass = Styles.colSm4
          break
        case "medium":
          columnClass = Styles.colMd4
          break
        case "large":
          columnClass = Styles.colLg4
          break
        default:
          columnClass = Styles.col4
          break
      }
      break
    case 6:
      switch (size) {
        case "small":
          columnClass = Styles.colSm6
          break
        case "medium":
          columnClass = Styles.colMd6
          break
        case "large":
          columnClass = Styles.colLg6
          break
        default:
          columnClass = Styles.col6
          break
      }
      break
    case 8:
      switch (size) {
        case "small":
          columnClass = Styles.colSm8
          break
        case "medium":
          columnClass = Styles.colMd8
          break
        case "large":
          columnClass = Styles.colLg8
          break
        default:
          columnClass = Styles.col8
          break
      }
      break
    case null:
    default:
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
  }

  return (
    <div className={ columnClass }>{ children}</div>
  )
}