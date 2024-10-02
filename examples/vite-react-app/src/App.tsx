import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { generate } from '@kiota-community/kiota-wasm'
// import mainUrl from './wasm-kiota/main.js?url'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <a onClick={ async () => {
          // @ts-ignore
          const { generate } = await import('/kiota-wasm/main.js?url');
          generate("", "Java", "demo", "my-namespace", "", "")
        }}>Run Kiota in browser!</a>
    </>
  )
}

export default App
