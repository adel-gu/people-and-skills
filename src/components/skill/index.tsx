import React from 'react';
import { Button } from '@mui/material';
import { FaWeightHanging } from 'react-icons/fa';

const Skill = () => {
  return (
    <>
      <Button
        disabled={false}
        size="small"
        variant="outlined"
        color="error"
        sx={{ borderRadius: '100px' }}
      >
        <span>Git</span>
        <span>
          <FaWeightHanging />
        </span>
        <span>153</span>
      </Button>
    </>
  );
};

export default Skill;
