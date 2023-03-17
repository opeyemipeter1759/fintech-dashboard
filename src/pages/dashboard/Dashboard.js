import React from 'react'
import {Box} from "@mui/material"
import Header from '../../components/Header'

const Dashboard = () =>
{
  
    
  return (
      <div>
          <Header title="My Card" />
          <div className='main'>
              <div className="first">
                  <div className="card">
                      card
                  </div>
                  <div className="money">
                      send money
                  </div>
                  <div className="transfer">
                      transfer
                  </div>
              </div>
              <div className="second">
                  <div className="second-top">
                      <div className="chart">
                          money flow
                      </div>
                      <div className="contact">
                          recent contact
                      </div>
                  </div>
                  <div className="recent-transaction">
                      recent transaction
                  </div>
                  <div className="stat">
                      statistics
                  </div>
              </div>
          </div>

    </div>
  )
}

export default Dashboard