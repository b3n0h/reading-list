const React = require('react')
const Fragment = React.Fragment

const Book = props =>
  <Fragment>
    <li id="bookTitle" data-booktitle={props.title}>Title: {props.title}</li>
    <li id="bookAuthor" data-bookauthor={props.author}>Author: {props.author}</li>
    <li id="pageCount" data-pagecount={props.pages}>Page Count: {props.pages}</li>
    <li id="currentPage" data-currentpage={props.currentPage}>Current Page: {props.currentPage}</li>
    <li id="haveRead" data-haveread={props.haveRead}>{props.haveRead ? 'I have read this book' : 'I have not read this book.'}</li>
    <button id='editBtn' data-id={props.title}>Edit</button><button id='deleteBtn' data-id={props.title}>Delete</button>
    <br />
  </Fragment>

  module.exports = Book