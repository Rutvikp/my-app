import React from "react";
import HoverVideoPlayer from 'react-hover-video-player';

class VideoHover extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            item: props.item
        }
    }


    render(){

  
        return (
            <HoverVideoPlayer className="border-radius-small hover r-card-video"
            videoSrc={this.props.item.imgSrc}
            pausedOverlay={
                <img src={this.props.item.thumbnail}/>
            }
            loadingOverlay={
                <div className="loading-overlay">
                <div className="loading-spinner" />
                </div>
            }
            />
        );
}
}

export default VideoHover;