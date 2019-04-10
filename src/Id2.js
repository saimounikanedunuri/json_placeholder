import React from 'react';
import data from './data.json';
import { Link } from 'react-router-dom';

export default class Id1 extends React.Component {
    render() {
        return (
            <div>
                {data.map(function (video) {
                    return <div>
                        <Link to={"/" + video.vidid}>
                            <img src={video.thumbnil} style={{ width: 250 }}></img>
                        </Link>
                        <div>
                            <h2>{video.name}</h2>
                            <h4 style={{ marginBlockStart: "-0.8rem",marginBlockEnd: "-0.67em"}}>Published By: {video.postedBy}</h4>
                        <p>{video.views} Views</p>
                        <hr />
                    </div>
                    </div>
            }
            )}
            </div>
        )
    }
}