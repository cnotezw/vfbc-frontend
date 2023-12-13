

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';

import BlogHeader from '../../components/BlogHeader';
import Destinationbanner from '../../components/DestinationBanner';
import RelatedArticles from '../../components/RelatedArticles';


import { katombora_data } from '../Blog/katombora_blog_data';
import { imbabala_data } from '../Blog/imbabala_blog_data';

import { deslugify } from '../../utils';

import './styles.css';

function BlogPost() {
  const { destination, slug, id } = useParams();
  const [ blog_data, set_blog_data ] = useState(null);
  const [ current_destination, set_current_destination ] = useState(null);

  useEffect(() => {
    console.log("slug destination ", slug, destination);
    console.log("deslugify ", deslugify(slug), destination, id);

    if(destination === 'imbabala-lodge'){
      set_current_destination(imbabala_data)
      set_blog_data(imbabala_data.articles[id])
    } else {
      set_current_destination(katombora_data)
      set_blog_data(katombora_data.articles[id])
    }
   
  }, [destination, slug, id])

  console.log(" blog data ", blog_data)
  if(!blog_data) return <div className="single-blog-post">Loading</div>
    return (
      <div className="single-blog-post">
        <BlogHeader {...blog_data}/>
        <Box
              className="blog-padding"
                sx={{ 
                  // width: '100vw', 
                  fontSize: ".75rem",
                  fontFamily: 'Montserrat',
                  fontWeight: 400,
                  lineHeight: '105%',
                  letterSpacing:' -0.0625rem',
                }}
              >
                     Published: {blog_data.date}      
              </Box>
              <Box
              className="blog-padding"
                sx={{ 
                  // width: '100vw', 
                  fontSize: ".95rem",
                  fontFamily: 'Montserrat',
                  fontWeight: 600,
                  lineHeight: '105%',
                  letterSpacing:' -0.0625rem',
                  // margin: ".3rem 4rem"
                }}
              >
                     Written by: {blog_data.createdBy}      
              </Box>
        {blog_data.sections.map((post_item, i) => {
          return (
            <Box className="single-blog-content" >
              {post_item && post_item.title && <Box
                sx={{ 
                  // width: '50vw', 
                  fontSize: "2rem",
                  fontFamily: 'Montserrat',
                  fontWeight: 700,
                  color: '#565656'
                }}
              >
                  {post_item.title}
              </Box>}
              <Box
                sx={{ 
                  // width: '100vw', 
                  fontSize: "1.25rem",
                  fontFamily: 'Montserrat',
                  fontWeight: 400,
                  lineHeight: '105%',
                  letterSpacing:' -0.0625rem'
                }}
              >
                     {post_item.text}       
              </Box>
            </Box>
          )
        })}
        <RelatedArticles data={current_destination.articles} destination={destination}  />
        <Destinationbanner {...current_destination.banner} />
      </div>
    );
  }
  
  export default BlogPost;
  