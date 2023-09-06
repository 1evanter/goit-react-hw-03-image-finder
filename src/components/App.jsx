import { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { GlobalStyles } from "GlobalStyles";

import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { fetchImages } from "../api.js";
import { Loader } from "./Loader/Loader";

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
  }

  handleChangeQuery = newQuery => {
    this.setState({
      query: `${Date.now()}/${newQuery}`,
      images: [],
      page: 1,
      totalPages: 1,
  })
  }
  
  async componentDidUpdate(prevProps, prevState) {
   
    const { query, page } = this.state;
    const per_page = 12;

    if (query !== prevState.query || page !== prevState.page) {
      try {
        this.setState({loading: true})
        const searchQuery = query.slice(query.indexOf('/') + 1);
  
        const images = await fetchImages(searchQuery, page, per_page);
         const { hits, total } = images;
          const totalPages = Math.ceil(total / per_page);
        //  this.setState({images})
       
        if (hits.length > 0) {
          this.setState(prevState => ({
            images: page > 1 ? [...prevState.images, ...hits] : hits,
            totalPages,
          }))
        } else {
          toast.error('Sorry, no pictures were found for your search')
  }
      } catch(error) {
         console.log(error)
      } finally {
        this.setState({loading: false})
      }
      
    }
  } 
  
  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
     }))
  }

  render() {
    const { images, totalPages, page, loading } = this.state;

    return <div>
      <Searchbar onSubmit={this.handleChangeQuery} />
      {images.length > 0 && <ImageGallery images={images} />}
      {page < totalPages && <Button onLoadMore={this.handleLoadMore} />}
      {loading && <Loader/>}

      <GlobalStyles />
      <ToastContainer/>
    </div>
  }
}


