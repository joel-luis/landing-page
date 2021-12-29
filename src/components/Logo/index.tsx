import React from 'react'

import { getImageUrl } from 'utils/getImageUrl'
import { LogoProps } from 'types/api'

import * as S from './styles'

const Logo = ({ data }: LogoProps) => (
  <S.LogoWrapper
    src={getImageUrl(data.attributes.url)}
    alt={data.attributes.alternativeText}
  />
)

export default Logo
