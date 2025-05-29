import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <section className="flex items-center justify-center pb-4 md:px-[60px]">
        <div className="bg-[#E3EDF9] rounded-lg w-full pl-4 md:pl-[50px] py-8 md:py-[55px]">
          <div className="w-full md:w-[450px]">
            <h1 className="text-3xl md:text-[44px] font-normal leading-tight">Privacy Policy</h1>
            <p className="text-base pt-3">
              Details the methods we use to collect, handle, and safeguard your personal information, ensuring your privacy and data security while using our website.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center items-center py-8 md:py-[70px] px-4">
    <div className="w-full md:w-[80%] lg:w-[60%] max-w-4xl">
        <div>
            <h2 className="text-2xl md:text-[44px] font-normal pb-10">1. Data protection at a glance</h2>
            <div className="pl-4 md:pl-[35px]">
                <h3 className="text-xl md:text-[32px] font-normal pb-6">General information</h3>
                <p className="text-base text-[#343434] pb-8">The following notes provide a simple overview of what happens to your personal data when you visit this website. Personal data is all data with which you can be personally identified. Detailed information on the subject of data protection can be found in our privacy policy listed under this text.</p>
                
                <h3 className="text-xl md:text-[32px] font-normal pb-6">Data collection on this website</h3>
                <div className="pl-2 md:pl-[20px]">
                    <h4 className="text-lg md:text-[24px] font-normal pb-4">Who is responsible for the data collection on this website?</h4>
                    <p className="text-base text-[#343434] pb-8">The data processing on this website is carried out by the website operator. His contact details can be found in the section "Note on the responsible body" in this privacy policy.</p>
                    
                    <h4 className="text-lg md:text-[24px] font-normal pb-4">How do we gather your data?</h4>
                    <p className="text-base text-[#343434] pb-8">On the one hand, your data is collected by the fact that you provide it to us. Here it can be e.g. B. data that you enter in a contact form. Other data is collected automatically or after your consent when you visit the website by our IT systems. These are mainly technical data (e.g. B. Internet browser, operating system or time of page view). This data is collected automatically as soon as you enter this website.</p>
                    
                    <h4 className="text-lg md:text-[24px] font-normal pb-4">For what purposes do we use your data?</h4>
                    <p className="text-base text-[#343434] pb-8">Part of the data is collected to ensure an error-free provision of the website. Other data can be used to analyze your user behavior.</p>
                    
                    <h4 className="text-lg md:text-[24px] font-normal pb-4">What rights do you have with regard to your data?</h4>
                    <p className="text-base text-[#343434] pb-8">You have the right at any time to receive information free of charge about the origin, recipient and purpose of your stored personal data. You also have the right to request the correction or deletion of this data. If you have given your consent to data processing, you can revoke this consent at any time for the future. In addition, you have the right to request the restriction of the processing of your personal data under certain circumstances. Furthermore, you have a right of appeal to the competent supervisory authority.</p>
                    
                    <p className="text-base text-[#343434]">For this and for further questions about data protection, you can contact us at any time.</p>
                </div>
            </div>
        </div>
        
        <div className="mt-16">
            <h2 className="text-2xl md:text-[44px] font-normal pb-10">2. Hosting</h2>
            <p className="text-base text-[#343434] pb-8">We host the contents of our website with the following provider:</p>
            
            <div className="pl-4 md:pl-[35px]">
                <h3 className="text-xl md:text-[32px] font-normal pb-6">External hosting</h3>
                <p className="text-base text-[#343434] pb-6">This website is hosted externally. The personal data collected on this website is stored on the servers of the hoster / hoster. These can include IP addresses, contact requests, meta and communication data, contract data, contact data, names, website access and other data generated via a website.</p>
                <p className="text-base text-[#343434] pb-6">The external hosting is carried out for the purpose of fulfilling the contract with our potential and existing customers (Art. 6 para. 1 lit. b GDPR) and in the interest of a secure, fast and efficient provision of our online offer by a professional provider (Art. 6 para. 1 lit. f DSGVO). If a corresponding consent has been requested, the processing is carried out exclusively on the basis of Art. 6 para. 1 lit. a GDPR and § 25 para. 1 TTDSG, insofar as the consent requires the storage of cookies or access to information in the user's terminal device (e.g. B. Device fingerprinting) within the meaning of the TTDSG. <br />The consent can be revoked at any time. Our hoster will or will only process your data to the extent necessary to fulfill its performance obligations and follow our instructions regarding this data.</p>
                <p className="text-base text-[#343434] pb-6">We use the following hoster(s):</p>
                <address className="text-base text-[#343434] not-italic pb-8">
                    Vultr Frankfurt<br />
                    319 Clematis Street - Suite 900<br />
                    West Palm Beach, FL 33401
                </address>
            </div>
        </div>
        
        <div className="mt-[15px]">
            <h2 className="text-2xl md:text-[44px] font-normal pb-10  leading-[52px]" >3. General information and mandatory information</h2>
            <p className="text-base text-[#343434] pb-8">We host the contents of our website with the following provider:</p>
            
            <div className="pl-4 md:pl-[35px]">
                <h3 className="text-xl md:text-[32px] font-normal pb-6">Data privacy</h3>
                <p className="text-base text-[#343434] pb-6">The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this data protection declaration.</p>
                <p className="text-base text-[#343434] pb-6">When you use this website, various personal data are collected. Personal data is data with which you can be personally identified. This privacy policy explains what data we collect and what we use it for. She also explains how and for what purpose this is done.</p>
                <p className="text-base text-[#343434] pb-8">We would like to point out that the data transmission on the Internet (e.g. B. when communicating by e-mail) may have security gaps. A complete protection of the data against access by third parties is not possible.</p>
                
                <h3 className="text-xl md:text-[32px] font-normal pb-6">Note on the responsible authority</h3>
                <p className="text-base text-[#343434] pb-6">The authority responsible for data processing on this website is: GERMANCARD Technologies GmbH</p>
                <address className="text-base text-[#343434] not-italic pb-6">
                    this represented d. d. Managing Director Mesut Yilmaz<br />
                    Ottostr. 5<br />
                    50170 Kerpen<br />
                    GERMANY<br />
                    Phone: 02273601490<br />
                    E-Mail: <a href="mailto:office@germancard.de" className="hover:underline">office@germancard.de</a>
                </address>
                <p className="text-base text-[#343434]">The responsible body is the natural or legal person who alone or jointly with others is responsible for the purposes and means of processing personal data (e.g. B. Names, e-mail addresses o. Ä.) decides.</p>
            </div>
        </div>
    </div>
