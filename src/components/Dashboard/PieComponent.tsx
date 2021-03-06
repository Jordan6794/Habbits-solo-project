import { FunctionComponent, useCallback, useState } from 'react'
import { PieChart, Pie, Sector, Cell } from 'recharts'

import useWindowWidth from '../../hooks/useWindowWidth';

const PieComponent: FunctionComponent<{ data: Array<{ name: string; value: number }>, colors: string[] }> = ({ data, colors }) => {
	const [activeIndex, setActiveIndex] = useState(0)
	const onPieEnter = useCallback(
		(_: any, index: number) => {
			setActiveIndex(index)
		},
		[setActiveIndex]
	)

	const width = useWindowWidth()
	const isSmallSize = width < 600

	return (
		// <ResponsiveContainer>
		<PieChart width={isSmallSize ? 200 : 400} height={isSmallSize ? 250 : 350}>
			<Pie
				activeIndex={activeIndex}
				activeShape={(props) => renderActiveShape(props, isSmallSize)}
				data={data}
				cx={isSmallSize ? 100 : 200}
				cy={isSmallSize ? 120 : 200}
				innerRadius={60}
				outerRadius={80}
				fill="#8884d8"
				dataKey="value"
				onMouseEnter={onPieEnter}
			>
				{data.map((entry, index) => (
					<Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
				))}
			</Pie>
		</PieChart>
		// </ResponsiveContainer>
	)
}

const renderActiveShape = (props: any, isSmallSize: boolean) => {
	const RADIAN = Math.PI / 180
	const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props
	const sin = Math.sin(-RADIAN * midAngle)
	const cos = Math.cos(-RADIAN * midAngle)
	const sx = cx + (outerRadius + 10) * cos
	const sy = cy + (outerRadius + 10) * sin
	const mx = cx + (outerRadius + 30) * cos
	const my = cy + (outerRadius + 30) * sin
	const ex = mx + (cos >= 0 ? 1 : -1) * 22
	const ey = my
	const textAnchor = cos >= 0 ? 'start' : 'end'

	return (
		<g>
			<text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
				{payload.name}
			</text>

			{isSmallSize && <text x={cx} y={cy+15} dy={8} textAnchor="middle" fill={fill}>
            	{value} {`(${(percent * 100).toFixed(1)}%)`}
			</text>}
			<Sector
				cx={cx}
				cy={cy}
				innerRadius={innerRadius}
				outerRadius={outerRadius}
				startAngle={startAngle}
				endAngle={endAngle}
				fill={fill}
			/>
			<Sector
				cx={cx}
				cy={cy}
				startAngle={startAngle}
				endAngle={endAngle}
				innerRadius={outerRadius + 6}
				outerRadius={outerRadius + 10}
				fill={fill}
			/>
			{!isSmallSize && 
			<>
				<path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
				<circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
				<text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${value}`}</text>
				<text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
					{`(${(percent * 100).toFixed(1)}%)`}
				</text>
			</>}
			
		</g>
	)
}

export default PieComponent
