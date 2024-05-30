

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="mx-auto w-3/12 text-center my-4">
            <h3 className="text-[#D99904] mb-3 ">---{subHeading}---</h3>
            <h1 className="uppercase text-3xl py-4 border-y-2 text-[#151515] ">{heading}</h1>
        </div>
    );
};

export default SectionTitle;