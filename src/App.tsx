import './App.css'

export function App() {

  return (
    <view style={{
      height: '100%',
      flexDirection: 'column',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#E3EEB2',
    }}>
      <view 
        className='safe-area-view'
        style={{
          border: '2px solid black',
          width: '100%',
          display: 'flex',
        }}>
        <text style={{
          fontSize: '32px',
          paddingLeft: '10px',
          fontWeight: 'bold',
          color: '#4E6688',
        }}>Welcome Home</text>
      </view>
    </view>
  )
}
