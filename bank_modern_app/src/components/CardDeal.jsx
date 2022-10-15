import styles, {layout} from '../style';
import {card} from '../assets';
import Button from "./Button"

const CardDeal = () => (
  <section id='clients' className={layout.section}>
      <div className={`${layout.sectionInfo}`}>
        <h1 className={`${styles.heading2}`}>
          Find a better card deal 
          <br className='sm:block'/>
           in few easy steps
        </h1>
        <p className={`${styles.paragraph} mt-5`}>        
          Earn 5% cash back on everyday purchases at different places each quarter like Amazon.com, 
          grocery stores, restaurants, gas stations and when you pay using PayPal, up to the quarterly 
          maximum when you activate.
        </p>

        <Button styles="mt-10"/>
      </div>
      <div className={`${layout.sectionImg}`}>
        <img src={card} alt="Card deal" />
      </div>
    </section>
)

export default CardDeal