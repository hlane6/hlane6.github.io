import * as React from "react"
import { Container, Row, Column } from "../layout/grid"
import * as Typography from "../styles/typography.module.css"
import * as Colors from "../styles/colors.module.css"

class SkillItem {
  constructor(id, description, level) {
    this.id = id
    this.description = description
    this.level = level
  }
}

const skillItems = [
  new SkillItem(0, "SwiftUI", "high"),
  new SkillItem(1, "UIKit", "high"),
  new SkillItem(2, "React", "medium"),
  new SkillItem(4, "Swift", "high"),
  new SkillItem(5, "AppKit", "high"),
  new SkillItem(6, "Python", "medium"),
  new SkillItem(8, "API Design", "high"),
  new SkillItem(9, "Objective C", "high"),
  new SkillItem(3, "C", "medium"),
];

const Progress = ({ level }) => {
  let className = Colors.progressGradientHigh
  if (level === "medium") {
    className = Colors.progressGradientMedium
  } else if (level === "low") {
    className = Colors.progressGradientLow
  }
  return (
    <div className={ className }></div>
  )
}

const Skills = () => {
  return (
    <Container>
      {
        skillItems.map(item => {
          return (
            <Row key={ item.id }>
              <Column size="small" span={ 4 }>
                <p className={ Typography.fs4 }>
                  { item.description }
                </p>
              </Column>
              <Column size="small" span={ 8 }>
                <Progress level={ item.level } />
              </Column>
            </Row>
          )
        })
      }
    </Container>
  )
}

export default Skills