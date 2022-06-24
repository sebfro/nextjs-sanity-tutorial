import styled, { css } from 'styled-components';
import IconButton from './IconButton';

// interface EditPencilBtnProps {
// 	onClick: () => void;
// 	border?: boolean;
// 	width?: number;
// 	height?: number;
// }
// const EditPencilBtn: React.FC<EditPencilBtnProps> = ({
// 	onClick,
// 	border = false,
// 	height = 2,
// 	width = 3,
// }) => {
// 	return (
// 		<EditPencil
// 			svgSrc={'/EditPencil.svg'}
// 			handleClickCallback={onClick}
// 			border={border}
// 		/>
// 	);
// };

// export default EditPencilBtn;

export const EditPencil = styled(IconButton)<{
	height: number;
	width: number;
	border: boolean;
}>`
	width: ${({ width }) => width + 'em'};
	height: ${({ height }) => height + 'em'};
	img {
		width: ${({ width }) => width + 1 + 'em'};
		height: ${({ height }) => height + 1 + 'em'};
	}
	${({ border }) =>
		border
			? css`
					border: 2px solid black;
					padding: 0.8em;
			  `
			: css`
					border: none;
					padding: 0;
			  `};
`;
