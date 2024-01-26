import Image from 'next/image';
import myImg from "../../public/images (1).jpg"

const ImageUse = () => {
  return (
    <div>
    Image
    <Image height='40px' width='40px' src={myImg} />
    </div>
  )
}

export default ImageUse;