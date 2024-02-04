const SectionHeader = ({ subHeader, mainHeader }) => {
  return (
    <>
      <h3 className="uppercase text-gray-600 font-semibold leading-4">
        {subHeader}
      </h3>
      <h3 className="uppercase text-primary font-bold text-4xl">
        {mainHeader}
      </h3>
    </>
  );
};

export default SectionHeader;
