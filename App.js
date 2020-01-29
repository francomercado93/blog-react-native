import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screen/IndexScreen';
import { BlogProvider } from './src/context/BlogContext';

const navigator = createStackNavigator({
  Index: IndexScreen
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
});


const App = createAppContainer(navigator);

// Se pasa a <App/> como children de  la aplicacion
export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  )
}