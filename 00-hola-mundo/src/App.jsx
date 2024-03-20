import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

    const users = [
        {
            userName: 'Hiroshi',
            name: 'Hiroshi Watanabe Saldivar',
            isFollowing: true,
        },
        {
            userName: 'Chacal',
            name: 'Mario Putencio',
            isFollowing: false,
        },
        {
            userName: 'Golosa',
            name: 'Buzeta Golosa',
            isFollowing: true,
        }
    ]

    return (
        <>
            <section className='App'>
                {
                    users.map(user => {
                        const { userName, name, isFollowing } = user
                        return (
                            <TwitterFollowCard
                                key={userName}
                                userName={userName}
                                initialIsFollowing={isFollowing}
                            >
                                {name}
                            </TwitterFollowCard>

                        )
                    })
                }
            </section >
        </>
    )
}