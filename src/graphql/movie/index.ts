import { gql } from "@apollo/client";

const GET_MOVIES = gql`
  query GetAllFilms {
    allFilms {
      films {
        title
        created
        id
      }
    }
  }
`;

export { GET_MOVIES };
