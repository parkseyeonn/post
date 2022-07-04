import Head from "next/head";

const defaultSeo = {
  title: "Study With Me",
};

export default function Seo({
  title = defaultSeo.title, 
  ogTitle = defaultSeo.title, 
}) {
  return (
    <Head>
      <meta 
        name="description"
        content="Using study with me to find your study group"
      />
      <meta 
        name="og:title"
        content={ogTitle}
      />  
    </Head>
  )
}