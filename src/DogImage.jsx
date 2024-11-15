// @ts-check

import react from 'react'
export const DogImage = props => {
  console.log(props)
  return (
    <div>
      <img src={ props.imageUrl } alt="dog_img" />
    </div>
  )
}
export default DogImage
