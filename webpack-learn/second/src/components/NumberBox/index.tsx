import React, { useState, useEffect, useCallback } from 'react'

const NumberBox = () => {
  const [clickNumber, setClickNumber] = useState<number>(1)
  const meClick = () => {
    console.log('点击123')
  }
  // meClick()
  const meClickCall = useCallback(
    () => {
      console.log('点击123')
    },
    [clickNumber]
  )
  useEffect(() => {
    // document.querySelector('#button')?.addEventListener('click', function () {
    //   console.log('点击456')
    // })
    document.querySelector('#button')?.addEventListener('click', meClickCall)
    console.log('useEffect执行了')
    return () => {
      document.querySelector('#button')?.removeEventListener('click', meClick)
    }
  })
  return (
    <div>
      <button
        onClick={() => {
          setClickNumber(clickNumber + 1)
        }}
      >
        +1
      </button>
      <button id="button">原生点击事件</button>
      {clickNumber}
    </div>
  )
}

export default NumberBox
