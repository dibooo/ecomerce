import React from 'react'
import {  BasePropertyProps } from 'adminjs'
import { DropZoneItem,} from '@adminjs/design-system'
const Edit: React.FC<BasePropertyProps> = (props) => {
  const {  record } = props

 
  
  // React.useEffect(()=>{
  //   const getImage=async()=>{
  //     const res = await fetch("http://localhost:4001"+record.params.profilePhotoLocation);
  //     const buf = await res.arrayBuffer();
  //     return buf;
  //   }
  //   getImage().then((result)=>{
  //     const file = new File([result], "ddddddd", { type: "image" });
  //     console.log(file);
      
  //   onChange(property.name, file)

      
  //   })
  //   // onChange(property.name, files[0])

  // },[])

  
  const uploadedPhoto = record.params.profilePhotoLocation?.replaceAll("\\",'/')

  return (
    
      uploadedPhoto && (
        <DropZoneItem src={uploadedPhoto} />
      )
  )
}

export default Edit