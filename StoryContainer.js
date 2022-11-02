import React, { useState, useEffect } from 'react';
import StoryList from '../components/StoryList';

const StoryContainer = () => {
    const [stories, setStories] = useState([ ]);
    
    useEffect(() => {
        fetch( 'https://hacker-news.firebaseio.com/v0/topstories.json')
        
            .then( res => res.json())
            .then( (data) => {
                const storyPromises = data.map((data) => {
                        return fetch('https://hacker-news.firebaseio.com/v0/item/${data}$.json').then(res=> res.json())
                    }
                )

                //declare variable
                //map
                //fetch request
                //inject id inside the fetch request

            })
        Promise.all(storyPromises)
            .then((data)
                setStory(data)
            )
    },[])

    return ( 
        <StoryList />
     ); 
}
 
export default StoryContainer;