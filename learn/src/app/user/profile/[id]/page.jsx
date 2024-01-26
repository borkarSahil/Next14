"use client"

import { useParams } from 'next/navigation'
import React from 'react'

const ProfileId = ( {params} ) => {
    // const {id} = useParams()
  return (
    <div>ProfileId : {params.id}</div>
  )
}

export default ProfileId