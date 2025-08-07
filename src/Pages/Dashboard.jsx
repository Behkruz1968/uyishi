import React from 'react'
const Sidebar = React.lazy(() => import('../components/Sidebar.jsx'));

const Dashboard = () => {
  return (
    <div>
        <Sidebar/>
       
    </div>
  )
}

export default React.memo(Dashboard)