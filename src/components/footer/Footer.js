import React from "react";
import "./Footer.css";

const qr = [
  { src: "/images/wechat.jpg", alt: "wechat" },
  { src: "/images/xiaohongshu.jpg", alt: "xiaohongshu" },
  { src: "/images/insta.jpg", alt: "insta" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-column">
        <h4>公司</h4>
        <ul>
          <li>关于我们</li>
          <li>我们的服务</li>
          <li>隐私政策</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>帮助</h4>
        <ul>
          <li>常见问题</li>
          <li>订单查询</li>
          <li>支付方式</li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>关注我们</h4>
        <div className="social-icons">
          {qr.map((item, index) => (
            <img
              key={index}
              src={item.src}
              alt={item.alt}
              className="social-icon"
            />
          ))}
        </div>
        <div className="footer-bottom">
          <p>
            © {currentYear} VICTOR EDUCATION PROPRIETARY LTD. 保留所有权利。
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
