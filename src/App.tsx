import './App.css'

export function App(props: {
  onMounted?: () => void
}) {

  return (
    <view style={{
      height: '100%',
      flexDirection: 'column',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightblue',
    }}>
      <view 
        style={{
          flex: 1,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <text>
          Header
        </text>
      </view>
    </view>
  )
}
