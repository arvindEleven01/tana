// import * as React from 'react';
// import { AppRegistry } from 'react-native';
// import App from './App';
// import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
// import { name as appName } from './app.json';

// const theme = {
//   ...DefaultTheme,
//   roundness: 2,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: '#f44336',
//     accent: '#f44336',
//   }
// };

// export default function Main() {
//   return (
//     <PaperProvider theme={theme}>
//       <App />
//     </PaperProvider>
//   );
// }

// AppRegistry.registerComponent(appName, () => Main);
import {
  AppRegistry,
} from 'react-native';
import App from './src/App'

AppRegistry.registerComponent('tanaApp', () => App);
