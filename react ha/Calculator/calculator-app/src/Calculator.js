import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const Calculator = () => {
  const [expression, setExpression] = useState('');

  const handleButtonClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const handleCalculate = () => {
    try {
      const result = evaluateExpression(expression);
      setExpression(result.toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  const handleClear = () => {
    setExpression('');
  };

  const evaluateExpression = (exp) => {
    return new Function('return ' + exp)();
  };

  return (
    <div>
      <h1>Taschenrechner</h1>
      <div>
        <input type="text" value={expression} readOnly />
      </div>
      <Grid container spacing={1} justifyContent="center" sx={{ padding: '20px' }}>
        <Grid item xs={3} textAlign="center">
          <Button variant="contained" onClick={() => handleButtonClick('7')}>
            7
          </Button>
        </Grid>
        <Grid item xs={3} textAlign="center">
          <Button variant="contained" onClick={() => handleButtonClick('8')}>
            8
          </Button>
        </Grid>
        <Grid item xs={3} textAlign="center">
          <Button variant="contained" onClick={() => handleButtonClick('9')}>
            9
          </Button>
        </Grid>
        <Grid item xs={3} textAlign="center">
          <Button variant="contained" onClick={() => handleButtonClick('+')}>
            +
          </Button>
        </Grid>
        <Grid item xs={3} textAlign="center">
          <Button variant="contained" onClick={() => handleButtonClick('4')}>
            4
          </Button>
        </Grid>
        <Grid item xs={3} textAlign="center">
          <Button variant="contained" onClick={() => handleButtonClick('5')}>
            5
          </Button>
        </Grid>
        <Grid item xs={3} textAlign="center">
          <Button variant="contained" onClick={() => handleButtonClick('6')}>
            6
          </Button>
        </Grid>
        <Grid item xs={3} textAlign="center">
          <Button variant="contained" onClick={() => handleButtonClick('-')}>
            -
          </Button>
        </Grid>
        <Grid item xs={3} textAlign="center">
          <Button variant="contained" onClick={() => handleButtonClick('1')}>
            1
          </Button>
        </Grid>
        <Grid item xs={3} textAlign="center">
          <Button variant="contained" onClick={() => handleButtonClick('2')}>
            2
          </Button>
        </Grid>
        <Grid item xs={3} textAlign="center">
          <Button variant="contained" onClick={() => handleButtonClick('3')}>
            3
          </Button>
        </Grid>
        <Grid item xs={3} textAlign="center">
          <Button variant="contained" onClick={() => handleButtonClick('*')}>
            *
          </Button>
        </Grid>
        <Grid item xs={3} textAlign="center">
          <Button variant="contained" onClick={() => handleButtonClick('0')}>
            0
          </Button>
        </Grid>
        <Grid item xs={3} textAlign="center">
          <Button variant="contained" onClick={() => handleButtonClick('.')}>
            .
          </Button>
        </Grid>
        <Grid item xs={3} textAlign="center">
          <Button variant="contained" onClick={() => handleButtonClick('/')}>
            /
          </Button>
        </Grid>
        <Grid item xs={3} textAlign="center">
          <Button variant="contained" onClick={() => handleCalculate()}>
            =
          </Button>
        </Grid>
        <Grid item xs={3} textAlign="center">
          <Button variant="contained" onClick={() => handleClear()}>
            Clear
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Calculator;