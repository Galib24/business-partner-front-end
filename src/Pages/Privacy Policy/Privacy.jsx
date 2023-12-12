import React, { useEffect } from 'react';
import { GoDotFill } from "react-icons/go";
const Privacy = () => {
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
                <h2 style={{ fontSize: '26px' }} className='mt-10 ml-20 font-bold text-white'>Business Wanted</h2>
                <div className='hidden relative bottom-44 sm:block'>
                    <div className='flex justify-center items-center p-3 overflow-clip absolute top-56 right-28  lg:w-60 px-5 text-white  bg-[#291958]'>
                        <h2>Home </h2>
                        <h2>My business</h2>
                    </div>
                </div>
                <hr className='absolute lg:block hidden left-0 top-64 mt-3 w-full' style={{ border: '3px solid #291958', borderRadius: '5px 5px 5px 5px', }} />
            </div>


            {/* section */}
            <div className='container mx-auto px-14 py-14 my-20 rounded-3xl mt-5 w-10/12 bg-white shadow-2xl' >
                <div className='mb-5 '>
                    <hr className='h-1 bg-[#774e88] w-48 ' />
                    <div style={{ fontSize: '24px' }} className=' font-normal flex gap-2'>
                        <h2 className='text-[#5a5a5a]'>Privacy </h2>
                        <h2 className='text-[#774e88]'> Policy</h2>
                    </div>
                </div>
                {/* divider */}
                <div
                    className="divider mt-2">

                </div>


                <p style={{ fontSize: '14px' }} className=' text-[#5a5a5a]'>Business Media Group ("BMG") operates www.businesspost.com.au  ("SITE"). This policy details how BMG uses and protects personal information it receives, including information about your use of the SITE. BMG is committed to protecting your privacy. Information you provide while using the SITE will be used only in accordance with this policy.</p>

                <p style={{ fontSize: '14px' }} className=' text-[#5a5a5a] my-4'>
                    BMG may update this policy from time to time by updating this page. We will notify you of significant changes to this policy by placing a notice on the SITE.
                </p>

                <p style={{ fontSize: '14px' }} className=' text-[#5a5a5a] my-4'>
                    In order for BMG to provide the SITE it must collect information from you. This policy applies only to the SITE and to the activities of BMG's officers and employees. This policy does not extend to third-party sites linked from and to the SITE and BMG does not control the collection or use of personal information collected on third-party sites.
                </p>

                <h2 style={{ fontSize: '14px' }} className='xl:ml-6 flex font-semibold'>
                    <GoDotFill className='mt-1 mr-1 '></GoDotFill> Information we collect
                </h2>

                <p style={{ fontSize: '14px' }} className=' text-[#5a5a5a] my-4'>
                    When you visit the SITE you may provide BMG with two types of information: 'Your Personal Information' you knowingly choose to disclose that is collected on an individual basis and 'Website Use Information' collected on an aggregate basis as you and others use the SITE.
                </p>

                <p style={{ fontSize: '14px' }} className=' text-[#5a5a5a] my-4'>
                    BMG may as a result of your interaction with the SITE hold and process personal information obtained about you when you access the SITE and use it for servicing our relationship with you, for the purposes of fraud prevention, to conduct our business and to provide you with better customer service and products from BMG and those of selected third parties, to evaluate the effectiveness of our marketing of the SITE and for statistical analysis.
                </p>


                <p style={{ fontSize: '14px' }} className=' text-[#5a5a5a] my-4'>
                    BMG will not collect sensitive information except with your consent, and then only if collection of such information is necessary for some activity or function. For the purpose of this policy, 'Sensitive Information' means health information or information or an opinion about an individual's:
                </p>


                <div style={{ fontSize: '14px' }} className='flex'>
                    <GoDotFill className='mt-1 mr-1 text-[#5a5a5a]'></GoDotFill>
                    <p className='text-[#5a5a5a]'>racial or ethnic origin;</p>
                </div>

                <div style={{ fontSize: '14px' }} className='flex'>
                    <GoDotFill className='mt-2 mr-1 text-[#5a5a5a]'></GoDotFill>
                    <p className='text-[#5a5a5a]'>membership of a political association;</p>
                </div>

                <div style={{ fontSize: '14px' }} className='flex'>
                    <GoDotFill className='mt-2 mr-1 text-[#5a5a5a]'></GoDotFill>
                    <p className='text-[#5a5a5a]'>religious beliefs or affiliations;</p>
                </div>

                <div style={{ fontSize: '14px' }} className='flex'>
                    <GoDotFill className='mt-2 mr-1 text-[#5a5a5a]'></GoDotFill>
                    <p className='text-[#5a5a5a]'>philosophical beliefs;</p>
                </div>

                <div style={{ fontSize: '14px' }} className='flex'>
                    <GoDotFill className='mt-2 mr-1 text-[#5a5a5a]'></GoDotFill>
                    <p className='text-[#5a5a5a]'>membership of a professional or trade association;</p>
                </div>

                <div style={{ fontSize: '14px' }} className='flex'>
                    <GoDotFill className='mt-2 mr-1 text-[#5a5a5a]'></GoDotFill>
                    <p className='text-[#5a5a5a]'>membership of a trade union;</p>
                </div>

                <div style={{ fontSize: '14px' }} className='flex'>
                    <GoDotFill className='mt-2 mr-1 text-[#5a5a5a]'></GoDotFill>
                    <p className='text-[#5a5a5a]'>sexual preferences or practices; or</p>
                </div>

                <div style={{ fontSize: '14px' }} className='flex'>
                    <GoDotFill className='mt-2 mr-1'></GoDotFill>
                    <p className='text-[#5a5a5a]'>criminal record.</p>
                </div>


                <h2 style={{ fontSize: '14px' }} className='text-[#5a5a5a] my-4' >
                    Your Personal Information
                </h2>



                <div className='flex'>
                    <GoDotFill style={{ fontSize: '25px' }} className='text-[#5a5a5a] mr-1'></GoDotFill>
                    <p style={{ fontSize: '14px' }} className='text-[#5a5a5a]'>
                        BMG records information about your interactions with the SITE, and with BMG-hosted content embedded in third party web sites. BMG servers automatically receive and log information from your browser, including your IP address, browser configuration, the page or information you have requested and the date and time of your request.</p>
                </div>
                <div className='flex'>
                    <GoDotFill style={{ fontSize: '30px' }} className='text-[#5a5a5a] mr-1'></GoDotFill>
                    <p style={{ fontSize: '14px' }} className='text-[#5a5a5a]'>
                        BMG utilises "cookies" which enables it to monitor traffic patterns and to serve you more efficiently if you revisit the SITE. A cookie does not identify you personally, but it does identify your computer. You can set your browser to notify you when you receive a cookie, and this will provide you with an opportunity to either accept or reject it in each instance. If you disable cookies, the SITE may not function properly.</p>
                </div>


                <h2 style={{ fontSize: '14px' }} className='xl:ml-6 flex my-4 font-semibold'>
                    <GoDotFill className='mt-1 mr-1 '></GoDotFill> How we use collected information
                </h2>



                <p style={{ fontSize: '14px' }} className='text-[#5a5a5a] ml-4 my-4'>
                    BMG uses the information you provide in order to identify you, communicate with you, and provide personalised services. You may choose to remain anonymous to BMG by withholding identifying information.</p>


                <p style={{ fontSize: '14px' }} className='text-[#5a5a5a] ml-4 my-4'>
                    If you choose to decline to provide certain personal information to BMG, BMG may not be able to provide you full access to the SITE.</p>


                <p style={{ fontSize: '14px' }} className='text-[#5a5a5a] ml-4 my-4'>
                    Our use of collected information may include:</p>


                <div className='flex'>
                    <GoDotFill style={{ fontSize: '15px' }} className='text-[#5a5a5a] mr-1 mt-1'></GoDotFill>
                    <p style={{ fontSize: '14px' }} className='text-[#5a5a5a]'>
                        sharing aggregate information with third parties which does not personally identify you;</p>
                </div>

                <div className='flex'>
                    <GoDotFill style={{ fontSize: '20px' }} className='text-[#5a5a5a] mr-1 mt-1'></GoDotFill>
                    <p style={{ fontSize: '14px' }} className='text-[#5a5a5a]'>
                        contacting you, including with promotional materials and notifications in accordance with the Spam Act 2003, and in accordance with your agreement to receive certain materials in clause 12 of the Terms of Service for the use of the SITE.</p>
                </div>

                <div className='flex'>
                    <GoDotFill style={{ fontSize: '15px' }} className='text-[#5a5a5a] mr-1 mt-1'></GoDotFill>
                    <p style={{ fontSize: '14px' }} className='text-[#5a5a5a]'>
                        billing and account management;</p>
                </div>

                <div className='flex'>
                    <GoDotFill style={{ fontSize: '15px' }} className='text-[#5a5a5a] mr-1 mt-1'></GoDotFill>
                    <p style={{ fontSize: '14px' }} className='text-[#5a5a5a]'>
                        research and development in improving our services and in developing new products and services; and</p>
                </div>

                <div className='flex'>
                    <GoDotFill style={{ fontSize: '15px' }} className='text-[#5a5a5a] mr-1 mt-1'></GoDotFill>
                    <p style={{ fontSize: '14px' }} className='text-[#5a5a5a]'>
                        monitoring and maintaining our computers and network.</p>
                </div>

                <p style={{ fontSize: '14px' }} className='text-[#5a5a5a] ml-4 my-4'>
                    If you request BMG not to use personal information in a particular manner or at all, BMG will adopt all reasonable measures to observe your request, but it may still use or disclose that information if BMG:</p>



                <div className='flex'>
                    <GoDotFill style={{ fontSize: '15px' }} className='text-[#5a5a5a] mr-1 mt-1'></GoDotFill>
                    <p style={{ fontSize: '14px' }} className='text-[#5a5a5a]'>
                        subsequently notifies you of the intended use or disclosure and you do not object to that use or disclosure;</p>
                </div>

                <div className='flex'>
                    <GoDotFill style={{ fontSize: '15px' }} className='text-[#5a5a5a] mr-1 mt-1'></GoDotFill>
                    <p style={{ fontSize: '14px' }} className='text-[#5a5a5a]'>
                        believes that observing the request will legitimately inhibit BMG's ability to provide the SITE;</p>
                </div>
                <div className='flex'>
                    <GoDotFill style={{ fontSize: '15px' }} className='text-[#5a5a5a] mr-1 mt-1'></GoDotFill>
                    <p style={{ fontSize: '14px' }} className='text-[#5a5a5a]'>
                        believes that the use or disclosure is reasonably necessary to assist a law enforcement agency or an agency responsible for government or public security in the performance of their functions; or</p>
                </div>
                <div className='flex'>
                    <GoDotFill style={{ fontSize: '15px' }} className='text-[#5a5a5a] mr-1 mt-1'></GoDotFill>
                    <p style={{ fontSize: '14px' }} className='text-[#5a5a5a]'>
                        is required by law to disclose that information</p>
                </div>

                <p style={{ fontSize: '14px' }} className='text-[#5a5a5a] ml-4 my-4'>
                    Personal information collected by BMG will be used only for purposes outlined in this policy. If BMG proposes to use your information for any other purposes, then you will be provided with a means to opt out of the use of your information for those purposes.</p>

                <p style={{ fontSize: '14px' }} className='text-[#5a5a5a] ml-4 my-4'>
                    BMG will not sell or otherwise provide your personal information to a third party, or make any other use of your personal information, for any purpose which is not incidental to your use of the SITE, apart from as required in respect to your agreement to receive certain materials in clause 12 of the Terms of Service for the use of the SITE.. For the avoidance of doubt, personal information will not be used for any purpose which a reasonable person in your position would not expect. BMG does not sell or share your personal information with a third party except where:</p>


                <div className='flex'>
                    <GoDotFill style={{ fontSize: '15px' }} className='text-[#5a5a5a] mr-1 mt-1'></GoDotFill>
                    <p style={{ fontSize: '14px' }} className='text-[#5a5a5a]'>
                        you have provided your express consent in the Terms of Service of otherwise;</p>
                </div>

                <div className='flex'>
                    <GoDotFill style={{ fontSize: '15px' }} className='text-[#5a5a5a] mr-1 mt-1'></GoDotFill>
                    <p style={{ fontSize: '14px' }} className='text-[#5a5a5a]'>
                        it is made in connection with the provision of the SITE pursuant to the Terms of Service;</p>
                </div>

                <div className='flex'>
                    <GoDotFill style={{ fontSize: '15px' }} className='text-[#5a5a5a] mr-1 mt-1'></GoDotFill>
                    <p style={{ fontSize: '14px' }} className='text-[#5a5a5a]'>
                        BMG is responding to a court order, legal process or enforceable government request;</p>
                </div>

                <div className='flex'>
                    <GoDotFill style={{ fontSize: '20px' }} className='text-[#5a5a5a] mr-1 mt-1'></GoDotFill>
                    <p style={{ fontSize: '14px' }} className='text-[#5a5a5a]'>
                        BMG believes it is necessary to share information in order to investigate or take action in response to illegal activities; fraud or technical or security issues; threats against the rights, property or safety of BMG, its employees, users or the public; or</p>
                </div>


                <div className='flex'>
                    <GoDotFill style={{ fontSize: '15px' }} className='text-[#5a5a5a] mr-1 mt-1'></GoDotFill>
                    <p style={{ fontSize: '14px' }} className='text-[#5a5a5a]'>
                        as otherwise required by law.</p>
                </div>

                <h2 style={{ fontSize: '14px' }} className='xl:ml-6 flex my-4 font-semibold'>
                    <GoDotFill className='mt-1 mr-1'></GoDotFill> Securing your information
                </h2>


                <p style={{ fontSize: '14px' }} className='text-[#5a5a5a] ml-4 my-4'>
                    BMG employs appropriate electronic and procedural measures to protect personal information from unauthorised access or modification. Access to your personal information is limited to employees we believe reasonably need to use that information in order to perform their roles in providing or developing the SITE.</p>

                <p style={{ fontSize: '14px' }} className='text-[#5a5a5a] ml-4 my-4'>
                    You are entitled to have access to any personal information relating to you which you have previously supplied to BMG through the SITE. You are entitled to edit or delete such information unless we are required by law to retain it.</p>

                <p style={{ fontSize: '14px' }} className='text-[#5a5a5a] ml-4 my-4'>
                    If you have questions or concerns about this policy, please send an email to support@businesspartner.com.au</p>
            </div>
        </>
    );
};

export default Privacy;