import { GetStaticProps } from 'next';
import React from 'react';
import styled from 'styled-components';
import Card, { Row } from '../../components/atoms/OldCard';
import Header from '../../components/atoms/Header';
import TextRow from '../../components/atoms/TextRow';
import { home } from '../../types/TIbberApiTypes';
import { getTibberInfo } from '../api/tibberCalls';
import { formatDate } from '../../lib/helpers';

interface OverviewProps {
	grapQlResponse: home[];
}

export const getStaticProps: GetStaticProps = async () => {
	const grapQlResponse: home[] = await getTibberInfo();
	console.error(grapQlResponse);
	return {
		props: {
			grapQlResponse,
		},
	};
};

const Overview: React.FC<OverviewProps> = ({ grapQlResponse }) => {
	return (
		<Wrapper>
			<Header headerText="Tibber oversikt" />

			<InfoRow>
				{grapQlResponse.map(
					(
						{
							currentSubscription: {
								priceInfo: { current },
							},
							consumption,
							owner,
						},
						i
					) => {
						if (!current) return null;
						return (
							<>
								<Card>
									<CardContent>
										<TextRow
											textName="Fornavn"
											value={owner?.firstName || ''}
										/>
										<TextRow
											textName="Etternavn"
											value={owner?.lastName || ''}
										/>
										<TextRow
											textName="Mobil"
											value={owner?.contactInfo.mobile || ''}
										/>
										<TextRow
											textName="Email"
											value={owner?.contactInfo.email || ''}
										/>
									</CardContent>
								</Card>
								<Card key={i}>
									<CardContent>
										<TextRow
											textName="Total"
											value={current.total.toString()}
										/>
										<TextRow
											textName="Energi"
											value={current.energy.toString() + ' KWh'}
										/>
										<TextRow
											textName="Skatt/avgift"
											value={current.tax.toString()}
										/>
										<TextRow
											textName="Start dato"
											value={formatDate(current.startsAt)}
										/>
									</CardContent>
								</Card>
								{consumption?.nodes.map((con, i) => {
									return (
										<Card key={i}>
											<CardContent>
												<TextRow
													textName="Fra-til"
													value={
														formatDate(con.from) + '-' + formatDate(con.to)
													}
												/>
												<TextRow
													textName="Forbruk"
													value={`${con.consumption} ${con.consumptionUnit}`}
												/>
												<TextRow
													textName="Kostnad"
													value={`${con.cost} ${con.currency}`}
												/>
												<TextRow
													textName="Enhets pris med mva"
													value={`${con.unitPriceVAT} ${con.currency}`}
												/>
											</CardContent>
										</Card>
									);
								})}
							</>
						);
					}
				)}
			</InfoRow>
		</Wrapper>
	);
};

export default Overview;

const Wrapper = styled.div`
	${Row} {
		width: fit-content;
	}
`;

const InfoRow = styled.div`
	display: flex;
	row-gap: 1em;
	column-gap: 1em;
	flex-wrap: wrap;
`;

const CardContent = styled.div`
	padding: 1em 0 0.5em 0;
`;
