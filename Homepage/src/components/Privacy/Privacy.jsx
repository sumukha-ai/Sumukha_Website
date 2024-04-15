import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import styles from './Privacy.module.css'
import { Contact } from '../Contact/Contact'

export const Privacy = () => {
  
  return (
    <div >
      <Navbar />
      
      <div className={styles.container}>
        <h1>Privacy Policy</h1>
        <p>
          Last Updated: 28th March 2024
        </p>
        <p>
          Welcome to <strong>Sumukha AI Private Limited</strong>, a company committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, store, and share your information when you interact with our services ("Services"). By using our Services, you agree to the terms of this Privacy Policy.
        </p>
        <h3>1. Information We Collect</h3>
        <p>
          <strong>Personal Information You Provide to Us:</strong> When you engage with us, such as by registering on our platform, contacting us, or participating in our events, you may provide us with personal information such as your name, email address, phone number, job title, username, password, mailing address, and billing address.
        </p>
        <p>
          <strong>Sensitive Information:</strong> We do not collect sensitive personal information.
        </p>
        <p>
          <strong>Information Automatically Collected:</strong> When you visit or use our Services, we automatically collect certain information, such as your device and usage information, IP address, browser type, and other technical details. We use this information for analytics, to improve our Services, and for security purposes.
        </p>
        <p>
          <strong>Information from Other Sources:</strong> We may receive information about you from public databases, marketing partners, social media platforms, and other third-party sources. This information helps us enhance our marketing efforts and provide personalized services to you.
        </p>
        <h3>2. How We Use Your Information</h3>
        <p>
          We process your information to:
        </p>
        <ul>
          <li>Provide and maintain our Services</li>
          <li>Communicate with you</li>
          <li>Improve and personalize our Services</li>
          <li>Ensure the security of our platform</li>
          <li>Comply with legal obligations</li>
          <li>Conduct research and analysis</li>
        </ul>
        <h3>3. Legal Basis for Processing Your Information</h3>
<p>
  We process your personal information based on various legal grounds, including your consent, contractual necessity, compliance with legal obligations, protection of vital interests, and our legitimate interests in providing and improving our Services.
</p>

<h3>4. How We Share Your Information</h3>
<p>
  We may share your information with:
</p>
<ul>
  <li>Service providers who assist us in delivering our Services</li>
  <li>Business partners and affiliates for marketing and promotional purposes</li>
  <li>Legal and regulatory authorities when required by law or to protect our rights</li>
</ul>

<h3>5. Your Privacy Rights</h3>
<p>
  Depending on your location, you may have certain privacy rights, including the right to access, update, or delete your personal information. You may also have the right to object to the processing of your information or withdraw consent where applicable.
</p>

<h3>6. Data Security</h3>
<p>
  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
</p>

<h3>7. Data Retention</h3>
<p>
  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
</p>

<h3>8. International Data Transfers</h3>
<p>
  Your information may be transferred to and processed in countries outside of your own jurisdiction. By using our Services, you consent to the transfer of your information to these countries, which may have different data protection laws than your country.
</p>

<h3>9. Children's Privacy</h3>
<p>
  Our Services are not directed at children under the age of 18, and we do not knowingly collect personal information from individuals under this age. If you become aware that we have collected personal information from a child without parental consent, please contact us, and we will take steps to remove the information promptly.
</p>

<h3>10. Changes to This Privacy Policy</h3>
<p>
  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated Privacy Policy on our website or through other appropriate means.
</p>

        <h3>11. Contact Us</h3>
        <p>
          If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at <a href="mailto:sumukha.ai@gmail.com">sumukha.ai@gmail.com</a>.
        </p>
      </div>

    <Contact />
    </div>
  )
}
