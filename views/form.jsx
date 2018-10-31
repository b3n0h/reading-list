const React = require('react')

const Form = props => 
  <div className="ui grid centered padded">
    <div className="eight wide column">
      <form className="ui form">
        <div className="field">
          <label>Book Title</label>
          <input type="text" name="first-name" placeholder={props.title ? '' : "Jurassic Park"} id="title" value={props.title ? props.title : ''} />
        </div>
        <div className="field">
          <label>Book Author</label>
          <input type="text" name="last-name" placeholder={props.author ? '' : "Michael Crichton"} id="author" value={props.author ? props.author : ''} />
        </div>
        <div className="field">
          <label>Page Count</label>
          <input type="text" name="last-name" placeholder={props.pages ? '' : "400"} id="pageCount" value={props.pages ? props.pages : ''} />
        </div>
        <div className="field">
          <label>Current Page Number</label>
          <input type="text" name="last-name" placeholder={props.currentPage ? '' : "135"} id="currentPage" value={props.currentPage ? props.currentPage : ''} />
        </div>
        <div className="field">
          <div className="ui checkbox">
            <input type="checkbox" tabIndex="0" className="hidden" id="haveRead" checked={!!props.haveRead} />
            <label htmlFor="haveRead">I have read this book before</label>
          </div>
        </div>
        {props.title ? <button type='submit' id='editBook'>Edit Book</button> : <button className="ui button" type="submit" id="addBook">Add Book</button>}
      </form>
    </div>
  </div>

module.exports = Form