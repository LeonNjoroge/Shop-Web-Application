import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { ApolloClient, InMemoryCache } from '@apollo/client/core';

const uri ='https://api.escuelajs.co/graphql'; 

export function createApollo() {
  return new ApolloClient({
    uri,
    cache: new InMemoryCache(),
  });
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
    },
  ],
  imports: [ApolloModule]
})
export class GraphQLModule {}
