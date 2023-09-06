import { Item, Image } from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({ images }) => {
    return (
       images.map(image => (
                <Item key={image.id}>
                    <Image src={image.webformatURL} alt={image} />
                </Item>))
            
        )
}