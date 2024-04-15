import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Contact } from '../Contact/Contact';
import styles from './TOS.module.css';

export const TOS = () => {
    return (
        <div>
            <Navbar />
            <div className={styles.container}>
                <h1>Terms and Conditions of Service</h1>
                <section>
                    <h2>1. Introduction</h2>
                    <p>Welcome to Sumukha AI Private Limited! These Terms and Conditions (hereinafter referred to as 'Terms') govern the relationship between Sumukha AI Private Limited, a provider of AI-based WhatsApp chatbot building services (referred to as 'Sumukha AI Private Limited,' 'we,' 'us,' or 'our'), and you, our esteemed client (referred to as 'client,' 'you,' or 'your'). By engaging our services, you agree to comply with and be bound by these Terms in their entirety. Please read these Terms carefully before using our services.</p>
                </section>
                <section>
                    <h2>2. Services Provided</h2>
                    <p>Sumukha AI Private Limited specializes in offering a comprehensive range of services related to the development, deployment, and maintenance of AI-based WhatsApp chatbots. Our services encompass: Expert consultation and strategic guidance on chatbot development. Tailored design and development of AI-powered chatbots. Seamless integration of chatbots with the WhatsApp platform. Comprehensive training and ongoing support for efficient chatbot management. We pride ourselves on delivering innovative solutions tailored to meet the unique needs and objectives of each client.</p>
                </section>
                <section>
                    <h2>3. Client Obligations</h2>
                    <p>As a valued client of Sumukha AI Private Limited, you agree to fulfill the following obligations: Provide accurate and detailed information essential for the development and deployment of your chatbot. Collaborate closely with our team throughout the development, testing, and implementation stages of the chatbot project. Adhere to the terms and conditions set forth by WhatsApp Business API and other relevant regulations and policies. Promptly notify Sumukha AI Private Limited of any issues or concerns regarding the functionality or performance of the chatbot. Your active participation and timely communication are crucial for the successful execution of the project.</p>
                </section>
                <section>
                    <h2>4. Payment Terms</h2>
                    <p>Our payment terms are designed to ensure a fair and transparent financial arrangement between Sumukha AI Private Limited and our clients: A deposit equivalent to [XX]% of the total project cost is required upon the initiation of the project. The remaining balance shall be due upon the satisfactory completion and delivery of the chatbot. Payments are to be made in Indian Rupees (INR) through the designated payment method agreed upon by both parties. We are committed to delivering exceptional value, and our payment structure reflects our dedication to client satisfaction.</p>
                </section>
                <section>
                    <h2>5. Intellectual Property</h2>
                    <p>Sumukha AI Private Limited retains ownership of all intellectual property rights associated with the chatbot, including but not limited to code, design elements, and algorithms. However, we respect our clients' rights and are open to discussing alternative arrangements regarding intellectual property ownership upon request.</p>
                </section>
                <section>
                    <h2>6. Confidentiality</h2>
                    <p>Both parties agree to maintain strict confidentiality regarding any proprietary or sensitive information exchanged during the course of our engagement. We are committed to safeguarding your confidential data and ensuring its protection against unauthorized disclosure or use.</p>
                </section>
                <section>
                    <h2>7. Limitation of Liability</h2>
                    <p>While we strive to deliver optimal performance and reliability, Sumukha AI Private Limited shall not be held liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use or inability to use the chatbot. Our liability is limited to the extent permitted by Indian law, and we recommend consulting with legal experts to understand the full scope of your rights and obligations.</p>
                </section>
                <section>
                    <h2>8. Termination</h2>
                    <p>In the event of termination of our engagement, either party may do so by providing written notice to the other party. Upon termination, you shall be responsible for settling any outstanding payments for services rendered up to the termination date.</p>
                </section>
                <section>
                    <h2>9. Governing Law</h2>
                    <p>These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts located in Bengaluru, Karnataka, India.</p>
                </section>
                <section>
                    <h2>10. Amendments</h2>
                    <p>Sumukha AI Private Limited reserves the right to modify or amend these Terms at any time without prior notice. Any changes to these Terms will be communicated to you in writing and will become effective upon your acceptance.</p>
                </section>
                <p>By engaging our services, you acknowledge that you have read, understood, and agreed to abide by these Terms and Conditions. Should you have any questions or concerns regarding these Terms, please do not hesitate to contact us.</p>
                <p>Thank you for choosing Sumukha AI Private Limited as your trusted partner in AI-based WhatsApp chatbot development. We look forward to collaborating with you and exceeding your expectations.</p>
                <p>For inquiries or assistance, please contact us at <a href="mailto:sumukha.ai@gmail.com">sumukha.ai@gmail.com</a>.</p>
            </div>
            <Contact />
        </div>
    );
}


