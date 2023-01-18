import React from 'react';
import axios from 'axios';

type Props = {}

const Dashboard = (props: Props) => {

    const options = {
        method: 'GET',
        url: 'https://kenxknee-ed-tech-v2.p.rapidapi.com/deleted',
        headers: {
            'X-RapidAPI-Key': '48757c5e6bmsh12e7c2cec0db8b1p147b19jsnbf64574c80d0',
            'X-RapidAPI-Host': 'kenxknee-ed-tech-v2.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });

    return (
        <div>

        </div>
    )
}

export default Dashboard