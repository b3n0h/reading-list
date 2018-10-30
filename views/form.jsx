const React = require('react')

const Form = _ => 
  <div className="ui grid centered">
    <div className="eight wide column">
      <form className="ui form">
        <div className="field">
          <h1>Reading List App</h1>
          <label>Book Title</label>
          <input type="text" name="first-name" placeholder="Jurassic Park" />
        </div>
        <div className="field">
          <label>Book Author</label>
          <input type="text" name="last-name" placeholder="Michael Crichton" />
        </div>
        <div className="field">
          <label>Page Count</label>
          <input type="text" name="last-name" placeholder="400" />
        </div>
        <div className="field">
          <label>Current Page Number</label>
          <input type="text" name="last-name" placeholder="135" />
        </div>
        <div className="field">
          <div className="ui checkbox">
            <input type="checkbox" name="example" />
            <label>I have read this book before</label>
          </div>
        </div>
        <button className="ui button" type="submit">Add Book</button>
      </form>
      <br />
      <hr />
      <br />  
      <li><a href="/">Add Book</a></li>
      <li><a href="">Reading List</a></li>
    </div>
  </div>

module.exports = Form