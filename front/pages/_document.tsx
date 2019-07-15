import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html lang="ja">
        <Head>
          <meta name="format-detection" content="telephome=no" />
          <meta name="Description" content="neko Page" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          <meta name="keywords" content="neko,im-neko,SFC,keio" />
          <meta property="og:title" content="Welcom to Neko Page!!" />
          <meta property="og:description" content="neko Page" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://im-neko.net" />
          <meta property="og:image" content="https://im-neko.net/mei-pika-icon.jpg" />
          <meta property="og:image:width" content="512" />
          <meta property="og:image:height" content="512" />
          <meta property="og:site_name" content="Welcom to Neko Page!!" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@Im_nuko" />
          <meta name="twitter:creator" content="@Im_nuko" />
          <meta name="twitter:url" content="https://im-neko.net" />
          <meta name="twitter:title" content="Welcom to Neko Page!!" />
          <meta name="twitter:description" content="neko Page" />
          <meta name="twitter:image" content="https://im-neko.net/mei-pika-icon.jpg" />
          <title>neko Page</title>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({
              google_ad_client: "ca-pub-3933354234319712",
              enable_page_level_ads: true
            });
         </script>

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
