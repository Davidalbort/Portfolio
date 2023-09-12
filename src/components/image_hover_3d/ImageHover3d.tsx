'use client'
import Image, { StaticImageData } from 'next/image'
import { useEffect, useState } from 'react'
import '@/styles/components/image_hover_3d.scss'

interface ImageHover3dProps {
  src: StaticImageData | string
  alt: string
  width?: number
  height?: number
}
interface infoOfImageState {
  containerImage: HTMLElement | null
  Image: HTMLElement | null
  width: number
  height: number
}
export function ImageHover3d({
  src,
  alt,
  width = 300,
  height = 200,
}: ImageHover3dProps) {
  const idContainer = 'imageContainer'
  const idImage = 'image'
  const [sizeOfImage, setSizeOfImage] = useState<infoOfImageState>(
    {} as infoOfImageState,
  )
  useEffect(() => {
    const containerImage = document.getElementById(idContainer)
    const image = document.getElementById(idImage)
    const measureContainerImage = containerImage?.getBoundingClientRect()
    const height = measureContainerImage?.height || 0
    const width = measureContainerImage?.width || 0
    setSizeOfImage({
      width: width,
      height: height,
      containerImage: containerImage,
      Image: image,
    })
  }, [])
  return (
    <figure id={idContainer} style={{ width: width, height: height }}>
      <Image
        id={idImage}
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={true}
        onMouseMove={(event) => {
          const { width, height, Image } = sizeOfImage
          const halfWidth = width / 2
          const halfHeight = height / 2
          const { offsetX, offsetY } = event.nativeEvent
          const xRotation = ((halfHeight - offsetY) / halfHeight) * 10
          const yRotation = ((offsetX - halfWidth) / halfWidth) * 10
          const string = `

                  rotateX(${xRotation}deg)
                  rotateY(${yRotation}deg)
              `
          if (Image) {
            Image.style.transition = 'none'
            Image.style.transform = string
          }
        }}
        onMouseOut={() => {
          const { Image } = sizeOfImage
          const string = `
                    rotateX(0)
                    rotateY(0)
                `
          if (Image) {
            Image.style.transition = '0.5s ease-in-out'
            Image.style.transform = string
          }
        }}
      />
    </figure>
  )
}
