import styles from '../style';
import {quotes} from '../assets';

const FeedbackCard = ({content, name, title, img}) => (
  <div className='flex justify-between flex-col px-10 feedback-card  max-w-[370px] py-8 md:mr-10 sm:mr-5 mr-0 my-5 rounded-[20px]'>
    <div>
      <img src={quotes} alt="double_qoutes" className='`w-[34px] h-[34px] mb-5 object-contain object-left' />
      <p className={`${styles.paragraph} italic`}>{content}</p>
    </div>
    <div className='flex mt-5'>
      <div>
        <img src={img} alt="image" />        
      </div>
      <div className='px-5 py-5'>
        <span className='font-popins font-semibold text-white text-[18px] leading-[23px]'>{name}</span>
        <br />
        <span className='font-popins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>{title}</span>
      </div>
    </div>
  </div>
)

export default FeedbackCard