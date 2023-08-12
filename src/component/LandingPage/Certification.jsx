import React from 'react'
import "./style/Certification.css"
import { Link } from 'react-router-dom';
const Certification = () => {
  return (
    <section>
      <div className="certificatTitle">
        <h3>CERTIFICATE</h3>
      </div>
      <div className='certi-top'>
        <Link to="//drive.google.com/file/d/16oyNTEVwOI35ngDQ-CjsxMioIPV17IFA/preview">
        <div className='certi'>
          <img src="https://legaldocs.co.in/img/blog/WhatsApp%20Image%202020-07-08%20at%204.08.31%20PM%20(1).jpeg" alt="" />
          <h4>UDAYAM CERTIFICATE</h4>
        </div>
        </Link>
        <Link to="https://drive.google.com/file/d/16l39yv0kvdLiPN5VJd-N14QFsNmqyu7f/preview">
        <div className='certi'>
       
          <img src="images/iso.jpg" alt="" />
          
          <h4>ISO CERTIFICATE</h4>
        </div>
        </Link>
      </div>
    </section>
  )
}

export default Certification