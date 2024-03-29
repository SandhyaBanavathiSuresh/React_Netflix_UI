import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import React, { useRef, useState } from 'react'
import './List.scss'
import ListItem from './ListItem'

const List = ({image}) => {
    const [slideNumber, setSlideNumber] = useState(0)
    //same as query selector is jS
    const listRef = useRef()

    const handleclick = (direction) => {
        //gives the disance from x,y axis and also height and width
        let distance = listRef.current.getBoundingClientRect().x - 50
        if(direction === "left" && slideNumber > 0){
            setSlideNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${235 + distance}px)`
        }
        if(direction === "right" && slideNumber < 5){

            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-235 + distance}px)`
        }
    }
  return (
    <div className='list'>
        <span className="listTitle">Continue to Watch</span>
        <div className="wrapper">
            <ArrowBackIosNewOutlined className='slideArrow left' onClick={()=>handleclick("left")}/>
            <div className="container" ref={listRef}>
            {image.map(c=>(
                    <ListItem 
                    key = {c.id} 
                    value = {c.value} 
                    index = {c.index}/>
                ))}
                {/* <ListItem index={0} imgSlide={image}/>
                <ListItem index={1} imgSlide={image}/>
                <ListItem index={2}/>
                <ListItem index={3}/>
                <ListItem index={4}/>
                <ListItem index={5}/>
                <ListItem index={6}/>
                <ListItem index={7}/>
                <ListItem index={8}/>
                <ListItem index={9}/> */}
            </div>
            <ArrowForwardIosOutlined className='slideArrow right' onClick={()=>handleclick("right")}/>
        </div>
    </div>
  )
}

export default List