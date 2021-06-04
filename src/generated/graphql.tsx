import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  createTweet: Tweet;
  updateTweet?: Maybe<Tweet>;
  deleteTweet: Scalars['Boolean'];
};


export type MutationRegisterArgs = {
  options: UsernamePasswordInput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationCreateTweetArgs = {
  input: TweetInput;
};


export type MutationUpdateTweetArgs = {
  text: Scalars['String'];
  title: Scalars['String'];
  id: Scalars['Int'];
};


export type MutationDeleteTweetArgs = {
  id: Scalars['Int'];
};

export type PaginatedTweets = {
  __typename?: 'PaginatedTweets';
  tweets: Array<Tweet>;
  hasMore: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  tweets: PaginatedTweets;
  tweet?: Maybe<Tweet>;
};


export type QueryTweetsArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};


export type QueryTweetArgs = {
  id: Scalars['Int'];
};

export type Tweet = {
  __typename?: 'Tweet';
  id: Scalars['Float'];
  title: Scalars['String'];
  text: Scalars['String'];
  creatorId: Scalars['Float'];
  creator: User;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  textSnippet: Scalars['String'];
};

export type TweetInput = {
  title: Scalars['String'];
  text: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  username: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type UsernamePasswordInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type RegularErrorFragment = (
  { __typename?: 'FieldError' }
  & Pick<FieldError, 'field' | 'message'>
);

export type RegularUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username'>
);

export type RegularUserResponseFragment = (
  { __typename?: 'UserResponse' }
  & { errors?: Maybe<Array<(
    { __typename?: 'FieldError' }
    & RegularErrorFragment
  )>>, user?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export type TweetSnippetFragment = (
  { __typename?: 'Tweet' }
  & Pick<Tweet, 'id' | 'createdAt' | 'updatedAt' | 'title' | 'textSnippet'>
  & { creator: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username'>
  ) }
);

export type RegisterMutationVariables = Exact<{
  options: UsernamePasswordInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type CreateTweetMutationVariables = Exact<{
  input: TweetInput;
}>;


export type CreateTweetMutation = (
  { __typename?: 'Mutation' }
  & { createTweet: (
    { __typename?: 'Tweet' }
    & Pick<Tweet, 'id' | 'createdAt' | 'updatedAt' | 'title' | 'text' | 'creatorId'>
  ) }
);

export type DeleteTweetMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteTweetMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteTweet'>
);

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & RegularUserResponseFragment
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type UpdateTweetMutationVariables = Exact<{
  id: Scalars['Int'];
  title: Scalars['String'];
  text: Scalars['String'];
}>;


export type UpdateTweetMutation = (
  { __typename?: 'Mutation' }
  & { updateTweet?: Maybe<(
    { __typename?: 'Tweet' }
    & Pick<Tweet, 'id' | 'title' | 'text'>
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export type TweetQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type TweetQuery = (
  { __typename?: 'Query' }
  & { tweet?: Maybe<(
    { __typename?: 'Tweet' }
    & Pick<Tweet, 'id' | 'createdAt' | 'updatedAt' | 'title' | 'text'>
    & { creator: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    ) }
  )> }
);

export type TweetsQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type TweetsQuery = (
  { __typename?: 'Query' }
  & { tweets: (
    { __typename?: 'PaginatedTweets' }
    & Pick<PaginatedTweets, 'hasMore'>
    & { tweets: Array<(
      { __typename?: 'Tweet' }
      & TweetSnippetFragment
    )> }
  ) }
);

export const RegularErrorFragmentDoc = gql`
    fragment RegularError on FieldError {
  field
  message
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  username
}
    `;
export const RegularUserResponseFragmentDoc = gql`
    fragment RegularUserResponse on UserResponse {
  errors {
    ...RegularError
  }
  user {
    ...RegularUser
  }
}
    ${RegularErrorFragmentDoc}
${RegularUserFragmentDoc}`;
export const TweetSnippetFragmentDoc = gql`
    fragment TweetSnippet on Tweet {
  id
  createdAt
  updatedAt
  title
  textSnippet
  creator {
    id
    username
  }
}
    `;
export const RegisterDocument = gql`
    mutation Register($options: UsernamePasswordInput!) {
  register(options: $options) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const CreateTweetDocument = gql`
    mutation CreateTweet($input: TweetInput!) {
  createTweet(input: $input) {
    id
    createdAt
    updatedAt
    title
    text
    creatorId
  }
}
    `;

export function useCreateTweetMutation() {
  return Urql.useMutation<CreateTweetMutation, CreateTweetMutationVariables>(CreateTweetDocument);
};
export const DeleteTweetDocument = gql`
    mutation DeleteTweet($id: Int!) {
  deleteTweet(id: $id)
}
    `;

export function useDeleteTweetMutation() {
  return Urql.useMutation<DeleteTweetMutation, DeleteTweetMutationVariables>(DeleteTweetDocument);
};
export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const UpdateTweetDocument = gql`
    mutation UpdateTweet($id: Int!, $title: String!, $text: String!) {
  updateTweet(id: $id, title: $title, text: $text) {
    id
    title
    text
  }
}
    `;

export function useUpdateTweetMutation() {
  return Urql.useMutation<UpdateTweetMutation, UpdateTweetMutationVariables>(UpdateTweetDocument);
};
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};
export const TweetDocument = gql`
    query Tweet($id: Int!) {
  tweet(id: $id) {
    id
    createdAt
    updatedAt
    title
    text
    creator {
      id
      username
    }
  }
}
    `;

export function useTweetQuery(options: Omit<Urql.UseQueryArgs<TweetQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<TweetQuery>({ query: TweetDocument, ...options });
};
export const TweetsDocument = gql`
    query Tweets($limit: Int!, $cursor: String) {
  tweets(cursor: $cursor, limit: $limit) {
    hasMore
    tweets {
      ...TweetSnippet
    }
  }
}
    ${TweetSnippetFragmentDoc}`;

export function useTweetsQuery(options: Omit<Urql.UseQueryArgs<TweetsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<TweetsQuery>({ query: TweetsDocument, ...options });
};