</section>

<section className="px-4 md:px-[50px]" aria-labelledby="partners-heading">
  <div className="border-t border-gray-200 py-5">
    <h2 id="partners-heading" className="text-[12px] font-bold text-center">We are official partners for</h2>

    <div className="flex flex-wrap justify-center items-center py-6 sm:py-8 md:py-10 gap-8 sm:gap-10 md:gap-[70px]">
      <div>
        <Image
          src="/assets/img/Cardpress.png"
          alt="Cardpress"
          width={145}
          height={50}
          className="w-[145px] filter grayscale"
        />
      </div>
      <div>
        <Image
          src="/assets/img/Dascom.png"
          alt="Dascom"
          width={165}
          height={50}
          className="w-[165px] filter grayscale"
        />
      </div>
      <div>
        <Image
          src="/assets/img/Matica.png"
          alt="Matica"
          width={130}
          height={50}
          className="w-[130px] filter grayscale"
        />
      </div>
      <div>
        <Image
          src="/assets/img/Evolis.svg"
          alt="Evolis"
          width={119}
          height={50}
          className="w-[119px] filter grayscale"
        />
      </div>
      <div>
        <Image
          src="/assets/img/Zebra.png"
          alt="Zebra"
          width={123}
          height={50}
          className="w-[123px] filter grayscale"
        />
      </div>
    </div>
  </div>
</section>

    </>
  );
}
