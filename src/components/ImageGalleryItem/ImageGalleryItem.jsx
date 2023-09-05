export const ImageGalleryItem = ({images}) => {
    return (
        images.map(img => (
            <li>
                <img src={img} alt="" />
    </li>
))
    )
}