class IndecisionApp extends React.Component {
	render(){
		const title = 'Indecision';
		const subTitle = 'Put your life in hands of a computer';
		const opt = ['thing 1', 'thing 2', 'thing 3'];
		return (
			<div>
				<Header title = {title} subTitle = {subTitle}/>
				<Action />
				<Options opt = {opt}/>
				<AddOption />
			</div>
		);
	}
}
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption />
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

				<button> What should I do </button>

			</div>
		);

	}
}

class Options extends React.Component {
	handleRemove(){
		
	}
	render(){
		return (
			<div>
				<button onClick = {this.handleRemove}> Remove All </button>
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
	handleAddOption(e){
		e.preventDefault();
		const option = e.target.elements.option.value.trim;
		if(option)
			alert(option);
	}
	render(){
		return (
			<div> 
				<form onSubmit = {this.handleAddOption}> 
					<input type = 'text' name = 'option'/>
					<button> Add Option </button>
				</form>
			</div>
			
		);

	}
}

ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));
