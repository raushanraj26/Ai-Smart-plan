import React, { useState } from 'react'
//import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import MapboxAutocomplete from './MapboxAutocomplete';
//const apikey = import.meta.env.VITE_GOOGLE_PLACE_API_KEY;
import { SelectBudgetOptions } from '@/constants/options';


function CreateTrip() {
  const [place, setPlace] = useState();
  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
      <h2 className='font-bold text-3xl'>Tell us Your travel preferences</h2>
      <p className='mt-3 text-gray-500 text-xl'>Just provide Some basic information ,and our Ai Smart trip planner will generate a customized itinerary based on your preferences</p>
      <div className='mt-20 flex flex-col gap-10'>
        <div>
          <h2 className='text-xl my-3 font-medium'>WHat is destination of choice</h2>
          <MapboxAutocomplete value="" onSelect={(v) => {setPlace(v); console.log(v); }} />                      
        </div>



        {/* help of Shadcn */}
        <div>
          <h2 className='text-xl my-3 font-medium'>How Many days are you planning your trip</h2>
          <input placeholder='ex-3' type="number" />

        </div>
 </div>
          <div>
          <h2 className='text-xl my-3 font-medium'>What is your Budget?</h2>
          <input placeholder='ex-3' type="number" />
          <div>
            {SelectBudgetOptions.map((item,index)=>{
              <div key={index}>
                <h2>{item.icon}</h2>

              </div>

            })}
          </div>
        </div>


     
    </div>
  )
}

export default CreateTrip