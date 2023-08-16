import { useEffect, useState, useRef } from "react";
import { ColorType, createChart } from "lightweight-charts";
import { Button, ButtonGroup } from "@nextui-org/react";

export default function Chart({ market }) {
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState([]);
  const [error, setError] = useState(null);

  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);
  const seriesRef = useRef(null);

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
        console.log("Resizing chart")
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

    if (tooltipEl && priceEl) {
      chartRef.current.subscribeCrosshairMove((param) => {
        if (!param.time || !param.seriesData || param.seriesData.size === 0) {
          //tooltipEl.style.display = "none";
          return;
        }

        const data = param.seriesData.get(seriesRef.current);
        if (data) {
          const price = data.value !== undefined ? data.value : data.close;
          priceEl.innerHTML = price.toFixed(2);
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
        if (formattedData.length > 0) {
          const mostRecentPrice = formattedData[formattedData.length - 1].value;
          priceEl.innerHTML = mostRecentPrice.toFixed(2);
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
        {/* Tooltip */}
        <div
          id="tooltip"
          className="inline-block float-left text-xl antialiased font-bold"
        >
          $<span id="priceValue"></span>
        </div>
        {/* Buttons */}
        <div className="text-sm inline-block float-right">
          <ButtonGroup radius="full" variant="flat" size="sm" className="">
            <Button
              onClick={() => {
                setDays(1);
              }}
            >
              1D
            </Button>
            <Button
              onClick={() => {
                setDays(7);
              }}
            >
              1W
            </Button>
            <Button
              onClick={() => {
                setDays(30);
              }}
            >
              1M
            </Button>
            <Button
              onClick={() => {
                setDays(90);
              }}
            >
              3M
            </Button>
          </ButtonGroup>
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
