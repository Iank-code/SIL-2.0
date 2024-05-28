"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import AuthenticateButton from "@/components/authenticateButton/AuthenticateButton";

const instructionData = [
  {
    name: (
      <div>
        <h3 className="font-bold">Repository Setup</h3>
        <p>
          The project is hosted on GitHub, ensuring easy access and version
          control. You can clone the repository using the following command:
        </p>
      </div>
    ),
    value: "git@github.com:Iank-code/SIL-2.0.git",
  },

  {
    name: (
      <div>
        <h3 className="font-bold">Installation</h3>
        <p>
          Navigate to the project directory and install the necessary
          dependencies with:
        </p>
      </div>
    ),
    value: "cd SIL-2.0 && npm install",
  },

  {
    name: (
      <div>
        <h3 className="font-bold">Running the Project</h3>
        <p>Start the development server using:</p>
      </div>
    ),
    value: "npm run dev",
  },
];

const copyToClipboardFunction = (text: string) => {
  navigator.clipboard.writeText(text);
  alert("Copied to clipboard");
};

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen py-3 gap-8 justify-start px-10 max-[600px]:flex-col max-[600px]:px-5">
      <div className="flex flex-col w-1/2 gap-4 max-[600px]:w-full">
        <div>
          <h2 className="font-bold text-2xl">
            Savannah Informatics - Frontend Role
          </h2>
          <p>
            Welcome to my submission for the Savannah Informatics frontend
            engineering assessment. This project demonstrates my skills in
            modern web frontend development, fulfilling the requirements
            outlined in the assessment brief. The completed project is available
            in the public repository linked below.
          </p>
          <h5 className="font-bold">
            Repository Link:{" "}
            <Link
              href="https://github.com/Iank-code/SIL-2.0"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              Github Repository
            </Link>
          </h5>
        </div>

        <div>
          <h2 className="font-bold text-2xl">Instructions</h2>
          <ol className="list-decimal">
            {instructionData.map((data, index) => (
              <div key={index}>
                <li>{data.name}</li>
                <code
                  className="font-bold bg-black text-white p-1 cursor-pointer"
                  onClick={() => copyToClipboardFunction(data.value)}
                >
                  {data.value}
                </code>
              </div>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="font-bold text-2xl">Summary</h2>
          <p>
            This project features a fully responsive design for seamless use
            across devices and data fetching from a mock API. It also includes
            Google authentication for smooth login and logout. The code follows
            best practices in organization, commenting, and version control,
            with ESLint ensuring quality. The project is well-documented with a
            comprehensive README containing setup instructions, a project
            description, and usage guidelines.
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        <Image
          src={"agreement.svg"}
          alt="agreement.svg"
          width={400}
          height={400}
        />
        <div></div>
        <AuthenticateButton />
        <Link href="#">Don&apos;t have an account? Create account</Link>
      </div>
    </main>
  );
}
