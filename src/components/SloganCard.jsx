export const SloganCard = (props) => {
    const { slogan } = props;
    return (
        <div
            className="py-2 px-4 rounded-[4px]"
            style={{
                background: '#F2F2F2',
            }}
            key={slogan.id}
        >
            <p className="text-base font-normal text-[#1A181E]">
                {slogan.slogan}
            </p>
        </div>
    )
}