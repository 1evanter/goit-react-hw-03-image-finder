export const ImageGalleryItem = ({images}) => {
    return (
        images.map(img => (
            <li>
                {img}
                {/* <img src={img} alt="" /> */}
    </li>
))
    )
}