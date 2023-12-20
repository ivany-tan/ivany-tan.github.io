import React from "react";
import "./Feature.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faUser, faComment, faFile } from "@fortawesome/free-solid-svg-icons";
import {
  faCompass,
  faMoneyBillWave,
  faBrain,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";

const Feature = ({ icon, title, description }) => {
  return (
    <div className="feature">
      <FontAwesomeIcon icon={icon} size="3x" style={{ color: "A2C579" }} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const features = [
  {
    icon: faCompass,
    title: "专业的教师团队",
    desc: "我们有多年行业经验以及一等荣誉成绩毕业的教师团队。为教学质量提供夯实的保障。",
  },
  {
    icon: faMoneyBillWave,
    title: "聆听意见完善服务",
    desc: "我们尊重每位学生的评价。积极聆听意见，为您提供最适合您的服务并取得佳绩。",
  },
  {
    icon: faBrain,
    title: "实时同步的课程内容",
    desc: "我们的老师会实时同步您所在学校的课程内容，并给予相应的支持，帮助您消除疑惑。",
  },
  {
    icon: faCertificate,
    title: "就业导向的教学理念",
    desc: "我们的教师团队均有在澳洲当地的工作经验，并提供以在当地就业为导向的教学活动。",
  },
];

const headerText = {
  title: "锁定高分为您的未来创造更多机会。",
  desc: "维克多教育专有有限公司是一家致力于提供优质教育服务的辅导机构。 我们的使命是协助学生实现学习目标，提高学习效率，激发学生潜能，使学生更全面、更扎实地学习特定科目，取得更高的成绩。",
};

const FeaturesSection = () => {
  return (
    <div className="features-wrapper">
      <div className="features-header">
        <h2>{headerText.title}</h2>
        <p>{headerText.desc}</p>
      </div>
      <div className="features-section">
        {features.map((feature, index) => (
          <Feature
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
