import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { PostsContainer, GoBack } from '../components'
import { useMyContext } from '../context/AppContext'

const SearchResults = () => {
    const { searchPosts, searchResults } = useMyContext()
    const location = useLocation()

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        if (!params.get('q')) return
        searchPosts({ search: params.get('q') })
    }, [location])
    return (
        <Wrapper>
            <GoBack p='search results' />
            <PostsContainer posts={searchResults} />
        </Wrapper>
    )
}

const Wrapper = styled.div`


`

export default SearchResults