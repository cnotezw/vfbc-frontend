

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import BlogHeader from '../../components/BlogHeader';
import Destinationbanner from '../../components/DestinationBanner';
import DestinationBlog from '../../components/DestinationBlog';


import { katombora_data } from './katombora_blog_data';
import { imbabala_data } from './imbabala_blog_data';

import './styles.css';

function Blog() {
  const { destination } = useParams();
  const [ blog_data, set_blog_data ] = useState(null);
  const [ current_destination, set_current_destination ] = useState(null);

  useEffect(() => {
    console.log("blog destination ", destination)
    if(destination !== current_destination){
      console.log("change destination: ", destination)
      if(destination === 'imbabala-lodge'){
        set_blog_data(imbabala_data)
      } else {
        set_blog_data(katombora_data)
      }
    }
   
  }, [destination])

  console.log(" blog data ", blog_data)
  if(!blog_data) return <div className="destination-blog">Loading</div>
    return (
      <div className="destination-blog">
        <BlogHeader {...blog_data.header}/>
        <DestinationBlog data={blog_data.articles} info={blog_data.about} destination={destination} />
        <Destinationbanner {...blog_data.banner} />
      </div>
    );
  }
  
  export default Blog;
  