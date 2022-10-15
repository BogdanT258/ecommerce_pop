import styles from '../style';
import Button from "./Button";

const CTA = () => (
  <section className='flex md:flex-row flex-col justify-between w-full bg-black-gradient-2 rounded-[20px] py-[60px] px-[80px]'>
    <div className=''>
      <h1 className={styles.heading2}>Let's try our service now!</h1>
      <p className={`${styles.paragraph} max-w-[500px] mt-5`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
    </div>
    <div className='mt-10'>
      <Button/>
    </div>
  </section>
)

export default CTA