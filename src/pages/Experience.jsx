import "../index.css";
import asserts from "../assets/assests";

const experiences = [
  "MERN - Still Learning (4th Year)",
  "DSA (3rd Year)",
  "HTML, CSS, and JavaScript (3rd Year)",
  "Java and OOP Concepts (2nd and 3rd Year)",
  "C (1st Year)",
  "Python (12th Standard)",
  "C++ (11th Standard)",
];

const Experience = () => {
  let experienceIndex = 0;

  return (
    <>
      <div className="h-[270vh] w-[100vw] flex flex-col items-center text-white">
        {[...Array(3)].map((_, sectionIndex) => (
          <div
            key={sectionIndex}
            className="h-[90vh] w-[90vw] flex flex-col"
            style={{
              backgroundImage: `url(${asserts.divider})`,
              objectFit: "contain",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          >
            {[...Array(2)].map((_, rowIndex) => (
              <div
                key={rowIndex}
                className="h-[50%] w-[100%] flex flex-row justify-around items-center "
              >
                {[...Array(2)].map((_, colIndex) => {
                  const isWhiteBox =
                    (sectionIndex * 2 + rowIndex + colIndex) % 2 === 0;
                  const experienceText =
                    isWhiteBox && experienceIndex < experiences.length
                      ? experiences[experienceIndex++]
                      : null;

                  return (
                    <div
                      key={colIndex}
                      className={`h-[60%] w-[40%] ${
                        isWhiteBox ? "bg-black cards " : ""
                      } flex justify-center items-center p-10 rounded-lg`}
                    >
                      {experienceText && (
                        <p className="text-white text-center font-semibold">
                          {experienceText}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Experience;
