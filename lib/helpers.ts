import moment from 'moment';
import { ParsedUrlQuery } from 'querystring';

export const GetUrlId = (): Array<
	string | { params: ParsedUrlQuery; locale?: string }
> => {
	const urlList = window.location.pathname.split('/');
	//id: urlList[urlList.length - 1] || '',
	return [
		{
			params: {
				id: urlList[urlList.length - 1] || '',
			},
		},
	];
};

export const formatDate = (date: string, timeOfDay = false): string => {
	return moment(new Date(date)).format(
		timeOfDay ? 'DD.MM.YYYY HH:mm' : 'DD.MM.YYYY'
	);
};
