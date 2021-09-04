import * as React from "react"
import { Container, Row, Column } from "../layout/grid"
import * as Styles from "../styles/typography.module.css"

class SkillItem {
  constructor(id, description) {
    this.id = id
    this.description = description
  }
}

const skillItems = [
  [
    new SkillItem(0, "SwiftUI"),
    new SkillItem(1, "UIKit"),
    new SkillItem(2, "React"),
  ],
  [
    new SkillItem(4, "Swift"),
    new SkillItem(5, "AppKit"),
    new SkillItem(6, "Python"),
  ],
  [
    new SkillItem(8, "API Design"),
    new SkillItem(9, "Objective C"),
    new SkillItem(3, "C"),
  ]
];

const Skills = () => {
  return (
    <Container>
      {
        skillItems.map(itemRow => {
          return (
            <Row key={ itemRow[0].id }>
              {
                itemRow.map(item => {
                  return (
                    <Column size="small" key={ item.id }>
                      <p className={ Styles.fs4 }>
                        { item.description }
                        </p>
                    </Column>
                  )
                })
              }
            </Row>
          )
        })
      }
    </Container>
  )
}

export default Skills