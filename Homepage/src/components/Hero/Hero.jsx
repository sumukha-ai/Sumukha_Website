import React, { useEffect } from 'react';
import Typed from "react-typed";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    useEffect(() => {
        // Facebook SDK initialization script
        window.fbAsyncInit = function() {
            FB.init({
                appId: '383782301101923',
                xfbml: true,
                version: 'v19.0'
            });
        };
        // Load the SDK asynchronously
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        // Facebook login function
        window.launchWhatsAppSignup = function() {
            // Launch Facebook login
            FB.login(function (response) {
                if (response.authResponse) {
                    const accessToken = response.authResponse.accessToken;
                    // Use this token to call the debug_token API and get the shared WABA's ID
                } else {
                    console.log('User cancelled login or did not fully authorize.');
                }
            }, {
                config_id: '825508499388287', // configuration ID obtained in the previous step goes here
                response_type: 'code',     // must be set to 'code' for System User access token
                override_default_response_type: true,
                extras: {
                    setup: {
                        // Prefilled data can go here
                    }
                }
            });
        };
    }, []); // Empty dependency array to ensure this effect runs only once after mounting

    const handleComplete = () => {
        const cursor = document.querySelector('.typed-cursor');
        if (cursor) {
            cursor.style.display = 'none';
        }
    };

    return (
        <section className={styles.container} id="home">
            <div className={styles.content}>
                <h1 className={styles.title}>Join us in Redefining AI : </h1>
                {/* <p className={styles.description}>Redefining AI:</p> */}
                <Typed
                    className={styles.title1}
                    strings={["Artificial Intelligence", "Amplified Intelligence"]}
                    typeSpeed={60}
                    backDelay={1000}
                    backSpeed={30}
                    onComplete={handleComplete}
                />
                <a className={styles.contactBtn} href='mailto:gokultherao@gmail.com'>Contact Us</a>
                <a className={styles.contactBtn} onClick={window.launchWhatsAppSignup}>Join Us</a>
            </div>
        </section>
    );
};
