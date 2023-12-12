import React, { useEffect } from 'react';

const Terms = () => {
    useEffect(() => {
        const scrollToTop = () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        scrollToTop();
      }, []);
    return (
        <>
           
            {/* title */}
            <div className='p-24  container  mx-auto   bg-[#774e88]'>
                <h2 style={{ fontSize: '26px' }} className='mt-10 ml-20 font-bold text-white'>Terms of Service</h2>
                <div className='hidden relative bottom-44 sm:block'>
                    <div className='flex justify-center items-center p-3 overflow-clip absolute top-56 right-28  lg:w-60 px-5 text-white  bg-[#291958]'>
                        <h2>Home </h2>
                        <h2>My business</h2>
                    </div>
                </div>
                <hr className='absolute lg:block hidden left-0 top-64 mt-3 w-full' style={{ border: '3px solid #291958', borderRadius: '5px 5px 5px 5px', }} />
            </div>

            <div className='container mx-auto px-14 py-14 my-20 rounded-3xl mt-5 w-11/12 bg-white shadow-2xl' >
                <div className='xl:ml-16 mb-5 mt-10'>
                    <hr className='h-1 bg-[#774e88] w-16 ' />
                    <div className='text-2xl font-bold flex gap-2'>
                        <h2>Terms of</h2>
                        <h2 className='text-[#774e88]'> Service</h2>
                    </div>
                </div>
                {/* divider */}
                <div
                    className="divider mt-2">

                </div>

                <div className=' xl:ml-16'>
                    <p style={{fontSize: '14px'}} className=' text-[#5a5a5a]'>These Terms and Conditions of Use (“Terms“) govern your use of the website located at www.businesspost.com.au  (the “SITE“) and form a binding contractual agreement between you, the user of the SITE, and Lions Group Pty Ltd trading as Business Media Group, address of Level 10 / 95 North Quay, Brisbane QLD 4000 ,  the operator of support@businesspartner.com.au  of ABN 85 088 844 204 (“BMG“)</p>
                    <h2 style={{fontSize: '14px'}} className='  font-semibold my-4'>1) Your acceptance of these Terms</h2>
                </div>

                <div style={{fontSize: '14px'}} className='xl:ml-16 my-4  text-[#5a5a5a]'>
                    <p>1.1. By using the SITE you:</p>
                    <ol>
                        <li>
                            (a)     signify your agreement to and acceptance of these Terms;
                        </li>
                        <li>
                            (b)     signify your agreement to and acceptance of any other policies published on the SITE (the “SITE Policies”);
                        </li>
                        <li>
                            (c)     are over the age of 18 and have the right and authority to enter into this Agreement or if you are under the age of 18, you have reviewed these Terms with your parent or guardian and understand and agree to these Terms; and
                        </li>
                        <li>
                            (d)     the performance your obligations hereunder does not infringe the rights of any third party.
                        </li>
                    </ol>
                    <p style={{fontSize: '14px'}} className='my-5 text-[#5a5a5a]'>1.2. BMG reserves the right to vary the Terms and the SITE Policies at any time. Each such variation will be effective immediately upon publishing on the SITE. Your continued use of the SITE following any such variation constitutes your acceptance and agreement to be bound by the Terms and the SITE Policies, as varied. It is therefore important that you review the Terms and SITE Policies regularly.</p>
                </div>


                <div className=''>
                    <h2 className='xl:ml-20 font-semibold'>
                        1). Registration
                    </h2>
                    <div style={{fontSize: '14px'}} className='xl:ml-20 my-3  text-[#5a5a5a]'>
                        <h2>2.1. You may become a registered user by registering on the SITE. Your registration may be cancelled if:</h2>
                        <ol>
                            <li>
                                (a) BMG, at its sole discretion, determines that multiple accounts are held by the same individual or entity; or
                            </li>
                            <li>
                                (b) BMG, at its sole discretion, determines that you are in breach of these Terms.
                            </li>
                        </ol>
                    </div>
                    <div style={{fontSize: '14px'}} className='xl:ml-16  text-[#5a5a5a]'>
                        <h2 className='my-4'>2.2. You may not register as a user if you were previously a user and BMG cancelled your registration as a result of you being in breach of these Terms (as they applied at the relevant time).</h2>

                        <p className='text-base'>2.3. In order to register as a user and to access and use certain SITE features, you may be required to provide information about yourself (such as identification, contact details and for certain accounts PayPal account details), as part of the registration process for the SITE, or as part of your continued use of the SITE. By registering as a user and using the SITE, you represent and warrant that:</p>
                        <ol className='text-base mb-4 '>
                            <li>

                                (a)     all information you submit (including any representation or warranty you provide in the course of registering) is truthful and accurate; and

                            </li>
                            <li>

                                (b)     you will maintain the accuracy of such information at all times whilst you continue to be registered as a user and use the SITE.

                            </li>
                        </ol>

                    </div>


                </div>
                <div className=''>
                    <h2 className='xl:ml-20  font-semibold'>
                        1).Your passwords and account security
                    </h2>
                    <div style={{fontSize: '14px'}} className='xl:ml-16 my-3  text-[#5a5a5a]'>
                        <p>3.1. When you register to become a user, you will be asked to choose a password for your account. You are entirely responsible for maintaining the confidentiality of passwords associated with any account you use to access the SITE. You agree not to use the account, username, email address or password of another user at any time or to disclose your password to any third party.</p>

                    </div>
                    <p style={{fontSize: '14px'}} className=' my-4 xl:ml-16 text-[#5a5a5a]'> 3.2. You will be solely responsible for the use of your password and any and all activities that occur on your account, whether or not those activities are authorised by you. </p>

                    <p style={{fontSize: '14px'}} className=' my-4 xl:ml-16 text-[#5a5a5a]'> 3.3. If you become aware of any unauthorised use of your password or account, you must notify BMG immediately. </p>
                </div>

                <div>
                    <h2 className='xl:ml-20 font-semibold'>
                        1).Access and Use
                    </h2>
                    <p style={{fontSize: '14px'}} className=' my-4 xl:ml-16 text-[#5a5a5a]'> 4.1. BMG grants you a non-exclusive, worldwide, non-transferable licence to use the SITE in accordance with these Terms. </p>

                    <p style={{fontSize: '14px'}} className='my-4 xl:ml-16'> 4.2. You may access and use the SITE (including any incidental copying that occurs as part of that use) in the normal manner, for personal non-commercial purposes. </p>
                    <p style={{fontSize: '14px'}} className='  xl:ml-16 text-[#5a5a5a]'> 4.3. You must not add and/or remove any content to and/or from the SITE:</p>
                    <div style={{fontSize: '14px'}} className='xl:ml-16 text-[#5a5a5a]'>
                        <ol style={{fontSize: '14px'}} className=' mb-8'>
                            <li>

                                (a)     unless you hold all necessary rights, licences and consents to do so;

                            </li>
                            <li>

                                (b)     that would cause you or BMG to breach any law, regulation, rule, code or other legal obligation;

                            </li>
                            <li>

                                (c)  that is or could reasonably be considered to be obscene, inappropriate, defamatory, disparaging, indecent, seditious, offensive, pornographic, threatening, abusive, liable to incite racial hatred,

                            </li>
                            <li>

                                (d)     that would bring BMG, or the SITE, into disrepute; or

                            </li>
                            <li>

                                (e)     that infringes the intellectual property or other rights of any person.

                            </li>
                        </ol>
                    </div>

                    <h2 style={{fontSize: '14px'}} className='xl:ml-16 mb-8  text-[#5a5a5a]'>And you agree to indemnify BMG against any claims, actions, suits or demands made against it as a result of any content you add to or remove from the SITE in breach of this clause 4.3.</h2>


                    <p style={{fontSize: '14px'}} className='xl:ml-16  text-[#5a5a5a]'>
                        4.4. The SITE contains links to other websites, which are not operated by the SITE (“Third Party Site/s”). BMG has no control over Third Party Site/s and accepts no responsibility for them or for any loss or damage that may arise from your use of them. Your use of Third Party Sites will be subject to the terms of use of the Third Party Site/s.
                    </p>

                    <p style={{fontSize: '14px'}} className='mt-3  xl:ml-16 text-[#5a5a5a]'>
                        4.5. BMG retains complete editorial control over the SITE and may alter or amend any part of the SITE at any time in its sole discretion without prior notice or liability to you. Notwithstanding BMG’s editorial control, the SITE contains content originally created by you and other users of the SITE. You acknowledge that BMG is not liable for any loss or damage howsoever caused resulting from any action taken or reliance made by you on any representation, information or material on the SITE.
                    </p>

                    <p style={{fontSize: '14px'}} className='my-3  xl:ml-16 text-[#5a5a5a]'>
                        4.6. The SITE will not operate on a continuous basis and may be unavailable from time to time (including for maintenance purposes). BMG reserves the right to cease the operation of the SITE, or any part thereof, without prior notice or liability to you.
                    </p>
                    <p style={{fontSize: '14px'}} className='my-3 xl:ml-16 text-[#5a5a5a]'>
                        4.7. By using the SITE you may be exposed to content that you may find offensive, indecent or objectionable and that, in this respect, you use the SITE at your own risk.
                    </p>



                    <div>
                        <h2 className='xl:ml-20 font-semibold'>
                            1).Privacy and your personal information
                        </h2>
                        <p style={{fontSize: '14px'}} className='my-3  xl:ml-16 text-[#5a5a5a]'>
                            5.1. Without limiting Clause 1.1(b)   , you warrant that you have read the Privacy Policy published on the SITE. This policy explains how BMG treats your personal information, and protects your privacy, when you use the SITE.
                        </p>
                        <p style={{fontSize: '14px'}} className='my-3  xl:ml-16 text-[#5a5a5a]'>
                            5.2. You agree to the use of your personal information in accordance with the Privacy Policy.
                        </p>
                    </div>
                    <div>
                        <h2 className='xl:ml-20 font-semibold'>
                            1).Prohibitions
                        </h2>
                        <h2 style={{fontSize: '14px'}} className='xl:ml-24  text-[#5a5a5a]'>6.1. In using the SITE you agree that, unless you are specifically allowed to do so under the terms of a separate agreement with BMG, you shall not:</h2>
                    </div>

                    <div style={{fontSize: '14px'}} className='xl:ml-24 text-[#5a5a5a]'>
                        <ol style={{fontSize: '14px'}} className=' mb-8 text-[#5a5a5a]'>
                            <li>

                                (a)     use, or allow to be used, the SITE for any unlawful purpose or in any unlawful manner;
                            </li>
                            <li>
                                (b)     impersonate any other person;

                            </li>
                            <li>
                                (c)     make any commercial use of the SITE, or any part thereof;

                            </li>
                            <li>

                                (d)     access (or attempt to access) any part of the SITE by any means other than through the interface that is provided by BMG;

                            </li>
                        </ol>
                    </div>
                    <div style={{fontSize: '14px'}} className='xl:ml-14 text-[#5a5a5a]'>
                        <ol style={{fontSize: '14px'}} className=' mb-4 text-[#5a5a5a]'>
                            <li>

                                (e)     access (or attempt to access) the SITE through any automated means (including use of scripts or web crawlers);
                            </li>
                            <li>
                                (f)     “frame” or “mirror” this website or any part thereof on any other server or Internet- enabled device;

                            </li>
                            <li>
                                (g)     reproduce, duplicate, or copy any part of the SITE for any purpose;

                            </li>
                            <li>

                                (h)     and will not permit anyone else, to copy, modify, adapt, create a derivative work of, reverse engineer, decompile or otherwise attempt to extract the source code of the SITE or any part thereof;

                            </li>
                            <li>

                                (i)     attempt to corrupt data or undermine the security or integrity of the SITE, or where the SITE is hosted by a third party, that third party’s computing systems and networks;
                            </li>
                            <li>

                                (j)     transmit or distribute a virus, trojan, worm, logic bomb or post any other material which is malicious, technologically harmful, in breach of confidence or in any way offensive or obscene;
                            </li>
                            <li>

                                (k)     hack into any aspect of the SITE;
                            </li>
                            <li>

                                (l)     infringe upon the rights of any other person’s proprietary rights.
                            </li>
                        </ol>
                    </div>

                    <h2 style={{fontSize: '14px'}} className='xl:ml-20 font-semibold'>
                        1).Content and proprietary rights
                    </h2>
                    <p style={{fontSize: '14px'}} className='xl:ml-14 my-6 text-[#5a5a5a]'>
                        7.1. You acknowledge and agree that BMG (or BMG’s licensors) own all legal right, title and interest in and to the SITE, including any Intellectual Property rights which subsist in the SITE (whether those rights happen to be registered or not, and wherever in the world those rights may exist). Unless you have agreed otherwise in writing with BMG, nothing in these Terms gives you a right in or to any Intellectual Property.
                    </p>
                    <p style={{fontSize: '14px'}} className='xl:ml-14 my-6 text-[#5a5a5a]'>
                        7.2. In using the SITE you agree that you shall not (and will not permit anyone else) to adapt, reproduce, store, distribute, transmit, print, display, publish or create derivative works from any Intellectual Property on the SITE. You agree that you will not use any Intellectual Property in a way that is likely or intended to cause confusion about the owner or authorised user of the Intellectual Property.
                    </p>
                    <p style={{fontSize: '14px'}} className='xl:ml-14 my-6 text-[#5a5a5a]'>
                        7.3. For the purpose of this Clause 7, Intellectual Property includes, but is not limited to, artworks, photography, literary works, musical works, sound recordings, cinematograph films, trademarks, service marks, trade names and logos.
                    </p>
                    <p className='xl:ml-14 my-6 text-[#5a5a5a]'>
                        7.4. By submitting any content, information, or material (including without limitation business information and advertising material) to the SITE (Submission), you hereby grant a royalty- free, non-exclusive, assignable license to BMG to edit, reproduce, publish, sell, distribute, license, communicate to the public, and otherwise exploit the Submission (including the copyright in the Submission) in any format and in all media, now known or hereafter devised, throughout the world. You agree that you will not be entitled to any fee for such use of the Submission.
                    </p>
                    <p style={{fontSize: '14px'}} className='xl:ml-14 my-6 text-[#5a5a5a]'>
                        7.5. You warrant that you sole owner and/or controller of the Submission (and any underlying copyright in and to the Submission) provided by you and you are not infringing any third party’s copyright. You warrant that any person depicted in photographs (if applicable) submitted to the SITE, has granted permission to be portrayed in that photograph.
                    </p>
                    <p style={{fontSize: '14px'}} className='xl:ml-14 my-6 text-[#5a5a5a]'>
                        7.6. You hereby waive any so-called moral rights or similar rights (now or hereafter existing) in respect of any Submission under any law anywhere in the world and irrevocably consent to any act in respect of any Submission without restriction in all media, whether now known or hereafter devised.
                    </p>
                    <p style={{fontSize: '14px'}} className='xl:ml-14 text-[#5a5a5a] '>
                        7.7. You represent and warrant in relation to any part or whole of a Submission you provide to the
                    </p>
                    <h2 style={{fontSize: '14px'}} className='xl:ml-14 text-[#5a5a5a]'>SITE that:</h2>
                    <div style={{fontSize: '14px'}} className='xl:ml-14 text-[#5a5a5a]'>
                        <ol style={{fontSize: '14px'}} className=' mb-4 text-[#5a5a5a]'>
                            <li>
                                (a) you are authorised to provide the Submission;
                            </li>
                            <li>
                                (b) the Submission is not defamatory or a malicious falsehood in relation to any product, service, person or corporation;

                            </li>
                            <li>
                                (c)   the Submission is not “passing off” any product or service and does not constitute unfair competition;

                            </li>
                            <li>
                                (d)     the Submission does not infringe any intellectual property right including, but not limited to, trademarks, service marks or business names (whether registered or unregistered), confidential information and copyright; and

                            </li>
                            <li>

                                (e)    the Submission does not infringe any legislation or regulations of the Commonwealth of Australia and the State of Queensland and equivalent state and territory legislation and any other parliament competent to legislate in relation to the Website or any law in any country where the material and/or information is or will be available electronically to users of the SITE.
                            </li>
                        </ol>
                    </div>
                    <h2 style={{fontSize: '14px'}} className='xl:ml-14 mt-3 mb-9 text-[#5a5a5a]'>And you agree to indemnify BMG against any claims, actions, suits or demands made against it as a result of any Submission you provide to the SITE that breaches this clause 7.7.</h2>

                    <h2 className='xl:ml-20 font-semibold'>
                        1).Terms of Sale
                    </h2>

                    <h2 style={{fontSize: '14px'}} className='xl:ml-14 my-3 text-[#5a5a5a]'>
                        8.1. The cost of using the SITE is as set forth in the Advertise Your Business Section on the SITE. All prices are in Australian dollars and quoted as inclusive of GST for Australian customers.
                    </h2>
                    <h2 style={{fontSize: '14px'}} className='xl:ml-14 my-3 text-[#5a5a5a]'>
                        8.2. BMG reserves the right to modify SITE charges at any time, including offering promotional, discount or higher prices. The valid price at any time is that which is quoted on the SITE at the time of purchase.
                    </h2>
                    <h2 style={{fontSize: '14px'}} className='xl:ml-14 my-3 text-[#5a5a5a]'>
                        8.3. Payment must be made by approved PayPal, Visa or Mastercard. The SITE utilises the services of third parties to process payments. In no event shall BMG be responsible or liable for any payment processing issue or error. You are responsible for making your own enquiries into and abiding by the terms and conditions of use of the relevant third-party payment processing entity. All enquires or issues relating to payment processing must be directed to the relevant third-party payment processing entity.


                    </h2>
                    <h2 style={{fontSize: '14px'}} className='xl:ml-14 text-[#5a5a5a]'>

                        8.4. When placing an order:

                    </h2>

                    < p style={{fontSize: '14px'}} className='xl:ml-14 text-[#5a5a5a]'>
                        (a)     you undertake that all details you provide to BMG are true and accurate, that you are an authorised user of the credit or debit card used to place your order and that there are sufficient funds to cover the cost of the goods;
                    </p>
                    <p style={{fontSize: '14px'}} className='xl:ml-14 text-[#5a5a5a]'>
                        (b)     you acknowledge that foreign exchange rates may fluctuate and that all charges are subject to such changes.
                    </p>

                    <h2 style={{fontSize: '14px'}} className='xl:ml-14 my-3 text-[#5a5a5a]'>
                        8.5. Whilst BMG tries to ensure that all details, descriptions and prices which appear on the SITE are accurate, errors may occur. If BMG discovers an error in the price of any service, you have ordered BMG will inform you of this as soon as practicable and give you the option of reconfirming your order at the correct price or cancelling it. If BMG is unable to contact you the order will be refunded.
                    </h2>
                    <h2 style={{fontSize: '14px'}} className='xl:ml-14 mb-3 text-[#5a5a5a]'>
                        8.6. You may end the advertising period at any time by giving 48 hours written notice.
                    </h2>
                    <h2 style={{fontSize: '14px'}} className='xl:ml-14 mb-3 text-[#5a5a5a]'>
                        8.7. Any and all fees paid, irrespective of cancellation or termination, are non-refundable.
                    </h2>
                    <h2 style={{fontSize: '14px'}} className='xl:ml-14 mb-3 text-[#5a5a5a]'>
                        8.8. BMG make no warranty that your use of the SITE will meet your requirements.
                    </h2>

                    <h2 style={{fontSize: '14px'}} className='xl:ml-20 font-semibold'>
                        1).Liability
                    </h2>

                    <h2 style={{fontSize: '14px'}} className='xl:ml-14 my-3 text-[#5a5a5a]'>
                        9.1. To the full extent permitted by law, BMG excludes:

                    </h2>
                    <p style={{fontSize: '14px'}} className='xl:ml-14 text-[#5a5a5a]'>
                        (a)     all liability in respect of loss of data, interruption of business or any consequential or incidental damages, and
                    </p>
                    <p style={{fontSize: '14px'}} className='xl:ml-14 text-[#5a5a5a]'>
                        (b)     all representations, warranties or terms (whether express or implied) other than those expressly set out in these Terms.
                    </p>

                    <h2 style={{fontSize: '14px'}} className='mt-3 xl:ml-14 text-[#5a5a5a]'>
                        9.2. If any legislation operates to prohibit or restrict the exclusion, restriction or modification of any implied warranties, conditions or obligations, then to the extent possible, BMG limits its liability in
                    </h2>
                    <p style={{fontSize: '14px'}} className='xl:ml-14 text-[#5a5a5a]'>
                        (a)   in the case of services:
                    </p>
                    <p className='xl:ml-14 text-[#5a5a5a]'>
                        (a)   in the case of services:
                    </p>
                    <p style={{fontSize: '14px'}} className='xl:ml-14 text-[#5a5a5a]'>
                        (i) the supply of the services again; or
                    </p>
                    <p style={{fontSize: '14px'}} className='xl:ml-14 mt-3 text-[#5a5a5a]'>
                        (ii) the payment of the cost of having the services supplied again.
                    </p>

                    <p style={{fontSize: '14px'}} className='xl:ml-14 text-[#5a5a5a]'>
                        (b)    in the case of goods:
                    </p>
                    <p style={{fontSize: '14px'}} className='xl:ml-14 text-[#5a5a5a]'>
                        (i) the replacement of the goods or the supply of equivalent goods;
                    </p>
                    <p style={{fontSize: '14px'}} className='xl:ml-14 text-[#5a5a5a]'>
                        (ii) the repair of the goods;
                    </p>
                    <p style={{fontSize: '14px'}} className='xl:ml-14 text-[#5a5a5a]'>
                        (iii) the payment of the cost of repairing the goods, or replacing the goods or of acquiring
                    </p>
                    <p style={{fontSize: '14px'}} className='xl:ml-14 text-[#5a5a5a]'>
                        equivalent goods.
                    </p>

                    <h2 style={{fontSize: '14px'}} className='xl:ml-14 my-4 text-[#5a5a5a]'>
                        9.3. BMG will not be liable for any loss or damage caused by a distributed denial-of- service attack, viruses or other technologically harmful material that may infect your computer equipment, computer programs, data or other proprietary material as a result of or in connection with your use of the SITE or to your downloading of any material posted on it, or on any website linked to it. In using the SITE, you acknowledge that you view and download published material at your own risk.
                    </h2>
                    <h2  className='xl:ml-20 font-semibold'>
                        1).Linking to this Website and
                    </h2>


                    <h2 className='xl:ml-14 my-4 text-[#5a5a5a]'>
                        10.1. You may link to the SITE, provided you do so in a way that is fair and legal and does not damage BMG’s reputation or take advantage of it, but you must not establish a link in such a way as to suggest any form of association, approval or endorsement where none exists.
                    </h2>
                    <h2 className='xl:ml-20 font-semibold'>
                        1).Indemnity
                    </h2>
                    <h2 style={{fontSize: '14px'}}  className='xl:ml-14 my-4 text-[#5a5a5a]'>
                        directly or indirectly as a result of your use of the SITE, your breach of these Terms, or your violation of any applicable law or the rights of any third party.
                    </h2>
                    <p  style={{fontSize: '14px'}} className='xl:ml-14 my-4 text-[#5a5a5a]'>
                        12- Customer Service Communications and Third-Party Promotions
                    </p>
                    <p style={{fontSize: '14px'}} className='xl:ml-14 my-4 text-[#5a5a5a]'>
                        12.1. By using the SITE and accepting these terms of service, you consent to and agree to receive from BMG via email, text message, or otherwise;
                    </p>
                    <p style={{fontSize: '14px'}} className='xl:ml-14 my-4 text-[#5a5a5a]'>
                        (a) Updates in relation to your Ad performance.
                    </p>
                    <p style={{fontSize: '14px'}} className='xl:ml-14 my-4 text-[#5a5a5a]'>
                        (b) Ads on goods or services you may like to purchase.
                    </p>
                    <p style={{fontSize: '14px'}} className='xl:ml-14 my-4 text-[#5a5a5a]'>
                        (c) BMG features and our regular newsletter.
                    </p>
                    <p style={{fontSize: '14px'}}  className='xl:ml-14 my-4 text-[#5a5a5a]'>
                        (d) Invitations to participate in BMG survey campaigns.
                    </p>


                    <h2 style={{fontSize: '14px'}} className='xl:ml-14 my-8 text-[#5a5a5a]'>
                        12.2. By using the SITE and accepting these terms of service, you also consent to and agree to receive via email, text message, or otherwise, promotions and offers from third-party related entities to BMG.
                    </h2>


                    <h2 className='xl:ml-20 font-semibold'>
                        1).General
                    </h2>
                    <h2 style={{fontSize: '14px'}} className='xl:ml-14 my-4 text-[#5a5a5a]'>
                        13.1. You agree that you shall be solely responsible for (and that BMG has no responsibility to you or to any third party for) any breach of your obligations or any representation or warranty you provide under these Terms and for the consequences of any such breach (including any loss or
                        damage, howsoever caused, which BMG or any third party may suffer).
                    </h2>
                    <h2 style={{fontSize: '14px'}} className='xl:ml-14 my-4 text-[#5a5a5a]'>
                        13.2. If any provision of these Terms is invalid or unenforceable, it is to be read down or severed to the extent necessary without affecting the validity or enforceability of the remaining provisions.
                    </h2>
                    <h2 style={{fontSize: '14px'}} className='xl:ml-14 my-4 text-[#5a5a5a]'>
                        13.3. Failure or omission by BMG to enforce or require strict or timely compliance with any provision of these Terms will not affect or impair that provision, or BMG’s rights thereto.
                    </h2>
                    <h2 style={{fontSize: '14px'}} className='xl:ml-14 my-4 text-[#5a5a5a]'>
                        13.4. These Terms embody the entire understanding and agreement between the parties in relation to use of the SITE.
                    </h2>
                    <h2 style={{fontSize: '14px'}} className='xl:ml-14 my-4 text-[#5a5a5a]'>
                        13.5. Each party must at its own expense do everything reasonably necessary to give full effect to this Agreement.
                    </h2>
                    <h2 style={{fontSize: '14px'}} className='xl:ml-14 my-4 text-[#5a5a5a]'>
                        13.6. This Agreement is governed by the laws of Queensland, Australia and each party submits to the jurisdiction of the courts of Queensland Australia.
                    </h2>


                </div>

            </div>


        </>
    );
};

export default Terms;