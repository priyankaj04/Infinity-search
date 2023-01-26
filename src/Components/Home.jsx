import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getRandomUsers } from '../api'
import Loader from './Loader'

function Home() {

    const navigate = useNavigate();
    const [items, setItems] = useState([]);

    const fetchData = () => {
        getRandomUsers(25).then((res) => { setItems([...items, ...res.results]) });
    }

    const DelayFunction = () => {
        setTimeout(fetchData, 1000)
    }

    useEffect(() => {
        const token = sessionStorage.getItem('username');
        if (!token)
            navigate('/login')
        else
            fetchData();
    }, [])

    const handleLogout = () => {
        sessionStorage.clear();
        navigate('/login');
    }

    return (
        <div style={{ width: 500 }}>
            <button type="button" class="btn btn-primary" style={{ position: 'fixed', right: 10, top: 10, fontWeight: 600 }} onClick={() => handleLogout()}>Logout</button>
            <InfiniteScroll
                dataLength={items.length}
                next={DelayFunction}
                hasMore={true}
                loader={<Loader />}>
                {items.map((item, index) =>
                    <div style={{ display: 'flex', background: '#ffffff', borderRadius: 5, margin: 10, borderBottom: '0.2px solid rgba(0,0,0,0.2)', justifyContent: 'space-around', alignItems: 'center' }}>
                        <img src={item.picture.thumbnail} style={{ width: 60, height: 60, borderRadius: 50, margin: 20 }} />
                        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                            <p style={{ margin: 0, marinBottom: 10, textAlign: 'left', fontSize: 20, fontWeight: 500 }}>{item.name.first}{" "}{item.name.last}</p>
                            <p style={{ margin: 0, textAlign: 'left', fontSize: 14, color: 'rgba(0,0,0,0.7)' }}>{item.phone}</p>
                            <p style={{ margin: 0, textAlign: 'left', fontSize: 14, color: 'rgba(0,0,0,0.7)' }}>{item.email}</p>
                        </div>

                    </div>
                )}
            </InfiniteScroll>
        </div>
    )
}

export default Home