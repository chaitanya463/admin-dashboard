import React from 'react';
import './home.css';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/charts/Chart';
import {UserData} from '../../dummyData';
import WidgetSmall from '../../components/widgetSmall/WidgetSmall';
import WidgetLarge from '../../components/WidgetLarge/WidgetLarge';

const Home = () => {
    return (
        <div className='home'>
            <FeaturedInfo/>
            <Chart data={UserData} title='Sales Analytics' dataKey="Active User"/>
            <div className='homeWidgets'>
                <WidgetSmall/>
                <WidgetLarge/>
            </div>
        </div>
    );
}

export default Home;