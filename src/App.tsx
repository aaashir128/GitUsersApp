import "./App.css";
import ProjectRoutes from "./Routes";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./config/QueryClient";

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ProjectRoutes />
      </QueryClientProvider>
    </>
  );
}

export default App;
