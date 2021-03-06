import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'
import ProfileCard from 'components/ProfileCard'

import { SectionAboutUsProps } from 'types/api'

import * as S from './styles'

const SectionAboutUs = ({ title, authors }: SectionAboutUsProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {authors.data.map(({ attributes }) => (
        <ProfileCard
          key={attributes.name}
          name={attributes.name}
          role={attributes.role}
          photo={attributes.photo}
          socialLinks={attributes.socialLinks}
          description={attributes.description}
        />
      ))}
    </S.Content>
  </Container>
)

export default SectionAboutUs
