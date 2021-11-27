<span data-css-15b13by="" aria-hidden="false">Get started</span>

<span data-css-15b13by="" aria-hidden="false">Log in</span>

<img src="../../pluralsight.imgix.net/author/lg/7aa57bc1-6266-4719-a497-c3ab18a28f5d.png" alt="Author avatar" class="jsx-3841407315" />

Benney Au

Create Tooltips in D3.js
========================

### Benney Au

-   Sep 29, 2020
-   7 Min read
-   12,029 Views

-   Sep 29, 2020
-   <span class="jsx-3759398792" itemprop="timeRequired">7 Min</span> read
-   12,029 Views

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Front End Web Development</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">Client-side Frameworks</span>

<span class="jsx-3759398792"></span>

<span data-css-1997kh1="">React</span>

Introduction

21

-   <a href="#module-introduction" class="menu-link">Introduction</a>
-   <a href="#module-twoapproachestotooltips" class="menu-link">Two Approaches To Tooltips</a>
-   <a href="#module-addingtooltipsusingthetitlesvgelement" class="menu-link">Adding Tooltips Using the Title SVG Element</a>
-   <a href="#module-usingmouseeventstocontroltooltips" class="menu-link">Using Mouse Events to Control Tooltips</a>
-   <a href="#module-conclusion" class="menu-link">Conclusion</a>
-   <a href="#top" class="menu-link">Top</a>

Introduction
------------

Tooltips are a feature designers can use when they want to gradually reveal information to users as they hover or place keyboard focus over an element. In this guide, you will learn two approaches to enhancing your D3.js charts by implementing tooltips.

