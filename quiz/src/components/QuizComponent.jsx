import  { Component } from 'react'


class QuizComponent extends Component {
  
 render() {
  

    return (
    <div className='container'>
      <div className='quiz'>
        <h2 className='question'>Question</h2>
        <div className='fifteen'>
        <p >1 of 15</p>
        </div>
        <p className='mammal'>What is the only mammal that can jump?</p>
        <div className='options'>
        
            <button className='opt'>Dog</button>
            <button className='opt'>Elephant</button>
            <button className='opt'>Goat</button>
            <button className='opt'>Lion</button>
        
        </div>
        <div className='next-buttons'>
          <button className='previous' >Previous</button>
          <button className='next' >Next</button>
          <button className='quit'>Quit</button>
        </div>

      </div>
      
    </div>
    )
  }
}

  
export default QuizComponent