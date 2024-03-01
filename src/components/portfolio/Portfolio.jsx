import { useRef } from "react";
import "./portfolio.scss"
import {motion,useScroll,useSpring, useTransform} from "framer-motion";
import emailjs from '@emailjs/browser';

const items =[
    {
        id:1,
        title:"React Commerce",
        img:"https://images.pexels.com/photos/7590796/pexels-photo-7590796.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores excepturi quasi, ea error id quisquam vero quidem. Harum, vitae? Maxime recusandae officia harum accusantium reprehenderit sapiente odio ipsum possimus nobis."
    },
    {
        id:2,
        title:"Next JS Commerce",
        img:"https://images.pexels.com/photos/18037931/pexels-photo-18037931.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400&h=250&fit=crop&crop=focalpoint",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores excepturi quasi, ea error id quisquam vero quidem. Harum, vitae? Maxime recusandae officia harum accusantium reprehenderit sapiente odio ipsum possimus nobis."
    },
    {
        id:3,
        title:"Vanilla JS App",
        img:"https://images.pexels.com/photos/15260732/pexels-photo-15260732.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400&h=250&fit=crop&crop=focalpoint",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores excepturi quasi, ea error id quisquam vero quidem. Harum, vitae? Maxime recusandae officia harum accusantium reprehenderit sapiente odio ipsum possimus nobis."
    },
    {
        id:4,
        title:"Music App",
        img:"https://images.pexels.com/photos/1080953/pexels-photo-1080953.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores excepturi quasi, ea error id quisquam vero quidem. Harum, vitae? Maxime recusandae officia harum accusantium reprehenderit sapiente odio ipsum possimus nobis."
    }
]
const Single=({item})=>{
    const ref=useRef();
    const {scrollYProgress}=useScroll({target:ref});
    const y=useTransform(scrollYProgress,[0,1],[-300,300])
    return (
        <section >
            <div className="container">
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                <img src={item.img}></img>

                </div>
               
                <motion.div className="textContainer" style={{y}}>
                    <h2 >{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See Demo</button>
                </motion.div>


                </div>
               
            </div>
        </section>
    )
}

export default function Portfolio() {
    const ref=useRef()
    const {scrollYProgress}=useScroll({target:ref,offset:["end end","start start"]});
    const scaleX=useSpring(scrollYProgress,{
        stiffness:100,
        damping: 30,

    })

  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{ scaleX: scaleX}}className="progressBar">

            </motion.div>
        </div>
    {
        items.map(item=>(
            <Single item={item} key={item.id}/>
        ))
    }
      
    </div>
  )
}
