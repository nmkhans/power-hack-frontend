import React from 'react';
import BillHeader from '../../components/BillHeader/BillHeader';

const Home = () => {
    return (
        <div className="Home pt-5">
            <div className="inner__home conatiner">
                <div className="home__content">
                    <BillHeader />
                </div>
            </div>
        </div>
    );
};

export default Home;