import React from 'react'
import { Pagination } from '@mui/material'
import searchResult from '../data/SearchResult.json'
import Wrapper from '../layouts/Wrapper'
import SearchItem from '../components/SearchItem'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'

export default function SearchList() {
    return (
        <>
            <Header />
            <Wrapper>
                <p className="text-lg mb-6">
                    전체{' '}
                    <span className="font-bold text-primary">
                        {searchResult.meta.total_count}
                    </span>
                    건
                </p>
                <div className="flex flex-col gap-6">
                    {searchResult.documents.map((document) => (
                        <SearchItem
                            searchResult={document}
                            key={document.isbn}
                        />
                    ))}
                </div>
                <div className="flex justify-center mt-10">
                    <Pagination
                        count={searchResult.meta.total_count}
                        size="large"
                    />
                </div>
            </Wrapper>
            <Footer />
        </>
    )
}