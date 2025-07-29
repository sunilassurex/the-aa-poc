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
          },
          {
            href: '/car-insurance/existing-customers',
            title: 'Manage your policy',
            buttonText: 'Manage your policy',
            buttonType: Constant.BUTTONS.TRANSPARENT,
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
