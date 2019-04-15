import React from 'react';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';

export default class Id2 extends React.Component {
    constructor(props){
        super(props);
        this.state={
            comments:[]
        }
    }
    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/posts' + "/"+this.props.match.params.id + "/comments")
            .then(response => {
                return response.json();
            }).then(result => {
                this.setState({
					comments:result
            })
            })
    }
    
    
    render() {
        console.log(this.state.comments)
        return (
            <div>
                	{
						this.state.comments.map(function(h) {
							return (
								<p key = {h.key}>{h.name}</p>
                                
							)
						})
					}
            </div>
            
        )
    }

    
}