import React from 'react'
import Timer from 'react-compound-timer'

function TimerComponent() {
  return (
		<Timer
			initialTime={59999}
			direction="backward"
			onStart={() => console.log('onStart hook')}
			onResume={() => console.log('onResume hook')}
			onPause={() => console.log('onPause hook')}
			onStop={() => console.log('onStop hook')}
			onReset={() => console.log('onReset hook')}
			checkpoints={[
				{
					time: 30000,
					callback: () => console.log('hit 30 sec'),
				},
				{
					time: 40000,
					callback: () => console.log('hit 40 sec'),
				},
			]}
		>
			{({ start, resume, pause, stop, reset, timerState }) => (
				<>
					<Timer.Seconds />

					<div>
						<button onClick={start}>Start</button>
						<button onClick={pause}>Pause</button>
						<button onClick={resume}>Resume</button>
						<button onClick={stop}>Stop</button>
						<button onClick={reset}>Reset</button>
					</div>
				</>
			)}
		</Timer>
	);
}

export default TimerComponent;
