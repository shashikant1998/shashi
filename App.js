import React from "react";
import './App.css';
class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div>;

		return (
			<div className="App">
				<h1> Fetch data from an api in react </h1> {
					items.map((item) => (
						<table class="tab">
							<tr>
								<td>id: {item.id}</td>,
								<td>title: {item.title}</td>,
								<td>body: {item.body}</td>
							</tr>
						</table>

					))
				}
			</div>
		);
	}
}

export default App;
