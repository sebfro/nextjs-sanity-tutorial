//If the svgs are used in standard html without typing, use this one instead
export enum IconsEnum {
	Close = '/Close.svg',
	EditPencil = '/EditPencil.svg',
	PositionLeftArrow = '/PositionLeftArrow.svg',
	PositionRightArrow = '/PositionRightArrow.svg',
	CircleArrowLeft = '/CircleArrowLeft.svg',
	SuccessIcon = '/SuccessIcon.svg',
	InfoSuccess = '/Info_Success.svg',
	Expand = '/expand.svg',
	PlaceholderPhoto = '/placeholder-photo.svg',
	Upload = '/Upload.svg',
	Trash = '/Trash.png',
	PositionTag = '/PositionTag.png',
	Map = '/Map.png',
	Logo = '/Logo.svg',
}

// If you are going to update any of them use f2 to update all components that use it.
export type Icons =
	| 'Close'
	| 'EditPencil'
	| 'PositionLeftArrow'
	| 'PositionRightArrow'
	| 'CircleArrowLeft'
	| 'SuccessIcon'
	| 'Info_Success'
	| 'Expand'
	| 'PlaceholderPhoto'
	| 'Upload'
	| 'Trash'
	| 'PositionTag'
	| 'Map'
	| 'InfoNotification'
	| 'ArrowDown'
	| 'ArrowUp'
	| 'InfoNotificationWarning'
	| 'PersonIcon'
	| 'SignOut';

export const iconsList = [
	'Close',
	'EditPencil',
	'PositionLeftArrow',
	'PositionRightArrow',
	'CircleArrowLeft',
	'SuccessIcon',
	'Info_Success',
	'Expand',
	'PlaceholderPhoto',
	'Upload',
	'Trash',
	'PositionTag',
	'Map',
	'SignOut',
	'PersonIcon',
	'InfoNotificationWarning',
	'InfoNotification',
	'ArrowUp',
	'ArrowDown',
] as const;
