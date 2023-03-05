import React from "react";
import "./Feature.scss";
import cover from "../Images/strangerthings.jpg";
import { InfoOutlined, PlayArrow } from "@mui/icons-material";

const Feature = ({type}) => {
  return (
    <div className="feature">
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === 'movie' ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option hidden>Genre</option>
                        <option value="action">Action</option>
                        <option value="comedy">Comedies</option>
                        <option value="drama">Drama</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-Fi</option>
                        <option value="sport">Sports</option>
                        <option value="thriller">Thriller</option>
                    </select>
                </div>
            )}
        </div>
      <img src={cover} alt="" width="100%" />
      <div className="info">
        <span className="desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
          repudiandae rerum vel ipsum cum placeat ut, explicabo quibusdam
          dolorem quod blanditiis recusandae rem corrupti obcaecati unde
          excepturi! Iste, est veniam?
        </span>
        <div className="buttons">
            <button className="play">
                <PlayArrow/>
                <span>Play</span>
            </button>
            <button className="more">
                <InfoOutlined/>
                <span>More Info</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
