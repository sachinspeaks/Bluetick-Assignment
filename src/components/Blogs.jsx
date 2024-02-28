import React from "react";
import sql from "../assets/sql.jpg";
import air from "../assets/air.jpg";
import tuning from "../assets/tuning.jpg";
import privacy from "../assets/privacy.jpg";

const BlogList = [
  {
    title: "Speaking SQL: Turning Natural Language into Database Dialogues",
    content:
      "Bridging Language and Data in the Enterprise Sphere: In the realm of enterprise data management, SQL databases have long stood as the backbone, housing vast quantities of invaluable information. As enterprises increasingly lean on business intelligence (BI) tools to extract insights from these data repositories, the quest for more intuitive and accessible querying methods gains momentum. The emerging solution? Leveraging Large Language Models (LLMs) to interact with SQL databases using natural language. ",
    link: "https://www.bluetickconsultants.com/speaking-sql-turning-natural-language-into-database-dialogues.html",
    imagePath: sql,
  },
  {
    title:
      "Beyond Basics: Elevating AI with Reinforcement Learning from Human Feedback",
    content:
      "Reinforcement Learning from Human Feedback (RLHF) was arguably the key behind the success of ChatGPT, marking a significant advancement in AI's ability to understand and engage in human language. This method, vital for fine-tuning language models, addresses the complexities and nuances of communication, ensuring AI interactions are natural and intuitive. It navigates the challenges of training AI with diverse internet data, carefully guiding models to avoid replicating inappropriate language or tones.",
    link: "https://www.bluetickconsultants.com/beyond-basics-elevating-ai-with-reinforcement-learning-from-human-feedback.html",
    imagePath: air,
  },
  {
    title: "The Fine Art of Tuning: Parameter-Efficient Fine-Tuning",
    content:
      "Welcome to our exploration of the fascinating world of large language models! As many of you are aware, the scale of these models has skyrocketed recently. Take, for instance, GPT-4, which boasts a staggering 1.8 trillion parameters. The desire to fine-tune these behemoths with custom datasets is growing, yet it poses significant challenges. Fine-tuning requires adjusting countless parameters, which is time-consuming, and the GPU demands are nothing short of immense. ",
    link: "https://www.bluetickconsultants.com/the-fine-art-of-tuning-parameter-efficient-fine-tuning.html",
    imagePath: tuning,
  },
  {
    title: "PrivAIcy Matters: Balancing Privacy, Price, and Performance",
    content:
      "Welcome to the enthralling universe of Generative AI! Recognized as a realm of artificial intelligence algorithms with the magic to conjure fresh content based on available data, this technology has unassumingly become the new frontier for a plethora of industries, including tech, banking, and media. And, no surprises here, the technological world has openly embraced it in myriad innovative ways.",
    link: "https://www.bluetickconsultants.com/privaicy-matters-balancing-privacy-price-and-performance-in-in-house-llm-deployments.html",
    imagePath: privacy,
  },
];

export default function Blogs() {
  return (
    <div className="flex flex-col min-h-screen">
      <h1 className="text-4xl font-semibold self-center my-8">
        Explore and enjoy the blogs written by our passionate techies.
      </h1>
      <div className="flex flex-col">
        {BlogList.map((blog, index) => (
          <div key={index} className="grid grid-cols-3 gap-4 p-12">
            <div className="col-span-2">
              <h2 className="text-2xl mb-4 font-semibold">{blog.title}</h2>
              <p className="text-lg">{blog.content}</p>
              <a
                href={blog.link}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Read More
              </a>
            </div>
            <div>
              <img
                src={blog.imagePath}
                alt="Blog Image"
                className="rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
