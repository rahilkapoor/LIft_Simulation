import Floor from "./Floor";
import {useState} from 'react';
import "./app.css";
import Lift from "./Lift";

const App = () => {
    const [floors, setfloors] = useState(1);
    const updateFloors = (e) => setfloors(e.target.value);

    const addfloors = () => {
        const lift = document.getElementById("lift");
        if(floors < 1){
            lift.style.display = "none";
            return <div className="no__floor">
                <p>
                    <h1>Where the heck do you live?</h1>
                    <h1>🚧Please Refresh for now else lift won't show up!🚧</h1>
                    <h1>Or you can always take stairs! 😉</h1>
                </p>
            </div>;
        }
        //lift.style.display = "";
        let rows = [];
        for (let i = parseInt(floors); i > 0; --i)
            rows.push(<Floor index={i} key={i}/>);
        return rows;
    }

	return (
		<div className="App">
            <div className="app__header">
                <>
                    <h1>
                        Lift Simulation
                    </h1>
                </>
                <div className="app__header__options">
                    <input
                        className = 'app__input'
                        placeholder = "Floors in the building!" 
                        onChange = {updateFloors} 
                        type = 'number'
                        min='1'
                        disabled = {false}
                    />
                    <h1>
                        <a
                            href="https://github.com/rahilkapoor/lift_simulation" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="app__link"
                        >
                            GitHub Link
                        </a>
                    </h1>
                </div>
            </div>
			
			<div className="floors">
                {addfloors()}
				<Lift />
			</div>
		</div>
	);
};

export default App;
