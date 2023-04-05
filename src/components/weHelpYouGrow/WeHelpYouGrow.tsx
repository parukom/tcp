import React from 'react';
import CardToGrowText from '../cards/CardToGrowText';
import classes from './WeHelpYouGrow.module.css';
import firstImage from '../../images/first5-4.png';
import secondImage from '../../images/second4-3.png';
import thirdImage from '../../images/third5-4_.png';
import Image from 'next/image';

function WeHelpYouGrow() {
  return (
    <section className={classes.weHelpyouGrow__section}>
      <div>
        <h1 style={{ textAlign: 'center', color: 'white' }}>
          We help you grow
        </h1>
      </div>
      <div>
        <CardToGrowText
          title='Hyperpersonalization boosts sales by 30%'
          body='UPFIT uses cognitive analysis tools and real fashion stylists to improve clients’ shopping experience and this eventually results in better sales.'
        />
        <Image className={classes.img} src={firstImage} alt='main'/>
      </div>
      <div>
        <CardToGrowText
          title='Optimize business expenses'
          body='Once clients are satisfied with ordered goods, a business confronts fewer returns, meaning  improved logistics-related costs such as  packaging, shipping, and quality controls.'
        />
        <Image className={classes.img} src={secondImage} alt='main'/>
      </div>
      <div>
        <CardToGrowText
          title='Reduce seasonality losses by 15%'
          body='Our analyzed user profiles provide insights into clients’ needs and allow businesses to plan better upcoming seasonal buyings, which eventually reduce stock levels.'
        />
        <Image className={classes.img} src={thirdImage} alt='main'/>
      </div>
    </section>
  );
}

export default WeHelpYouGrow;
