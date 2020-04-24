import React, { Fragment, useState } from 'react'
import { Form } from 'react-bulma-components'

const SearchBar = props => {

    const [query, setQuery] = useState('')

    const Search = event => {
        if(event.key === 'Enter') {
            props.fetchSearch(query)
            setQuery('')
        }
    }

    return (
        <Fragment>
            <Form.Field onKeyDown={Search}>
                <Form.Control iconRight>
                    <Form.Input placeholder="Álbuns, artistas ou músicas" value={query} onChange={event => setQuery(event.target.value)}/>
                </Form.Control>
            </Form.Field>
        </Fragment>
    )
}

export default SearchBar