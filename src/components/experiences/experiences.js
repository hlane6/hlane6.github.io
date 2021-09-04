import * as React from "react"
import { Container, Row, Column } from "../layout/grid"
import * as Styles from "../styles/typography.module.css"

class ExperienceItem {  
  constructor(id, role, company, dateRange, description) {
    this.id = id
    this.role = role
    this.company = company
    this.dateRange = dateRange
    this.description = description
  }

  get displayHeader() {
    let items = [];
    if (this.role != null) {
      items.push(this.role);
    }
    items.push(this.company);
    return items.join(" @ ")
  }
}

const experienceItems = [
  new ExperienceItem(2, "SwiftUI", "Apple", "Apr. 2020 - Current", "As a Framework Engineer, I contributed directly to the SwiftUI framework. With the help of my teammates, I learned the ins and outs of designing great SwiftUI APIs. Over the years, I helped design and implement APIs like .searchable(), .toolbar(), and @FocusState."),
  new ExperienceItem(1, "Photos UI", "Apple", "Feb. 2018 - Apr.2020", "As a UI Engineer, I built and improved different areas of the Photos app on both iOS and macOS. I brought life to the For You tab. I improved the infrastructure of grid technologies to bring improved performance to accessibility features. While on loan to the Responsiveness Tentpole, I learned how to investigate scrolling performance and applied that knowledge to improve week view scrolling performance in Calendar."),
  new ExperienceItem(0, null, "Georgia Tech", "Dec. 2017", "I graduated from the Georgia Institute of Technology with a degree in Computer Science after focusing on AI and systems programming."),
]

const Experience = ({ item }) => {
  return (
    <Row>
      <Column size="small">
        <h4 className={ Styles.fs4 }>{ item.displayHeader }</h4>
        <h6 className={ Styles.fs6 }>{ item.dateRange }</h6>
      </Column>
      <Column size="small">
        <p>{ item.description }</p>
      </Column>
    </Row>
  )
}

const Experiences = () => {
  return (
    <Container>
      { 
        experienceItems.map(item =>
          <Experience key={ item.id } item={ item } />
        )
      }
    </Container>
  )
}

export default Experiences