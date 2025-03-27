import React from "react";

const ReviewScroller = () => {
  const data = [
    {
      id: 1,
      name: "John Smith",
      review:
        "NexGen Solutions delivered an exceptional website for our business. The design was sleek, and the functionality was flawless. Their team was professional and provided timely updates throughout the project.",
    },
    {
      id: 2,
      name: "Emily Johnson",
      review:
        "We hired NexGen for a mobile app, and they exceeded our expectations! The app is user-friendly, fast, and exactly what we envisioned. Highly recommend them for app development.",
    },
    {
      id: 3,
      name: "Michael Williams",
      review:
        "Their SEO strategies took our website from invisible to page one on Google! Within just a few months, we saw a significant increase in traffic and conversions. Excellent digital marketing team!",
    },
    {
      id: 4,
      name: "Sarah Brown",
      review:
        "Working with NexGen was a game-changer. They revamped our e-commerce store, improving speed and user experience. Sales have gone up since the launch, and we couldn’t be happier!",
    },
    {
      id: 5,
      name: "David Jones",
      review:
        "They developed a custom CRM system for our company, which has streamlined our operations. The integration with our existing tools was seamless, and the support team is always available when needed.",
    },
    {
      id: 6,
      name: "Jessica Garcia",
      review:
        "Their social media marketing strategies are fantastic! Our brand engagement has skyrocketed, and we’ve gained thousands of followers in just a few months. Very happy with their service!",
    },
    {
      id: 7,
      name: "Daniel Martinez",
      review:
        "NexGen helped us migrate our business to the cloud. The process was smooth, and now we enjoy better security and scalability. Their expertise in cloud computing is commendable.",
    },
    {
      id: 8,
      name: "Sophia Davis",
      review:
        "The team developed a custom AI chatbot for our customer support. It has significantly reduced response time and improved user satisfaction. We highly recommend NexGen for AI-based solutions!",
    },
    {
      id: 9,
      name: "James Miller",
      review:
        "Our fintech startup needed a secure and scalable solution, and NexGen delivered exactly that. Their blockchain development team built a robust system that meets all our needs. Exceptional work!",
    },
    {
      id: 10,
      name: "Olivia Wilson",
      review:
        "We needed a website that stands out, and NexGen created a visually stunning and high-performing site. The UI/UX design is top-notch, and our customers love the new interface. Fantastic job!",
    },
    {
      id: 11,
      name: "John Smith",
      review:
        "NexGen Solutions delivered an exceptional website for our business. The design was sleek, and the functionality was flawless. Their team was professional and provided timely updates throughout the project.",
    },
    {
      id: 12,
      name: "Emily Johnson",
      review:
        "We hired NexGen for a mobile app, and they exceeded our expectations! The app is user-friendly, fast, and exactly what we envisioned. Highly recommend them for app development.",
    },
    {
      id: 13,
      name: "Michael Williams",
      review:
        "Their SEO strategies took our website from invisible to page one on Google! Within just a few months, we saw a significant increase in traffic and conversions. Excellent digital marketing team!",
    },
    {
      id: 14,
      name: "Sarah Brown",
      review:
        "Working with NexGen was a game-changer. They revamped our e-commerce store, improving speed and user experience. Sales have gone up since the launch, and we couldn’t be happier!",
    },
    {
      id: 15,
      name: "David Jones",
      review:
        "They developed a custom CRM system for our company, which has streamlined our operations. The integration with our existing tools was seamless, and the support team is always available when needed.",
    },
    {
      id: 16,
      name: "Jessica Garcia",
      review:
        "Their social media marketing strategies are fantastic! Our brand engagement has skyrocketed, and we’ve gained thousands of followers in just a few months. Very happy with their service!",
    },
    {
      id: 17,
      name: "Daniel Martinez",
      review:
        "NexGen helped us migrate our business to the cloud. The process was smooth, and now we enjoy better security and scalability. Their expertise in cloud computing is commendable.",
    },
    {
      id: 18,
      name: "Sophia Davis",
      review:
        "The team developed a custom AI chatbot for our customer support. It has significantly reduced response time and improved user satisfaction. We highly recommend NexGen for AI-based solutions!",
    },
    {
      id: 19,
      name: "James Miller",
      review:
        "Our fintech startup needed a secure and scalable solution, and NexGen delivered exactly that. Their blockchain development team built a robust system that meets all our needs. Exceptional work!",
    },
    {
      id: 20,
      name: "Olivia Wilson",
      review:
        "We needed a website that stands out, and NexGen created a visually stunning and high-performing site. The UI/UX design is top-notch, and our customers love the new interface. Fantastic job!",
    },
  ];

  const Review = ({ name, comment }) => {
    return (
      <blockquote>
        <div
          aria-hidden="true"
          className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%+4px)] w-[calc(100%+4px)]"
        ></div>
        <div className="relative z-20 mb-4 flex items-center">
          <span className="flex items-center justify-center w-[48px] h-[48px] object-cover rounded-full bg-[#F2F3F5] mr-4">
            <img
              src={`/svgs/googlelogo.svg`}
              alt="Google"
              width="30"
              height="30"
              fill="black"
            />
          </span>
          <span className="flex flex-1 flex-col gap-1">
            <span className="text-md lg:text-sm leading-[1.6] text-black font-semibold">
              {name}
            </span>
            <span className="flex gap-1">
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src="/svgs/review.svg" // Path to your star.svg in the public folder
                  alt="Google Reviews"
                  width="17"
                  height="15"
                  className="lucide lucide-star"
                />
              ))}
            </span>
          </span>
        </div>
        <span className="relative z-20 text-sm md:text-base text-[#46464D] line-clamp-6">
          {comment}
        </span>
      </blockquote>
    );
  };
  return (
    <div className="pt-5">
      <div
        className="relative max-w-full overflow-hidden"
        style={{
          "--animation-duration": "80s",
          "--animation-direction": "forwards",
        }}
      >
        <ul className="flex min-w-full gap-4 py-4 w-max flex-nowrap animate-scroll hover:[animation-play-state:paused]">
          {data.map((d) => {
            return (
              <li
                key={d.id}
                className="w-[400px] max-w-full relative flex-shrink-0 bg-gray-100 rounded-2xl rounded-bl-none cursor-pointer p-4"
              >
                <Review name={d.name} comment={d.review} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mt-8 mb-10">
        <div className="flex flex-col items-center">
          <div className="text-xl font-bold text-gray-900">
            <span className="text-green-600">EXCELLENT</span>
          </div>
          <span className="flex space-x-1">
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                src="/svgs/review.svg" // Path to your star.svg in the public folder
                alt="star"
                width="20"
                height="32"
                className="lucide lucide-star"
              />
            ))}
          </span>
          <div className="mt-2 text-sm font-medium text-black">
            Based on{"  "}
            <strong className="text-blue-600 underline">216 reviews</strong>
          </div>
          <div className="mt-4">
            <img
              className="w-28  h-10"
              src="/svgs/google.svg"
              alt="Google"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewScroller;
