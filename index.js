const element = (
  <div className='match-container'>
    <h1 className='super-over-heading'>Super Over League</h1>
    <img
      src='https://assets.ccbp.in/frontend/react-js/rcb-img.png'
      className='image-style'
    />
    <img
      src='https://assets.ccbp.in/frontend/react-js/csk-img.png'
      className='image-style'
    />
  </div>
)

const rootElement = document.getElementById('root')
rootElement.className = 'bg-container'

ReactDOM.render(element, document.getElementById('root'))
