import React from 'react';
import ReactMarkdown from 'react-markdown';

const App = () => {
  const [input, setInput] = React.useState('### markdown preview');
  return (
    <main>
      <section className='markdown'>
        <textarea
          className='input'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
        <article className='result'>
          <ReactMarkdown>{input}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
};

export default App;
