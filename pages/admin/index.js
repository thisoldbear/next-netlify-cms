import dynamic from 'next/dynamic'

const CMS = dynamic(
  () =>
    import('../../netlify-cms-app'),
  { ssr: false },
);

function Admin() {
  return (
    <div>
        <CMS />

    </div>
  )
}

export default Admin