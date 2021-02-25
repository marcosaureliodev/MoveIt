import { useState } from 'react';
import styles from '../styles/components/Countdown.module.css'

export function Countdown() {
    const [time, setTime] = useState (25 * 60);

    const minutes = Math.floor(time / 60);
    const seconds =time % 60;

    const [minuteLeft, minutRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown() {

    }

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minutRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            <button
                type="button"
                className={styles.countdownButton}
                onClick={startCountdown}>
                Iniciar um ciclo
            </button>
        </div>
    );
}