const HomeState = () => {
  return (
    <div className="flex flex-col text-center justify-center items-center">
      <img
        className="fixed top-0"
        src="/logo.png"
        alt="logo"
        height="350px"
        width="250px"
      />
      <div>
        <div className="mx-auto">
          <h2 className="font-Bebas text-5xl mb-5">
            <span className="text-red-800">Dota 2 </span> Immortal Economy
          </h2>
          <p className="font-Sora mb-2">
            Web tool made to bulk search immortal/arcana items on the Dota 2
            Steam market.
          </p>
          <p className="font-Sora">
            Navigate bulk static item data instead of relying on the Steam
            Market refreshing properly
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeState;
