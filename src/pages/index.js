// import { useTheme } from '@mui/styles';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import * as React from 'react';

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.status.danger,
  '&.Mui-checked': {
    color: theme.status.danger,
  },
}));

const IndexPage = () => {
  return <CustomCheckbox defaultChecked />;
};

export default IndexPage;
