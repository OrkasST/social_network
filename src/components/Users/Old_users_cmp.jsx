// const Users = (props) => {
    //     if (props.users.length === 0) {
    
    //         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
    //             props.setUsers(response.data.items);
    //         })
    
    //         // props.setUsers([
    //         //     {
    //         //         id: 1, fullName: 'Michael', photoUrl: 'https://www.man-shop.eu/media/image/19/07/c7/HerrenBz6datKT7kMmG.png',
    //         //         followed: false, status: 'Traveling is in my soul', location: { country: 'USA', city: 'New York' }
    //         //     },
    //         //     {
    //         //         id: 2, name: 'Alexey', photoUrl: 'https://www.man-shop.eu/media/image/19/07/c7/HerrenBz6datKT7kMmG.png',
    //         //         followed: false, status: 'Sleeeeep....', location: { country: 'Belarus', city: 'Brest' }
    //         //     },
    //         //     {
    //         //         id: 3, name: 'Voitech', photoUrl: 'https://www.man-shop.eu/media/image/19/07/c7/HerrenBz6datKT7kMmG.png',
    //         //         followed: true, status: 'Dzien dobry, panove', location: { country: 'Poland', city: 'Wrotslaw' }
    //         //     },
    //         //     {
    //         //         id: 4, name: 'Oleg', photoUrl: 'https://www.man-shop.eu/media/image/19/07/c7/HerrenBz6datKT7kMmG.png',
    //         //         followed: false, status: 'Hey evryone!', location: { country: 'Ukraine', city: 'Kiev' }
    //         //     },
    //         //     {
    //         //         id: 5, name: 'Georgiy', photoUrl: 'https://www.man-shop.eu/media/image/19/07/c7/HerrenBz6datKT7kMmG.png',
    //         //         followed: true, status: 'I am a KING!', location: { country: 'Russia', city: 'Moscow' }
    //         //     }
    //         // ]);
    //     }
    
    //     let users = props.users.map(u => <User user={u} key={u.id} follow={props.follow} unfollow={props.unfollow} />)
    //     return (
    //         <div>
    //             {users}
    //         </div>
    //     )
    // }