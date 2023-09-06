import { Component } from "react"
import { Item, Image } from "./ImageGalleryItem.styled"
import { ModalWindow } from "components/Modal/Modal"

export class ImageGalleryItem extends Component {
    state = {
        isModalOpen: false,
    }

    openModal = () => {
        this.setState({ isModalOpen: true})
    }
    
    closeModal = () => {
        this.setState({isModalOpen: false})
    }

    render() {
        const { images } = this.props
        return (
             images.map(({id, webformatURL, tags, largeImageURL}) => (
                <Item key={id}>
                    <Image onClick={this.openModal} src={webformatURL} alt={tags} />
                     <ModalWindow isOpen={this.state.isModalOpen} closeModal={this.closeModal} src={largeImageURL} alt={tags} />
                </Item>))       
    )
    }
}