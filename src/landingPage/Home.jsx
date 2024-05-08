import { Link, NavLink } from "react-router-dom";
import { useState ,useEffect } from "react";
import { route } from "../App";
import '../components/sass-folder/home.css'
import logo from "../assets/logo.png";
import landingPage from "../assets/tnnbg.jpg";
// import landingPage from "../assets/landing.jpg";
import one from "../assets/WhatsApp Image 2023-12-23 at 00.32.03_f76b8344.jpg";
import two from "../assets/WhatsApp Image 2023-12-23 at 00.32.04_371a13b7.jpg";
import three from "../assets/WhatsApp Image 2023-12-23 at 00.32.04_ea8e6ac6.jpg";
import four from "../assets/WhatsApp Image 2023-12-23 at 00.32.04_ea8e6ac6.jpg";
import five from "../assets/WhatsApp Image 2023-12-23 at 00.32.04_ea8e6ac6.jpg";
import fives from "../assets/OCf9aqYsunt0ikTbmPEXtFRHc8.webp";
import triangle from "../assets/rmUdoCKrFcyVAEVCTrisCUuXci0.webp";
import imgBack from "../assets/ggrgr.png";
import Success from "./components/Success";
import banner from "../assets/fe1.png";
import axios from "axios";
import LoadingSpinner from "./components/LoadingSpinner";
import {motion} from "framer-motion"
import MemberShip from "./MemberShip";
import circle from "../assets/7Xvt3cwXgJTnJCJ8yoisW2XCmy8.webp";
import shape from "../assets/t9Bh6M6UAubysuqEg3VRFnNJEw.webp";

const Home = () => {
  const [leaders, setLeaders] = useState([]);
  const [packages, setPackages] = useState([]);
  const [categories, setCategories] = useState([]);
  const products = [
    {
      main: one,
     
    },
    {
      main: two,
    
    },
    {
      main: three,
     
    },
    {
      main: four,
  
    },
    {
      main: five,
    
    },
  
  ];

  const getCourses = (e,id) => {
    e.preventDefault();
    fetch(`${route}/categories/${id}/courses`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
     
 
    });
  }
  
  useEffect(() => {
    axios
      .get(`${route}users/instractors`)
      .then((res) => {
        console.log(res.data)
        setLeaders(res.data.data)});
  }, []);
  
  useEffect(() => {
    axios
      .get(`${route}education/packages`)
      .then((res) => setPackages(res.data.data));
  }, []);

  useEffect(() => {
    fetch(`${route}/categories`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.data){
          setCategories(data.data);
        }
   
      });
  }, []);
  return (
    <>
      <div className="main">
        <img src={landingPage} alt="" className="background" />
 <img src={banner} className="banner" alt="" data-aos="fade-up"  data-aos-duration="3000" />
 <NavLink to="/login"
 >هيا نبدأ</NavLink>
      </div>
      {/* productss ************************************************ */}

      
        <div className="product" id="prod">
          <motion.div 
          initial={{x : -200}}
          animate={{x : 0}}
          transition={{duration : 1}}
          >
            <h1>أقسام الكورسات</h1>
          </motion.div>
          <div className="container">
            <p className=" text-xl text-lightGray text-center px-12">
اطلع علي كورساتنا في احدث المجالات             </p>
            <div className="prod-cont">
              <img src={fives} alt="" data-aos-duration={`2000`} data-aos="fade-left" className="shape-one" />
              <img src={triangle} alt="" data-aos-duration={`2000`} data-aos="fade-right" className="shape-two" />
              {categories.map((product, index) => (
                <div
                  key={index}
                  className="prod-card"
                  data-aos="fade-up"
                  data-aos-duration={`2000`}
                >
                  <img
                    src={product.image}
                    alt=""
                  />
                  <div className="num">{product.title}</div>
                  <Link to={"/login"}>Enroll</Link>
             
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="leaders" id="leads">
          <img src={circle} data-aos-duration={`2000`} data-aos="fade-right"  className="circle" alt="" />
          <img src={shape} data-aos-duration={`2000`} data-aos="fade-left"   className="shape" alt="" />
<h1>القادة</h1>
        <div className="leads">
        {leaders?.length ? (
          leaders.map((leader, index) => (
          <div className="leader" data-aos="fade-up"  data-aos-duration="2000" key={index}>
            <div className="imgs">

            <img src={imgBack} alt="" className="back" />
            <img src={leader.profileImg} alt="" className="profile" />
            </div>
<div className="about">{leader.about}</div>
<div className="name">{leader.name}</div>
          </div>
          ))
        ) : (
          <LoadingSpinner />
        )}
        </div>
        </div>
        {/* <MemberShip /> */}
        <div id="who" className="who">
        <i data-aos-duration="1000" data-aos="fade-up" class="fa-brands fa-galactic-republic"></i>
          <h1 data-aos-duration="1000" data-aos="fade-up">تعرف علينا</h1>
          <img data-aos-duration="1000" data-aos="fade-up" src={logo} alt="" />
          <h1 data-aos-duration="1000" data-aos="fade-up">علمني</h1>
          <h1 data-aos-duration="1000" data-aos="fade-up">الإعتياد الجديد</h1>
          <p data-aos-duration="1000" data-aos="fade-up">نهتم بنشر الوعي المالي و تصحيح فكرة الإستثمار بتوجيه عدد من ذوي الخبرة كما تهدف إلى تمكين اكبر عدد من الأفراد في الأسواق المالية ليصبح كل فرد مستثمر بذاته

و نساعدك لفهم العالم المالي الحديث و تطور مصادر الدخل المتعددة</p>
<h1 data-aos-duration="1000" data-aos="fade-up">هدفنا هو</h1>
<ul>
  <li data-aos-duration="1000" data-aos="fade-up">تطوير الأفراد في التعليم </li>
  <li data-aos-duration="1000" data-aos="fade-up">توفير أدوات استثمارية والمساعدة في التدريب عليها</li>
  <li data-aos-duration="1000" data-aos="fade-up">أن نصبح واجهة العالم الحديث في التعلم
</li>
</ul>
        </div>
      
      {/* <Success /> */}
    </>
  );
};

export default Home;
