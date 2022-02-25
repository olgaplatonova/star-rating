import logo from './logo.svg';
import './App.css';


import StarRating from './components/StarRating/StarRating';



function App() {
  return (
    <div className="App">
        <StarRating totalStars={10} rating={4}/>
    </div>
  );
}
export default App;
