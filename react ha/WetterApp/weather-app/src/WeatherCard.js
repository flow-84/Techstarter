import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
  marginTop: '20px',
  backgroundColor: '#f0f4f8',
});

const StyledTitle = styled(Typography)({
  fontWeight: 'bold',
});

function WeatherCard({ data }) {
  if (!data || !data.weather || !data.weather[0]) {
    return <div>Fehler beim Laden der Wetterdaten</div>;
  }

  return (
    <StyledCard>
      <CardContent>
        <StyledTitle variant="h5">{data.name}</StyledTitle>
        <Typography>{data.weather[0].description}</Typography>
        <Typography>Temperatur: {data.main.temp} °C</Typography>
        <Typography>Luftfeuchtigkeit: {data.main.humidity} %</Typography>
      </CardContent>
    </StyledCard>
  );
}

export default WeatherCard;
