import './App.css';

function App() {

  return (
    <div className="bg-flat-yellow min-h-screen flex justify-center items-center">
      <div className="w-80 md:w-96 font-figtree p-6 flex flex-col bg-white rounded-2xl border-2 border-black shadow-[5px_5px_0px_rgba(0,0,0,0.9)]">
        <img src="src\assets\images\illustration-article.svg" className="rounded-xl" alt="Illustration article"/>
        <div className="mt-6 bg-flat-yellow px-3 py-1 w-max rounded-md text-sm font-extrabold">Learning</div>
        <p className="mt-3 font-semibold text-sm">Published 21 Dec 2023</p>
        <h1 className="mt-3 text-xl md:text-2xl font-extrabold">HTML & CSS foundations</h1>
        <p className="mt-3 text-gray-500 font-medium text-md">These languages are the backbone of every website, defining structure, content, and presentation.</p> 
         
        <div className="flex items-center mt-5">
          <img src="src\assets\images\image-avatar.webp" className="w-9 h-9 rounded-full" alt="Image avatar"/>
          <p className="ml-3 font-extrabold text-sm">Greg Hooper</p>
        </div>
      </div>
    </div>
  )
}

export default App;
