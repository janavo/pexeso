export default function Card(props) {
    console.log(props.image)
    return (
        <div
            className="overflow-hidden aspect-square rounded-sm"
            onClick={props.click}
        >
            {props.flipped ? (
                <img
                    src={props.image}
                    alt="tady je kočka"
                    className="w-full h-full object-cover"
                />
            ) : (
                <img
                    src="/cats/cover.jpg"
                    alt="cover"
                    className="w-full h-full object-cover"
                />
            )}
        </div>
    );
}
