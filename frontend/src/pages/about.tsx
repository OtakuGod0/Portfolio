function About() {
  return (
    <section id="about" className="w-full flex relative">
      <div className="bg-accent h-32 w-32 absolute top-[-6rem] left-0 rounded-full blur-3xl opacity-50"></div>
      <div className="bg-primary h-32 w-32 absolute right-0 bottom-[-6rem] rounded-full blur-3xl opacity-50"></div>
      <div className="w-1/2 flex flex-col text-left px-20">
        <div className="font-heading text-3xl my-2">
          About <span className="text-primary">Me!</span>
        </div>
        <p className="text-sm">
          Aspiring Software Engineer and Data Science enthusiast pursuing a BSc
          in IT. Skilled in Python, machine learning, and tools like
          Scikit-Learn, Docker, and Streamlit. Passionate about creating
          impactful tech solutions and eager to connect with like-minded
          professionals.
        </p>
      </div>
      <div className="w-1/2 px-28 ">
        <div className="relative">
        <div className="relative w-[15rem] h-[13rem] bg-white z-10"></div>
        <div className="absolute left-4 top-4 w-[15rem] h-[13rem] border-4 border-primary z-0 "></div>
        </div>
      </div>
    </section>
  );
}

export default About;
