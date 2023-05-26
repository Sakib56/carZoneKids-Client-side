import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CarCard from './CarCard';
const ShopByCategory = () => {
    const [text, setText] = useState('sports')

    const [sportsCars, setSportsCar] = useState()
    const [trucksCars, setTrucksCars] = useState()
    const [policeCars, setPoliceCars] = useState()
    useEffect(() => {
        fetch('https://car-zone-kids-server-site.vercel.app/allToys')
            .then(res => res.json())
            .then(data => {
                const sports = data.filter(dt => dt.category_name == 'sports car')
                setSportsCar(sports)
                const trucks = data.filter(dt => dt.category_name == 'trucks car')
                setTrucksCars(trucks)
                const police = data.filter(dt => dt.category_name == 'police car')
                setPoliceCars(police)

            })
    }, [])

    return (
        <div className='mt-10 md:mt-28'>
            <h1 className='text-center mb-5 md:mb-12 font-extrabold text-4xl text-primary'>Shop By Category</h1>

            <Tabs>
                <TabList className='text-2xl flex justify-center mb-10 font-bold text-center' classID=''>

                    <Tab className='border-0 cursor-pointer' onClick={() => setText('sports')}>
                        <div className={`border px-6 py-3 ${text === 'sports' ? 'bg-primary text-white' : ''}`}>Sports Car</div>
                    </Tab>

                    <Tab className='border-0 cursor-pointer' onClick={() => setText('trucks')}>
                        <div className={`border px-6 py-3 ${text === 'trucks' ? 'bg-primary text-white' : ''}`}> Trucks car</div>

                    </Tab>
                    <Tab className='border-0 cursor-pointer' onClick={() => setText('police')}>
                        <div className={`border px-6 py-3 ${text === 'police' ? 'bg-primary text-white' : ''}`}>Police Car</div>

                    </Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 overflow-hidden'>
                        {
                            sportsCars?.map(sportCar => <CarCard
                                key={sportCar._id}
                                cars={sportCar}>
                            </CarCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                        {
                            trucksCars?.map(sportCar => <CarCard
                                key={sportCar._id}
                                cars={sportCar}>
                            </CarCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                        {
                            policeCars?.map(sportCar => <CarCard
                                key={sportCar._id}
                                cars={sportCar}>
                            </CarCard>)
                        }
                    </div>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default ShopByCategory;