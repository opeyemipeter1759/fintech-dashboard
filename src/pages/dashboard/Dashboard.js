import { useState } from 'react';
import {
  TextField,
  MenuItem,
  Select,
  FormControl,
  IconButton,
  Box,
  Typography,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import EditIcon from '@mui/icons-material/Edit';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import Header from '../../components/Header';
import AddIcon from '@mui/icons-material/Add';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import { recentTranscationObj, statisticsObj } from './recent-transaction-data';

const TransactionItem = ({ icon, title, date, cardNumber, amount, status }) => {
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      mb={4}
    >
      <Typography
        variant='p'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
        }}
      >
        <img src={icon} alt={title} />
        {title}
      </Typography>
      <Typography variant='p'>{cardNumber}</Typography>
      <Typography variant='p'>{date}</Typography>
      <Typography variant='p'>{amount}</Typography>
      <p className={status === 'success' ? 'success' : 'pending'}>{status}</p>
    </Box>
  );
};

const StatItem = ({ icon, rating, title }) => {
  return (
    <div className='stat-item'>
      <img src={icon} alt={title} />
      <div>
        <h2>{rating}</h2>
        <p>{title}</p>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [age, setAge] = useState('');

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
            <p className='money-heading'>Send Money</p>
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
                    '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':
                      {
                        border: 0,
                      },
                    '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                      {
                        border: 0,
                      },
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
            <div className='enter-amount'>
              <Box>
                <div
                  style={{ display: 'flex', gap: '10px', alignItems: 'center' }}
                >
                  <img src='/images/astrid.jpg' alt='Master Card' />
                  <p className='amount-label'>Enter the amount</p>
                </div>
                <Box
                  component='form'
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                  noValidate
                  autoComplete='off'
                >
                  <TextField
                    id='standard-basic'
                    sx={{
                      '& fieldset': { border: 'none' },
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <AttachMoneyOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
                    style={{
                      m: 1,
                      width: '25ch',
                      borderColor: 'none!important',
                    }}
                  />
                  <img src='/images/country.jpg' alt='Master Card' />
                </Box>
              </Box>
            </div>
            <Box className='profile-details'>
              <Box className='profile-name'>
                <img src='/images/astrid.jpg' alt='Master Card' />
                <p>Astrid Hayes</p>
              </Box>
              <div className='profile-icon'>
                <AddIcon sx={{ fontSize: 'small' }} />
              </div>
            </Box>
            <div className='btn'>Send Money</div>
          </div>
          <div className='transfer'>
            <p className='transfer-heading'> Quick Transfer</p>
            <div className=''>
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
                    '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':
                      {
                        border: 0,
                      },
                    '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                      {
                        border: 0,
                      },
                  }}
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value=''>
                    <em>$10.860</em>
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className='enter-amount'>
              <FormControl fullWidth sx={{ m: 1 }} variant='filled'>
                <InputLabel htmlFor='outlined-adornment-password'>
                  Enter amount
                </InputLabel>
                <OutlinedInput
                  id='outlined-adornment-password'
                  type='text'
                  startAdornment={
                    <InputAdornment position='start'>$</InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        edge='end'
                      >
                        <img src='/images/country.jpg' alt='Master Card' />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
            <div className='transfer-details-icons'>
              <div>
                <IosShareOutlinedIcon
                  className='transfer-icons'
                  sx={{ color: '#A789FF' }}
                />
                <p>send</p>
              </div>
              <div>
                <IosShareOutlinedIcon
                  className='transfer-icons'
                  sx={{ color: '#83DEA4' }}
                />
                <p>Receive</p>
              </div>
              <div>
                <ReceiptOutlinedIcon
                  className='transfer-icons'
                  sx={{ color: '#FCE37E' }}
                />
                <p>Invoicing</p>
              </div>
              <div>
                <DashboardCustomizeOutlinedIcon
                  className='transfer-icons'
                  sx={{ color: '#436CFB' }}
                />
                <p>More</p>
              </div>
            </div>
          </div>
        </div>
        <div className='second'>
          <div className='second-top'>
            <div className='chart'>money flow</div>
            <div className='contact'>
              <div className='recent-contact-section'>
                <div>
                  <p>Recent Contacts</p>
                </div>
                <div className='recent-contact-icon'>
                  <EditIcon sx={{ color: '#C1C1C1' }} />
                  <SearchOutlinedIcon sx={{ color: '#0177FB' }} />
                </div>
              </div>
              <p className='recipient-text'>18 recipients</p>
                          <div  className='image-stack'
                          >
                <img
                  src='/images/image1.jpg'
                  alt='contact-images'
                  className='contact-image'
                />
                <img
                  src='/images/image2.jpg'
                  alt='contact-images'
                  className='contact-image'
                />
                <img
                  src='/images/image3.jpg'
                  alt='contact-images'
                  className='contact-image'
                />
                <img
                  src='/images/image4.jpg'
                  alt='contact-images'
                  className='contact-image'
                />
                <img
                  src='/images/image5.jpg'
                  alt='contact-images'
                  className='contact-image'
                />
                <ArrowForwardIosIcon
                  sx={{ fontSize: 'medium' }}
                  className='recent-contact-forward'
                />
              </div>
              <div className='recent-contact-group'>
                <p sx={{ color: '#CCCCCC' }}>
                  Group <span style={{ color: '#7D8DA6' }}>Party</span>{' '}
                </p>
                <div className='recent-image'>
                  <div class='group-image'>
                    <div>
                      <img src='/images/image1.jpg' alt='Master Card' />
                      <img src='/images/image1.jpg' alt='Master Card' />
                      <img src='/images/image1.jpg' alt='Master Card' />
                    </div>
                    <div className='recent-contact-number'>
                      <p>+ 5</p>
                    </div>
                  </div>
                  <div></div>
                  <div>
                    <MarkChatUnreadIcon sx={{ color: '#C1C1C1' }} />
                  </div>
                </div>
                <div className='recent-image'>
                  <div
                    style={{
                      display: 'flex',
                      gap: '40px',
                      alignItems: 'center',
                    }}
                  >
                    <img src='/images/image.jpg' alt='Master Card' />
                    <div>
                      <p className='recent-contact-name'>Dakota Milk</p>
                      <p className='recent-contact-amount'>$ 420.00</p>
                    </div>
                  </div>
                  <ArrowForwardIosIcon
                    sx={{ fontSize: 'medium' }}
                    className='recent-contact-forward'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='recent-transaction'>
            <div className='recent-transaction-heading'>
              <h4>Recent Transaction</h4>
              <p>View all > </p>
            </div>
            {recentTranscationObj.map((item, i) => {
              return (
                <TransactionItem
                  key={i}
                  icon={item.icon}
                  title={item.title}
                  date={item.date}
                  cardNumber={item.cardNumber}
                  amount={item.amount}
                  status={item.status}
                />
              );
            })}
          </div>
                  <Box boxShadow="0px 14.625px 80.4375px -21.9375px rgba(43, 37, 37, 0.12);" borderRadius=" 10.2375px">
                      <div className="stat-wrapper">
            <h2>Statistics</h2>
            <div className='stat'>
              {statisticsObj.map((item, i) => {
                return (
                  <StatItem
                    key={i}
                    icon={item.icon}
                    rating={item.rating}
                    title={item.title}
                  />
                );
              })}
            </div>
                </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
