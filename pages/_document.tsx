import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          type="text/javascript"
          src="https://cr244.infusionsoft.app/app/webTracking/getTrackingCode"
        />
        <Script
          type="text/javascript"
          src="https://cr244.infusionsoft.com/resources/external/recaptcha/production/recaptcha.js?b=1.70.0.365283-hf-202105211942"
        />
        <Script
          src="https://www.google.com/recaptcha/api.js?onload=onloadInfusionRecaptchaCallback&amp;render=explicit"
          async={true}
          defer={true}
        />
        <Script
          type="text/javascript"
          src="https://cr244.infusionsoft.com/app/timezone/timezoneInputJs?xid=3e775105fcc7f71b425e5832ba0a55da"
        />
        <Script
          type="text/javascript"
          src="https://cr244.infusionsoft.com/js/jquery/jquery-3.3.1.js"
        />
        <Script
          type="text/javascript"
          src="https://cr244.infusionsoft.app/app/webform/overwriteRefererJs"
        />
      </body>
    </Html>
  );
}
