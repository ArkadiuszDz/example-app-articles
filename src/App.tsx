import './App.css';
import PostsSliderContainer from './containers/PostsSlider';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import Header from './components/Header';
import Footer from './components/Footer';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <PostsSliderContainer />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
