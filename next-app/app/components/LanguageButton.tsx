type LanguageButtonProps = {
    name: string;
    description: string;
}

export default function LanguageButton({name, description}:LanguageButtonProps){
    return (
  <button
    type="button"
    className="group w-56 h-40 [perspective:1000px]"
  >
    <div className="relative w-full h-full transition-transform duration-700 
    [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

      <div className="absolute w-full h-full flex flex-col items-center justify-center rounded-xl border border-gray-300 bg-white [backface-visibility:hidden]">
        <h3 className="text-xl font-bold">
          {name}
        </h3>
      </div>

      <div className="absolute w-full h-full flex flex-col items-center justify-center rounded-xl bg-black text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
        <p className="text-lg">
          {description}
        </p>
      </div>

    </div>
  </button>
);
}