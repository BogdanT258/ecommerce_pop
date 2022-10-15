import styles from '../style';
import {clients} from '../constants'

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div className={`flex-1 ${styles.flexCenter} sm:w-min-[192px]  min-w-[120px]`}>
          <img id={client.id} src={client.logo} alt="company_logo" className='sm:w-[192px] w-[100px] object contain'/>
        </div>
      ))}
    </div>
  </section>
)

export default Clients