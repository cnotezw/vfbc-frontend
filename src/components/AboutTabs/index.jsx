import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { styled, useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SiteFacilities from '../SiteFacilities';

import './styles.css';

const AntTabs = styled(Tabs)({
    borderBottom: '1px solid #e8e8e8',
    '& .MuiTabs-indicator': {
      backgroundColor: '#AB9370',
    },
  });
  
  const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    textTransform: 'none',
    minWidth: 0,
    [theme.breakpoints.up('sm')]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: 'rgba(0, 0, 0, 0.85)',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#AB9370',
      opacity: 1,
    },
    '&.Mui-selected': {
      color: '#AB9370',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#AB9370',
    },
  }));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function AboutTabs({ tabdata }) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  React.useEffect(() => {
    console.log("tabdata ", tabdata)
  }, [tabdata])

  return (
    <Box className="about-tabs">
        <AntTabs
          value={value}
          onChange={handleChange}
          indicatorColor="#AB9370"
          textColor="inherit"
          aria-label="full width tabs example"
          variant="scrollable"
          scrollButtons={false}
        >
          <AntTab label="Camp Facilities" {...a11yProps(0)} />
          <AntTab label="Tent Facilities" {...a11yProps(1)} />
          <AntTab label="Included" {...a11yProps(2)} />
        </AntTabs>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <SiteFacilities title="Camp Facilities" facilities={tabdata.facilities.camp} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <SiteFacilities title="Tent Facilities" facilities={tabdata.facilities.tent} />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <SiteFacilities title="Included" facilities={tabdata.facilities.included} />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
