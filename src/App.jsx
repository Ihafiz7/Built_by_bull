import React from 'react'
import Page1 from './Components/Page1'
import Page2 from './Components/Page2'
import Page3 from './Components/Page3'
import Page4 from './Components/Page4'
import Page5 from './Components/Page5'
import Page6 from './Components/Page6'

const App = () => {
  return (
    <div className='m-4 p-4 bg-stone-200'>
      <section>
        <Page1 />
      </section>
      <section>
        <Page2 />
      </section>
      <section>
        <Page3 />
      </section>
      <section>
        <Page4 />
      </section>
      <section>
        <Page5 />
      </section>
      <section>
        <Page6 />
      </section>
    </div>
  )
}

export default App