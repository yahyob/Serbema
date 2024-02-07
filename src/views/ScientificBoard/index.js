import React from 'react'
import "./style.scss"
function ScientificBoard() {
  return (
    <div className='scientific_board'>
      <h3 className="title">
        scientific board
      </h3>
      <a href="/assets/files/1.pdf" target="_blank" rel="noopener noreferrer">
        <figure>
          <img src="/assets/img/1.png" alt="" />
        </figure>
      </a>
      <a href="/assets/files/2.pdf" target="_blank" rel="noopener noreferrer">
        <figure>
          <img src="/assets/img/2.png" alt="" />
        </figure>
      </a>
      <a href="/assets/files/3.pdf" target="_blank" rel="noopener noreferrer">
        <figure>
          <img src="/assets/img/3.png" alt="" />
        </figure>
      </a>
      <a href="/assets/files/4.pdf" target="_blank" rel="noopener noreferrer">
        <figure>
          <img src="/assets/img/4.png" alt="" />
        </figure>
      </a>

    </div >
  )
}

export default ScientificBoard