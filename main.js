import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <header>
      <a href="https://vitejs.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
      </a>
    </header>
    
    <main>
      <h1>Hello Vite!</h1>
      <div class="card">
        <button id="counter" type="button"></button>
      </div>
      
      <div class="resume-section">
        <a href="/resume.pdf" download class="download-btn">
          Download Resume
        </a>
      </div>
      
      <div class="social-links">
        <a href="https://linkedin.com" target="_blank" class="social-link">
          <i class="social-icon linkedin"></i>
          LinkedIn
        </a>
        <a href="https://twitter.com" target="_blank" class="social-link">
          <i class="social-icon twitter"></i>
          Twitter
        </a>
        <a href="https://github.com" target="_blank" class="social-link">
          <i class="social-icon github"></i>
          GitHub
        </a>
      </div>
      
      <p class="read-the-docs">
        Click on the Vite logo to learn more
      </p>
    </main>
  </div>
`

setupCounter(document.querySelector('#counter'))