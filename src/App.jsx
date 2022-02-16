import { AppRouter } from './routes';
import './styles.css'
import {Navbar} from "./components/Navbar";

export const App = () => {

  return (
      <>
        <Navbar/>
        <AppRouter/>
      </>
    );
}
