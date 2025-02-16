import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
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
})
export class GraphQLModule {}
