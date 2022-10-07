import React from 'react'

// export default function BookListing({bookclass}) {
//   return (
//     <div>
//     <h1>Books:</h1>
//     <ul>
//         {bookclass.map((item, index) =>
//                 {
//                     return  (
//                     <li key={index}>
//                         <div>
//                         <img src={item.imageUrl} alt={item.title}></img>
//                         <div>{item.title}</div>
//                         </div>
//                     </li>
//                     )
//                 }
//             )
//         }
//     </ul>
// </div>
//   )
// }

const BookListing = ((item, index, imageUrl) => {
    return (
        <li key={index}>
             <div>
            <img src={item.imageUrl} alt={item.title}></img>
            <div>{item.title}</div>
            </div>
        </li>
    )

})

export default BookListing