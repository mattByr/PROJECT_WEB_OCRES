import React from 'react';
import moment from 'moment';

export default class Countdown extends React.Component {
    state = {
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            const { timeTillDate, timeFormat } = this.props;
            const then = moment(timeTillDate, timeFormat);
            const now = moment();
            const countdown = moment(then - now);
            const days = countdown.format('D');
            const hours = countdown.format('HH');
            const minutes = countdown.format('mm');
            const seconds = countdown.format('ss');

            this.setState({ days, hours, minutes, seconds });
        }, 1000);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    render() {
        const { days, hours, minutes, seconds } = this.state;

        return (
            <div>
                <h4>Next maj in :</h4>
                <div className="countdown-wrapper">
                    
                        {days}
                        <span> days </span>
                        {hours}
                        <span> hours </span>
                        {minutes}
                        <span> minutes </span>
                        {seconds}
                        <span> seconds </span>
                </div>
            </div>
        );
    }
}