import React from 'react'

const CreateNew = ({onCreateNewItem}) => {
  return (
    <div onClick={onCreateNewItem}>创建新的记录</div>
  )
}

export default CreateNew