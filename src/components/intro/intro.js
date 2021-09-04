import * as React from "react"
import { Container, Row } from "../layout/grid"
import * as Styles from "../styles/typography.module.css"

const name = "Harry Lane"
const role = "Software Engineer"
const company = "Apple"
const intro = "Still figuring out how to write a good bio. Enjoy solving hard problems and working at the intersection of design and technology. In my free time, you may find me playing video games or snowboarding down the mountain."

const titleStyle = {
  paddingTop: "40vh",
}

const Intro = () => {
  return (
    <Container>
      <Row>
        <h1 style= { titleStyle } className={ Styles.display1 }>{ name }</h1>
        <h4 className={ Styles.fs4 }>{ role } @ { company }</h4>
        <p className={ Styles.lead }>{ intro }</p>
      </Row>
    </Container>
  )
}

export default Intro