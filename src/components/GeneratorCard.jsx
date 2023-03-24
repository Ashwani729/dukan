export const GeneratorCard = (props) => {
    const { generator } = props;
    return <div key={generator.id}>
        <img
            src={generator.img}
            className="mb-4 rounded-[4px]"
            alt={generator.title}
        />
        <p className="mb-2 text-[#1A181E] text-xl">{generator.title}</p>
        <p className="text-base text-[#4D4D4D]">
            {generator.description}
        </p>
    </div>
}