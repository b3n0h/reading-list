const React = require('react')
const Fragment = React.Fragment

const Book = props =>
  <Fragment>
    <div class="ui raised padded text container segment">
      <h2 className="ui header" id='title' data-title={props.title}>{props.title}</h2>
      <p id='author' data-author={props.author}>Author : {props.author}</p>
      <p id='pageCount' data-pageCount={props.pageCount}>Page Count : {props.pageCount}</p>
      <p id='currentPage' data-currentPage={props.currentPage}>Currently on page {props.currentPage}</p>
      <p id='haveRead' data-haveRead={props.haveRead}>{props.haveRead ? 'I read this book already.' : 'I have not read this book yet.'}</p>
      <button id='editBtn' data-id={props.title}>Edit</button>
      <button id='deleteBtn' data-id={props.title}>Delete</button>
    </div>
  </Fragment>

  module.exports = Book