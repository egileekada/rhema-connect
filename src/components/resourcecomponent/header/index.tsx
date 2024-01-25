import SearchBar from '@/components/shared/searchbar'
import React from 'react'

interface Props {
    path: string
}

function ResourceHeader(props: Props) {
    const {
        path
    } = props

    return (
        <>
            {path === '/resources' && (
                <div className=' my-6 w-full flex justify-end ' >
                    <SearchBar />
                </div>
            )}
            {path === '/resources/book' && (
                <div className=' my-6 w-full flex justify-start ' >
                    <SearchBar />
                </div>
            )}
            {path === '/resources/audio' && (
                <div className=' my-6 w-full flex gap-6 justify-start ' >
                    <SearchBar />
                    <select className=' h-14 w-[200px] rounded-lg bg-[#3B3B3B] border border-[#919EAB52] px-4 pl-12 text-white ' >
                        <option>All Resources</option>
                    </select>
                </div>
            )}
        </>
    )
}

export default ResourceHeader
