export const EVENTS_DATA = [
    {
        image: 'assets/event_pics/davinci_comp2023.jpg', 
        /* 
        type: path to file, smth like: "assets/event_pics/eventpic.jpg"
        SIZE of file MUST be 1080x1080!! i dont want to deal with the sizes on the frontend lol
        (Actual jpg files, pls gather a few options including the picture in the instagram page so we can choose one. 
        this is not as important as it is dependent on what the marketing will give us, so if u can’t find any just do the ig pic for now)
        */
        link: "https://davincicompetition.ca/",
        /* 
        type: string
        (Link to instagram or another page)
        */
        name: "Davinci Competition 2023",
        /* 
        type: string
        (Name of event)
        */
        tags: [99,1,4],
        /* 
        type: int[], 3 tags max
        (List of tags by their ID [see task 2], just choose what tag u think matches)
        */
        date: new Date('October 28, 2023'),
        /* 
        type: date object
        (Date of event, can be estimate if cannot be found, used for sorting purposes)
        */
    },
    {
        image: "assets/event_pics/welcomingw3b.jpg",
        link: "https://www.instagram.com/p/CnbBzgkNpg8/",
        name: "Welcoming W3B",
        tags: [1],
        date: new Date('January 23, 2023'),
    },
    {
        image: "assets/event_pics/workingoutw3b1.jpg",
        link: "https://www.instagram.com/p/C8h-v1Jva9h/",
        name: "Workout with W3B II",
        tags: [3,4],
        date: new Date('June 28, 2024'),
    },
    {
        image: "assets/event_pics/networking.png",
        link: null,
        name: "W3B Startup Networking Event",
        tags: [1,5],
        date: new Date('June 28, 2025'), // placeholder date 
    },
    {
        image: "assets/event_pics/nft_pictionary.png",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSc1xpd03BH-SZt7HdY5Vp7c6il30Nklyj4AC0dAOxNpNp3yMA/viewform",
        name: "NFT Pictionary",
        tags: [2,6],
        date: new Date('March 12, 2025'),
    },
    { 
        image: "assets/event_pics/founder_panel.jpg", 
        link: null,  
        name: "Panel Session", 
        tags: [2,1,5], 
        date: new Date('June 20, 2025'), // placeholder date

    },
    { 
        image: "assets/event_pics/davinci_comp2024.jpg", 
        link: "https://www.davincicompetition.ca/", 
        name: "Davinci Competition 2024", 
        tags: [99,1,4], 
        date: new Date('October 24, 2024'),
    },
]