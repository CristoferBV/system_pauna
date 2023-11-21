import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Agrega la referencia al icono Favicon aquí */}
        <link rel="icon" href="/Logo-UNA-Rojo_HD.png" />
      </Head>
      <body>
        <Main/>
        <title>PAUNA</title>
        <NextScript />
      </body>
    </Html>
  )
}
