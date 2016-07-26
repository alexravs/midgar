import React from 'react'
import Search from 'react-search'

let ITEMS = [
    { title: 'javascript', description: 'an awesome language' },
    { title: 'ruby', description: 'a cool language' },
    { title: 'haskell', description: 'a functional language' }
]

let KEYS = ['title', 'description']
let KEY = 'title' /* search by title */


export default function YoutubeSearch() {
  return (
    <Search items={ITEMS} keys={KEYS} searchKey={KEY} />
  );
}
