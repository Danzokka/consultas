import React from 'react'
import { getMedico } from './actions'

const page = async ({params}: any) => {

  const medico = await getMedico(parseInt(params.medicoid))

  return (
    <div>page</div>
  )
}

export default page