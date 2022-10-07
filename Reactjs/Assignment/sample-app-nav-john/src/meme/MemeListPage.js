import React, { useEffect, useState } from "react";
import axios from "axios";
import Meme from "./Meme";

const apiUrl = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=96358825614a5d3b1a1c3fd87fca2b47&format=json&nojsoncallback=true&page=1&text=animal_memes";

const MemeListPage = () => {
  const [memeList, setMemeList] = useState([]); 
  // [ { title: 'meme1', imageUrl: 'http://imageblabla'}, { title: 'meme1', imageUrl: 'http://imageblabla'}, { title: 'meme1', imageUrl: 'http://imageblabla'},]

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response);

        const jsonObject = response.data;
        const photoList = jsonObject.photos.photo;

        const memeList = photoList.map((item) => {
          const imageUrl = "https://live.staticflickr.com";
          const imageFormat = "jpg";

          return new Meme(
            {
              title: item.title,
              imageUrl: `${imageUrl}/${item.server}/${item.id}_${item.secret}.${imageFormat}`
            }
          )
        });

        setMemeList(memeList);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Memes</h1>
        <p>This is the Memes page</p>
        <ul>
          {memeList.map((item, index) => {
            return (
              <li key ={index}>
                <div>
                  <img src={item.imageUrl} alt={item.title}></img>
                  <div>{item.title}</div>
                </div>
              </li>
            )
          })}
        </ul>
      </header>
    </div>
  );
};

export default MemeListPage;
