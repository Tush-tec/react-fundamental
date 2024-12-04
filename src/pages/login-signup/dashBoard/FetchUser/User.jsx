import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    const [user,setUser] = useState('')

    const param = useParams()
    const id = param.id

  return (
    <div>
        <h1></h1>
    </div>
  )
}

export default User