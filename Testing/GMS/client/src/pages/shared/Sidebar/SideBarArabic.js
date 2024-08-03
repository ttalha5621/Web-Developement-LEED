import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PerfectScrollbar from "perfect-scrollbar";
import Images from '../../../assets/index';


const SideBarArabic = (props) => {
  var ps;
  const sidebar = useRef(null);

  const [checked, setChecked] = useState(false);
  useEffect(() => {
    if (checked) {
      props.handelSidebar("sidebar-mini")
    } else {
      props.handelSidebar("")
    }
  }, [checked])

  useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return () => {
      ps.destroy();
    }
  }, [sidebar]);

  return (
    <div className="sidebar" data-color="orange">
      {/* <!--
        Tip 1: You can change the color of the sidebar using: data-color="blue | green | orange | red | yellow"--> */}
      <div className="logo">
        <a href="#" className="simple-text logo-mini">
          ط م
        </a>
        <a href="#" className="simple-text logo-normal">
          توقيت الإبداعية
        </a>

        <div className="navbar-minimize">
          <button id="minimizeSidebar" className="btn btn-outline-white btn-icon btn-round" onClick={() => {
            setChecked((prevState) => {
              return !prevState
            })
          }}>
            <i className="now-ui-icons text_align-center visible-on-sidebar-regular"></i>
            <i className="now-ui-icons design_bullet-list-67 visible-on-sidebar-mini"></i>
          </button>
        </div>

      </div>

      <div className="sidebar-wrapper" id="sidebar-wrapper" ref={sidebar}>

        <div className="user">
          <div className="photo">
            <img src={Images.James} alt="..." />
          </div>
          <div className="info">
            <a data-toggle="collapse" href="#collapseExample" className="collapsed">
              <span>
                جيمس اموس
                <b className="caret"></b>
              </span>
            </a>
            <div className="clearfix"></div>
            <div className="collapse" id="collapseExample">
              <ul className="nav">
                <li>
                  <a href="#">
                    <span className="sidebar-mini-icon">مع</span>
                    <span className="sidebar-normal">ملفي</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="sidebar-mini-icon">هوع</span>
                    <span className="sidebar-normal">تعديل الملف الشخصي</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="sidebar-mini-icon">و</span>
                    <span className="sidebar-normal">إعدادات</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ul className="nav">
          <li>
            < Link to="/">
              <i className="now-ui-icons design_app"></i>
              <p>لوحة القيادةة</p>
            </Link>
          </li>
          <li className="active">
            <a data-toggle="collapse" href="#pagesExamples">
              <i className="now-ui-icons design_image"></i>
              <p>
                صفحات <b className="caret"></b>
              </p>
            </a>

            <div className="collapse  show " id="pagesExamples">
              <ul className="nav">
                <li>
                  <Link to="/pricing">
                    <span className="sidebar-mini-icon">ع</span>
                    <span className="sidebar-normal"> التسعير </span>
                  </Link>
                </li>

                <li className="active">
                  <Link to="/arabic">
                    <span className="sidebar-mini-icon">صو</span>
                    <span className="sidebar-normal"> دعم رتل </span>
                  </Link>
                </li>

                <li>
                  <Link to="/timeline">
                    <span className="sidebar-mini-icon">ر</span>
                    <span className="sidebar-normal"> الجدول الزمني </span>
                  </Link>
                </li>

                <li>
                  <Link to="/login">
                    <span className="sidebar-mini-icon">هعذا</span>
                    <span className="sidebar-normal"> صفحة تسجيل الدخول </span>
                  </Link>
                </li>

                <li>
                  <Link to="/registration">
                    <span className="sidebar-mini-icon">صع</span>
                    <span className="sidebar-normal"> سجل الصفحة </span>
                  </Link>
                </li>

                <li>
                  <Link to="/lock">
                    <span className="sidebar-mini-icon">هذاع</span>
                    <span className="sidebar-normal"> قفل صفحة الشاشة </span>
                  </Link>
                </li>

                <li>
                  <Link to="/profile">
                    <span className="sidebar-mini-icon">شع</span>
                    <span className="sidebar-normal"> ملف تعريفي للمستخدم </span>
                  </Link>
                </li>

              </ul>
            </div>
          </li>

          <li>
            <a data-toggle="collapse" href="#componentsExamples">
              <i className="now-ui-icons education_atom"></i>
              <p>
                المكونات <b className="caret"></b>
              </p>
            </a>

            <div className="collapse " id="componentsExamples">
              <ul className="nav">

                <li>
                  <Link to="/buttons">
                    <span className="sidebar-mini-icon">بت</span>
                    <span className="sidebar-normal"> وصفتت </span>
                  </Link>
                </li>

                <li>
                  <Link to="/grids">
                    <span className="sidebar-mini-icon">زو</span>
                    <span className="sidebar-normal"> نظام الشبكةو </span>
                  </Link>
                </li>

                <li>
                  <Link to="/panels">
                    <span className="sidebar-mini-icon">ع</span>
                    <span className="sidebar-normal"> لوحات </span>
                  </Link>
                </li>

                <li>
                  <Link to="/alerts">
                    <span className="sidebar-mini-icon">ومن</span>
                    <span className="sidebar-normal"> التنبيه الحلو </span>
                  </Link>
                </li>

                <li>
                  <Link to="/notification">
                    <span className="sidebar-mini-icon">ن</span>
                    <span className="sidebar-normal"> إخطارات </span>
                  </Link>
                </li>

                <li>
                  <Link to="/icons">
                    <span className="sidebar-mini-icon">و</span>
                    <span className="sidebar-normal"> الرموز </span>
                  </Link>
                </li>

                <li>
                  <Link to="/typography">
                    <span className="sidebar-mini-icon">ر</span>
                    <span className="sidebar-normal"> طباعة </span>
                  </Link>
                </li>

              </ul>
            </div>
          </li>

          <li>
            <a data-toggle="collapse" href="#formsExamples">
              <i className="now-ui-icons files_single-copy-04"></i>
              <p>
                إستمارات <b className="caret"></b>
              </p>
            </a>
            <div className="collapse " id="formsExamples">
              <ul className="nav">

                <li>
                  <Link to="/regular-form">
                    <span className="sidebar-mini-icon">صو</span>
                    <span className="sidebar-normal"> أشكال منتظمة </span>
                  </Link>
                </li>

                <li>
                  <Link to="/extended-form">
                    <span className="sidebar-mini-icon">هوو</span>
                    <span className="sidebar-normal"> أشكال موسعة </span>
                  </Link>
                </li>

                <li>
                  <Link to="/validation-form">
                    <span className="sidebar-mini-icon">تو</span>
                    <span className="sidebar-normal"> نماذج التحقق </span>
                  </Link>
                </li>

                <li>
                  <Link to="/wizards">
                    <span className="sidebar-mini-icon">ث</span>
                    <span className="sidebar-normal"> ساحر </span>
                  </Link>
                </li>

              </ul>
            </div>
          </li>

          <li>
            <a data-toggle="collapse" href="#tablesExamples">
              <i className="now-ui-icons design_bullet-list-67"></i>
              <p>
                الجداول <b className="caret"></b>
              </p>
            </a>

            <div className="collapse " id="tablesExamples">
              <ul className="nav">

                <li>
                  <Link to="/regular-table">
                    <span className="sidebar-mini-icon">صر</span>
                    <span className="sidebar-normal"> الجداول العادية </span>
                  </Link>
                </li>

                <li>
                  <Link to="/extended-table">
                    <span className="sidebar-mini-icon">هور</span>
                    <span className="sidebar-normal"> الجداول الموسعة </span>
                  </Link>
                </li>

                <li>
                  <Link to="/data-table">
                    <span className="sidebar-mini-icon">در</span>
                    <span className="sidebar-normal"> جداول البيانات صافي </span>
                  </Link>
                </li>
              </ul>
            </div>


          </li>
          <li>
            <a data-toggle="collapse" href="#mapsExamples">
              <i className="now-ui-icons location_pin"></i>
              <p>
                خرائط <b className="caret"></b>
              </p>
            </a>

            <div className="collapse " id="mapsExamples">
              <ul className="nav">

                <li>
                  <Link to="/google-map">
                    <span className="sidebar-mini-icon">زم</span>
                    <span className="sidebar-normal"> خرائط جوجل </span>
                  </Link>
                </li>

                <li>
                  <Link to="/full-screen-map">
                    <span className="sidebar-mini-icon">ووم</span>
                    <span className="sidebar-normal"> خريطة كاملة الشاشة </span>
                  </Link>
                </li>
                <li>
                  <Link to="/vector-map">
                    <span className="sidebar-mini-icon">تم</span>
                    <span className="sidebar-normal"> سهم التوجيه، الخريطة </span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/widgets">
              <i className="now-ui-icons objects_diamond"></i>
              <p>الحاجيات</p>
            </Link>
          </li>
          <li>
            <Link to="/charts">
              <i className="now-ui-icons business_chart-pie-36"></i>
              <p>الرسوم البيانية</p>
            </Link>
          </li>
          <li>
            <Link to="/calendar">
              <i className="now-ui-icons media-1_album"></i>
              <p>التقويم</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>

  );
}

export default SideBarArabic; 
