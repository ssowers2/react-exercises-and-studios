import classes from './BookList.css';

export default function BookList() {  
   let book1 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1681476644i/61326735.jpg";

   let book2 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1685990976i/62874008.jpg";

   let book3 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1668613918i/62365891.jpg";

   return (
      <div style = {{border: '3px solid black'}}>
      <h3 className = "bookHeading">Books I Read This Month</h3>
      <img className="book-image" src={book1} alt="Love, Theoretically by Ali Hazelwood" />
      <img className="book-image" src={book2} alt="Cross Down by James Patterson" />
      <img className="book-image" src={book3} alt="Unfortunately Yours by Tessa Bailey"/>
    </div> 
   );
}