import React from 'react'

export default function fetchList() {
    async() => {
        const temp = await fetch('https://api.jikan.moe/v4/seasons/now')
            .then(res => res.json());
        temp.data = shuffle(temp.data);
        setSeason(temp.data.slice(0, 7));
    }
}
