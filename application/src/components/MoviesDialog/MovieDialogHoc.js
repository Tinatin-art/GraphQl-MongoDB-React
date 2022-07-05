import { graphql } from 'react-apollo';
import { compose } from 'recompose';

import { deleteMovieMutation } from './mutations';
import { moviesQuery } from '../MoviesTable/queries';


const withGraphqlAdd = graphql(deleteMovieMutation, {
    props: ({mutate}) => ({
        deleteMovie: id => mutate({
            variables: id,
            refetchQueries: [{
                query: moviesQuery,
                variables: {name: ''}
            }],
        })
    })
})

export default compose( withGraphqlAdd);