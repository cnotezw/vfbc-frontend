import React from 'react';

import './styles.css';

const introStyle = {
  color: "white",
  fontSize: "6.25rem",
  textAlign: "center",
  fontWeight: 400,
  fontFamily: 'Hurricane',
  padding: 0,
  margin: 0,
  lineHeight: "4.556rem",
  zIndex: 10
};
const titleStyle = {
  color: "white",
  fontSize: "4rem",
  textAlign: "center",
  fontFamily: 'Montserrat',
  fontWeight: 700,
  padding: 0,
  margin: 0,
  lineHeight: "3.501rem",
  zIndex: 10,
  display: 'flex',
  alignItems: 'center'
};

const BlogHeader = ({ title, image }) => {

	return (
    <header className='blog-header' style={{ backgroundImage: `url(${image})`}}>
      <div className="box-overlay"></div>
        <div className="box-text">
          <h5>{title}</h5>
        </div>
    </header>
	)
}

export default BlogHeader;