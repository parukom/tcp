import React from 'react';
import classes from './ReachMorePeople.module.css';
import Image from 'next/image'
import main_image from '/public/images/main-image-top.png'

export default function ReachMorePeople() {


  return (
    <section>
      <div className={classes.text_div}>
        <h1>Reach more people in real time</h1>
        <p>
          "Upgrade your wardrobe with Upfit - your personal stylist on demand!"
        </p>
      </div>
      <div className={classes.image_div}>
        {/* <img src='../../images/main-image-top.png' alt='TCP' /> */}
        <Image src={main_image} alt='TCP' width={160} height={240 } />
      </div>
      <div className={classes.btn_div}>
        <button className={classes.btn_start_now}>Start now</button>
      </div>
    </section>
  );
}
