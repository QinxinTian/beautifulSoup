import React, { Component } from 'react';
import { withRouter } from 'react-router';
import '../../styles/profile.css';
import magniFyingImage from '../../assets/img/magnifying-glass.svg';
import Bg from '../../assets/img/Bg.png';
import BannerImg from '../../assets/img/banner.jpg';
import Back from '../../assets/download1.png';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      email: 'Dummy'
    }
  }
  goHome = () => {
    this.props.history.push('/');
  }
  componentDidMount() {
    const email = this.props.location.state.email;
    console.log(this.props.location);
    if (email) this.setState({ email });
  }
  render() {
    const { email } = this.state;
    return (
      <div>
      <div className="top1" style={{ backgroundImage: `url(${BannerImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <div className="container1">
          <div className="nav1">
            <div className="nav1_heading">
              <img src={Back} width="30px" onClick={() => this.goHome()}/>
              <h1>{email} Profile</h1>
            </div>
            <div className="nav1_txt">
              <div className="search1">
                <input className="input_uni" type="text" placeholder="search" />
                <img src={magniFyingImage} />
              </div>
            </div>
          </div>
          <div className="user1">
            <img src={Bg} alt="" />
            <div className="user1_name">
              <h3>Qinxin Tian</h3>
              <p>Guangzhou</p>
            </div>
          </div>
          <ul className="user1-widget">
            <li>
              <h2>29</h2>
              <p>Followers</p>
            </li>
            <li>
              <h2>342</h2>
              <p>Followers</p>
            </li>
            <li>
              <h2>3k</h2>
              <p>Followers</p>
            </li>
            <li>
              <h2>29</h2>
              <p>Followers</p>
            </li>
            <li>
              <h2>29</h2>
              <p>Followers</p>
            </li>
          </ul>
        </div>
      </div>
        <div className="box1">
          <div className="container1">
            <div className="button1">
              <p>Qinxin Tian</p>
              <button>submit</button>
            </div>
            <div className="box1">
              <div className="img">
                  <img src={Bg} width="276px" height="276px" />
              </div>
              <div className="img2">
                  <img src={Bg} width="276px" height="276px" />
              </div>
              <div className="img">
                  <img src={Bg} width="276px" height="276px" />
              </div>
              <div className="img">
                  <img src={Bg} width="276px" height="276px" />
              </div>
            </div>
            <div className="box1">
              <div className="img">
                  <img src={Bg} width="276px" height="276px" />
              </div>
              <div className="img">
                  <img src={Bg} width="276px" height="276px" />
              </div>
              <div className="img">
                  <img src={Bg} width="276px" height="276px" />
              </div>
              <div className="img">
                  <img src={Bg} width="276px" height="276px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(Profile);