export default function Layout({children}) {
  return (
    <>
      <main>{children}</main>
      <style jsx>
        {`
        main {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 10px;
        }
        `}
      </style>
    </>
  )
}