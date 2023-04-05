import Image from 'next/image';
import classes from './StartYourOwnBusiness.module.css';
import main_image from '/images/main-image-top.png';


function StartYourOwnBusiness() {
  return (
    <section className={classes.startYourOwnBusiness__section}>
      <div>
        <h1>Start your own business</h1>
        <p>
          Consistent quality and experience across all platforms and devices.
        </p>
        <div className={classes.StartYourOwnBusiness__btn_div}>
          <button className={classes.startYourOwnBusiness__btn_start_now}>
            Start now
          </button>
        </div>
      </div>
      <Image src={main_image} alt='image'/>
    </section>
  );
}

export default StartYourOwnBusiness;
