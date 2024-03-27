import React from 'react'
import styles from "./Product.module.css"
import {getImageUrl} from "../../utils"


export const Product = () => {
    return (
        <section  className={styles.container} data-aos="fade" id="product"> 
            <h2 className={styles.title}>Our Product - NeuraStock&trade;</h2>
            <div className={styles.projects} data-aos="fade-up" data-aos-delay="200">           
                    <div className={styles.container2}>
                        <img src={getImageUrl("Product/ai.png")} className={styles.icon}/>
                        <h3 className={styles.title2}>AI Delivery Management</h3>
                        <p className={styles.description}>
                        NeuraStock streamlines FMCG deliveries, providing real-time updates and efficient tracking.                        </p>
                    </div>
                    <div className={styles.container2}>
                        <img src={getImageUrl("Integrations/whatsapp.png")} className={styles.icon}/>
                        <h3 className={styles.title2}>WhatsApp Integration</h3>
                        <p className={styles.description}>
                        Manage delivery statuses and orders seamlessly through WhatsApp for timely communication.                        </p>
                    </div>
                    <div className={styles.container2}>
                        <img src={getImageUrl("Product/track.png")} className={styles.icon}/>
                        <h3 className={styles.title2}>Order Tracking</h3>
                        <p className={styles.description}>
                        Monitor delivery status, track orders, and manage inventory efficiently with NeuraStock.                     </p>
                    </div>  
                         
            </div><div className={styles.projects} data-aos="fade-up" data-aos-delay="200" >           
                    
                    <div className={styles.container2}>
                        <img src={getImageUrl("Features/scalable.png")} className={styles.icon}/>
                        <h3 className={styles.title2}>Customizable Solutions</h3>
                        <p className={styles.description}>
                        Tailor NeuraStock to fit specific needs, adapting to evolving requirements for optimization.                        </p>
                    </div>  
                    <div className={styles.container2}>
                        <img src={getImageUrl("Features/analytics.png")} className={styles.icon}/>
                        <h3 className={styles.title2}>Data-Driven Insights</h3>
                        <p className={styles.description}>
                        Gain valuable insights into delivery performance, enabling informed decision-making and improvement strategies.                        </p>
                    </div>  
                  <div className={styles.container2}>
                        <img src={getImageUrl("Product/efficiency.png")} className={styles.icon}/>
                        <h3 className={styles.title2}>Enhanced Efficiency</h3>
                        <p className={styles.description}>
                        Improve delivery accuracy and productivity with NeuraStock, minimizing errors and optimizing resources.
                        </p>
                    </div> 
                           
            </div>
            
        </section>
      )
}