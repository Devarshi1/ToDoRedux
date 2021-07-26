import './App.css';
import ToDoContainer from './components/ToDoContainer';
import {Provider} from 'react-redux'
import store from  './redux/store'
function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <ToDoContainer/>
      </div>
    </Provider>
  );
}

export default App;
