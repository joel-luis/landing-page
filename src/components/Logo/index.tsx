import React from 'react'

import { getImageUrl } from 'utils/getImageUrl'
import { ImageProps } from 'types/api'

import * as S from './styles'

const Logo = ({ data }: ImageProps) => (
  <S.LogoWrapper
    src={getImageUrl(data.attributes.url)}
    alt={data.attributes.alternativeText}
  />
)

export default Logo
