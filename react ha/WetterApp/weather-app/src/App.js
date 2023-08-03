import React, { useState } from 'react';
import WeatherCard from './WeatherCard';
import { Button, TextField, Container, Grid } from '@mui/material';
import { styled } from '@mui/system';

const StyledContainer = styled(Container)({
  marginTop: '20px',
});

const StyledTextField = styled(TextField)({
  marginRight: '10px',
});

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState([]);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const fetchWeather = async () => {
    const apiKey = 'a46ec243bfd5b09c1dff7ce3b1264684'; // Ersetze dies durch deinen tatsächlichen API-Schlüssel
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
  
    if (response.ok && data.weather) {
      setWeatherData([...weatherData, data]);
    } else {
      console.error('Fehler beim Abrufen der Wetterdaten:', data);
    }
  };

  return (
    <StyledContainer>
      <Grid container justifyContent="center" alignItems="center">
        <StyledTextField label="Stadt" variant="outlined" onChange={handleInputChange} />
        <Button variant="contained" color="primary" onClick={fetchWeather}>
          Wetter abrufen
        </Button>
      </Grid>
      <Grid container spacing={3}>
        {weatherData.map((data, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <WeatherCard data={data} />
          </Grid>
        ))}
      </Grid>
    </StyledContainer>
  );
}

export default App;
