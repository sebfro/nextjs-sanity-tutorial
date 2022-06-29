import React, { useMemo } from 'react';
import { Icons } from '../../Icons';
import ArrowDown from './ArrowDown';
import ArrowUp from './ArrowUp';
import CircleArrowLeft from './CircleArrowLeft';
import Close from './Close';
import EditPencil from './EditPencil';
import Expand from './Expand';
import InfoNotification from './InfoNotification';
import InfoSuccess from './InfoSuccess';
import PositionLeftArrow from './PositionLeftArrow';
import PositionRightArrow from './PositionRightArrow';
import PositionTag from './PositionTag';
import SuccessIcon from './SuccessIcon';
import Trash from './Trash';
import Upload from './Upload';
import Map from './Map';
import InfoNotificationWarning from './InfoNotificationWarning';
import PersonIcon from './personIcon';
import SignOut from './SignOut';

export interface SvgProps {
	fill?: string;
	stroke?: string;
}

interface SvgGetterProps extends SvgProps {
	icon: Icons;
}
const SvgGetter: React.FC<SvgGetterProps> = ({ icon, fill }) => {
	return useMemo(() => {
		switch (icon) {
			case 'EditPencil':
				return <EditPencil fill={fill} />;
			case 'ArrowUp':
				return <ArrowUp fill={fill} />;
			case 'ArrowDown':
				return <ArrowDown fill={fill} />;
			case 'Close':
				return <Close fill={fill} />;
			case 'CircleArrowLeft':
				return <CircleArrowLeft fill={fill} />;
			case 'Expand':
				return <Expand fill={fill} />;
			case 'Info_Success':
				return <InfoSuccess fill={fill} />;
			case 'InfoNotification':
				return <InfoNotification fill={fill} />;
			case 'PositionLeftArrow':
				return <PositionLeftArrow fill={fill} />;
			case 'PositionRightArrow':
				return <PositionRightArrow fill={fill} />;
			case 'PositionTag':
				return <PositionTag fill={fill} />;
			case 'SuccessIcon':
				return <SuccessIcon fill={fill} />;
			case 'Trash':
				return <Trash fill={fill} />;
			case 'Upload':
				return <Upload fill={fill} />;
			case 'Map':
				return <Map fill={fill} />;
			case 'InfoNotificationWarning':
				return <InfoNotificationWarning fill={fill} />;
			case 'PersonIcon':
				return <PersonIcon fill={fill} />;
			case 'SignOut':
				return <SignOut fill={fill} />;
			default:
				return <Close fill={'red'} />;
		}
	}, [fill, icon]);
};

export default SvgGetter;
