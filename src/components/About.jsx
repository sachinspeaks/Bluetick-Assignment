import React from "react";

const contentList = [
  {
    title: "Explore AI Opportunities for Your Enterprise",
    text: "Unlock the potential of generative AI by identifying tailored opportunities for integration within your organization, ensuring a strategic and efficient approach to AI implementation.",
  },
  {
    title: "Design AI Trust Layer",
    text: "Prioritize data security and build trust in generative AI applications with a dedicated trust layer, emphasizing privacy-focused solutions that safeguard both organizational and customer data.",
  },
  {
    title: "Scalability-Focused Solutions",
    text: "Streamline and optimize business processes with comprehensive workflow automation, ensuring seamless integration of AI technologies from inception to execution for increased efficiency and productivity.",
  },
  {
    title: "End to end Workflow automation",
    text: "Implement cutting-edge, scalable generative AI solutions that not only meet current organizational needs but also adapt and grow with the evolving demands of your enterprise, providing a future-proof approach to AI integration.",
  },
];

export default function About() {
  return (
    <div className="flex flex-col justify-center p-12 min-h-screen">
      <h1 className="text-4xl font-semibold self-center my-8">What We Offer</h1>
      <div>
        <div className="grid grid-cols-2 gap-8">
          {contentList.map((content, index) => (
            <div key={index} className="bg-slate-300 rounded-md p-4">
              <h2 className="text-2xl mb-4 font-semibold">{content.title}</h2>
              <p className="text-lg">{content.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
// flex flex-col justify-center
