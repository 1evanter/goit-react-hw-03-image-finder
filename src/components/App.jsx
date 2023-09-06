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
  
  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (this.state.query !== prevState.query || this.state.page !== prevState.page) {
    fetchImages(query, page)
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


