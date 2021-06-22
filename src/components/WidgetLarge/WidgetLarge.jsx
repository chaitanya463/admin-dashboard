import React from "react";
import "./widgetlarge.css";

const WidgetLarge = () => {

    const Button = ({type}) => {
        return <button className={'widgetLargeButton ' + type}>{type}</button>
    }
  return (
    <div className="widgetLarge">
      <h3 className="widgetLargeTitle">Latest Transcations</h3>
      <table className="widgetLargeTable">
        <tr className="widgetLargeTr">
          <th className="widgetLargeTh">Customer</th>
          <th className="widgetLargeTh">Date</th>
          <th className="widgetLargeTh">Amount</th>
          <th className="widgetLargeTh">Status</th>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
              className="widgetLargeImage"
            />
            <span className='widgetLargeName'>James Gosling</span>
          </td>
          <td className='widgetLargeDate'> 22 Jun 2021</td>
          <td className='widgetLargeAmount'>$122.00</td>
          <td className='widgetLargeStatus'><Button type='Approved'/></td>
        </tr>

        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
              className="widgetLargeImage"
            />
            <span className='widgetLargeName'>Brad Pit</span>
          </td>
          <td className='widgetLargeDate'> 2 Jul 2021</td>
          <td className='widgetLargeAmount'>$1022.00</td>
          <td className='widgetLargeStatus'><Button type='Approved'/></td>
        </tr>

        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
              className="widgetLargeImage"
            />
            <span className='widgetLargeName'>Keanu Reeves</span>
          </td>
          <td className='widgetLargeDate'> 22 Jun 2021</td>
          <td className='widgetLargeAmount'>$2122.00</td>
          <td className='widgetLargeStatus'><Button type='Pending'/></td>
        </tr>

        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
              className="widgetLargeImage"
            />
            <span className='widgetLargeName'>Rober Jr.</span>
          </td>
          <td className='widgetLargeDate'> 22 Jun 2021</td>
          <td className='widgetLargeAmount'>$122.00</td>
          <td className='widgetLargeStatus'><Button type='Declined'/></td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLarge;
