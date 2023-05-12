import React, { useEffect, useState } from "react";
import "./featuredInfo.css";
import {
  ArrowDownward,
  ArrowDownwardOutlined,
  ArrowUpward,
  ArrowUpwardOutlined,
} from "@mui/icons-material";
import { userRequest } from "../../requestMethods";

function FeaturedInfo() {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);
  const getIncome = async () => {
    try {
      const res = await userRequest.get("orders/income");
      console.log(res.data);
      const data = res.data.sort((a, b) => b._id - a._id);
      setIncome(data);
      setPerc((data[1].total * 100) / data[0].total - 100);
    } catch {}
  };
  useEffect(() => {
    getIncome();
  }, []);
  return (
    <div className="featrued">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney"> ${income[0]?.total}</span>
          <span className="featuredMoneyRate">
            {Math.floor(perc)} %
            {perc < 0 ? (
              <ArrowDownward className="featuredIcon negative" />
            ) : (
              <ArrowUpward className="featuredIcon" />
            )}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,415</span>
          <span className="featuredMoneyRate">
            -1.4
            <ArrowDownwardOutlined className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$1,415</span>
          <span className="featuredMoneyRate">
            +12.4
            <ArrowUpwardOutlined className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}

export default FeaturedInfo;
