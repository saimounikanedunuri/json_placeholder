import React from 'react';
import data from './data.json';
import { Link } from 'react-router-dom';

export default class Id1 extends React.Component {
    render() {
        console.log(this.props.match.params.vidid);
        const url = "https://www.youtube.com/embed/" + this.props.match.params.vidid;
        return (
            <div >
                <iframe width="550" height="300" src={url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
                
                <div style={{ float: "right" }}>
                    {data.map(function (video) {
                        return <div>
                            <Link to={"/" + video.vidid}>
                                <img src={video.thumbnil} style={{
                                    width: 250,
                                    float: "right"
                                }} > 
                                </img>
                                <div>
                                    <p>{video.name}</p>
                                    <p>Published By: {video.postedBy}</p>
                                    <p>{video.views} Views</p>
                                </div>
                                <br />
                                
                            </Link>
                        </div>
                    }
                    )}
                </div>
            </div>
        )
    }
}