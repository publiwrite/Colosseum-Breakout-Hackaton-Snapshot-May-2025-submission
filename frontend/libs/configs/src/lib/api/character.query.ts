import { gql } from '../apollo';

export const CREATE_CHARACTER = gql(`#graphql
  mutation CreateCharacter($input: CharacterInput!) {
    createCharacter(input: $input) {
      id
    }
  }
`);

export const UPDATE_CHARACTER = gql(`#graphql
  mutation UpdateCharacter($input: UpdateCharacterInput!) {
    updateCharacter(input: $input) {
      id
    }
  }
`);

export const DELETE_CHARACTER = gql(`#graphql
  mutation DeleteCharacter($id: String!) {
    deleteCharacter(id: $id)
  }
`);

export const CREATE_CHARACTER_RELATION = gql(`#graphql
  mutation CreateCharacterRelation($input: CreateRelationsInput!) {
    createCharacterRelation(input: $input) 
  }
`);

export const DELETE_CHARACTER_RELATION = gql(`#graphql
  mutation DeleteCharacterRelation($relationId: String!) {
    deleteCharacterRelation(relationId: $relationId) 
  }
`);

export const UPDATE_CHARACTER_METADATA = gql(`#graphql
  mutation UpdateCharacterMetadata($input: UpdateCharacterMetadataInput!) {
    updateCharactersMetadata(input: $input)
  }
`);

export const GET_MANUSCRIPT_CHARACTERS = gql(`#graphql
  query GetManuscriptCharacters($manuscriptId: String!) {
    getManuscriptCharacters(manuscriptId: $manuscriptId) {
      id
      name
      description
      age
      race
      species
      gender
      personalityTraits
      origin
      role
      isDead
      physicalAppearance
      relations {
        id
        type
        fromCharacter {
          id
          name
        }
        toCharacter {
          id
          name
        }
      }
      connectedWith {
        id
        type
        fromCharacter {
          id
          name
        }
        toCharacter {
          id
          name
        }
      }
      additionalFields 
      metadata
    }
  }
`);
