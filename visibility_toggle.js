
let hide = () => {

	if(document.getElementById('para').style.visibility == 'hidden')
		document.getElementById('para').style.visibility = 'visible';
	else
		document.getElementById('para').style.visibility = 'hidden';
}

let render = () => {

	let renderUI = (
		<div> 
			<h1> VISIBILITY TOGGLE </h1>
			<button onClick = {hide}> Hide Details </button>
			<p id = 'para'> This is the required text </p>
		</div>
	);

	let appRoot = document.getElementById('app');
	ReactDOM.render(renderUI, appRoot);

}

render();
