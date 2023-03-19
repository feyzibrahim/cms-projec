import { AuthContextProvider } from "./hooks/context/AuthContext";
import Home from "./globalClasses/Home";
import 'react-native-gesture-handler';

export default function App() {
  return (
    <AuthContextProvider>
      <Home />
    </AuthContextProvider>
  );
}
