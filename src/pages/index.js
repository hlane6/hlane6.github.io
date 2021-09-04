import * as React from "react"
import { Section } from "../components/layout/grid"
import Layout from "../components/layout/Layout"
import Divider from "../components/decorations/Divider"
import Intro from "../components/intro/Intro"
import Experiences from "../components/experiences/Experiences"
import Skills from "../components/skills/Skills"

const name = "Harry Lane"

const IndexPage = () => {
  return (
    <Layout pageTitle={ name }>
      <Section>
        <Intro />
      </Section>
      <Divider />
      <Section alignsCenter={ true }>
        <Experiences />
      </Section>
      <Divider />
      <Section alignsCenter={ true }>
        <Skills />
      </Section>
    </Layout>
  )
}

export default IndexPage