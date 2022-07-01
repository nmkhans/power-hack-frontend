import React from 'react';
import { useQuery } from 'react-query';
import BillHeader from '../../components/BillHeader/BillHeader';
import BillTable from './../../components/BillTable/BillTable';

const Home = () => {
    const { data: billingInfo, isLoading, refetch } = useQuery('billing-list', () => (
        fetch('https://nmk-power-hack.herokuapp.com/billing-list')
            .then(res => res.json())

    ))

    return (
        <div className="Home pt-5">
            <div className="inner__home conatiner">
                <div className="home__content">
                    <BillHeader refetch={refetch} />
                    <BillTable billingInfo={billingInfo} isLoading={isLoading} refetch={refetch} />
                </div>
            </div>
        </div>
    );
};

export default Home;