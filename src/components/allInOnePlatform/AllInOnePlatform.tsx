import React from 'react';

import classes from './AllInOnePlatform.module.css';
import CardAllInOne from '../cards/CardAllInOne';

import WirelessIcon from '../../icons/WirelessIcon';
import UpArrowIcon from '../../icons/UpArrowIcon';
import CameraIcon from '../../icons/CameraIcon';
import LaptopMobileIcon from '../../icons/LaptopMobileIcon';
import AnalyticsIcon from '../../icons/AnalyticsIcon';
import DollarIcon from '../../icons/DollarIcon';

function MainPageSectionTwo() {
  return (
    <section className={classes.section_two}>
      <div className={classes.title_div}>
        <h1>All in one platform</h1>
        <p>Our stylists take care of the customers, so you do not have to</p>
      </div>
      <div className={classes.cards_div}>
        <CardAllInOne
          title='Upload & Organise'
          icon={<UpArrowIcon />}
          body='Stylists can upload in bulk, organize content in categories.'
        />
        <CardAllInOne
          title='Video On-Demand'
          icon={<CameraIcon />}
          body='Our stylists have personal video calls with clients'
        />
        <CardAllInOne
          title='Chat Live'
          icon={<WirelessIcon />}
          body='Stylists chat with clients live whenever they need advice on what to buy'
        />
        <CardAllInOne
          title='For All Devices'
          icon={<LaptopMobileIcon />}
          body='Get organized on all devices.'
        />
        <CardAllInOne
          title='Analytics'
          icon={<AnalyticsIcon />}
          body='Know what your audience likes & how your content is performing.'
        />
        <CardAllInOne
          title='Monetizations'
          icon={<DollarIcon />}
          body='Offer subscriptions or one-time purchases. Accept credit cards & PayPal.'
        />
      </div>
    </section>
  );
}

export default MainPageSectionTwo;
