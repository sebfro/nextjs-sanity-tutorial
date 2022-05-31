import React from "react";
import Checkcircle from "./Checkcircle";

const CheckCircleRow: React.FC = () => {
	return (
		<>
			<Checkcircle value="Lett skade" 
				checkedValue={checkedValue}
				onClickCallback={setCheckValue}
			/>
			<Checkcircle value="Hard skade" 
				checkedValue={checkedValue}
				onClickCallback={setCheckValue}
			/>
			<Checkcircle value="Drept" 
				checkedValue={checkedValue}
				onClickCallback={setCheckValue}
			/>
			<Checkcircle value="Flere Drept" 
				checkedValue={checkedValue}
				onClickCallback={setCheckValue}
			/>
		</>
	);
};

export default CheckCircleRow;