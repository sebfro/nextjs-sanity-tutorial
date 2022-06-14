import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Tag, { TagsProps } from './Tag';

interface DescriptionWithTagRowProps {
	tags: TagsProps[];
	description: string;
	classname?: string;
	children?: ReactElement;
}

const DescriptionWithTagRow: React.FC<DescriptionWithTagRowProps> = ({
	description,
	tags,
	classname,
	children,
}) => {
	return (
		<Wrapper className={classname}>
			<p id="description">{description}</p>
			<TagsRow>
				{tags.map((t, i) => (
					<Tag {...t} key={t.text + i} />
				))}
			</TagsRow>
			{children && children}
		</Wrapper>
	);
};

export default DescriptionWithTagRow;

const TagsRow = styled.div`
	display: flex;
	column-gap: 1em;
	flex-wrap: wrap;
	row-gap: 0.5em;
`;

const Wrapper = styled.div`
	#description {
		margin-top: 0;
	}
`;
