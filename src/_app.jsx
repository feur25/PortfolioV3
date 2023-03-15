import FetchBlog from './pages/Models/FetchBlog';
import { Page } from "./components/Page";

function MyApp() {  
  return (
    <Page header="Blog">
    <section id="blog">
      <div className="App">
        <FetchBlog />
      </div>
    </section>
    </Page>
  );
}

export default MyApp;
