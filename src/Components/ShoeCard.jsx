const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    //now this handleClick redners selected shoe photo
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };
  return (
    //this div Highlight selected Shoe
    <div
      className={`border-2 rounded-xl transition-all duration-300 ${
        bigShoeImg === imgURL.bigShoe
          ? " border-4 border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1 `}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max:sm-mp-4">
        <img
          src={imgURL.thumbnail} //this will render all Shoes
          alt="shoe Collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
