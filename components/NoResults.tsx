import { NextPage } from 'next'
import React from 'react'


interface IProps {
    text: string
}

export const NoResults: NextPage<IProps> = ({text}) => {
  return (
    <div>NoResults</div>
  )
}
