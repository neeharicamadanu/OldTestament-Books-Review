import React from 'react';
import Review from './Review';

function App() {
  return (
    <main>
      <section>
        <div className='container'>
          <div className='title'>
            <h2>Old Testament Reviews</h2>
            <div className='underline'></div>
          </div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
