import { useState } from 'react';
import './index.css';

function Home() {
  const [times, setTimes] = useState(0);
  const heart = document.getElementsByClassName('heart');

  function increment(e) {
    let xValue = e.clientX - e.target.offsetLeft,
      yValue = e.clientY - e.target.offsetTop;

    heart[0].style.left = `${xValue}px`;
    heart[0].style.top = `${yValue}px`;

    heart[0].classList.add('active');
    setTimes(times + 1);

    setTimeout(() => {
      heart[0].classList.remove('active');
    }, 2000);
  }

  return (
    <div className="container">
      <div className="message">
        <h3>Clique duas vezes na imagem para curtir.</h3>
        <small>
          Você curtiu <span id="times">{times}</span> vezes
        </small>
      </div>
      <div className="love" onDoubleClick={(e) => increment(e)}>
        <i className="fa-solid fa-heart heart"></i>
      </div>
    </div>
  );
}

export default Home;
