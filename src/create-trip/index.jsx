import React, { useEffect, useState } from 'react'
//import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import MapboxAutocomplete from './MapboxAutocomplete';
//const apikey = import.meta.env.VITE_GOOGLE_PLACE_API_KEY;
import { SelectBudgetOptions,SelectTravelesList } from '@/constants/options';


function CreateTrip() {
  const [place, setPlace] = useState();
  const [formData,setformData]=useState([]);

  const handleInputChange=(name,value)=>{
    setformData({
      ...formData,
      [name]:value
    })
  }

  useEffect(()=>{
        // console.log(formData)
  },[formData])

  //condition that checks only 5 days ka trip hona chaheye

  const OnGenerateTrip=()=>{
    if(formData?.noOfDays>5){                 //noofdays not greater than 5
      return;
    }
  }

  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
      <h2 className='font-bold text-3xl'>Tell us Your travel preferences</h2>
      <p className='mt-3 text-gray-500 text-xl'>Just provide Some basic information ,and our Ai Smart trip planner will generate a customized itinerary based on your preferences</p>
      <div className='mt-20 flex flex-col gap-10'>
        <div>
          <h2 className='text-xl my-3 font-medium'>WHat is destination of choice</h2>
          <MapboxAutocomplete value="" onSelect={(v) => { setPlace(v); handleInputChange('location',v) }} />
        </div>

        {/* help of Shadcn */}
        <div>
          <h2 className='text-xl my-3 font-medium'>How Many days are you planning your trip</h2>
          <input placeholder='ex-3' type="number" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
          onChange={(e)=>handleInputChange('noOfDays',e.target.value)}
          />

        </div>

        <div>
          <h2 className='text-xl my-3 font-medium' >What is your Budget?</h2>
          {/* flex flex-row gap-5 mt-5 */}
          <div className='grid grid-cols-3 gap-5 mt-5'>
            {SelectBudgetOptions.map((item, index) => (
              <div key={index} 
              onClick={()=>handleInputChange('budget',item.title)} 
              className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${formData.budget===item.title? 'bg-blue-100 border-blue-500':'' } `
              }>
                <h2 className='text-4xl'>{item.icon}</h2>
                <h2 className='font-bold text-lg'>{item.title}</h2>
                <h2 className='text-sm text-gray-500'>{item.desc}</h2>
              </div>

            ))}
          </div>
        </div>

        <div>
          <h2 className='text-xl my-3 font-medium' >Who do you plan on travelling with on your next Adventure?</h2>
          
          <div className='grid grid-cols-3 gap-5 mt-5'>
            {SelectTravelesList.map((item, index) => (
              <div key={index} 
              onClick={()=>handleInputChange('traveler',item.people)} 
              className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg 
              ${formData.traveler===item.people? 'bg-blue-100 border-blue-500':''}`}>
         
                <h2 className='text-4xl'>{item.icon}</h2>
                <h2 className='font-bold text-lg'>{item.title}</h2>
                <h2 className='text-sm text-gray-500'>{item.desc}</h2>
              </div>

            ))}
          </div>
        </div>
      </div>
          
          <div className='my-10 justify-end flex'>
            <button onClick={OnGenerateTrip} >Generate trip</button>
          </div>
    </div>
  )
}

export default CreateTrip