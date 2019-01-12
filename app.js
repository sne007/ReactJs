class IndecisionApp extends React.Component {

	constructor(props){
		super(props);
		this.handleRemove = this.handleRemove.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			opt : ['thing 1', 'thing 2', 'thing 3'],
		}

	}

	handleRemove(){
//		this.props.options.				
		this.setState(() => {
			return {
				opt : []
			};
		});
	}

	handleAddOption(optionNew) {
	    if (!optionNew) {
	      return 'Enter valid value to add item';
	    } else if (this.state.opt.indexOf(optionNew) > -1) {
	      return 'This option already exists';
	    }
		this.setState((prevState) => {
			return {
				opt : prevState.opt.concat(optionNew)
			};
		});
	}

	render(){
		const title = 'Indecision';
		const subTitle = 'Put your life in hands of a computer';
		return (
			<div>
				<Header title = {title} subTitle = {subTitle}/>
				<Action isDisabled = {this.state.opt.length}/>
				<Options opt = {this.state.opt} handleRemove = {this.handleRemove}/>
				<AddOption handleAddOption = {this.handleAddOption}/>
			</div>
		);
	}
}

class Header extends React.Component {
	render(){
		return (
			<div>
				<h1> {this.props.title} </h1>
				<h2> {this.props.subTitle}  </h2>
			</div>
		);
	}
}

class Action extends React.Component {
	render(){
		return (
			<div> 
				<button disabled = {!this.props.isDisabled}> What should I do </button>

			</div>
		);

	}
}

class Options extends React.Component {

	render(){
		return (
			<div>
				<button onClick = {this.props.handleRemove}> Remove All </button>
				{

					this.props.opt.map((options) => {

						return <Option key = {options} text = {options}> </Option>

					})  
				}
			</div>	
		);
	}
}

class Option extends React.Component {
	render(){
		return (
			<div> 
				{
					this.props.text
				}
			</div>
		);

	}
}


class AddOption extends React.Component {
	constructor(props){
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			error : undefined
		}
	}
	handleAddOption(e){
		e.preventDefault();

		const option = e.target.elements.option.value.trim();
		const error = this.props.handleAddOption(option);

	    this.setState(() => {
	      return { error };
	    });
	}
	render(){
		return (
			<div> 
		        {this.state.error && <p>{this.state.error}</p>}
				<form onSubmit = {this.handleAddOption}> 
					<input type = 'text' name = 'option'/>
					<button> Add Option </button>
				</form>
			</div>
			
		);

	}
}

ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));
