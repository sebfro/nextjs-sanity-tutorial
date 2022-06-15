import React, { useMemo } from 'react';
import styled from 'styled-components';
import DescriptionWithTagRow from '../../atoms/ReportAtoms/DescriptionWithTagRow';
import { TagsProps } from '../../atoms/ReportAtoms/Tag';
import Thumbnail from '../../atoms/ReportAtoms/Thumbnail';

interface FinishedReportMinimizedProps {
	tags: TagsProps[];
	topText: string;
	risk: number;
	immediateActionRequired?: boolean;
}
const FinishedReportMinimized: React.FC<FinishedReportMinimizedProps> = ({
	tags,
	topText,
	risk,
	immediateActionRequired = false,
}) => {
	const allTags: TagsProps[] = useMemo(() => {
		if (!immediateActionRequired) return tags;
		return [
			immediateActionRequired && {
				text: 'Strakstiltak',
				iconPath: '/InfoNotification.png',
				type: 'error',
			},
			...tags,
		];
	}, [immediateActionRequired, tags]);
	return (
		<Wrapper>
			<div>
				<Thumbnail
					photos={['/wallpaper.jpg', '/ExampleMap.png', '/wallpaper.jpg']}
					editable={false}
				/>
			</div>
			<DescriptionWithTagRow
				description={topText}
				tags={[...allTags, { text: `Risiko ${risk}` }]}
			/>
		</Wrapper>
	);
};

export default FinishedReportMinimized;

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 30% 67%;
	column-gap: 3%;
	color: #444f55;
`;
