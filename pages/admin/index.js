import dynamic from 'next/dynamic'

const CMS = dynamic(
  () =>
    import('../../netlify-cms-app').then(module => module.CMS),
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