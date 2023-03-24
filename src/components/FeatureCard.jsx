export const FeatureCard = (props) => {
    const { id, SVG, title, description } = props;
    return (
        <div
            className="w-[342px] grid grid-rows-3 justify-items-center"
            key={id}
        >
            {SVG}
            <p className="text-xl text-[#1A181E] mt-6 mb-2 text-center">
                {title}
            </p>
            <p className="text-base text-[#4D4D4D] text-center">
                {description}
            </p>
        </div>
    )
}