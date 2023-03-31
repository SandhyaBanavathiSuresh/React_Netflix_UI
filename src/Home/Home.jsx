import React, { Component } from 'react';
import Feature from '../Components/Feature'
import List from '../Components/List'
import Navbar from '../Components/Navbar'
import supernaturals from "../Images/supernaturals.jpg";
import you from "../Images/you.jpg";
import img1 from "../Images/img1.jpg";
import img2 from "../Images/img2.jpg";
import img3 from "../Images/img3.jpg";
import img4 from "../Images/img4.jpg";
import img5 from "../Images/img5.jpg";
import img6 from "../Images/img6.jpg";
import img7 from "../Images/img7.jpg";
import img8 from "../Images/img8.jpg";
import img9 from "../Images/img9.jpg";
import img10 from "../Images/img10.jpg";
import img11 from "../Images/img11.jpg";
import img12 from "../Images/img12.jpg";
import img13 from "../Images/img13.jpg";
import img14 from "../Images/img14.jpg";
import img15 from "../Images/img15.jpg";
import img16 from "../Images/img16.jpg";
import img17 from "../Images/img17.jpg";
import img18 from "../Images/img18.jpg";
import img19 from "../Images/img19.jpg";
import img20 from "../Images/img20.jpg";

import img21 from "../Images/img21.jpg";
import img22 from "../Images/img22.jpg";
import img23 from "../Images/img23.jpg";
import img24 from "../Images/img24.jpg";
import img25 from "../Images/img25.jpg";
import img26 from "../Images/img26.jpg";
import img27 from "../Images/img27.jpg";
import img28 from "../Images/img28.jpg";
import img29 from "../Images/img29.jpg";
import img30 from "../Images/img30.jpg";
import img31 from "../Images/img31.jpg";
import img32 from "../Images/img32.jpg";
import img33 from "../Images/img33.jpg";
import img34 from "../Images/img34.jpg";
import img35 from "../Images/img35.jpg";
import img36 from "../Images/img36.jpg";
import img37 from "../Images/img37.jpg";
import img38 from "../Images/img38.jpg";
import img39 from "../Images/img39.jpg";
import img40 from "../Images/img40.jpg";


class Home extends Component {
  state = { 
    firstSet:[
      {id:1, value:img1, index:0},
        {id:2, value:img2, index:1},
        {id:3, value:img3, index:2},
        {id:4, value:img4, index:3},
        {id:5, value:img5, index:4},
        {id:6, value:img6, index:5},
        {id:7, value:img7, index:6},
        {id:8, value:img8, index:7},
        {id:9, value:img9, index:8},
        {id:10, value:img10, index:9},
    ],
    secondSet:[
      {id:11, value:img11, index:0},
        {id:12, value:img12, index:1},
        {id:13, value:img13, index:2},
        {id:14, value:img14, index:3},
        {id:15, value:img15, index:4},
        {id:16, value:img16, index:5},
        {id:17, value:img17, index:6},
        {id:18, value:img18, index:7},
        {id:19, value:img19, index:8},
        {id:20, value:img20, index:9},
    ],
    thirdSet:[
      {id:21, value:img21, index:0},
        {id:22, value:img22, index:1},
        {id:23, value:img23, index:2},
        {id:24, value:img24, index:3},
        {id:25, value:img25, index:4},
        {id:26, value:img26, index:5},
        {id:27, value:img27, index:6},
        {id:28, value:img28, index:7},
        {id:29, value:img29, index:8},
        {id:30, value:img30, index:9},
    ],
    fourthSet:[
      {id:31, value:img31, index:0},
        {id:32, value:img32, index:1},
        {id:33, value:img33, index:2},
        {id:34, value:img34, index:3},
        {id:35, value:img35, index:4},
        {id:36, value:img36, index:5},
        {id:37, value:img37, index:6},
        {id:38, value:img38, index:7},
        {id:39, value:img39, index:8},
        {id:40, value:img40, index:9},
    ]
   } 

  render() { 
    return (
          <div>
              <Navbar/>
              <Feature/>
              <List image={this.state.firstSet} />
              <List image={this.state.secondSet}/>
              <List image={this.state.thirdSet}/>
              <List image={this.state.fourthSet}/>
          </div>
        )
  }
}
 
export default Home;