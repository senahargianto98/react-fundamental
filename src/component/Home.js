import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <main>
        <h2>Belajar JS,Tailwind dan React</h2>
      </main>
      <nav>
        <Link to="/jsdasar">Js Dasar</Link>
      </nav>
      <nav>
        <Link to="/props/function">Props Function</Link>
      </nav>
      <nav>
        <Link to="/props/class">Props Class</Link>
      </nav>
      <nav>
        <Link to="/fetchdatafunction">Fetch Data Function</Link>
      </nav>
      <nav>
        <Link to="/fetchdataclass">Fetch Data Component</Link>
      </nav>
      <nav>
        <Link to="/tailwinds">Tailwind Css</Link>
      </nav>
      <nav>
        <Link to="/submitinput/class">Submit dan Input Class Component</Link>
      </nav>
      <nav>
        <Link to="/submitinput/function">
          Submit dan Input Function Component
        </Link>
      </nav>
    </>
  );
}

export default Home;
