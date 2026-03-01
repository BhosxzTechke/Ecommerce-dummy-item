
import BasketItems from './BasketItems'
import styles from './page.module.css'

    export default function page() {
        return (


            <div className={styles.basket}>
                
                        <div className='page-header'>


                            <h1>Shopping Bag</h1>

                        </div>

                    <BasketItems/>

                
            </div>


        )
    }
