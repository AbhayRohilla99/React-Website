import React from "react";
import Navbar from "../Navbar/Navbar";
import { useEffect } from "react";

const TermsAndServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
    <Navbar heading={"Terms of service"}/>
    <div className="p-8 bg-gray-50 flex flex-col mx-auto max-w-5xl">
      
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-3">
          User Obligations to Protect Valuables:
        </h3>
        <p className="text-[#000000] leading-relaxed">
          If you choose to reserve Services, you must: (1) verify the location of your Residence when
          submitting a cleaning reservation and ensure that you have the authority to make reservations
          for your Residence; (2) ensure that an authorized individual will grant the Cleaners access to
          your Residence. You are responsible for the security of your valuables in the Residence
          (including placing valuables in locked areas) prior to providing access to the Cleaners. Shine
          will not be liable for any damages or losses resulting directly or indirectly from your failure
          to adhere to your obligations under this Agreement.
        </p>
       

      </div>
      

      {/* Section 2: Shine Customer Accounts */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Shine Customer Accounts:
        </h3>
        <p className="text-[#000000] leading-loose text-[15px] ">
          Your Shine account grants you access to the Services, which may be subject to changes in form
          and functionality at the sole discretion of Shine. For information on adjusting your settings
          for such services, please refer to our Privacy Policy. When creating your account, you must
          provide accurate and complete information, refraining from supplying inaccurate, false, or
          misleading information to Shine. You are solely responsible for all activity occurring on your
          account and must keep your account password secure. We encourage you to use strong passwords
          (e.g., combinations of upper and lower case letters, numbers, and symbols) for your account.
          You must immediately notify Shine of any security breaches or unauthorized use of your account.
          Shine will not be held responsible or liable for any losses resulting from unauthorized use of
          your account.
        </p>
      </div>
      <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-5 ">
        Prohibited Activities
        </h2>
        <p className="text-[#000000] leading-loose text-[15px]">
        You agree not to do or attempt (or request that any third party do or attempt) any of the following during or in connection with yours (or their) use of the Service:
   <br/>
1. Circumvent or attempt to circumvent any access or use restrictions, data encryption, or content protection related to the Service;
<br/>
2. Engage in spidering, “screen scraping”, “database scraping” ,”harvesting” of e-mail addresses, wireless addresses, content available through the Service, including Content, other contact or personal information, or any other automatic means of obtaining lists of users or other information from or through the Service, including without limitation any information residing on any server or database connected to the Service;
<br/>
3. Copy, modify or distribute the computer code used to generate web pages on the Service (other than as may be expressly permitted under a separate license agreement);
<br/>
4. Access, tamper with, or use non-public areas of the Service, our computer systems, or the technical delivery systems of our providers;
<br/>
5. Probe, scan or test the vulnerability of any system or network or breach any security or authentication measures;
<br/>
6. Access or search the Service with any engine, software, tool, agent, device or mechanism other than the software and/or search agents provided by the Company or other generally available third party web browsers;
<br/>
7. Send unsolicited email, bulk email, junk mail, spam or chain letters, or promotions or advertisements for products or services, including without limitation those which are designed to promote, directly or indirectly, a product or service with which you have a business relationship or other commercial connection;
<br/>
8. In any way use the Service to send altered, deceptive or false source-identifying information;
<br/>
9. Decipher, decompile, disassemble or reverse engineer any of the software used to provide the Service;
<br/>
10. Interfere with, or attempt to interfere with, the access of any user, host or network, including, without limitation, sending a virus, overloading, flooding, spamming or mail-bombing the Site or the Service;
<br/>
11. Impersonate or misrepresent your affiliation with, or your lack of affiliation with, any person or entity;
<br/>
12. Use the Service in violation of the Company’s or any third party’s intellectual property or other proprietary or legal rights;
<br/>
13. Use the Service in violation of any applicable law or request that a Cleaner provides a service which would violate applicable law;
<br/>
14. Upload, post, email, transmit or otherwise make available materials that infringe or misappropriate any patent, trademark, trade secret, copyright or other proprietary rights of any party.
        </p>
        </div>
        <div>
            <h2 className="underline text-2xl italic mt-4 font-bold">License Grant & Restrictions</h2>
        </div>
        <div>
            <h3 className="text-[20px] font-semibold mt-3 mb-3">Personal Use</h3>
            <p className="text-[#000000] leading-loose text-[15px]">Shine grants Users a nonexclusive, non-transferable right to use the Software for personal, non-commercial purposes. All rights not expressly granted are reserved by Shine.</p>
        </div>
        <div>
            <h3 className="text-[20px] font-semibold mb-3 mt-3">Prohibited Uses</h3>
            <p className="text-[#000000] leading-loose text-[15px]">Prohibited Uses Users are prohibited from licensing, sublicensing, selling, modifying, or reverse engineering the Services or Software. Launching automated programs, accessing the Software through unauthorized means, and bypassing access measures are also prohibited.</p>
        </div>
        <div>
            <h3 className="text-2xl underline mt-3 mb-3 font-bold">Paid Services</h3>
        </div>
        <div>
            <h3 className="text-[20px] mt-3 mb-3 font-semibold">Billing Policies</h3>
            <p className="text-[#000000] leading-loose text-[15px]">Users agree to pay the specified fees for Services and authorize Shine to charge their credit card for the full amount after the booking is completed. Users also agree to have a hold placed on their card the same day of their booking. Shine may offer promotional rates, but existing agreements remain unaffected.</p>
        </div>
        <div>
            <h3 className="text-[20px] mt-3 mb-3 font-semibold">Cancellation Policy</h3>
            <p  className="text-[#000000] leading-loose text-[15px]">Bookings canceled or rescheduled within 48 hours of the appointment will be subject to cancellation fees as described in the Shine Cancellation Policy.</p>
        </div>
        <div>
            <h3 className="text-[20px] mt-3 mb-3 font-semibold">Lock Outs</h3>
            <p  className="text-[#000000] leading-loose text-[15px]">Failure to provide access to the Cleaners within fifteen (15) minutes of their arrival will result in a lockout, and the appointment will be charged in full.</p>
        </div>
        <div>
            <h3 className="text-[20px] mt-3 mb-3 font-semibold">Parking</h3>
            <p  className="text-[#000000] leading-loose text-[15px]">The client is responsible for ensuring that free parking is readily available for the Shine cleaners upon arrival at the client’s residence and for the entire duration of the services being provided. Parking must be available on the property or directly adjacent to the property. In the event that free parking is not available, the client is responsible for all parking fees incurred by the cleaners. The parking fees will be added to the total amount of the booking. In the event that parking is not made available by the client, the appointment will be considered a lock-out and the appointment will be charged in full.</p>
        </div>
        <div>
            <h3 className="text-[20px] mt-3 mb-3 font-semibold">Privacy</h3>
            <p  className="text-[#000000] leading-loose text-[15px]">While Shine takes measures to protect personal information, it cannot guarantee absolute security. Users waive any claims against Shine arising from unauthorized access or use of personal information.</p>

        </div>
        <div>
            <h3 className="text-[20px] mt-3 mb-3 font-semibold">Chargebacks</h3>
            <p  className="text-[#000000] leading-loose text-[15px]">Initiating a chargeback will result in forfeiture of services with Shine</p>
        </div>
        <div>
            <h3 className="text-[20px] mt-3 mb-3 font-semibold">Third-Party Links</h3>
            <p  className="text-[#000000] leading-loose text-[15px]">The Services may contain links to third-party websites, and Shine is not responsible for the content, products, or services offered on those sites.</p>
            </div>
            <div>
                <h2 className="text-2xl mt-3 mb-3 font-bold underline">Disclaimers, Limitation of Liability & Indemnifications</h2>
            </div>
            <div>
                <h3 className="text-[20px] mt-3 mb-3 font-semibold">Fair Go Policy</h3>
                <p  className="text-[#000000] leading-loose text-[15px]">Our flat rate services are results based cleans and do not depend on time limits like our hourly rates. We will perform the checklist of tasks that corresponds to the service you have booked + any extras selected, until all items have been cleaned to our (very high!) standards. Because these are results based cleans, we do not set fixed time limits on the services. We do however give our cleaning teams estimates to assist with the planning of services. These estimates are just guidelines and we allow the teams to work at harder (and faster) intensities if they are able. Our Fair Go policy states that on the rare occasions that our estimates are incorrect, we will clean for up to 15% longer than the given estimated time, however if a property requires more time and work than that, extra charges may apply. We will always get in touch with you prior to making any changes to your service and confirm any extra charges before proceeding.</p>
            </div>
            <div>
                <h3 className="text-[20px] mt-3 mb-3 font-semibold">General Limitation of Liability</h3>
                <p  className="text-[#000000] leading-loose text-[15px]">Shine is not liable for direct, indirect, incidental, consequential, or exemplary damages resulting from the use of the Services or cleaning Services. Shine’s liability is limited to the amount paid for the last scheduled cleaning appointment or $100.00, whichever is greater.</p>
            </div>
            <div>
                <h3 className="text-[20px] mt-3 mb-3 font-semibold">Indemnification of Shine</h3>
                <p  className="text-[#000000] leading-loose text-[15px]">Users agree to defend, indemnify, and hold harmless Shine from any claims, damages, liabilities, and expenses arising from their use of the Services, violation of this Agreement, or violation of third-party rights.</p>
            </div>
            <div>
                <h3 className="text-[20px] mt-3 mb-3 font-semibold">Irrevocable Acceptance</h3>
                <p  className="text-[#000000] leading-loose text-[15px]">By using the Services, Users irrevocably accept the disclaimers, limitations of liability, and indemnities set forth in this Agreement</p>
            </div>
    </div>
    </>
  );
};

export default TermsAndServices;
