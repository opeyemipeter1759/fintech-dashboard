import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Header from '../../components/Header';

const Dashboard = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <Header title='My Card' />
      <div className='main'>
        <div className='first'>
          <div className='card'>
            <div className='card-inner-name'>
              <p>Name</p>
              <p>Carla Rosser</p>
            </div>
            <div className='card-inner-detail'>
              <div className='card-inner-detail_number'>
                <p>1200 01452 54215</p>
                <p>08/23</p>
              </div>
              <img
                src='/images/visa-icon.png'
                alt=''
                className='card-inner-detail-icon'
              />
            </div>
          </div>
          <div className='money'>
            <p>Send Money</p>
            <div className='select-card'>
              <FormControl
                sx={{
                  m: 1,
                  minWidth: 120,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <img src='/images/debit-card.png' alt='' />
                  <span>Debit</span>
                </div>
                <Select
                  sx={{
                    boxShadow: 'none',
                    '.MuiOutlinedInput-notchedOutline': { border: 0 },
                  }}
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value=''>
                    <em>$10.860</em>
                  </MenuItem>
                  {/* <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
              </FormControl>
                      </div>
                      <div className="enter-amount">
                      $<TextField id="standard-basic" label="Standard" variant="standard" />
                      </div> 
          </div>
          <div className='transfer'>transfer</div>
        </div>
        <div className='second'>
          <div className='second-top'>
            <div className='chart'>money flow</div>
            <div className='contact'>recent contact</div>
          </div>
          <div className='recent-transaction'>recent transaction</div>
          <div className='stat'>statistics</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
