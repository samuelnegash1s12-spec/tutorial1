import './App.css';
import MyButton from './components/clickmebutton';
import Welcome from './components/welcome';
import Profile from './components/profile';

function App() {
  return (
    <div className='App'>
      <Welcome />
      <Profile />
     <MyButton />
      
    </div>
  );
}

export default App;
