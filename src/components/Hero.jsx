import heroimage from "../assets/ai.jpg";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className="grid grid-cols-2 p-12 gap-8">
        <div className="flex flex-col justify-evenly">
          <div>
            <p className="text-lg">
              Founded in 2017,{" "}
              <span className="text-xl font-semibold">
                Bluetick Consultants
              </span>{" "}
              is a technology-driven firm that has made a significant impact in
              the Indian and US startup ecosystems.
            </p>
            <p className="text-lg">
              Transforming Enterprises with cutting-edge, scalable,
              privacy-focused
              <span className="text-xl font-semibold"> Generative AI</span>{" "}
              Solutions.
            </p>
          </div>
          <a href="https://www.bluetickconsultants.com/generative-ai.html">
            <Button variant="default" className="w-full">
              To know more about us
            </Button>
          </a>
        </div>
        <div>
          <img src={heroimage} alt="Ai Image" className="rounded" />
        </div>
      </div>
    </div>
  );
}
