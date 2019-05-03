import React , {Component} from 'react'
import App, {frontendUri,backendUri} from './App.js';
import SpotifyIcon from './SpotifyIcon'
import Spotify from '../../assets/spotify.png';
import LogoIcon from './LogoIcon.js';
import Player from './Player.js';

class ReloadItSelf extends Component{
  render(){
    return(
      <div id = 'log-to-left'>
        <LogoIcon/>
      </div>
    );
  }
}


 function getTrackIndex(trackID,tracks){
  for(var i=0; i<tracks.length; i++){
    if(tracks[i]._id==trackID){
      return i;
    }
  }
}

{/* load is for indicating the data being fetched from db*/}
class Profile extends Component{
  state = {
    loading : true,
    data : ''
  }
  }


 
{/* render after updating */}
  async componentDidMount(){
  {/* localstorage is better than cookie */}
    let det = localStorage.getItem('music-details')
    det = JSON.parse(det)
    let email = det.email
{/* endpoint defined in mood.js */}
    fetch(backendUri+'/get-liked?email='+email)
    .then(data=>data.json())
    .then(data=>{
      console.log(data)
      this.setState({data : data,loading :  false})
    })
    .catch(err=>{alert("ERROR : "+err)})
  }
  render(){
    return(
      <div >
       <header className ="logo-header" style = {{backgroundColor : 'black',margin : -10}}>
             <ReloadItSelf/>
              {localStorage.getItem('music-details')?
            <a href="/profile" style = {{textDecoration : 'none'}}>
               <img src={JSON.parse(localStorage.getItem('music-details')).image}
               height = "50"
               width = "50"
               style = {{borderRadius : '1em',marginTop : -30}}
                alt=""/>
               {JSON.parse(localStorage.getItem('music-details')).name}
              </div>
            </a>:null}
             <SpotifyIcon data='Connect with Spotify' img={Spotify}/>
             <br/>
             <br/>
             <center style = {{color : 'white'}}>  <h3><strong>Liked Songs</strong></h3> </center>
             <div style = {{backgroundColor : '#eee',margin : 10,padding : 1}}>
              {this.state.loading?<div>Loading ...</div>:
        }
             </div>
           </header>
          </div>

      )
  }
}

export default Profile