import { useBlog } from './hooks';

function App() {
  const { isLoaded, posts, comments } = useBlog();

  return (
    <main className='flex flex-col w-full h-screen bg-zinc-900 p-5'></main>
  );
}

export default App;
