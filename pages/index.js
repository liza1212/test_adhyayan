import { useRouter } from 'next/router';
// import createServer from './main/renderer.js';
import createServer from '@/main/renderer.js';

function HomePage() {
  // const router = useRouter();
  // function handleClick(){
  //   createServer()
  // }
  
  return (
    <div>
      <h1>Hello from Electron renderer!</h1>
      <p id="info"></p>
      <button id="start_server">
        START
      </button>
    </div>
  );
}

export default HomePage;
