import { Link } from "react-router-dom";
import React from "react";
import "./product.css";
import Chart from "../../components/charts/Chart";
import { ProductData } from "../../dummyData";
import { Publish } from "@material-ui/icons";

const Product = () => {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddButton button">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productChart">
          <Chart data={ProductData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productInfo">
          <span className="productName">Apple Airpods</span>
          <div className="productFlexViews">
            <div className="productInfoLeft">
              <img
                src="https://cdn.shopify.com/s/files/1/1684/4603/products/AppleAirpodsGen1.png?v=1621589399"
                alt=""
                className="productInfoImage"
              />
            </div>
            <div className="productInfoRight">
              <div className="productInfoItem">
                <span className="productInfoKey">id:</span>
                <span className="productInfoValue">123</span>
              </div>

              <div className="productInfoItem">
                <span className="productInfoKey">sales:</span>
                <span className="productInfoValue">4000</span>
              </div>

              <div className="productInfoItem">
                <span className="productInfoKey">active:</span>
                <span className="productInfoValue">yes</span>
              </div>

              <div className="productInfoItem">
                <span className="productInfoKey">in stock:</span>
                <span className="productInfoValue">no</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
          <span className='productBottomTitle'>Update Product Details</span>
        <form className="ProductForm">
          <div className="productFormLeft">
            <label>ProductName</label>
            <input type="text" placeholder="Apple Airpods"></input>
            <label>In Stock</label>
            <select name="stock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Stock</label>
            <input type="number" placeholder="1000" min='0'></input>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
              <div className='productUplaod'>
                <img src='https://cdn.shopify.com/s/files/1/1684/4603/products/AppleAirpodsGen1.png?v=1621589399' alt='' className='productUploadImage'/>
                <label htmlFor='file'>
                    <Publish />
                </label>
                <input type='file' id='file' style={{display:'none'}}/>
              </div>
              <button className='productButton button'>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
