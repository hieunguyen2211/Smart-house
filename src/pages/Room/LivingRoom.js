import React, { useState, useEffect } from 'react';
import { getAllLeds, updateStatusLed } from '../../firebase/devices/led';
import { getAllServos, updateStatusServo } from '../../firebase/devices/servo';
import NavigationBar from '../../components/Navigation/NavigationBar';
import SyncLoader from 'react-spinners/SyncLoader';
import Room from '../../container/Room';

function LivingRoom() {
  const [loading, setLoading] = useState(true);
  const [deviceData, setDeviceData] = useState([
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
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const ledReadAll = await getAllLeds();
      const servoReadAll = await getAllServos();
      const newDeviceData = deviceData;
      newDeviceData.map((e) => {
        if (e.name.includes('Light')) {
          let room_d = '';
          if (e.name === 'Light 1') room_d = 'livingroom1';
          if (e.name === 'Light 2') room_d = 'livingroom2';
          const nameRoom = room_d.toUpperCase().replace(/\s/g, '');
          ledReadAll.map((room) => {
            if (room[0] === nameRoom)
              e.status = room[1].status === 0 ? false : true;
            return room;
          });
        } else if (e.name.includes('Door')) {
          let nameServo = e.name.toUpperCase().replace(/\s/g, '');
          servoReadAll.map((servo) => {
            if (servo[0] === nameServo)
              e.status = servo[1].status === 0 ? false : true;
            return servo;
          });
        }
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
        let room_d = '';
        if (e.name === 'Light 1') room_d = 'livingroom1';
        if (e.name === 'Light 2') room_d = 'livingroom2';
        if (room_d === roomName && !e.name.includes('Door'))
          currentStatus = e.status;
        return e;
      });

      updateStatusLed(!currentStatus, roomName);
      setDeviceData((deviceData) =>
        deviceData.map((e) => {
          let room_d = '';
          if (e.name === 'Light 1') room_d = 'livingroom1';
          if (e.name === 'Light 2') room_d = 'livingroom2';
          if (room_d === roomName && !e.name.includes('Door'))
            e.status = !currentStatus;
          return e;
        })
      );
    } else {
      const servoName = roomName;
      deviceData.map((e) => {
        let nameServo = e.name;
        if (nameServo === servoName) currentStatus = e.status;
        return e;
      });

      updateStatusServo(!currentStatus, servoName);
      setDeviceData((deviceData) =>
        deviceData.map((e) => {
          let nameServo = e.name;
          if (nameServo === servoName) e.status = !currentStatus;
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
    <Room
      room="living room"
      data={deviceData}
      amount={deviceData.length}
      onClick={handleClickChangeStatus}
    />
  );
}

export default LivingRoom;
