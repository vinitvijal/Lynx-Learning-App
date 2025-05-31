import idCard from '../assets/icons/id-card.png'

function HeroHomeCard() {
  return (
    <view
      style={{
        height: '20%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <view
        style={{
          width: '90%',
          height: '100%',
          border: '1px solid #4E6688',
          borderRadius: '20px',
          background: 'white',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          padding: '20px',
          gap: '10px',
        }}
      >
        <view
          style={{
            width: '30%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <image
            src={
              'https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg'
            }
            style={{
              width: '100%',
              aspectRatio: '1',
              borderRadius: '50px',
            }}
          />
          <view
            style={{
              width: 'fit-content',
              height: 'fit-content',
              backgroundColor: '#71C0BB',
              borderRadius: '10px',
              position: 'absolute',
              bottom: '6px',
            }}
          >
            <text
              style={{
                padding: '2px 5px',
                fontSize: '16px',
                fontWeight: '600',
                color: 'white',
              }}
            >
              100%
            </text>
          </view>
        </view>
        <view
          style={{
            height: '85%',
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <text
            style={{
              width: '100%',
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#4E6688',
            }}
          >
            Vrinda Bindal
          </text>
          <view
            style={{
              flexGrow: 1,
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'end',
              justifyContent: 'space-between',
            }}
          >
            <view
              style={{
                height: '80%',
                width: '45%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                backgroundColor: '#332D56',
                borderRadius: '15px',
              }}
            >   
                <image
                    src={idCard}
                    style={{
                        width: '30px',
                        height: '30px',
                    }}
                />
                <text style={{
                    color: 'white',
                    fontSize: '12px',
                    fontWeight: 'bold',
                }}>
                    View ID
                </text>
            </view>

            <view
              style={{
                height: '80%',
                width: '45%',
                backgroundColor: '#ECFAE5',
              }}
            ></view>
          </view>
        </view>
      </view>
    </view>
  );
}

export default HeroHomeCard;
