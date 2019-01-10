let app = {
	name: 'Indecision App',
	subtitle: 'Put your life in hands of a computer',
	options: []
};



let count = 0;

let addOne = () => {
	let change = document.getElementById('add');
	count += 1;
	change.innerHTML = count;
	console.log(change.innerHTML);
	renderApp();
}

let reset = () => {
	let change = document.getElementById('add');
	count = 0;
	change.innerHTML = count;
	app.options = [];
	renderApp();
}

let submitted = (e) => { 
	e.preventDefault();
	let value = e.target.elements.option.value;
	if(value){
		e.target.elements.option.value = ' ';
		app.options.push(value);
		addOne();
		renderApp();
	}
}

// used for keys of child in react. with the help of these keys react can reference efficiently without
// having to render all the objects in array.
// only the object with specific key can be changed.
let key = 0;

let renderApp = () => {

	let templateThree = (
		<div>
			<h1> Indecision App </h1>
			<p> Put your life in hands of a computer </p>
			<p> {app.options.length > 0 ? 'Here are your options' : 'No options'} </p>
			<h1 id='add'> {count} </h1>
			<button onClick = {reset} > Remove All </button>
			<ol> 
				{
					app.options.map((number) => <li key = {key++}> {number} </li>)
				}		
			</ol>
			
			<form onSubmit = {submitted}>
				<input name = "option" type = 'text'/> 
				<button> Add Option </button> 
			</form>
		</div>
	);


	var appRoot = document.getElementById('app');

	ReactDOM.render(templateThree, appRoot);

}

renderApp();
