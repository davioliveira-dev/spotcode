import React from 'react'
import { Container, Section } from 'react-bulma-components'

const SectionContainer = props => {
    return (
        <Section>
            <Container>
                {props.children}
            </Container>
        </Section>
    )
}

export default SectionContainer