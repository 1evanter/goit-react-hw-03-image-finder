import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";

export class App extends Component {
 
  render() {
    return <div>
      <Searchbar />
      <ImageGallery />
      <Button />
      <Loader/>
    </div>
  }
}


