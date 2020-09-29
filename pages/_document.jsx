import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width, height=device-height" />
        </Head>
        <body className="hoax_portfolio">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
