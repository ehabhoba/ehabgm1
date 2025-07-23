import Head from 'next/head'

export default function SEO({ title, description, image }) {
  const siteTitle = "إيهاب جي إم أونلاين | حلول رقمية متكاملة"
  const siteDescription = description || "منصة متخصصة في التسويق الرقمي والتصميم وتطوير المواقع"
  const siteImage = image || "/images/og-image.jpg"

  return (
    <Head>
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}
