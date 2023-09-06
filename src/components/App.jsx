import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { fetchImages } from "../api.js";

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  }

  handleChangeQuery = newQuery => {
    this.setState({
      query: `${Date.now()}/${newQuery}`,
      images: [],
  })
  }
  
  async componentDidUpdate(prevProps, prevState) {
   
    const { query, page } = this.state;

    if (query !== prevState.query || page !== prevState.page) {
      const per_page = 12;
      const searchQuery = query.slice(query.indexOf('/') + 1);
      
      const images = await fetchImages(searchQuery, page, per_page);
       const { hits, total } = images;
        const totalPages = Math.ceil(total / per_page);
      //  this.setState({images})
     
      this.setState(prevState => ({
        images: page > 1 ? [...prevState.images, ...hits] : hits,
        totalPages,
      }))
    }
  } 
  
  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
     }))
  }

  render() {
    return <div>
      <Searchbar onSubmit={this.handleChangeQuery} />
      <ImageGallery images={this.state.images} />
      <Button onLoadMore={this.handleLoadMore } />
    </div>
  }
}


