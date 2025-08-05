import BeamHeroBanner from 'components/BeamHeroBanner';
import Footer from '../components/Footer';

import BeamHeader from 'components/BeamHeader';
import PromoGrid from 'components/PromoGrid';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';
import SocialLinks from 'components/SocialLinks';
import PageDetail from 'components/PageDetail';
import Buttons from 'components/Buttons';
import Constant from 'components/helpers/Constant/Constant';
import InsuranceBenefits from 'components/InsuranceBenefits';
import AssistOptionalInfo from 'components/AssistOptionalInfo';
import Toggle from 'components/Toggle';
import CardsWithOneTwoThreeColumn from 'components/CardsWithOneTwoThreeColumn';
import RichTextWithLayout from 'components/RichTextWithLayout';

const BeamPage: React.FC = () => {
  const beamText: Field<string> = {
    value: `
        <div class="bg-white">
        <aside class="accreditation-icons combined">
          <div class="bg-white md:py-[1.5rem] py-[1rem]">
          <h3></h3>
            <ul>
              <li>
                <figure class="image">
                  <img src="/defaqto-car-insurance-4-star.png" alt="Defaqto 4 Star Rating" />
                </figure>
                <div class="accreditation-text">
                  <h2>Defaqto 4 Star Rating</h2>
                  <p>BEAM comprehensive car insurance has a good level of features and benefits, and has been given a 4 Star Rating by Defaqto. Defaqto is one of the UK's most trusted sources of financial product and market intelligence.</p>
                </div>
              </li>
            </ul>
          </div>
        </aside>
        <article class="rich-text cf">
        <div class="eight-column-width cf">
        <h2>About BEAM</h2>
        <p>BEAM from the AA offers affordable car insurance exclusively through price comparison websites.</p>
        <p>We provide simple, good quality cover for your car, and additional extras if you need a bit more – including access to the AA breakdown service.</p>
        <p>As a BEAM car insurance customer you'll benefit from 24/7 access to AA Accident Assist – so day or night, your claim will be in safe hands.</p>
        <p>If you've got any questions about BEAM insurance, take a look at <a href="/car-insurance/faqs">our FAQs</a> or <a href="/contact-us">contact us</a>.</p>
        </div>
        </article>
        </div>
      `,
  };
  const richTextContent: Field<string> = {
    value: `
      <article class="rich-text mob-padding cf">
        <div class="eight-column-width cf"><br>
          <div class="article-summary-box grey-bg">
            <h2>Making a car insurance claim</h2>
          </div>
          <p>If you've had an accident, injury, loss or damage – whoever's at fault – we're ready to help.</p>
          <p>As a BEAM customer, you'll have 24/7 access to AA Accident Assist – so day or night, your claim will be in safe hands.</p>
          <p>To make a claim, call us on <strong>0330 041 3689</strong>.</p>
          <p>We'll need:</p>
          <ul>
            <li>Your personal details, including your policy number. You can find this on your Statement of Insurance, which was sent to you by post or email when you bought your car insurance.</li><br>
            <li>A description of the accident</li><br>
            <li>The location of the accident.</li><br>
            <li>Contact details of any third party, including passengers and witness.</li>
          </ul>
          <p>If your car was stolen, we'll need the crime reference number. You'll get this from the police when you report the theft.</p>
          <p>Your claim advisor will help you through the claims process. Once the incident report has been completed, we'll arrange repairs to your car or pass you to your insurer to move forward with the claim.</p>
          <p>Your claim advisor will get in touch within a week to keep you updated.</p>
          <div class="article-summary-box grey-bg">
            <h2>Making a windscreen claim</h2>
          </div>
          <p>Windscreen chipped or cracked?</p>
          <p>BEAM car insurance includes windscreen cover for the repair or replacement for the windscreen, sunroof and the remaining windows.</p>
          <p>There is an excess of £10–£25 for a windscreen repair.</p>
          <p>A windscreen replacement has a minimum £100 excess.</p>
          <p>To make a glass claim and arrange a repair or replacement, you'll need to <a href="https://www.autowindscreens.co.uk/bookflow/insurance?insurer=aa">book an appointment</a>.</p>
          <p>Have your policy number, start date and insurer ready – you can find these on your Statement of Insurance.</p>
          <p>Your no claims discount isn't affected by a windscreen claim.</p>
        </div>
      </article>
    `,
  };
  const accountRichTextContent: Field<string> = {
    value: `
      <article class="rich-text cf">
        <div class="eight-column-width cf">
          <hgroup>
            <h2 class="alt" style="text-align: center;">Your account</h2>
            <h6 style="text-align: center;">
              If you opened an account when you purchased BEAM Car Insurance, log in to find your documents and check your&nbsp;details.<br><br>
              Or if your policy has a <strong>Customer ID</strong> on the purchase confirmation email or letter, you can create an account using the policy&nbsp;number.<br><br>
              If you don't have a <strong>Customer ID</strong>, you can update your details using one of the online forms below.
            </h6>
          </hgroup>
          <br>
          <div class="centred">
            <a href="https://insuranceaccount.beam.co.uk/beam/portalrecall.launch?qsid=portal&amp;PolicyType=PC&amp;brandName=" class="button ra primary button primary ra shadow" title="Log in">Log in</a>
          </div>
          <br>
          <div class="centred">
            <a href="https://insuranceaccount.beam.co.uk/beam/portal/default/pc/registerportaluser.launch?qsid=portal&amp;PolicyType=PC&amp;brandName=" class="button ra primary button secondary ra shadow" title="Create an account">Create an account</a>
            <p>&nbsp;</p>
          </div>
        </div>
      </article>
    `,
  };

  const updateDetailsRichTextContent: Field<string> = {
    value: `
      <article class="rich-text cf">
        <div class="eight-column-width cf">
          <h2>Update your details using an online form</h2>
          <p>Need to change your details or ask a question about your cover? The quickest way is to fill in one of our online forms:</p>
          <p>If you're changing your vehicle or cover, or prefer to talk to us, call <strong>0330 041 3684</strong>.</p>
          
          <div class="article-summary-box grey-bg">
            <ul>
              <li><p><a href="/contact-us/change-address">Change address</a></p></li>
              <li><p><a href="/contact-us/change-phone">Change phone number</a></p></li>
              <li><p><a href="/contact-us/change-job">Change job</a></p></li>
              <li><p><a href="/contact-us/change-name">Change name</a></p></li>
              <li><p><a href="/contact-us/stop-auto-renew">Opt out of automatic renewal</a></p></li>
              <li><p><a href="/contact-us/cover-enquiries">Ask us anything to do with your cover</a></p></li>
            </ul>
          </div>
  
          <h2>Where can I find my policy documents and certificate of insurance?</h2>
          <p>Depending on your chosen preference, the documents were either sent by email or posted to the address you specified when you bought the policy,</p>
          <p>If you can't see the email, check it's not in your junk folder.</p>
          <p>If you can't find your documents, we can resend them. Give us a call on <strong>0330 041 3684</strong>.</p>
        </div>
      </article>
    `,
  };
  const richTextWithSideContent: Field<string> = {
    value: `
        <article class="rich-text beam-rich-text top-padding cf">
          
          <div class="eight-column-width cf"><p>This privacy notice tells you what happens to your personal data when you, your joint policy holders and beneficiaries hold an insurance product with us.</p>
  <p>If you provide us with personal information on behalf of another person, you must have their authorisation, and it must be accurate and up to date. You'll need to give them a copy of this privacy notice or tell them how to access this page.</p>
  <p>Where this privacy notice refers to 'you', this also includes personal data about anyone else named on the policy or anyone whose data you provide us with.</p>
  <h2>BEAM and our Data Protection Officer</h2>
  <p>BEAM is a trading name of The AA. Our main address is Level 3, Plant, Basing View, Basingstoke, Hampshire RG21 4HG. . The data controllers of our insurance products are the Automobile Association Insurance Services Limited (which includes BEAM) and, separately, the underwriter(s) of your policy. We have a Data Protection Officer (DPO), whose <a href="#DPO-contact">contact details</a> are at the bottom of this page.</p>
  <hr>
  <h2>Personal data we hold and use</h2>
  <p>We, our insurance panel members and underwriters hold and use different types of personal information about you, your policy holders and beneficiaries.</p>
  <p>The list below shows the data we process for our insurance products.</p>
  <ul>
      <li>
        <p>Personal and contact details, your date of birth, gender and age.</p>
      </li>
      <li>
        <p>Product beneficiaries or users, and policy holders.</p>
      </li>
      <li>
        <p>Records of your contacts with us and payment details.</p>
      </li>
      <li>
        <p>Details of products and services you hold or have held, your use of them, any claims or breakdowns, and any expressions of interest in The AA or its business partners.</p>
      </li>
      <li>
        <p>Details of claims made by you or one of your policy holders, or claims made by a third party, and data from industry sources such as the Claims Underwriting Exchange and the Motor Insurance Database (managed by Motor Insurance Bureau).</p>
      </li>
      <li>
        <p>Pricing and risk data about you, your beneficiaries or policy holders. This data is used, for example, to assess or make a decision about insurance risk, decide or set pricing or risk levels, and decide whether we can offer or continue to offer you a product or service. The data includes details of your product or service holdings (including your usage, claims and breakdown history), credit data, marketing profiles and analysis of you we hold, instances of suspected fraud, driving offences or endorsements, licence details and limitations, data from third parties, property and location details, vehicle details, driving history and telematics details.</p>
      </li>
      <li>
        <p>Marketing information, including records of marketing communications, details of what you may be interested in, analysis and profiles we build up about you and your interests, and whether you open or read communications or links.</p>
      </li>
      <li>
        <p>Vehicle information, including usages, any breakdowns and faults.</p>
      </li>
      <li>
        <p>Information which we obtain from credit reference agencies and fraud prevention agencies.</p>
      </li>
      <li>
        <p>Fraud, debt and theft information related to any products you hold with us.</p>
      </li>
      <li>
        <p>Criminal records information, including alleged offences – for example, if you apply for car insurance and we need this information.</p>
      </li>
      <li>
        <p>Information about your health or if you're a vulnerable customer, where needed for your insurance policy.</p>
      </li>
      <li>
        <p>Information about your property, such as location, value, number of rooms, property type and building work you've had done. Also, property and occupier status, such as whether you're a tenant, live with parents or are an owner occupier of the property where you live at the time of your application.</p>
      </li>
      <li>
        <p>Information about your employment status, where needed for your insurance policy.</p>
      </li>
      <li>
        <p>Your marital status, family, lifestyle or social circumstances, for example, the number of dependents you have or if you're a widow or widower.</p>
      </li>
      <li>
        <p>Information from third parties, including vehicle details, details of outstanding finance, claims details, data fraud prevention databases, property, geographic and demographic details, marketing data, publicly available information (for example electoral roll and court judgments), and information to help improve the relevance of our products and services or to help us manage our products and services, pricing or risk.</p>
      </li>
      <li>
        <p>Details of your usage of our website, details of your phone and its software (for example browser and set up information), browsing history, and other details obtained via cookies or similar technologies. See our <a href="/cookie-policy">cookie policy</a> for more details.</p>
      </li>
      <li>
        <p>Third party transactions, such as where a person other than the account holder pays for or uses the service.</p>
      </li>
  </ul>
  <p>We may be unable to provide products or services if you don't give certain information to us. In cases where providing some personal information is optional, we'll make this clear.</p>
  <hr>
  <h2>Sources of personal data</h2>
  <p>The information we hold comes from:</p>
  <ul>
      <li>
        <p>You directly, and family members, associates or beneficiaries of products and services – for example, if they're authorised to act for you or are allowed to use a service you have with us.</p>
      </li>
      <li>
        <p>AA Group and AA branded companies, if you already have a product with them, have applied for one or have held one previously. These include AA Developments Limited (including AA Breakdown Services and AA and BSM Driving School), AA Financial Services and AA Underwriting Insurance Company Limited.</p>
      </li>
      <li>
        <p>A third party and their insurer, if they're making a claim.</p>
      </li>
      <li>
        <p>Information generated about you when you use our products and services.</p>
      </li>
      <li>
        <p>From an insurer, claims company or an intermediary (for example a comparison site) whom we work with to provide products or services or quote to you.</p>
      </li>
      <li>
        <p>Business partners (for example financial services institutions, insurers), account beneficiaries, or others.</p>
      </li>
      <li>
        <p>Anyone who provides instructions or operates any of your accounts, products or services on your behalf (for example a power of attorney, solicitors and intermediaries).</p>
      </li>
      <li>
        <p>From sources such as fraud prevention agencies, credit reference agencies, other lenders, HM Revenue &amp; Customs, Motor Insurers' Bureau, Claims Underwriting Exchange, publicly available directories and information (for example a telephone directory, social media, internet and news articles), debt recovery and tracing agents, regulators, government departments or agencies, organisations to assist in prevention and detection of crime, the police and law enforcement agencies.</p>
      </li>
      <li>
        <p>Information we source about you or customers generally from commercial third parties, including demographic information, vehicle details, claims data, fraud information, marketing data, publicly available information, property and other information to help improve our products and services or our business.</p>
      </li>
  </ul>
  <hr>
  <h2>Reasons for using of your personal data</h2>
  <p>The reasons why and how we use your information are given below. We've arranged them according to the lawful basis that allows us to use the data. The lists apply to us, our insurance panel members and the underwriter(s).</p>
  <h3>1. To provide you with our products or services or decide whether to do so</h3>
  <p>a. Assessing an application for insurance, including considering whether or not to offer you the product or service; the price; the risk of doing so; availability of payment method; and the terms of the policy.</p>
  <p>b. Providing your insurance policy and any other products or services held with us.</p>
  <p>c. Communicating with you and holding records about our dealings and interactions with you, your fellow policy holders and beneficiaries.</p>
  <p>d. Making decisions about you or your policy, including your continued suitability for the policy; the risk of providing you with the policy; and assessing compliance with the policy terms.</p>
  <p>e. To manage the operation of our business and those of our respective insurers.</p>
  <p>f. To carry out checks at credit reference agencies and fraud prevention agencies pre-application, at application, and periodically after that.</p>
  <p>g. For analysing, assessing and profiling aspects of you, your vehicle (including assessing and predicting faults or issues), your driving style, your location and routes taken (for example, if you hold a telematics product), for quoting for and managing your policy, and for the continued assessment of insurance risk and compliance with policy conditions.</p>
  <p>h. For analysing and profiling aspects of your home or property, and for quoting for and managing your policy, including the continued assessment of the insurance risk of you and your property, and continued compliance with policy conditions.</p>
  <p>i. Updating your records, tracing your whereabouts, recovering debt, or validating the information you've provided is correct.</p>
  <p>j. To make automated decisions – including profiling – on whether to offer you a policy, and the price, payment method, risk or terms of it.</p>
  <p>k. To share information with business partners (for example underwriters, re-insurers) for quoting, assessing your application, and managing your policy; as needed with account beneficiaries, and service and payment providers to us; and for providing, administering or developing our products and services or our business.</p>
  <p>l. To enable us to provide you with products and services, quotes for products and services, and manage products and services you hold.</p>
  <h3>2. For our legitimate interests</h3>
  <p>a. To develop our insurance and any other products or services.</p>
  <p>b. To continually develop, improve and manage risk assessment, and pricing methods and models.</p>
  <p>c. To provide personalised content, products and services to you, such as our digital customer experience and offerings, and deciding which offers or promotions to show you on our digital channels.</p>
  <p>d. To test the performance of our products, services, and processes and systems.</p>
  <p>e. To improve the operation of our business, for example by improving customer service and operational performance and efficiency.</p>
  <p>f. To develop new products and services, and to review and improve current products and services.</p>
  <p>g. For managing and auditing our business operations.</p>
  <p>h. To keep records of our <a href="#monitoring">communications with you</a>.</p>
  <p>i. For marketing analysis and related profiling, to help us decide whether or not to offer you certain products and services.</p>
  <p>j. To understand our customers, and your use of our products and your preferences, and to develop profiles, algorithms and statistical models for these purposes.</p>
  <p>k. To send marketing offers by text, email, phone, post, social media and digital channels (for example using Facebook Custom Audiences and Google Custom Match).</p>
  <p>l. To carry out checks at credit reference agencies and fraud prevention agencies, to enable us to provide you with personalised offers. These checks will be soft searches that don't affect your credit rating.</p>
  <p>m. To provide insight and analysis of our customers for ourselves and our business partners, based on your use of your policies, and possible future opportunities.</p>
  <p>n. For market research, profiling, and analysis and developing statistics, to support any of the purposes listed in this notice.</p>
  <p>o. For profiling and decision making for purposes listed.</p>
  <p>p. To facilitate the sale of one or more parts of our business.</p>
  <p>q. To share information with business partners as necessary for purposes listed.</p>
  <p>r. To enable us to perform any of the above purposes, in particular AA Underwriting Insurance Company Limited and AA Financial Services Limited.</p>
  <h3>3. To comply with our legal obligations</h3>
  <p>Such as financial services regulations and other regulatory obligations, including Financial Conduct Authority, Prudential Conduct Authority and Financial Ombudsman Service.</p>
  <h3>4. With your consent or explicit consent</h3>
  <p>a. For direct marketing communications which are not based on our legitimate interests.</p>
  <p>b. For profiling and other automated decision making which aren't required for contractual or legal purposes.</p>
  <p>c. For processing special categories of personal data if another legal basis does not apply, such as about your health; if you're a vulnerable customer; or criminal records information.</p>
  <h3>5. For public interest</h3>
  <p>a. Using special categories of personal data to assess the risk of providing you with insurance, such as about your health; or criminal records information (including alleged offences).</p>
  <p>b. Using special categories of personal data to assess the risk of providing you with insurance, such as about your health or needs if you're a vulnerable customer.</p>
  <hr>
  <h2>Sharing and disclosures of your personal data</h2>
  <p>The categories of third parties we use are listed below. The reasons why are described on this page, and third parties may have access to personal information we hold or use.</p>
  <ul>
      <li>
        <p>Within the AA Group and AA branded companies, in particular Automobile Association Developments Limited (including AA Breakdown Services, and AA Driving School and BSM Driving School), Automobile Association Insurance Services Limited, Automobile Association Underwriting Insurance Services Limited and Automobile Association Financial Services Limited.</p>
      </li>
      <li>
        <p>Insurance panel members, underwriters and reinsurers.</p>
      </li>
      <li>
        <p>Account beneficiaries if they use a service you have with us.</p>
      </li>
      <li>
        <p>Parties who provide products and services to you, or help us to operate our business.</p>
      </li>
      <li>
        <p>Parties involved in a claim if they need to receive information to allow us to handle a claim made by you or against you, or if either insurer needs to investigate a case of fraud.</p>
      </li>
      <li>
        <p>Police and law enforcement agencies if we need to support a criminal investigation.</p>
      </li>
      <li>
        <p>Governmental and regulatory bodies such as HM Revenue &amp; Customs, the Financial Conduct Authority, the Prudential Regulation Authority, the Financial Ombudsman's Service, and the Information Commissioner's Office.</p>
      </li>
      <li>
        <p>Organisations and businesses who provide services to us under our authority, such as service providers, debt recovery agencies, IT companies, and suppliers of business support services.</p>
      </li>
      <li>
        <p><a href="#CRA">Credit reference agencies</a> and fraud prevention agencies.</p>
      </li>
      <li>
        <p>Third parties who help us identify, assess, or manage risk or pricing.</p>
      </li>
      <li>
        <p>Market research organisations who help us to develop and improve our products and services.</p>
      </li>
  </ul>
  <hr>
  <h2>Withdrawing your consent</h2>
  <p>If we rely on your consent, you can withdraw it at any time. Please use the <a href="#DPO-contact">contact details below</a>.</p>
  <hr>
  <h2>Transfers outside of the UK or EEA</h2>
  <p>Your personal information may be transferred outside the UK or the European Economic Area, for example to service providers. If we do so, we'll make sure that safeguards are in place where required, for example contractual agreements or other legal purposes unless certain exceptions apply.</p>
  <hr>
  <a id="CRA"></a>
  <h2>Sharing with credit reference agencies and fraud prevention agencies</h2>
  <p>To process a quote or application for insurance, we and any underwriters will perform credit, risk and identity checks on you with one or more credit reference agencies (CRAs) and fraud prevention agencies (FPAs).</p>
  <p>Where you do take insurance or credit from us, we may make periodic searches to manage your account. To do this, we'll supply your personal information to CRAs and FPAs, and they'll provide information about you. This will include your credit applications, and about your financial situation and history.</p>
  <p>CRAs and FPAs will also supply to us public information (including the electoral register), and shared credit, insurance and financial history information, and fraud prevention information.</p>
  <p>We, and any underwriters for your policy, will use this information to:</p>
  <ul>
      <li>
        <p>Assess your creditworthiness and whether you can afford to take the product.</p>
      </li>
      <li>
        <p>Assess our ability to offer you our products and services, including insurance.</p>
      </li>
      <li>
        <p>Verify the accuracy of the data you've provided to us.</p>
      </li>
      <li>
        <p>Prevent criminal activity, fraud and money laundering.</p>
      </li>
      <li>
        <p>Manage your account(s).</p>
      </li>
      <li>
        <p>Assess payment methods available to you.</p>
      </li>
      <li>
        <p>Trace and recover debts.</p>
      </li>
      <li>
        <p>Make sure any offers provided to you are appropriate to your circumstances.</p>
      </li>
  </ul>
  <p>We'll continue to exchange information about you with CRAs and FPAs while you have a relationship with us, and if necessary afterwards. We'll also notify the CRAs about your settled accounts.</p>
  <p>If you borrow and don't repay in full and on time, CRAs will record the outstanding debt. This information may be given to other organisations by CRAs.</p>
  <p>The identities of the CRAs and FPAs are available on request, and the data they hold, the ways in which they use and share personal information, data retention periods, and your data protection rights.</p>
  <p>When CRAs receive a search from us, they'll place a search footprint on your credit file that may be seen by other lenders.</p>
  <p>If you're making a joint application, or you tell us that you have a spouse or financial associate, we and our underwriters will link your records together. So make sure you discuss this with them before making the application. CRAs will also link your records together, and these links will remain on your and their files until such time as you or your partner successfully files for a disassociation with the CRAs to break that link.</p>
  <p>We and our underwriters use FPAs such as the Motor Insurance Database, Claims Underwriting Exchange, and commercially available insurance fraud prevention services and claims services in order to prevent, detect and investigate potential fraudulent insurance policy applications and claims. We'll share information with the FPAs about your application and policies in order to do this, and this information may be given to other organisations. More details can be found in the <a href="https://www.experian.co.uk/legal/crain/?SP_MID=14031-g&amp;SP_RID=2779500-g&amp;elqTrackId=c56eb20afefe4b47ab6bbe7b0acb938e&amp;elq=e956cef00dff4bd99421272874ea530c&amp;elqaid=14031&amp;elqat=1&amp;elqCampaignId=">Credit Reference Agency Information Notice</a>, which contains fraud prevention information.</p>
  <hr>
  <h2>Changes to your data</h2>
  <p>You should tell us about any changes to your personal data so we can update our records. The contact details for this purpose are in your insurance documents.</p>
  <hr>
  <a id="monitoring"></a>
  <h2>Monitoring communications</h2>
  <p>We may monitor communications with you where permitted by law, which may include recording telephone calls to and from our business. We do this for quality control and staff training purposes, to comply with regulatory rules, to prevent or detect crime, to protect the security of our communications, data and systems, and to enforce compliance with our internal policies.</p>
  <hr>
  <h2>Use of automated decisions</h2>
  <p>We sometimes make decisions about you using only technology, where none of our employees or any other individual has been involved. The decisions include whether to offer you a product or service, the risk of doing so, the price we'll offer, whether to offer you credit, the terms and conditions, to assess lending, insurance and business risks, and to assess what payment methods we can offer you.</p>
  <p>We may do this using data from the AA Group and AA branded companies, and underwriters. This includes product or services data (including usage of claims made).</p>
  <p>These examples explain why we do this:</p>
  <ul>
      <li>
        <p><strong>Assess your creditworthiness and ability</strong> – for example if you're applying for credit and have a history of late or non-payment of debts, we may not be able to offer you credit or else do so at a higher rate.</p>
      </li>
      <li>
        <p><strong>Assess our ability to offer our products and services and manage those accounts</strong> – for example if you or your beneficiaries have a history of making claims on insurance policies, or if we have concerns about the use of a policy (for example if you're in breach of its conditions) or your financial status, this may result in a higher risk being assigned to you, meaning you may be quoted a higher price or a policy being declined or cancelled.</p>
      </li>
      <li>
        <p><strong>Assess the risk of fraud</strong> – if we believe there's a significant risk of fraud, based on the information available to us, we may decline your application, quote a higher price, or decline or cancel your policy or application.</p>
      </li>
  </ul>
  <p>It's necessary to do this when entering into or performing the relevant insurance or credit agreement with you. We only do so if it's authorised by law or is based on your explicit consent.</p>
  <hr>
  <h2>Retention of your data</h2>
  <p>Unless we explain otherwise to you, we'll hold your personal information on the following criteria:</p>
  <ul>
      <li>
        <p>For as long as we have reasonable business needs.</p>
      </li>
      <li>
        <p>For as long as we provide products or services to you, and then for as long as someone could bring a claim against us.</p>
      </li>
      <li>
        <p>To comply with legal and regulatory requirements or guidance.</p>
      </li>
  </ul>
  <hr>
  <h2>Your data protection rights</h2>
  <p>Here is a list of the rights that individuals have under UK data protection laws. The rights don't apply in all circumstances, so your request may not always be granted, and we'll explain why at the time.</p>
  <ul>
      <li>
        <p>The right to be informed about the processing of your personal information.</p>
      </li>
      <li>
        <p>The right to have your personal information corrected if it's inaccurate, and to have incomplete personal information completed.</p>
      </li>
      <li>
        <p>The right to object to processing of your personal information.</p>
      </li>
      <li>
        <p>The right to restrict processing of your personal information.</p>
      </li>
      <li>
        <p>The right to have your personal information erased.</p>
      </li>
      <li>
        <p>The right to request access to your personal information and how we process it.</p>
      </li>
      <li>
        <p>The right to move, copy or transfer your personal information.</p>
      </li>
      <li>
        <p>Rights in relation to automated decision making which has a legal effect, or otherwise significantly affects you.</p>
      </li>
  </ul>
  <p>You have the right to complain to the <a href="https://ico.org.uk/">Information Commissioner's Office</a>, which enforces data protection laws. Our <a href="#DPO-contact">DPO</a> can provide you with more details on the above rights.</p>
  <hr>
  <h2>Your right to object</h2>
  <p>You have the right to object to certain purposes for processing your personal information, in particular direct marketing and for certain reasons based on our legitimate interests. You can contact our <a href="#DPO-contact">DPO</a> to exercise your right.</p>
  <h3>Opting out of marketing</h3>
  <p>You can stop our marketing at any time by <a href="#DPO-contact">contacting us</a>.</p>
  <hr>
  <h2>Changes to this privacy notice</h2>
  <p>Please check this page from time to time as we may update this privacy notice to reflect changes in the law and our privacy practices.</p>
  <hr>
  <a id="DPO-contact"></a>
  <h2>Contact us or our Data Protection Officer</h2>
  <p>You can use the contact details in your insurance documents or the contact us section of our website. Or please write to the Data Protection Officer at:</p>
  <p>The AA, Level 3, Plant, Basing View, Basingstoke, Hampshire RG21 4HG</p>
  <p><a href="mailto:dataprotection@theaa.com">dataprotection@theaa.com</a> </p></div>
          
      </article>
      `,
  };
  return (
    <div>
      <BeamHeader />
      <main>
        <BeamHeroBanner
          mobileImageUrl="/hero-banner-image-mobile.png"
          desktopImageUrl="/hero-banner-image.png"
          headingText="Quality insurance, backed by a brand you can trust"
        />
        <PromoGrid
          variant="promo-section"
          promoCards={[
            {
              title: 'Car insurance',
              description:
                'Comprehensive cover, extras if you need them, and expert claim handling around the clock.',
              buttons: [
                {
                  label: 'Our car insurance',
                  variant: 'primary',
                  desktopMinWidth: '',
                  mobileMinWidth: '22rem',
                },
              ],
              showOn: 'first',
              desktopMinHeight: '282px',
              mobileMinHeight: '256px',
              tabletMinHeight: '167px',
            },
            {
              title: 'Renewals',
              description:
                "Cover about to expire? We've made it really simple for you to renew with us.",
              buttons: [
                {
                  label: 'Renew your policy',
                  variant: 'primary',
                  desktopMinWidth: '',
                  mobileMinWidth: '22rem',
                },
              ],
              showOn: 'first',
              desktopMinHeight: '282px',
              mobileMinHeight: '256px',
              tabletMinHeight: '167px',
            },
            {
              title: 'Claims',
              description:
                'Had an accident? Whether you’re beside the road or back at home, we can help.',
              buttons: [
                {
                  label: 'Make a claim',
                  variant: 'primary',
                  desktopMinWidth: '',
                  mobileMinWidth: '22rem',
                },
              ],
              showOn: 'first',
              desktopMinHeight: '282px',
              mobileMinHeight: '256px',
              tabletMinHeight: '167px',
            },
            {
              title: 'Already got cover?',
              description:
                'Find out how to update your details, view your policy documents, and more.',
              buttons: [
                {
                  label: 'Manage your policy',
                  variant: 'primary',
                  desktopMinWidth: '',
                  mobileMinWidth: '22rem',
                },
              ],
              showOn: 'first',
              desktopMinHeight: '282px',
              mobileMinHeight: '256px',
              tabletMinHeight: '167px',
            },
          ]}
          richText={beamText}
        />
        <SocialLinks
          socialIcons={[
            {
              href: 'http://twitter.com/TheAA_uk',
              src: '/twitter.png',
              alt: 'x logo',
              title: 'x logo',
            },
            {
              href: 'http://www.facebook.com/TheAAUK',
              src: '/facebook-2.png',
              alt: 'facebook icon',
              title: 'facebook icon',
            },
          ]}
        />
      </main>
      <PageDetail
        title={'BEAM CAR INSURANCE CLAIMS'}
        headline={'Defaqto 4 Star rated cover'}
        description={'Exclusively available through price comparison websites'}
      ></PageDetail>
      <Buttons
        buttons={[
          {
            href: 'https://www.beam.co.uk/car-insurance/sales/tiers/your-quote/retrieve',
            title: 'Retrieve a quote',
            buttonText: 'Retrieve a quote',
            buttonType: Constant.BUTTONS.PRIMARY,
            buttonTextAlign: '',
            buttonWidth: '',
          },
          {
            href: '/car-insurance/existing-customers',
            title: 'Manage your policy',
            buttonText: 'Manage your policy',
            buttonType: Constant.BUTTONS.TRANSPARENT,
            buttonTextAlign: '',
            buttonWidth: '',
          },
        ]}
      />
      <InsuranceBenefits
        heading="Why insure your car with us?"
        facts={[
          {
            icon: '/courtesy-car.svg',
            alt: 'Guaranteed courtesy car',
            title: 'Courtesy car',
            heading: 'Guaranteed courtesy car',
            description:
              'If your car’s out of action and in for repair, we’ll send you a courtesy car to keep for as long as you need.<sup>1</sup>',
          },
          {
            icon: '/uninsured-driver.svg',
            alt: 'Uninsured driver promise',
            title: 'Uninsured driver',
            heading: 'Uninsured Driver Promise',
            description:
              'Hit by an uninsured driver and it wasn’t your fault? Keep your no claims discount and pay no excess.<sup>2</sup>',
          },
          {
            icon: '/travel.svg',
            alt: 'Transport or a hotel after an accident',
            title: 'Travel',
            heading: 'Help after an accident',
            description:
              'We’ll cover your travel or a hotel after an accident so you can get to where you need to be.<sup>3</sup>',
          },
        ]}
        richText={beamText}
      />
      <AssistOptionalInfo
        heading="What’s covered by BEAM car insurance?"
        description="BEAM car insurance is powered by the AA, one of the UK's leading brands. With the support of a trusted claims team, you can be confident you've got the right cover for the right price."
        items={[
          {
            text: (
              <>
                The{' '}
                <a href="#" className="!text-[#07818c] !font-bold !no-underline hover:underline">
                  comprehensive cover
                </a>{' '}
                protects your car against accidental damage , vandalism, fire or theft, and injuries
                to other people and damage to their vehicle or property.
              </>
            ),
          },
          {
            text: 'Add extra cover if you need it, such as Excess Protection or Motor Legal Assistance.',
          },
          {
            text: 'Because we’re backed by the AA, you can get breakdown cover from just £15.',
          },
        ]}
        productFeatureIntro="BEAM car insurance is only available through select price comparison sites."
        productFeatureHeading="Optional extras available with your cover"
        productFeatures={[
          {
            title: 'Breakdown Cover⁴',
            description: [
              {
                title: 'Roadside',
                description:
                  'Get 24/7 assistance if your vehicle breaks down over 1/4 mile from your home.',
              },
              {
                title: 'Roadside + National Recovery',
                description:
                  "Just in case we can't repair your vehicle, we'll take you and your vehicle to any UK destination – however far it is.",
              },
              {
                title: 'Roadside + National Recovery + At Home',
                description: '24/7 assistance if your vehicle breaks down at home.',
              },
            ],
          },
          {
            title: 'Motor Legal Assistance',
            description: [
              {
                title: '',
                description: 'Up to £100,000 legal help, a 24/7 helpline and online documents.',
              },
            ],
          },
          {
            title: 'Car Hire',
            description: [
              {
                title: '',
                description:
                  'Get a replacement vehicle for up to 21 days if your car’s written off or stolen.',
              },
            ],
          },
        ]}
      />
      <PromoGrid
        variant="promo-section"
        promoCards={[
          {
            title: 'Got a quote and want to buy BEAM?',
            description:
              'If you’ve already got a quote from a comparison site, just enter your reference number to pick up where you left off.',
            buttons: [
              {
                label: 'Retrieve your quote',
                variant: 'primary',
                desktopMinWidth: '',
                mobileMinWidth: '22rem',
              },
            ],
            showOn: 'first',
            desktopMinHeight: '282px',
            mobileMinHeight: '256px',
            tabletMinHeight: '167px',
          },
          {
            title: 'Already got cover?',
            description:
              'Find out how to update your details, view your policy documents, and more. ',
            buttons: [
              {
                label: 'Manage your policy',
                variant: 'primary',
                desktopMinWidth: '',
                mobileMinWidth: '22rem',
              },
            ],
            showOn: 'first',
            desktopMinHeight: '282px',
            mobileMinHeight: '256px',
            tabletMinHeight: '167px',
          },
          {
            title: 'Claims',
            description:
              'Had an accident? Whether you’re beside the road or back at home, we can help.',
            buttons: [
              {
                label: 'Make a claim',
                variant: 'primary',
                desktopMinWidth: '',
                mobileMinWidth: '22rem',
              },
            ],
            showOn: 'first',
            desktopMinHeight: '282px',
            mobileMinHeight: '256px',
            tabletMinHeight: '167px',
          },
          {
            title: 'FAQs',
            description:
              'Got a question that hasn’t been answered here? Our FAQs page could have the answer.',
            buttons: [
              {
                label: 'Explore our FAQs',
                variant: 'primary',
                desktopMinWidth: '',
                mobileMinWidth: '22rem',
              },
            ],
            showOn: 'first',
            desktopMinHeight: '282px',
            mobileMinHeight: '256px',
            tabletMinHeight: '167px',
          },
        ]}
        richText={beamText}
      />
      <Toggle></Toggle>
      <CardsWithOneTwoThreeColumn
        contacts={[
          {
            title: 'Contact us',
            phone: '0330 041 3684',
            description: 'Lines are open Monday to Friday 8am to 7pm, Saturday 9am to 5pm.',
            tabletMinHeight: '158px',
            desktopMinHeight: '169px',
            cta: 'Call now',
          },
          {
            title: 'Car insurance claims',
            phone: '0330 041 3689',
            description: 'Lines are open 24/7 all year.',
            tabletMinHeight: '158px',
            desktopMinHeight: '169px',
            cta: 'Call now',
          },
        ]}
      ></CardsWithOneTwoThreeColumn>
      <SocialLinks
        socialIcons={[
          {
            href: 'http://twitter.com/TheAA_uk',
            src: '/twitter.png',
            alt: 'x logo',
            title: 'x logo',
          },
          {
            href: 'http://www.facebook.com/TheAAUK',
            src: '/facebook-2.png',
            alt: 'facebook icon',
            title: 'facebook icon',
          },
        ]}
      />
      <PageDetail
        title={'BEAM CAR INSURANCE CLAIMS'}
        headline={'Make a claim'}
        description={'Call us 24/7 on 0330 041 3689'}
      ></PageDetail>
      <RichTextWithLayout description={richTextContent}></RichTextWithLayout>
      <CardsWithOneTwoThreeColumn
        contacts={[
          {
            title: 'Your quote',
            phone: '0330 041 3686',
            description: "We're open Monday to Friday 8am to 7pm, Saturday 9am to 5pm.",
            tabletMinHeight: '158px',
            desktopMinHeight: '169px',
            cta: 'Call about your quote',
          },
        ]}
      />
      <PageDetail
        title={'Existing customers'}
        headline={'Manage your policy'}
        description={'Update your details, see policy documents or make a claim'}
      ></PageDetail>
      <RichTextWithLayout description={accountRichTextContent}></RichTextWithLayout>
      <RichTextWithLayout description={updateDetailsRichTextContent}></RichTextWithLayout>
      <PromoGrid
        variant="promo-section"
        promoCards={[
          {
            title: 'Claims',
            description:
              'Had an accident? Whether you’re beside the road or back at home, we can help.',
            buttons: [
              {
                label: 'Make a claim',
                variant: 'primary',
                desktopMinWidth: '',
                mobileMinWidth: '22rem',
              },
            ],
            showOn: 'first',
            desktopMinHeight: '282px',
            mobileMinHeight: '256px',
            tabletMinHeight: '167px',
          },
          {
            title: 'FAQs',
            description:
              'Got a question that hasn’t been answered here? Our FAQs page could have the answer.',
            buttons: [
              {
                label: 'Explore our FAQs',
                variant: 'primary',
                desktopMinWidth: '',
                mobileMinWidth: '22rem',
              },
            ],
            showOn: 'first',
            desktopMinHeight: '282px',
            mobileMinHeight: '256px',
            tabletMinHeight: '167px',
          },
        ]}
        richText={beamText}
      />
      <CardsWithOneTwoThreeColumn
        contacts={[
          {
            title: 'Contact us',
            phone: '0330 041 3684',
            description: 'Lines are open Monday to Friday 8am to 7pm, Saturday 9am to 5pm.',
            tabletMinHeight: '158px',
            desktopMinHeight: '169px',
            cta: 'Call now',
          },
          {
            title: 'Car insurance claims',
            phone: '0330 041 3689',
            description: 'Lines are open 24/7 all year.',
            tabletMinHeight: '158px',
            desktopMinHeight: '169px',
            cta: 'Call now',
          },
        ]}
      ></CardsWithOneTwoThreeColumn>
      <SocialLinks
        socialIcons={[
          {
            href: 'http://twitter.com/TheAA_uk',
            src: '/twitter.png',
            alt: 'x logo',
            title: 'x logo',
          },
          {
            href: 'http://www.facebook.com/TheAAUK',
            src: '/facebook-2.png',
            alt: 'facebook icon',
            title: 'facebook icon',
          },
        ]}
      />
      <PageDetail
        title={'CONTACT US'}
        headline={'Contact us about your cover'}
        description={'For your quote, changes to your policy or renewal, just get in touch'}
      ></PageDetail>
      <CardsWithOneTwoThreeColumn
        contacts={[
          {
            title: 'Your quote',
            phone: '0330 041 3686',
            description: "We're open Monday to Friday 8am to 7pm, Saturday 9am to 5pm.",
            tabletMinHeight: '158px',
            desktopMinHeight: '169px',
            cta: 'Call about your quote',
          },
          {
            title: 'Policy queries',
            phone: '0330 041 3684',
            description: "We're open Monday to Friday 8am to 7pm, Saturday 9am to 5pm.",
            tabletMinHeight: '158px',
            desktopMinHeight: '169px',
            cta: 'Call about your policy',
          },
          {
            title: 'Your renewal',
            phone: '0330 041 3685',
            description: "We're open Monday to Friday 8am to 7pm, Saturday 9am to 5pm.",
            tabletMinHeight: '158px',
            desktopMinHeight: '169px',
            cta: 'Call about your renewal',
          },
        ]}
      ></CardsWithOneTwoThreeColumn>
      <PromoGrid
        variant="promo-section"
        promoCards={[
          {
            title: 'Claims',
            description:
              'Had an accident? Whether you’re beside the road or back at home, we can help.',
            buttons: [
              {
                label: 'Make a claim',
                variant: 'primary',
                desktopMinWidth: '',
                mobileMinWidth: '22rem',
              },
            ],
            showOn: 'first',
            desktopMinHeight: '282px',
            mobileMinHeight: '256px',
            tabletMinHeight: '167px',
          },
          {
            title: 'FAQs',
            description:
              'Got a question that hasn’t been answered here? Our FAQs page could have the answer.',
            buttons: [
              {
                label: 'Explore our FAQs',
                variant: 'primary',
                desktopMinWidth: '',
                mobileMinWidth: '22rem',
              },
            ],
            showOn: 'first',
            desktopMinHeight: '282px',
            mobileMinHeight: '256px',
            tabletMinHeight: '167px',
          },
        ]}
        richText={beamText}
      />
      <SocialLinks
        socialIcons={[
          {
            href: 'http://twitter.com/TheAA_uk',
            src: '/twitter.png',
            alt: 'x logo',
            title: 'x logo',
          },
          {
            href: 'http://www.facebook.com/TheAAUK',
            src: '/facebook-2.png',
            alt: 'facebook icon',
            title: 'facebook icon',
          },
        ]}
      />
      <RichTextWithLayout
        variant="withSidebar"
        description={richTextWithSideContent}
        sidebarLinks={[
          { href: '/complaints', label: 'Complaints' },
          { href: '/cookie-policy', label: 'Cookie policy' },
          { href: '/terms-and-conditions', label: 'Terms and conditions' },
        ]}
      />
      <Footer
        topLinks={[
          'Contact us',
          'FAQs',
          'Complaints',
          'Modern slavery',
          'Terms of use',
          'Privacy notice',
          'Cookies',
        ]}
        tradeMark="AA Insurance Services Ltd. 2025"
      ></Footer>
    </div>
  );
};

export default BeamPage;
