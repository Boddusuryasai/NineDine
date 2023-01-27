import React from 'react';


const About = () => {
  return (
    <div className="bg-white p-6">
      <div className="flex">
        <div className="w-1/4">
          <img  src="https://res.cloudinary.com/dybiiddob/image/upload/v1674560039/logo_iiia3s.png" alt="Nine-Dine logo" className="w-full" />
        </div>
        <div className="w-3/4 pl-4">
          <h1 className="text-2xl font-medium mb-4">About Nine-Dine</h1>
          <p className="text-gray-700 text-justify">
            Nine-Dine is a revolutionary online food delivery platform that connects customers with their favorite local restaurants. Our goal is to make it easy for people to discover new and delicious food options, and to have them delivered to their doorsteps in the shortest possible time.
          </p>
          <p className="text-gray-700 text-justify">
            Our user-friendly website and mobile app allow customers to browse through a wide selection of cuisines, view menus, and place orders with just a few clicks. We offer a seamless ordering experience, with real-time updates on the status of your order.
          </p>
          <p className="text-gray-700 text-justify">
            We partner with top-rated restaurants in your area to bring you the best food options. Our team of experienced curators handpicks restaurants based on their reputation, quality of food, and customer reviews.
          </p>
          <p className="text-gray-700 text-justify">
            We also provide a variety of payment options, including cash on delivery and online payments, to make the ordering process as convenient as possible.
          </p>
          <p className="text-gray-700 text-justify">
            At Nine-Dine, we strive to provide the best possible service to our customers. We believe that everyone deserves to enjoy great food, and we're here to make it happen. Try Nine-Dine today and experience the convenience and deliciousness of online food delivery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
