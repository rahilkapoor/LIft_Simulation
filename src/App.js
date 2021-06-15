import Floor from "./Floor";
import "./app.css";

const App = () => {
	return (
		<div className="App">
			Lift Simulations
			<div className="floors">
				<Floor index={4} />
				<Floor index={3} />
				<Floor index={2} />
				<Floor index={1} />
				<div className="lift" id="lift"></div>
			</div>
		</div>
	);
};

export default App;
