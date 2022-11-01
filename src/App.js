import Programme from './components/Programme';
import './App.css';
import data from './data.json';
import logo from './images/logoM6.png';

function App() {
	console.log(data[0].time);
	return (
		<>
			<header>
				<img src={logo} alt="logo M6"></img>
				<span>M6</span>
			</header>
			{data.map((element, index) => {
				return <Programme key={index} data={element}></Programme>;
			})}
		</>
	);
}

export default App;
