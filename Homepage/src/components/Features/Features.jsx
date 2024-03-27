import React from 'react'
import styles from "./Features.module.css"
import {getImageUrl} from "../../utils"


export const Features = () => {
    return (
        <section  className={styles.container} data-aos="fade"> 
            <h2 className={styles.title}>Features</h2>
            <div className={styles.projects} data-aos="fade-up" data-aos-delay="200">           
                    <div className={styles.container2}>
                        <img src={getImageUrl("Features/24.png")} className={styles.icon}/>
                        <h3 className={styles.title2}>24/7 Availability</h3>
                        <p className={styles.description}>
                        Ensure uninterrupted availability to assist users with inquiries and transactions, enhancing accessibility and customer satisfaction.
                        </p>
                    </div>
                    <div className={styles.container2}>
                        <img src={getImageUrl("Features/personalized.png")} className={styles.icon}/>
                        <h3 className={styles.title2}>Personalized Responses</h3>
                        <p className={styles.description}>
                        Utilize advanced algorithms to deliver tailored responses based on user inputs and historical interactions, fostering a personalized user experience.
                        </p>
                    </div>
                    <div className={styles.container2}>
                        <img src={getImageUrl("Features/integration.png")} className={styles.icon}/>
                        <h3 className={styles.title2}>External Integration</h3>
                        <p className={styles.description}>
                        Seamlessly integrate with external platforms like CRM and databases, enabling real-time access for accurate assistance and enhanced efficiency.
                     </p>
                    </div>  
                         
            </div><div className={styles.projects} data-aos="fade-up" data-aos-delay="200" >           
                    
                    <div className={styles.container2}>
                        <img src={getImageUrl("Features/language.png")} className={styles.icon}/>
                        <h3 className={styles.title2}>Multi-language Support</h3>
                        <p className={styles.description}>
                        Implement multilingual capabilities to accommodate diverse demographics, facilitating seamless communication in various languages.
                        </p>
                    </div>  
                    <div className={styles.container2}>
                        <img src={getImageUrl("Features/analytics.png")} className={styles.icon}/>
                        <h3 className={styles.title2}>Analytics and Insights</h3>
                        <p className={styles.description}>
                        Leverage data analytics for valuable insights into user behavior, enabling continuous optimization of the chatbot's performance.
                        </p>
                    </div>  
                  <div className={styles.container2}>
                        <img src={getImageUrl("Features/scalable.png")} className={styles.icon}/>
                        <h3 className={styles.title2}>Scalability & Customization</h3>
                        <p className={styles.description}>
                        Ensure the chatbot adapts, scales, and customizes to evolving business needs, ensuring flexibility and efficiency in meeting customer demands.
                        </p>
                    </div> 
                           
            </div>
            
        </section>
      )
}