This guide builds on a previous guide, [Using D3.js Inside a React App](https://app.pluralsight.com/guides/using-d3.js-inside-a-react-app), that covers how to set up a simple bar chart in D3.js using static in-memory data. Here you will extend that bar chart with tooltips.

Two Approaches To Tooltips
--------------------------

There are two possible methods of creating tooltips in D3.js. The first method is by creating the SVG <span class="jsx-3120878690">`<title>`</span> tags as a descendant of an interactable element. The second approach is to use <span class="jsx-3120878690">`mouseover`</span>, <span class="jsx-3120878690">`mosueleave`</span>, and <span class="jsx-3120878690">`mousemove`</span> events to dynamically move and change the visibility of a tooltip. The first approach is simple to implement but can lead to unnecessarily creating more elements that can hurt performance. Both approaches will be demonstrated.

Adding Tooltips Using the Title SVG Element
-------------------------------------------

In [Using D3.js Inside a React App](https://app.pluralsight.com/guides/using-d3.js-inside-a-react-app), the <span class="jsx-3120878690">`<BarChart />`</span> component creates the <span class="jsx-3120878690">`<rect>`</span> element per sales year. To add a simple tooltip, you can insert the <span class="jsx-3120878690">`<title />`</span> tag inside the interactable elements. This means that the SVG hierarchy looks like this:

    1<svg>
    2  <g class="plot-area">
    3  <rect class="bar" x="46" width="13" y="37" height="433">
    4    <title>Sales were 8949000 in 1980</title>
    5  </rect>
    6  <rect class="bar" x="60" width="13" y="-61" height="531">
    7    <title>Sales were 10979000 in 1985</title>
    8  </rect>
    9  </g>
    10  ...
    11</svg>

html

The SVG element has been simplified for brevity.

To do this with D3.js, you only need a minor update to the code that joins the data to the <span class="jsx-3120878690">`<rect />`</span> elements.

    1svg
    2  .select(".plot-area")
    3  .attr("fill", "steelblue")
    4  .selectAll(".bar")
    5  .data(data)
    6  .join("rect")
    7  .attr("class", "bar")
    8  .attr("x", (d) => x(d.year))
    9  .attr("width", x.bandwidth())
    10  .attr("y", (d) => y1(d.sales))
    11  .attr("height", (d) => y1(0) - y1(d.sales))
    12  .append('title')
    13  .text((d) => `Sales were ${d.sales} in ${d.year}`);

javascript

The last two lines add the <span class="jsx-3120878690">`<title />`</span> and dynamically set the text. The results are illustrated below: ![d3.js chart showing a tooltip generated by the &lt;title /&gt; tag](../../pluralsight2.imgix.net/guides/ffe8ebc7-9587-4911-8dad-6e06174c84d8_Screenshot_2020-09-27_000818.html)

Using Mouse Events to Control Tooltips
--------------------------------------

The second approach is to use <span class="jsx-3120878690">`mousemove`</span>, <span class="jsx-3120878690">`mouseleave`</span>, and <span class="jsx-3120878690">`mouseenter`</span> events to control the visibility, styling, and position of tooltips. This approach requires more code but gives you more control. The updated <span class="jsx-3120878690">`<BarChart />`</span> component with this approach is demonstrated below:

    1import { useD3 } from "./hooks/useD3";
    2import React from "react";
    3import * as d3 from "d3";
    4
    5function BarChart({ data }) {
    6  const ref = useD3(
    7    (svg) => {
    8      const height = 500;
    9      const width = 500;
    10      const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    11
    12      const x = d3
    13        .scaleBand()
    14        .domain(data.map((d) => d.year))
    15        .rangeRound([margin.left, width - margin.right])
    16        .padding(0.1);
    17
    18      const y1 = d3
    19        .scaleLinear()
    20        .domain([0, d3.max(data, (d) => d.sales)])
    21        .rangeRound([height - margin.bottom, margin.top]);
    22
    23      const xAxis = (g) =>
    24        g.attr("transform", `translate(0,${height - margin.bottom})`).call(
    25          d3
    26            .axisBottom(x)
    27            .tickValues(
    28              d3
    29                .ticks(...d3.extent(x.domain()), width / 40)
    30                .filter((v) => x(v) !== undefined)
    31            )
    32            .tickSizeOuter(0)
    33        );
    34
    35      const y1Axis = (g) =>
    36        g
    37          .attr("transform", `translate(${margin.left},0)`)
    38          .style("color", "steelblue")
    39          .call(d3.axisLeft(y1).ticks(null, "s"))
    40          .call((g) => g.select(".domain").remove())
    41          .call((g) =>
    42            g
    43              .append("text")
    44              .attr("x", -margin.left)
    45              .attr("y", 10)
    46              .attr("fill", "currentColor")
    47              .attr("text-anchor", "start")
    48              .text(data.y1)
    49          );
    50
    51      svg.select(".x-axis").call(xAxis);
    52      svg.select(".y-axis").call(y1Axis);
    53
    54      var tooltip = d3.select('.tooltip-area')
    55        .style('opacity', 0);
    56
    57      const mouseover = (event, d) => {
    58        tooltip.style("opacity", 1);
    59      };
    60
    61      const mouseleave = (event, d) => {
    62        // tooltip.style('opacity', 0);
    63      }
    64
    65      const mousemove = (event, d) => {
    66        const text = d3.select('.tooltip-area__text');
    67        text.text(`Sales were ${d.sales} in ${d.year}`);
    68        const [x, y] = d3.pointer(event);
    69
    70        tooltip
    71          .attr('transform', `translate(${x}, ${y})`);
    72      };
    73
    74      svg
    75        .select(".plot-area")
    76        .attr("fill", "steelblue")
    77        .selectAll(".bar")
    78        .data(data)
    79        .join("rect")
    80        .attr("class", "bar")
    81        .attr("x", (d) => x(d.year))
    82        .attr("width", x.bandwidth())
    83        .attr("y", (d) => y1(d.sales))
    84        .attr("height", (d) => y1(0) - y1(d.sales))
    85        .on("mousemove", mousemove)
    86        .on("mouseleave", mouseleave)
    87        .on("mouseover", mouseover);
    88    },
    89    [data.length]
    90  );
    91
    92  return (
    93    <>
    94      <svg
    95        ref={ref}
    96        style={{
    97          height: 500,
    98          width: "100%",
    99          marginRight: "0px",
    100          marginLeft: "0px",
    101        }}
    102      >
    103        <g className="plot-area" />
    104        <g className="x-axis" />
    105        <g className="y-axis" />
    106        <g className="tooltip-area">
    107          <text className="tooltip-area__text">aas</text>
    108        </g>
    109      </svg>
    110    </>
    111  );
    112}
    113
    114export default BarChart;

javascript

You have performed the following necessary changes:

-   Updated the <span class="jsx-3120878690">`jsx`</span> to include a <span class="jsx-3120878690">`tooltip-area`</span> group
-   Created a callback function for <span class="jsx-3120878690">`mouseover`</span> that makes the tooltip visible
-   Created a callback function for <span class="jsx-3120878690">`mouseleave`</span> that hides the tooltip when your mouse is no longer on the <span class="jsx-3120878690">`<rect />`</span> element
-   Created a callback function for <span class="jsx-3120878690">`mousemove`</span> that repositions and updates the tooltip text as you move between different <span class="jsx-3120878690">`<rect />`</span> elements

You may also want to create extra elements to help you style the tooltip. However, this is out of scope of this guide. As a final note on this approach, the code to do this has changed between different versions of D3.js. The code snippet demonstrated above is for version 6. You can learn more about the changes in the [D3 6.0 migration guide](https://observablehq.com/@d3/d3v6-migration-guide).

Conclusion
----------

Tooltips allow you to gradually reveal extra information to users. However, they are not always the solution to your data presentation problems. You can learn more about how you should and shouldn't be using tooltips by reading these [Tooltip Guidelines](https://www.nngroup.com/articles/tooltip-guidelines/).

21

[<span data-css-15b13by="" aria-hidden="false">LEARN MORE</span>](https://www.pluralsight.com/product/paths)