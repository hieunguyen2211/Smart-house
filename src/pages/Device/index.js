import React, { useState, useEffect } from 'react';
import ControlHeader from '../../components/Header/Control';
import NavigationBar from '../../components/Navigation/NavigationBar';
import RoomDetailCard from '../../components/Room/DetailCard';
import { Link } from 'react-router-dom';
import { getAllLeds, updateStatusLed } from '../../firebase/devices/led';
import { getAllServos, updateStatusServo } from '../../firebase/devices/servo';
import SyncLoader from 'react-spinners/SyncLoader';
import './style.css';

export default function DevicePage() {
  const [loading, setLoading] = useState(true);
  const [deviceData, setDeviceData] = useState([
    {
      id: 1,
      name: 'Living room',
      devices: [
        {
          id: 1,
          name: 'Light 1',
          iconName: 'light',
          status: false,
        },
        {
          id: 2,
          name: 'Light 2',
          iconName: 'light',
          status: false,
        },
        {
          id: 3,
          name: 'Main Door',
          iconName: 'door',
          status: false,
        },
      ],
    },
    {
      id: 2,
      name: 'Kitchen',
      devices: [
        {
          id: 1,
          name: 'Light',
          iconName: 'light',
          status: false,
        },
      ],
    },
    {
      id: 3,
      name: 'Bedroom',
      devices: [
        {
          id: 1,
          name: 'Light',
          iconName: 'light',
          status: false,
        },
      ],
    },
    {
      id: 4,
      name: 'Bathroom',
      devices: [
        {
          id: 1,
          name: 'Light',
          iconName: 'light',
          status: false,
        },
      ],
    },
    {
      id: 5,
      name: 'Garage',
      devices: [
        {
          id: 1,
          name: 'Light',
          iconName: 'light',
          status: false,
        },
        {
          id: 2,
          name: 'Door',
          iconName: 'door',
          status: false,
        },
      ],
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const ledReadAll = await getAllLeds();
      const servoReadAll = await getAllServos();
      const newDeviceData = deviceData;
      newDeviceData.map((e) => {
        let nameRoom = e.name.toUpperCase().replace(/\s/g, '');
        e.devices.map((d) => {
          if (d.name.includes('Light')) {
            if (d.name === 'Light 1') nameRoom = 'LIVINGROOM1';
            if (d.name === 'Light 2') nameRoom = 'LIVINGROOM2';
            ledReadAll.map((room) => {
              if (room[0] === nameRoom)
                d.status = room[1].status === 0 ? false : true;
              return room;
            });
          } else if (d.name.includes('Door')) {
            let nameServo = d.name.toUpperCase().replace(/\s/g, '');
            if (nameRoom === 'GARAGE') nameServo = 'GARAGEDOOR';
            servoReadAll.map((servo) => {
              if (servo[0] === nameServo)
                d.status = servo[1].status === 0 ? false : true;
              return servo;
            });
          }
          return d;
        });
        return e;
      });
      setDeviceData(newDeviceData);
      setLoading(false);
    };
    fetchData();
  }, [deviceData]);

  const handleClickChangeStatus = (roomName, isLed) => {
    let currentStatus = false;
    if (isLed) {
      deviceData.map((e) => {
        let room_d = e.name;
        e.devices.map((d) => {
          if (d.name === 'Light 1') room_d = 'livingroom1';
          if (d.name === 'Light 2') room_d = 'livingroom2';
          if (room_d === roomName) currentStatus = d.status;
          return d;
        });
        return e;
      });

      updateStatusLed(!currentStatus, roomName);
      setDeviceData((deviceData) =>
        deviceData.map((e) => {
          let room_d = e.name;
          e.devices.map((d) => {
            if (d.name === 'Light 1') room_d = 'livingroom1';
            if (d.name === 'Light 2') room_d = 'livingroom2';
            if (room_d === roomName) d.status = !currentStatus;
            return d;
          });
          return e;
        })
      );
    } else {
      const servoName = roomName;
      deviceData.map((e) => {
        let room_d = e.name;
        e.devices.map((d) => {
          let nameServo = d.name;
          if (room_d === 'Garage' && !d.name.includes('Light'))
            nameServo = 'GARAGEDOOR';
          if (nameServo === servoName) currentStatus = d.status;
          return d;
        });
        return e;
      });

      updateStatusServo(!currentStatus, servoName);
      setDeviceData((deviceData) =>
        deviceData.map((e) => {
          let room_d = e.name;
          e.devices.map((d) => {
            let nameServo = d.name;
            if (room_d === 'Garage' && !d.name.includes('Light'))
              nameServo = 'GARAGEDOOR';
            if (nameServo === servoName) d.status = !currentStatus;
            return d;
          });
          return e;
        })
      );
    }
  };

  return loading ? (
    <div className="main-page-container">
      <div
        className="page-content-wrapper"
        style={{ justifyContent: 'center' }}
      >
        <SyncLoader size={20} color={'white'} loading={loading} />
      </div>

      <NavigationBar />
    </div>
  ) : (
    <div className="page-container">
      <ControlHeader title="devices" path="/home" />
      <div className="device-page-content-wrapper">
        {deviceData.map((e) => (
          <RoomDetailCard
            key={e.id}
            roomName={e.name}
            deviceData={e.devices}
            onClick={handleClickChangeStatus}
          />
        ))}
        <div className="room-detail-container">
          <div className="title-section">
            <p className="title">Others</p>
          </div>
          <Link className="room-detail-list-device" to="/devices/camera">
            <div className="device-detail-card">
              <div className="device-header">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    '/icons/devices/filled/active/camera.svg'
                  }
                  className="item-icon"
                  alt="icon"
                />
                <div className="title">Camera</div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <NavigationBar />
    </div>
  );
}
