import React from 'react'
import * as S from './styles'

export default function DefaultHeader() {
  const data = 'Header'
  return (
    <S.ContainerHeader>
      <h3>{data}</h3>
    </S.ContainerHeader>
  )
}
