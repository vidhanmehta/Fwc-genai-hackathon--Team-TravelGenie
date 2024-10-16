import Image from "next/image";
import React from "react";
import destinationData from "@/data/popular_destination.json"; 

function Page() {
  const kashmir = {
    title: "Kashmir",
    price: "₹31,499",
    video: "/videos/kashmir.mp4",
    days: [
      {
        day: "Day 1",
        activities: [
          { time: "11:00 AM", description: "Travelling to Srinagar Hotel" },
          { time: "12:00 PM", description: "Check-in at Hotel" },
          { time: "05:00 PM", description: "As the sun sets, casting a warm golden hue, you board the Shikara and embark on a tranquil journey" }
        ]
      },
      {
        day: "Day 2",
        activities: [
          { time: "10:00 AM", description: "Check-out from Hotel" },
          { time: "11:00 AM", description: "Visiting Zero Point on the Srinagar-Leh Highway" },
          { time: "02:00 PM", description: "Exploring Thajiwas Glacier near Sonamarg with wonderful landscapes" },
          { time: "06:00 PM", description: "Check-in to Hotel Mount View / Hotel Country Inn" }
        ]
      },
      {
        day: "Day 3",
        activities: [
          { time: "10:00 AM", description: "Embarking on a Gondola ride in Sonmarg and Gulmarg" },
          { time: "12:00 PM", description: "Wandering amidst the picturesque landscapes of Kashmir, Engaging in snow activities and immersing yourself..." },
          { time: "02:00 PM", description: "Check-out from Hotel" },
          { time: "05:00 PM", description: "Check-in to Hotel" }
        ]
      }
    ]
  };

  const kerala = {
    title: "Kerala",
    price: "₹39,950",
    video: "/videos/kerala.mp4",
    days: [
      {
        day: "Day 1",
        activities: [
          { time: "10:00 AM", description: "Reach Kochi and have Breakfast" },
          { time: "12:00 PM", description: "Reach Alleppey" },
          { time: "01:00 PM", description: "Check-in to Houseboat and have Lunch" },
          { time: "02:00 PM", description: "Visit water village and afterwards enjoy the hospitality from the houseboat" }
        ]
      },
      {
        day: "Day 2",
        activities: [
          { time: "08:00 AM", description: "Breakfast at houseboat, Check-Out from Hotel and Head to Munnar" },
          { time: "12:00 PM", description: "Check-in to hotel in Munnar and have Lunch" },
          { time: "07:00 PM", description: "Enjoy the traditional Kathakali show" },
          { time: "09:00 PM", description: "Head back to Hotel and enjoy Dinner" }
        ]
      },
      {
        day: "Day 3",
        activities: [
          { time: "03:00 AM", description: "Start early morning for off-roading to Kolukkumalai" },
          { time: "05:00 AM", description: "Enjoy a beautiful sunrise at top. After that visit World Largest Tea Plantation in Kolukkumalai" },
          { time: "08:00 AM", description: "Have breakfast and start returning towards Munnar" },
          { time: "02:00 PM", description: "Head to Thekkady for the next chapter of the adventure" }
        ]
      }
    ]
  };

  const wayanad = {
    title: "Wayanad",
    price: "₹13,376",
    video: "/videos/wayanad.mp4",
    days: [
      {
        day: "Day 1",
        activities: [
          { time: "08:00 AM", description: "Reach Calicut also known as Kozhikode" },
          { time: "09:00 AM", description: "Wayanad in Private car (2-3hrs)" },
          { time: "01:00 PM", description: "Check-in to Hotel" },
          { time: "02:00 PM", description: "Eco Park, Sky Park, hidden waterfalls" }
        ]
      },
      {
        day: "Day 2",
        activities: [
          { time: "08:00 AM", description: "Hidden caves and forest hike" },
          { time: "01:00 PM", description: "Jeep to Wayanad" },
          { time: "02:00 PM", description: "Ziplining" },
          { time: "04:00 PM", description: "Sunset view at Lakkidi View point" }
        ]
      },
      {
        day: "Day 3",
        activities: [
          { time: "08:00 AM", description: "Edakkal Cave" },
          { time: "11:00 AM", description: "Checkout from property" },
          { time: "11:00 AM", description: "Banasura sagar dam boating" },
          { time: "03:00 PM", description: "Depart for Calicut also known as Kozhikode" }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Video with Overlay Heading */}
      <div className="relative h-[50vh] md:h-[70vh]">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="text-white text-xl md:text-3xl font-semibold mb-2">
            I had a great time here!
          </h2>
          <h1 className="text-white text-3xl md:text-6xl font-bold">
            Come Join me!!
          </h1>
        </div>
      </div>

      {/* Kashmir Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-brown-600 mb-8 text-center">
        Experience the Heaven on Earth, Jannat e Kashmir !!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Video Card for Kashmir */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="relative h-48">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
              >
                <source src={kashmir.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 text-sm">
                FAST SELLING
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold">{kashmir.title}</h2>
              <p className="text-lg font-semibold">{kashmir.price}</p>
              <p className="text-sm">Per Person (incl. GST)</p>
            </div>
          </div>

          {/* Itinerary Cards for Kashmir */}
          {kashmir.days.map((day, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{day.day}</h3>
                {day.activities.map((activity, actIndex) => (
                  <div key={actIndex} className="mb-2">
                    <p className="font-semibold text-sm">{activity.time}</p>
                    <p className="text-xs text-gray-600">{activity.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="bg-blue-500 hover:bg-brown-600 text-white font-bold py-2 px-6 rounded-full transition duration-300">
            Checkout this package
          </button>
        </div>
      </div>

      {/* Kerala Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-brown-600 mb-8 text-center">
         Discover Paradise on Earth, God's Own Country - Kerala!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Video Card for Kerala */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="relative h-48">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
              >
                <source src={kerala.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute top-0 left-0 bg-green-500 text-white px-2 py-1 text-sm">
                HOT SELLING
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold">{kerala.title}</h2>
              <p className="text-lg font-semibold">{kerala.price}</p>
              <p className="text-sm">Per Person (incl. GST)</p>
            </div>
          </div>

          {/* Itinerary Cards for Kerala */}
          {kerala.days.map((day, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{day.day} </h3>
                {day.activities.map((activity, actIndex) => (
                  <div key={actIndex} className="mb-2">
                    <p className="font-semibold text-sm">{activity.time}</p>
                    <p className="text-xs text-gray-600">{activity.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="bg-blue-500 hover:bg-brown-600 text-white font-bold py-2 px-6 rounded-full transition duration-300">
            Checkout this package
          </button>
        </div>
      </div>

      {/* Wayanad Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-brown-600 mb-8 text-center">
          Experience the Enchanted Beauty of Wayanad, Nature's Paradise!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Video Card for Wayanad */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="relative h-48">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
              >
                <source src={wayanad.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute top-0 left-0 bg-yellow-500 text-white px-2 py-1 text-sm">
                COMING SOON
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold">{wayanad.title}</h2>
              <p className="text-lg font-semibold">{wayanad.price}</p>
              <p className="text-sm">Per Person (incl. GST)</p>
            </div>
          </div>

          {/* Itinerary Cards for Wayanad */}
          {wayanad.days.map((day, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{day.day} </h3>
                {day.activities.map((activity, actIndex) => (
                  <div key={actIndex} className="mb-2">
                    <p className="font-semibold text-sm">{activity.time}</p>
                    <p className="text-xs text-gray-600">{activity.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="bg-blue-500 hover:bg-brown-600 text-white font-bold py-2 px-6 rounded-full transition duration-300">
            Checkout this package
          </button>
        </div>
      </div>

      {/* Popular Destinations Section */}
      <div className="bg-white py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Destinations</h2>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinationData.destinations.map((destination) => (
              <div
                key={destination.id}
                className="bg-gray-100 rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <Image
                  src={destination.image}
                  height={400}
                  width={600}
                  className="w-full h-60 object-cover"
                  alt={destination.title}
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">{destination.title}</h2>
                  <p className="text-gray-600 text-sm mb-4">{destination.description}</p>
                  <div className="flex justify-between items-center">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold">
                      Visit now →
                    </button>
                    <button className="px-4 py-2 bg-black text-white text-sm font-bold rounded-lg hover:bg-gray-800">
                      Check Out
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
