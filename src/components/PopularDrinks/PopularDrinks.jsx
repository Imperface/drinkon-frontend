import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  PopularDrinksWrapper,
  PopularDrinksList,
  PopularDrinksListItem,
  PopularDrinksListImg,
  PopularDrinksListDescriptionContainer,
  PopularDrinksListDescriptionTitle,
  PopularDrinksListDescription,
  PopularDrinksTitle
} from './PopularDrinks.styled';

export const PopularDrinks = () => {
  const [PopularDrinks, setPopularDrinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPopularDrinks = async () => {
      try {
        const response = await axios.get('/api/drinks/popular');
        setPopularDrinks(response.data);
      } catch (error) {
        setError('Error fetching popular drinks');
      } finally {
        setLoading(false);
      }
    };

    fetchPopularDrinks();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (PopularDrinks.length === 0) {
    return <p>No popular drinks available at the moment.</p>;
  }

  return (
    <PopularDrinksWrapper>
      <PopularDrinksTitle>Popular drinks</PopularDrinksTitle>
      <PopularDrinksList>
        {PopularDrinks.map((drink) => (
          <PopularDrinksListItem key={drink.id}>
            <Link to={`/drink/${drink.id}`}>
              <PopularDrinksListImg src={drink.imageUrl} alt={drink.name} />
              <PopularDrinksListDescriptionContainer>
                <PopularDrinksListDescriptionTitle>{drink.name}</PopularDrinksListDescriptionTitle>
                <PopularDrinksListDescription>{drink.description}</PopularDrinksListDescription>
              </PopularDrinksListDescriptionContainer>
            </Link>
          </PopularDrinksListItem>
          // <>
          // <a href="">
          // <PopularDrinksListItem>
          //     <PopularDrinksListImg src="" alt="" />
          //     <PopularDrinksListDescriptionContainer>
          //       <PopularDrinksListDescriptionTitle>Gin Lemon</PopularDrinksListDescriptionTitle>
          //       <PopularDrinksListDescription>A gin and tonic is a highball cocktail made with gin and tonic water poured over a large </PopularDrinksListDescription>
          //     </PopularDrinksListDescriptionContainer>
          // </PopularDrinksListItem>
          // </a>
          // <a href="">
          // <PopularDrinksListItem>
          //     <PopularDrinksListImg src="" alt="" />
          //     <PopularDrinksListDescriptionContainer>
          //       <PopularDrinksListDescriptionTitle>Gin Smash</PopularDrinksListDescriptionTitle>
          //       <PopularDrinksListDescription>The Gin Basil Smash is a modern classic cocktail that’s refreshing, delicious, and so</PopularDrinksListDescription>
          //     </PopularDrinksListDescriptionContainer>
          // </PopularDrinksListItem>
          // </a>
          // <a href="">
          // <PopularDrinksListItem>
          //     <PopularDrinksListImg src="" alt="" />
          //     <PopularDrinksListDescriptionContainer>
          //       <PopularDrinksListDescriptionTitle>Spring Punch</PopularDrinksListDescriptionTitle>
          //       <PopularDrinksListDescription>The  spring punch is a highball cocktail of vodka and liqueur, per IBA specified ingredients</PopularDrinksListDescription>
          //     </PopularDrinksListDescriptionContainer>
          // </PopularDrinksListItem>
          // </a>
          // <a href="">
          // <PopularDrinksListItem>
          //     <PopularDrinksListImg src="" alt="" />
          //     <PopularDrinksListDescriptionContainer>
          //       <PopularDrinksListDescriptionTitle>Lone  Tree Cooler</PopularDrinksListDescriptionTitle>
          //       <PopularDrinksListDescription>Stir powdered sugar and 2 oz. carbonated water in a collins glass. Fill glass with ice, add gin</PopularDrinksListDescription>
          //     </PopularDrinksListDescriptionContainer>
          // </PopularDrinksListItem>
          // </a>
          // </>
          ))}
          </PopularDrinksList>
        </PopularDrinksWrapper>
      );}