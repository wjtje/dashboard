import {format} from 'date-fns'
import {useEffect, useState} from 'react'
import Widget from '../../components/widget'

/**
 * A widget that will show the current date and time
 */
export default function DateTime() {
	// Store the current date
	const [currentDate, setCurrentDate] = useState(new Date())

	useEffect(() => {
		// Update the time every 10 seconds
		const interval = setInterval(() => {
			setCurrentDate(new Date())
		}, 1000 * 1)

		return () => {
			clearInterval(interval)
		}
	}, [])

	return (
		<Widget>
			<span>
				{format(currentDate, 'k:mm')}
			</span>
			<br />
			<span>
				{new Intl.DateTimeFormat().format(currentDate)}
			</span>
		</Widget>
	)
}
