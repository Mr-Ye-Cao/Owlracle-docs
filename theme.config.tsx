import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: 
  <div style={{display: "flex", alignItems: "center", fontWeight: "bold", backgroundColor: "white", borderRadius: "5px", padding: "5px"}}>
    <img width={50} src="/logo.png" placeholder='Owlracle Logo' />
    <div style={{color: "black", marginLeft: "5px"}}>Owlracle</div>
  </div>,
  head: (
    <head>
      <link rel="icon" type="image/png" href="https://owlracle-documentation-deploy.vercel.app/favicon.ico" />
      <meta property="og:title" content="Owlracle Documentation" />
      <meta property="og:description" content="The official documentation for Owlracle." />
      <meta property="og:image" content="https://owlracle-documentation-deploy.vercel.app/banner.png" />
      <script defer src="/_vercel/insights/script.js"></script>
    </head>
  ),
  project: {
    link: 'https://github.com/Open-Nice/Owlracle',
  },
  chat: {
    link: 'https://discord.gg/aHRxTK5jHG',
  },
  docsRepositoryBase: 'https://github.com/Open-Nice/Owlracle',
  primaryHue: 220,
  footer: {
    text: 'Owlracle © 2023',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s'
    }
  }
}

export default config
