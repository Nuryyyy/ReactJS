import { useEffect, useState } from 'react';
import bookImage from './bookImage';
import BookListing from './BookListing';

const axios = require('axios').default
const url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=96358825614a5d3b1a1c3fd87fca2b47&format=json&nojsoncallback=true&page=1&text=books'

export default function Bookslist() {

    const [bookList, setBookList] = useState([])

    useEffect(() => {
        //put inside useEffect to run once using []

        axios.get(url)
            .then(function (response) {
                console.log(response);

                const books = response.data.photos.photo
                // console.log(response.data.photos)
    
                const bookNames = books.map((book) => {
                    const imageUrl = "https://live.staticflickr.com";
                    const imageFormat = "jpg";

                    return new bookImage(
                        {
                            title: book.title,
                            imageUrl: `${imageUrl}/${book.server}/${book.id}_${book.secret}.${imageFormat}`
                        }
                    )
                }
                )
                setBookList(bookNames)
                console.log(bookNames)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            })
    }, [] // note: this array means it will change whenever the this array's content changes. 
        // in our case it is empty meaning nothing will change therefore it will execute once only
    )

    //html
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    {/* <BookListing /> */}

                    <h1>Books:</h1>
                    <ul>
                        {bookList.map((item, index) =>
                                {
                                    return  (
                                    <li key={index}>
                                        <div>
                                        <img src={item.imageUrl} alt={item.title}></img>
                                        <div>{item.title}</div>
                                        </div>
                                    </li>
                                    )
                                }
                            )
                        }
                    </ul>
                </div>
            </header>
        </div>

    )
}
