"use client";

const ApartmentDetailsPage = () => {
  return (
    <div className="w-full h-full">
      <iframe
        src={
          "https://evometa.floor-plan.online/widget?id=c53cf7c3-7438-4b55-ab2a-ee2b259b1cfa"
        }
        className="w-full h-full"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ApartmentDetailsPage;
