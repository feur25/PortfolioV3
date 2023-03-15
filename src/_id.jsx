import FetchProject from './pages/Models/FetchProject';
import { Page } from "./components/Page";

function MyNewApp() {  
  return (
    <Page header="Blog">
      <section id="blog">
        <FetchProject />
      </section>
    </Page>
  );
}

export default MyNewApp;