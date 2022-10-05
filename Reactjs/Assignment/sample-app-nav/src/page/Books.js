import { useEffect, useState } from 'react';

const axios = require('axios').default
const url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=96358825614a5d3b1a1c3fd87fca2b47&format=json&nojsoncallback=true&page=1&text=books'

export default function Books() {

    const [bookList, setBookList] = useState([])

    useEffect(() => {
        //put inside useEffect to run once using []

        axios.get(url)
            .then(function (response) {
                // handle success
                // displays whole response structure
                console.log(response);

                // make sure to check structure of json from the url
                // see - https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=96358825614a5d3b1a1c3fd87fca2b47&format=json&nojsoncallback=true&page=1&text=books
                const books = response.data.photos.photo
                // console.log(response.data.photos)
        

                // from videoList [{ title: title1, subtitle: subtitle1 }, { title: title2, subtitle: subtitle2 }]
                // to video [title1, title2]
                const bookNames = books.map((book) => {
                    return book.title
                }
                )
                setBookList(bookNames)
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

    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <h1>Books:</h1>
                    <ul>
                        {
                            bookList.map((item) =>
                                {
                                    
                                    return <li key={item}>{item}</li>
                                }
                            )
                        }
                    </ul>
                </div>
            </header>
        </div>

    )
}
