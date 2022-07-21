const w = 1250; // svg width
const h = 700; // svg height

// Dynamic scales
const xScale = d3.scaleLinear();
const yScale = d3.scaleLinear();

// Create axes
const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale);

const svg = d3.select('svg');

fetch(
  'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json',
)
  .then((res) => res.json())
  .then((data) => {
    xScale.domain([]).range();
    yScale.domain([]).range();

    // Plot dataset
    svg
      .selectAll('rect')
      .data(data.monthlyVariance)
      .enter()
      .append('rect')
      .attr('class', 'cell')
      .attr('width', 7)
      .attr('height', 30)
      .attr('x', (d) => d);
  });
