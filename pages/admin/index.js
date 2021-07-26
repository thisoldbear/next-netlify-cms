import dynamic from 'next/dynamic'

const CMS = dynamic(() => (typeof window !== "undefined") && import('./netlify-cms-app')
  .then((mod) => mod.CMS),  { ssr: false })

function Admin() {
  return (
    <div>
      {typeof window !== "undefined" &&
        <CMS />
      }
    </div>
  )
}

export default Admin