import React, { useState } from 'react'
//import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import MapboxAutocomplete from './MapboxAutocomplete';
//const apikey = import.meta.env.VITE_GOOGLE_PLACE_API_KEY;


function CreateTrip() {
  const [place,setPlace]=useState();
  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
      <h2 className='font-bold text-3xl'>Tell us Your travel preferences</h2>
      <p className='mt-3 text-gray-500 text-xl'>Just provide Some basic information ,and our Ai Smart trip planner will generate a customized itinerary based on your preferences</p>

      <div className='mt-20'>
        <div>
          <h2 className='text-xl my-3 font-medium'>WHat is destination of choice</h2>
           {/* <GooglePlacesAutocomplete
      apiKey={apikey}
      selectProps={{
         value: place,
        onChange:(v)=>{setPlace(v);console.log(v)}

      }}
    /> */}

    <MapboxAutocomplete
            value=""
            onSelect={(v) => {
              setPlace(v);
              console.log(v);
            }}
          />
          {/* {place && (
            <div className='mt-4 text-gray-600'>
              <strong>Selected:</strong> {place.place_name}
            </div>
          )} */}

   


        </div>
      </div>
    </div>
  )
}

export default CreateTrip