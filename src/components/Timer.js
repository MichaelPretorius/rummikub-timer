import React from 'react';
import Timer from 'react-compound-timer';
import useSound from 'use-sound';
import { Button, TimerContainer } from '../styles';
import short from '../assets/sounds/short.mp3';
import medium from '../assets/sounds/medium.mp3';
import long from '../assets/sounds/long.mp3';

function TimerComponent() {
  const [shortPlay] = useSound(short);
  const [mediumPlay] = useSound(medium);
  const [longPlay] = useSound(long);

  const checkTimeSounds = time => {
    // 30sec left warning
    if (time < 31010 && time > 30990) {
      mediumPlay();
    }
    // 30sec left warning
    if (time < 16010 && time > 15990) {
      mediumPlay();
    }
    // countdownfrom 5-1 sec
    if (time < 6010 && time > 5990) {
      shortPlay();
    }
    if (time < 5010 && time > 4990) {
      shortPlay();
    }
    if (time < 4010 && time > 3990) {
      shortPlay();
    }
    if (time < 3010 && time > 2990) {
      shortPlay();
    }
    if (time < 2010 && time > 1990) {
      shortPlay();
    }
    // end sound
    if (time < 1010 && time > 990) {
      longPlay();
    }
  };

  const handleClick = (time, reset, start) => {
    if (time === 60000) {
      start();
    } else if (time > 0) {
      reset();
    } else {
      reset();
      start();
    }
  };

  return (
    <Timer
      initialTime={60000}
      timeToUpdate={100}
      direction="backward"
      lastUnit="s"
      startImmediately={false}
      onStart={() => console.log('onPlay hook')}
      onStop={() => console.log('onStop hook')}
      onReset={() => console.log('onReset hook')}
    >
      {({ start, stop, reset, getTime }) => {
        const time = getTime();
        checkTimeSounds(time);
        return (
          <>
            <TimerContainer onClick={() => handleClick(time, reset, start)}>
              <Timer.Seconds />
            </TimerContainer>
            <Button
              onClick={() => {
                stop();
                reset();
              }}
            >
              STOP
            </Button>
          </>
        );
      }}
    </Timer>
  );
}

export default TimerComponent;
