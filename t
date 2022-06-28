[1mdiff --git a/components/molecules/ReportMolecules/FinishedReportExpanded.tsx b/components/molecules/ReportMolecules/FinishedReportExpanded.tsx[m
[1mindex d2f42fb..3eb8737 100644[m
[1m--- a/components/molecules/ReportMolecules/FinishedReportExpanded.tsx[m
[1m+++ b/components/molecules/ReportMolecules/FinishedReportExpanded.tsx[m
[36m@@ -26,7 +26,11 @@[m [mconst FinishedReportExpanded: React.FC<FinishedReportExpandedProps> = ({[m
 }) => {[m
 	return ([m
 		<Layout>[m
[31m-			<SideCardContent canEditPosition={false} />[m
[32m+[m			[32m<SideCardContent[m
[32m+[m				[32mcanEditPosition={false}[m
[32m+[m				[32mphotos={[]}[m
[32m+[m				[32mcanEditPhoto={false}[m
[32m+[m			[32m/>[m
 			<ReportContent>[m
 				<DescriptionWithTagRow description={topText} tags={tags}>[m
 					<CustomLine />[m
[36m@@ -54,6 +58,13 @@[m [mconst FinishedReportExpanded: React.FC<FinishedReportExpandedProps> = ({[m
 					/>[m
 				</div>[m
 			</ReportContent>[m
[32m+[m			[32m<CustomCard backgroundColor="white" includeBorder>[m
[32m+[m				[32m<>[m
[32m+[m					[32m<p>Registrert 11.04.22 09:42</p>[m
[32m+[m					[32m<p>|</p>[m
[32m+[m					[32m<p>Sist endret 11.04.22 09:42</p>[m
[32m+[m				[32m</>[m
[32m+[m			[32m</CustomCard>[m
 		</Layout>[m
 	);[m
 };[m
[36m@@ -70,3 +81,12 @@[m [mconst CustomLine = styled(Line)`[m
 	margin-top: 1.5em;[m
 	background-color: #dadada;[m
 `;[m
[32m+[m
[32m+[m[32mconst CustomCard = styled(CardDiv)`[m
[32m+[m	[32mpadding: 0 1.5em;[m
[32m+[m	[32mmargin-bottom: 1em;[m
[32m+[m	[32mcolumn-gap: 1em;[m
[32m+[m	[32mcolor: ${TextColor};[m
[32m+[m	[32mfont-weight: 300;[m
[32m+[m	[32mfont-size: 14px;[m
[32m+[m[32m`;[m
[1mdiff --git a/components/organisms/FinishedReport.tsx b/components/organisms/FinishedReport.tsx[m
[1mindex daf7cbf..5505c60 100644[m
[1m--- a/components/organisms/FinishedReport.tsx[m
[1m+++ b/components/organisms/FinishedReport.tsx[m
[36m@@ -58,22 +58,13 @@[m [mconst Finishedreport: React.FC<FinishedreportProps> = ({[m
 						/>[m
 					</Header>[m
 					{showMore ? ([m
[31m-						<>[m
[31m-							<CustomCard backgroundColor="white" includeBorder>[m
[31m-								<>[m
[31m-									<p>Registrert 11.04.22 09:42</p>[m
[31m-									<p>|</p>[m
[31m-									<p>Sist endret 11.04.22 09:42</p>[m
[31m-								</>[m
[31m-							</CustomCard>[m
[31m-							<FinishedReportExpanded[m
[31m-								topText={topText}[m
[31m-								actionDescription={actionDescription}[m
[31m-								handbookReference={handbookReference}[m
[31m-								tags={tags}[m
[31m-								immediateActionRequired={immediateActionRequired}[m
[31m-							/>[m
[31m-						</>[m
[32m+[m						[32m<FinishedReportExpanded[m
[32m+[m							[32mtopText={topText}[m
[32m+[m							[32mactionDescription={actionDescription}[m
[32m+[m							[32mhandbookReference={handbookReference}[m
[32m+[m							[32mtags={tags}[m
[32m+[m							[32mimmediateActionRequired={immediateActionRequired}[m
[32m+[m						[32m/>[m
 					) : ([m
 						<FinishedReportMinimized[m
 							tags={tags}[m
