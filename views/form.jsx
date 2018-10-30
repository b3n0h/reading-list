const React = require('react')

const Form = _ => 
  <div className="ui grid centered padded">
    <div className="eight wide column">
      <form className="ui form">
        <div className="field">
          <h1>Reading List App</h1>
          <label>Book Title</label>
          <input type="text" name="first-name" placeholder="Jurassic Park" id="title" />
        </div>
        <div className="field">
          <label>Book Author</label>
          <input type="text" name="last-name" placeholder="Michael Crichton" id="author" />
        </div>
        <div className="field">
          <label>Page Count</label>
          <input type="text" name="last-name" placeholder="400" id="pageCount" />
        </div>
        <div className="field">
          <label>Current Page Number</label>
          <input type="text" name="last-name" placeholder="135" id="currentPage" />
        </div>
        <div className="field">
          <div className="ui checkbox">
            <input type="checkbox" name="example" id="checkBox" />
            <label>I have read this book before</label>
          </div>
        </div>
        <button className="ui button" type="submit" id="addBook">Add Book</button>
      </form>
      <br />
      <hr />
      <br />  
      <li><a href="/">Add Book</a></li>
      <li><a href="">Reading List</a></li>
    </div>
  </div>

module.exports = Form