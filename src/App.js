import './App.css';
import React from 'react';

class FortuneComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      track: null
    };
  }

  componentDidMount(){
    fetch("http://127.0.0.1:8000/tracks/recommend")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          track: result
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render(){
    const { error, isLoaded, track} = this.state;
    if(error){
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded){
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <p>
            {track.track_name} / {track.artists}
          </p>
          <p>{track.preview_url}</p>
        </div>
      );
    }
  }
}

export default FortuneComponent;
