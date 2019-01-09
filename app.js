let snehith = {
	name: 'snehith',
	age: 26,
	gender: 'm'
};

// later used for conditional checking
let checkTrue = (name) => {
	if(name == snehith.name)
		return name;
	else return undefined;
}

  // without curly braces, it would just print the text inside the h1 tags, 
  // just like plain html

var templateTwo = (
  <div>
    <h1> {checkTrue('snehith')} </h1>
    <p>Age: 26</p>
    <p>Location: Philadelphia</p>

    <ol>
    	<li> {snehith.name} </li>
    	<li> {snehith.age} </li>
    </ol>	 
  </div>
);


let count = 0;

let addOne = () => {
	count += 1;
	document.getElementById('add').innerHTML = count;
}

let reset = () => {
	count  = 0;
	document.getElementById('add').innerHTML = count;
}

let subtract = () => {
	count -= 1;
	document.getElementById('add').innerHTML = count;
}

let templateThree = (
	<div>
		<h1 id='add'> 0 </h1>
		<button onClick = {addOne} > Add 1 </button>
		<button onClick = {reset} > Reset </button>
		<button onClick = {subtract} > Subtract 1</button>
	</div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(templateThree, appRoot);
