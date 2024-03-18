
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { init } from './src/db';
import { fonts } from "./src/global/fonts";
import MainNavigator from "./src/navigation/MainNavigator";
import store from './src/store';


init() 
.then(() => console.log('DB iniciada'))
.catch((err) =>{
  console.log('Inicializacion DB fallo');
  console.log(err)
})
export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}


