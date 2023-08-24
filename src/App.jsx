import { useState } from 'react'
import './App.css'
import { Container, Box, Button, Typography, Grid } from '@mui/material';
  

function App() {
 const [displayValue, setDisplayValue] = useState('');
  
 const handleButtonClick = (value) => {
      setDisplayValue((prevValue) => prevValue + value);
    };
  
    const handleCalculate = () => {
      try {
        const result = eval(displayValue);
        setDisplayValue(result.toString());
      } catch (error) {
        setDisplayValue('Error');
      }
    };
  
    const handleClear = () => {
      setDisplayValue('');
    };
  
    return (
      <Container maxWidth="sm" sx={{
       display: 'flex', 
       alignItems: 'center', 
       height: '100vh',
       
          }}>
       <Box sx={{
           mt: 8,
           p: 7, 
          border: 'none', 
          borderRadius: '5px', 
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'rgb(0, 0, 0, 0.6)',
          color:'#FFF',
          }}>
          <Typography variant="h4" align="right" gutterBottom>
            {displayValue}
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <Button variant="contained" onClick={() => handleButtonClick('7')}>
                7
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" onClick={() => handleButtonClick('8')}>
                8
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" onClick={() => handleButtonClick('9')}>
                9
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" onClick={() => handleButtonClick('/')}>
                /
              </Button>
            </Grid>
            {/* Outros botões numéricos */}
            <Grid item xs={3}>
              <Button variant="contained" onClick={() => handleButtonClick('4')}>
                4
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" onClick={() => handleButtonClick('5')}>
                5
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" onClick={() => handleButtonClick('6')}>
                6
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" onClick={() => handleButtonClick('*')}>
                *
              </Button>
            </Grid>
            {/* Outros botões numéricos */}
            <Grid item xs={3}>
              <Button variant="contained" onClick={() => handleButtonClick('1')}>
                1
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" onClick={() => handleButtonClick('2')}>
                2
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" onClick={() => handleButtonClick('3')}>
                3
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" onClick={() => handleButtonClick('-')}>
                -
              </Button>
            </Grid>
            {/* Outros botões numéricos */}
            <Grid item xs={3}>
              <Button variant="contained" onClick={() => handleButtonClick('0')}>
                0
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" onClick={() => handleButtonClick('.')}>
                .
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" onClick={handleCalculate}>
                =
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" onClick={() => handleButtonClick('+')}>
                +
              </Button>
            </Grid>
            
            <Grid item xs={12}>
              <Button variant="contained" onClick={handleClear}>
                C
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
 
  


}

export default App
