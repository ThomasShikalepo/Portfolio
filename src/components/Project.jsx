const Project = () => {
  return (
    <div className="flex-wrap items-center py-10 justify-baseline space-y-14 sm:flex sm:space-y-0">
      <p className="text-2xl">title</p>
      <div className="flex gap-5 mt-2 text-sand">
        <span>tag1</span>
        <span>tag2</span>
        <span>tag3</span>
      </div>
      <button className="flex items-center gap-1 cursor-pointer hover-animation">
        Read More
        <img src="assets/arrow-right.svg" className="x-5" alt="" />
      </button>
    </div>
  );
};

export default Project;
