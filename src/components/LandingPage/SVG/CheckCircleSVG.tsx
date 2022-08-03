import { FunctionComponent } from 'react'

import styles from '../LandingPage.module.css'

const CheckCircleSVG: FunctionComponent = () => {
	return (
		<svg className={styles.googleIcon} xmlns="http://www.w3.org/2000/svg" height="40" width="40">
			<path d="M17.583 27.625 29.375 15.833 27.292 13.792 17.583 23.542 12.667 18.625 10.625 20.625ZM20 36.667Q16.5 36.667 13.458 35.375Q10.417 34.083 8.167 31.833Q5.917 29.583 4.625 26.542Q3.333 23.5 3.333 20Q3.333 16.5 4.625 13.458Q5.917 10.417 8.167 8.167Q10.417 5.917 13.458 4.625Q16.5 3.333 20 3.333Q23.5 3.333 26.542 4.625Q29.583 5.917 31.833 8.167Q34.083 10.417 35.375 13.458Q36.667 16.5 36.667 20Q36.667 23.5 35.375 26.542Q34.083 29.583 31.833 31.833Q29.583 34.083 26.542 35.375Q23.5 36.667 20 36.667ZM20 20Q20 20 20 20Q20 20 20 20Q20 20 20 20Q20 20 20 20Q20 20 20 20Q20 20 20 20Q20 20 20 20Q20 20 20 20ZM20 33.875Q25.875 33.875 29.875 29.875Q33.875 25.875 33.875 20Q33.875 14.125 29.875 10.125Q25.875 6.125 20 6.125Q14.125 6.125 10.125 10.125Q6.125 14.125 6.125 20Q6.125 25.875 10.125 29.875Q14.125 33.875 20 33.875Z" />
		</svg>
	)
}

export default CheckCircleSVG
