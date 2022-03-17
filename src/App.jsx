import { AppRouter } from "./routes";
import "./styles.css";
import { Buffer } from "buffer";
global.Buffer = Buffer;

export const App = () => {
  return (
    <>
      <AppRouter />
    </>
  );
};
