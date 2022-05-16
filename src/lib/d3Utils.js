const initialiseChart = (data) => {
  const margin = { top: 50, right: 50, bottom: 50, left: 50 }
  const width = document.querySelector('#chart-wrapper').getBoundingClientRect.width - margin.left - margin.right
  const height = document.querySelector('#chart-wrapper').getBoundingClientRect.height - margin.top - margin.bottom
  // add SVG to the page
  const svg = d3
    .select('#chart')
    .append('svg')
    .attr('width', width + margin['left'] + margin['right'])
    .attr('height', height + margin['top'] + margin['bottom'])
    .call(responsivefy)
    .append('g')
    .attr('transform', `translate(${margin['left']},  ${margin['top']})`)

	const xMin = d3.min(data, d => {
		return d['date'];
	});
	const xMax = d3.max(data, d => {
		return d['date'];
	});
	const yMin = d3.min(data, d => {
		return d['close'];
	});
	const yMax = d3.max(data, d => {
		return d['close'];
	});

	const xScale = d3
		.scaleTime()
		.domain([xMin, xMax])
		.range([0, width]);
	const yScale = d3
		.scaleLinear()
		.domain([yMin - 5, yMax])
		.range([height, 0]);

	svg
		.append('g')
		.attr('id', 'xAxis')
		.attr('transform', `translate(0, ${height})`)
		.call(d3.axisBottom(xScale));
	svg
		.append('g')
		.attr('id', 'yAxis')
		.attr('transform', `translate(${width}, 0)`)
		.call(d3.axisRight(yScale));

	const line = d3
		.line()
		.x(d => {
			return xScale(d['date']);
		})
		.y(d => {
			return yScale(d['close']);
		});

	svg
		.append('path')
		.data([data])
		.style('fill', 'none')
		.attr('id', 'priceChart')
		.attr('stroke', 'steelblue')
		.attr('stroke-width', '1.5')
		.attr('d', line);
}

export const updateChart = (data) => {
	

	 // Scale the range of the data again 
	 x.domain(d3.extent(data, function(d) { return d.date; }));
	 y.domain([0, d3.max(data, function(d) { return d.close; })]);

 // Select the section we want to apply our changes to
 var svg = d3.select("body").transition();

 // Make the changes
	svg.select(".line")   // change the line
			.duration(750)
			.attr("d", valueline(data));
	svg.select(".x.axis") // change the x axis
			.duration(750)
			.call(xAxis);
	svg.select(".y.axis") // change the y axis
			.duration(750)
			.call(yAxis);
}