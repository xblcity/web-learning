import React, {useState} from 'react'
import NumberBox from '../NumberBox'

const NumberContainer = () => {
  const [name, setName] = useState<string>('value')
  return (
    <div>
      <NumberBox />
    </div>
  )
}

export default NumberContainer