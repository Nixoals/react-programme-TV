const Programme = (props) => {
	const { time, title, type, duration, image, isUnseen, direct } = props.data;

	return (
		<>
			<section className="programme-container">
				<div>
					<div>{time}</div>
				</div>
				<div>
					<img src={image} alt={`programm`}></img>
				</div>
				<div>
					<h1>{title}</h1>
					<p>{type}</p>
					<div className="duration">
						<div>{duration}</div>

						{direct && <div className="red">{'. Direct'}</div>}
						{isUnseen && <div className="red">{'. Inedit'}</div>}
					</div>
				</div>
			</section>
		</>
	);
};

export default Programme;
