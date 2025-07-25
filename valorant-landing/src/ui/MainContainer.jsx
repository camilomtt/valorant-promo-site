import { Footer } from "./footer";
import { Header } from "./header";

export const MainContainer = ({ children }) => {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-grow flex items-center justify-center overflow-visible">
        {children}
      </div>
    </main>
  );
};
