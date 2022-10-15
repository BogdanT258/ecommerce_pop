import styles, {layout} from '../style';
import {apple, bill, google} from '../assets';

const Billing = () => (
  <section id='product' className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]'/>

      <div className='absolute z-[1] w-[70%] h-[70%] rounded-full -left-1/2 top-0 white__gradient'/>
    </div>
    <div className={`${layout.sectionInfo} flex-col `}>
      <h2 className={styles.heading2}>Easily control your
        <br className="sm:block hidden"/>
        billing & invoicing.
      </h2>
      <p className={`${styles.paragraph} mt-5`} >Apply for the service quickly and easily online, without going to the bank and filling out unnecessary forms, and each month decide whether you wish to defer or make payment with just one click.</p>

      <div className={`flex flex-row mt-10`}>
        <div className='mr-20 ml-5'>
          <img src={apple} alt="apple_store" className='w-[128px] h-[42px] object-contain cursor-pointer '/>
        </div>
        <div>
          <img src={google} alt="google_play" className='w-[144px] h-[42px] object-contain cursor-pointer ' />        
        </div>
      </div>
    </div> 
  </section>
)

export default Billing