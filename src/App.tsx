import './App.css'
import HeroHomeCard from './components/HeroHomeCard.js'

export function App() {

  return (
    <view style={{
      height: '100%',
      flexDirection: 'column',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#332D56',
    }}>
      <view 
        className='safe-area-view'
        style={{
          width: '100%',
          display: 'flex',
        }}>
        <text style={{
          fontSize: '36px',
          paddingLeft: '10px',
          paddingTop: '15px',
          fontWeight: 'bold',
          color: '#E3EEB2',
        }}>Welcome Home</text>
      </view>

      <HeroHomeCard />
    </view>
  )
}
