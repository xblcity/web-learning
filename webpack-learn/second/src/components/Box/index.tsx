import React, { useState, useRef } from 'react'

// interface IProps {
//   name?: string
//   className?: string,
//   done?: () => void
// }

// const Box = (props : IProps) => {
//   const {name, className} = props
//   return (
//     <div className={className}>
//       <div>{name}</div>
//     </div>
//   )
// }

// interface IProps {
//   name?: string
//   className?: string,
//   done?: () => void
// }

// const Box: React.FC<IProps> = (props) => {
//   const { name, className, done, children } = props
//   return (
//     <div className={className}>
//       <div onClick={done}>{name}</div>
//       <div>{children}</div>
//     </div>
//   )
// }

const Box = () => {
  // const [value, setValue] = useState('')
  // const inputRef = useRef(null)
  const [value, setValue] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  // 定义event的接口类型
  const handleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  return (
    <div>
      <input ref={inputRef} type="text" value={value} onChange={handleValue} />
      <div>{value}</div>
    </div>
  )
}

export default Box
