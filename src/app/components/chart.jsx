import { useEffect, useState, useRef } from "react";
import { ColorType, createChart } from "lightweight-charts";
import { Button, ButtonGroup, Tab, Tabs } from "@nextui-org/react";

export default function Chart({ market }) {
  const [days, setDays] = useState(1);
  const [chartData, setChartData] = useState([]);
  const [error, setError] = useState(null);

  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);
  const seriesRef = useRef(null);
  const oldestPriceRef = useRef(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    if (!chartRef.current) {
      chartRef.current = createChart(chartContainerRef.current, {
        height: 200,
        layout: {
          background: { type: ColorType.Solid, color: "transparent" },
          textColor: "#D9D9D9",
        },
        grid: {
          vertLines: { visible: false },
          horzLines: { visible: false },
        },
        timeScale: {
          visible: false,
        },
        rightPriceScale: {
          visible: false,
        },
        leftPriceScale: {
          visible: false,
        },
        crosshair: {
          vertLine: { visible: false },
          horzLine: { visible: false },
        },
        handleScale: false,
        kineticScroll: {
          touch: false,
          mouse: false,
        },
        handleScroll: false,
      });

      const handleResize = () => {
        console.log("Resizing chart");
        if (chartRef.current && chartContainerRef.current) {
          chartRef.current.applyOptions({
            width: chartContainerRef.current.clientWidth,
            height: chartContainerRef.current.clientHeight,
          });
        }
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }

    // Moved tooltip setup out of the chart initialization check
    const tooltipEl = document.getElementById("tooltip");
    const priceEl = document.getElementById("priceValue");
    const percentageEl = document.getElementById("percentageValue");
    const dateTooltipEl = document.getElementById("dateTooltip");
    const dateValueEl = document.getElementById("dateValue");

    if (tooltipEl && priceEl && dateTooltipEl && dateValueEl) {
      chartRef.current.subscribeCrosshairMove((param) => {
        if (!param.time || !param.seriesData || param.seriesData.size === 0) {
          //tooltipEl.style.display = "none";
          dateTooltipEl.style.display = "none";

          return;
        }

        // Setting the date
        if (param.time) {
          const date = new Date(param.time * 1000); // Convert seconds to milliseconds
          const dateOptions = { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
            const formattedDate = date.toLocaleDateString(undefined, dateOptions);
          dateValueEl.innerHTML = formattedDate;

          dateTooltipEl.style.left = `${param.point.x}px`;
          dateTooltipEl.style.top = `${param.point.y}px`; // Display tooltip slightly above crosshair
          dateTooltipEl.style.display = "block";
        } else {
          dateTooltipEl.style.display = "none";
        }

        const data = param.seriesData.get(seriesRef.current);
        if (data) {
          const price = data.value !== undefined ? data.value : data.close;
          priceEl.innerHTML = price.toFixed(2);

          if (oldestPriceRef.current) {
            const percentage = (price / oldestPriceRef.current) * 100 - 100;
            percentageEl.innerHTML = `${percentage.toFixed(2)}%`;
            const color = percentage > 0 ? "#17c964" : "#f31260";
            percentageEl.style.color = color;
          }

          tooltipEl.style.display = "block";
        } else {
          //tooltipEl.style.display = "none";
        }
      });

      /*
      chartContainerRef.current.addEventListener("mouseleave", () => {
        console.log("Mouse left the chart");
        tooltipEl.style.display = "none";
      });
      */
    }

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/" +
            market +
            "/market_chart?vs_currency=usd&days=" +
            days
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        const formattedData = data.prices.map((price) => ({
          time: Number((price[0] / 1000).toFixed(0)),
          value: price[1],
        }));
        setChartData(formattedData);

        // Set initial tooltip value to the most recent price.
        /*
        if (formattedData.length > 0) {
          const mostRecentPrice = formattedData[formattedData.length - 1].value;
          priceEl.innerHTML = mostRecentPrice.toFixed(2);
        }
        */

        if (formattedData.length > 0) {
          const mostRecentPrice = formattedData[formattedData.length - 1].value;
          const oldestPrice = formattedData[0].value;
          oldestPriceRef.current = oldestPrice;

          const percentage = (mostRecentPrice / oldestPrice) * 100 - 100;
          priceEl.innerHTML = mostRecentPrice.toFixed(2);
          percentageEl.innerHTML = `${percentage.toFixed(2)}%`;
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [market, days]);

  useEffect(() => {
    if (chartData.length && chartRef.current) {
      if (seriesRef.current) {
        // Remove the old series from the chart
        chartRef.current.removeSeries(seriesRef.current);
      }

      // Add the new series to the chart
      seriesRef.current = chartRef.current.addLineSeries({
        color: "#0F2DF5",
        lineType: 2,
        priceLineVisible: false,
      });

      seriesRef.current.setData(chartData);
      chartRef.current.timeScale().fitContent();
    }
  }, [chartData]);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="w-full pt-4 pl-5 h-14">
        {/* Price Tooltip */}
        <div
          id="tooltip"
          className="inline-block float-left text-xl antialiased font-bold"
        >
          $<span id="priceValue"></span>
          <div id="percentageValue" className="text-sm"></div>
        </div>

        {/* Date Tooltip */}

        <div
          id="dateTooltip"
          className="hidden absolute bg-transparent text-foreground p-1 rounded text-sm"
          style={{ pointerEvents: "none" }}
        >
          <span id="dateValue"></span>
        </div>
        {/* Buttons */}
        <div className="text-sm inline-block float-right pr-4">
          <Tabs
            key="timeframe"
            radius="sm"
            color="secondary"
            aria-label="timeframe"
            selectedKey={days}
            onSelectionChange={setDays}
          >
            <Tab key="1" title="1D"></Tab>
            <Tab key="7" title="1W"></Tab>
            <Tab key="30" title="1M"></Tab>
            <Tab key="90" title="3M"></Tab>
          </Tabs>
        </div>
      </div>
      <div
        ref={chartContainerRef}
        className="w-full relative left-0"
        //style={{ width: "100%", height: "200px", position: "relative" }}
      ></div>
    </div>
  );
}
