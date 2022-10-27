import React from 'react'
import {  BasePropertyProps } from 'adminjs'
import { DropZone, DropZoneProps,DropZoneItem,Label,Box } from '@adminjs/design-system'
const Edit: React.FC<BasePropertyProps> = (props) => {
  const { property, onChange, record } = props

  const handleDropZoneChange: DropZoneProps['onChange'] = (files) => {
    onChange(property.name, files[0])
  }
  
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
  console.log(property.name);
  
   const uploadedPhoto = record.params.profilePhotoLocation?.replaceAll("\\",'/')
  const photoToUpload = record.params[property.name]

  return (
    <Box marginBottom="xxl">
      <Label>{property.label}</Label>
      <DropZone onChange={handleDropZoneChange}/>
      {uploadedPhoto && !photoToUpload && (
        <DropZoneItem src={uploadedPhoto} />
      )}
    </Box>
  )
}

export default Edit