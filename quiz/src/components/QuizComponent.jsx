import  { Component } from 'react'

export default class QuizComponent extends Component {
  render() {
    return (
    <>
      <div className='quiz'>
        <h2 className='question'>Question</h2>
        <div className='fifteen'>
        <p >1 of 15</p>
        </div>
        <p className='mammal'>Which is the only mammal that can jump?</p>
        <div>
        <div className='option-o'>
            <button className='dog'>Dog</button>
            <button className='eleph'>Elephant</button>
            
        </div>
        <div className='option-t'>
            <button className='goat'>Goat</button>
            <button className='lion'>Lion</button>
        </div>
        </div>
        <div className='next-buttons'>
          <button className='previous'>Previous</button>
          <button className='next'>Next</button>
          <button className='quit'>Quit</button>
        </div>

      </div>
      
    </>
    )
  }
}
