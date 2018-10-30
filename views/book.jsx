const React = require('react')
const Fragment = React.Fragment

const Book = props =>
  <Fragment>
    <li id="bookTitle" data-booktitle={props.title}>Title: {props.title}</li>
    <li id="bookAuthor" data-bookauthor={props.author}>Author: {props.author}</li>
    <li id="pageCount" data-pagecount={props.pages}>Page Count: {props.pages}</li>
    <li id="currentPage" data-currentpage={props.currentPage}>Current Page: {props.currentPage}</li>
    <li id="isRead" data-isread={props.isRead}>{props.isRead ? 'I have read this book' : 'I have not read this book.'}</li>
    <li></li>
  </Fragment>

  module.exports = Book