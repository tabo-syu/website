import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

const Document = class extends NextDocument {
  render() {
    return (
      <Html lang='ja'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
};

export default Document;
