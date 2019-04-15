import React from 'react';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {users: []};
		this.headers = [
			{ key: 'userId', label: 'User ID' },
			{ key: 'id', label: 'ID' },
			{ key: 'title', label: 'Title' },
			{ key: 'body', label: 'Body' }
		];
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => {
				return response.json();
			}).then(result => {
				this.setState({
					users:result
				});
			});
  }
  render() {                            
		return (
			<div>
					{
						this.headers.map(function(h) {
							return (
								<th key = {h.key}>{h.label}</th>
							)
						})
					}
			
				{
            this.state.users.map(function(item, key) {             
						return (
							<div>
							<div>
									<Link to={"/1"}>
									{item.userId}
                  </Link>
									</div>
								  <div>
									<Link to={"/2"}>
									{item.title}
									</Link>
									</div>
								  <div>
									<Link to={"/2"}>
									{item.body}
									</Link>
									</div>
							</div>
							)
						})
					}
         
				</div>	
		)
	}
}
export default App;