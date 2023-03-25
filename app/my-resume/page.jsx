import Head from 'next/head';

export default function PdfPage() {
  return (
    <>
      <Head>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <meta name="viewport" content="initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="My PDF document" />
        <meta name="keywords" content="PDF, document" />
        <title>My PDF document</title>
        <meta
          name="pdf-url"
          content="https://example.com/my-pdf-document.pdf"
        />
      </Head>
      <iframe src="https://drive.google.com/file/d/1S3BKkenXp6l-9DZJrsG5Olj_wiS_Q0B-/preview" width="100%" height="100%" allow="autoplay"></iframe>
    </>
  );
}
