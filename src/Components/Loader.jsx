import React from 'react'

function Loader() {

    const LoderList = () => {
        return (
            <div style={{ display: 'flex', background: '#ffffff', borderRadius: 5, margin: 10, borderBottom: '0.2px solid rgba(0,0,0,0.2)', justifyContent: 'space-around', alignItems: 'center' }}>
                <div style={{ width: 60, height: 60, borderRadius: 50, background: 'rgba(0,0,0,0.15)', margin: 20 }} ></div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', flex: 1 }}>
                    <div style={{ width: '70%', height: 10, borderRadius: 50, background: 'rgba(0,0,0,0.15)', margin: 10 }}></div>
                    <div style={{ width: '50%', height: 10, borderRadius: 50, background: 'rgba(0,0,0,0.15)', margin: 5, marginLeft: 10 }}></div>
                    <div style={{ width: '50%', height: 10, borderRadius: 50, background: 'rgba(0,0,0,0.15)', margin: 5, marginLeft: 10 }}></div>
                </div>
            </div>
        )
    }
    return (
        <div>
            <LoderList />
            <LoderList />
            <LoderList />
        </div>
    )
}

export default Loader