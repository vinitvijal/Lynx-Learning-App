import search from '../assets/icons/search.png';
import bookcheck from '../assets/icons/book-check.png';
import booktext from '../assets/icons/book-text.png';
import house from '../assets/icons/house.png';
import logs from '../assets/icons/logs.png';
import { useNavigate } from 'react-router';


function Footer() {
    const navigate = useNavigate();


    return (
    <view
      style={{
        position: 'fixed',
        bottom: '0',
        zIndex: '1000',
        height: '12%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <view
        style={{
          height: '100%',
          display: 'flex',
          width: '95%',
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          borderTopLeftRadius: '50px',
          borderTopRightRadius: '50px',
          color: 'black',
        }}
      >
        <view
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
          }}
          bindtap={() => {
            'background only';
            navigate('/search');
          }}
        >
          <image
            src={search}
            style={{
              width: '30px',
              height: '30px',
            }}
          />
        </view>
        <view
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            marginRight: '30px',
          }}
        >
          <image
            src={bookcheck}
            style={{
              width: '30px',
              height: '30px',
            }}
          />
        </view>
        <view
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            borderRadius: '50%',
            backgroundColor: '#444',
            height: '90px',
            width: '90px',
            position: 'absolute',
            top: '-35px',
            justifyContent: 'center',
          }}
          bindtap={() => {
            navigate('/');
          }}
        >
          <image
            src={house}
            style={{
              width: '35px',
              height: '35px',
              backgroundColor: 'white',
              padding: '16px',
              boxSizing: 'content-box',
                borderRadius: '50%',
            }}
          />
        </view>
        <view
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            marginLeft: '30px',
          }}
        >
          <image
            src={booktext}
            style={{
              width: '30px',
              height: '30px',
            }}
          />
        </view>
        <view
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <image
            src={logs}
            style={{
              width: '30px',
              height: '30px',
            }}
          />
        </view>
      </view>
    </view>
  );
}

export default Footer;
