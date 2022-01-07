import React from "react";
import "./App.css";
export default function App() {
  return (
    <>
      <body id="body">
        <div class="container">
          <nav class="navbar">
            <div class="nav_icon">
              <i class="fa fa-bars" aria-hidden="true"></i>
            </div>
            <div class="navbar__left">
              <a href="#">Subscribers</a>
              <a href="#">Video Management</a>
              <a class="active_link" href="#">
                Admin
              </a>
            </div>
            <div class="navbar__right">
              <a href="#">
                <i class="fa fa-search" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i class="fa fa-clock-o" aria-hidden="true"></i>
              </a>
              <a href="#">
                <img width="30" src="assets/avatar.svg" alt="" />
                <i class="fa fa-user-circle-o" aria-hidden="true"></i>
              </a>
            </div>
          </nav>

          <main>
            <div class="main__container">
              <div class="main__title">
                <img src="assets/hello.svg" alt="" />
                <div class="main__greeting">
                  <h1>BLOG OVERVIEW</h1>
                  <p>Welcome to your admin dashboard</p>
                </div>
              </div>

              <div class="main__cards">
                <div class="card">
                  <i
                    class="fa fa-user-o fa-2x text-lightblue"
                    aria-hidden="true"
                  ></i>
                  <div class="card_inner">
                    <p class="text-primary-p">Posts</p>
                    <span class="font-bold text-title">2390</span>
                  </div>
                </div>

                <div class="card">
                  <i
                    class="fa fa-calendar fa-2x text-red"
                    aria-hidden="true"
                  ></i>
                  <div class="card_inner">
                    <p class="text-primary-p">Pages</p>
                    <span class="font-bold text-title">182</span>
                  </div>
                </div>

                <div class="card">
                  <i
                    class="fa fa-video-camera fa-2x text-yellow"
                    aria-hidden="true"
                  ></i>
                  <div class="card_inner">
                    <p class="text-primary-p">Comments</p>
                    <span class="font-bold text-title">8147</span>
                  </div>
                </div>

                <div class="card">
                  <i
                    class="fa fa-thumbs-up fa-2x text-green"
                    aria-hidden="true"
                  ></i>
                  <div class="card_inner">
                    <p class="text-primary-p">New Subscribers</p>
                    <span class="font-bold text-title">29</span>
                  </div>
                </div>
              </div>

              <div class="charts">
                <div class="charts__left">
                  <div class="charts__left__title">
                    <div>
                      <h1>Users Overview</h1>
                    </div>
                    <i class="fa fa-usd" aria-hidden="true"></i>
                  </div>
                  <div id="apex1"></div>
                </div>

                <div class="charts__right">
                  <div class="charts__right__title">
                    <div>
                      <h1>Users by device</h1>
                      <p>India</p>
                    </div>
                    <i class="fa fa-usd" aria-hidden="true"></i>
                  </div>

                  <div class="charts__right__cards">
                    <div class="card1">
                      <h1>Desktop</h1>
                      <p>70%</p>
                    </div>

                    <div class="card2">
                      <h1>Tablet</h1>
                      <p>20%</p>
                    </div>

                    <div class="card3">
                      <h1>Mobile</h1>
                      <p>5%</p>
                    </div>

                    <div class="card4">
                      <h1>other</h1>
                      <p>5%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <div id="sidebar">
            <div class="sidebar__title">
              <div class="sidebar__img">
                <img src="assets/logo.png" alt="logo" />
                <h1>Shard's Dashboard</h1>
              </div>
              <i class="fa fa-times" id="sidebarIcon" aria-hidden="true"></i>
            </div>

            <div class="sidebar__menu">
              <div class="sidebar__link active_menu_link">
                <i class="fa fa-home"></i>
                <a href="#">Dashboard</a>
              </div>
              <h2>Blog Dashboard</h2>
              <div class="sidebar__link">
                <i class="fa fa-user-secret" aria-hidden="true"></i>
                <a href="#">Blog Posts</a>
              </div>
              <div class="sidebar__link">
                <i class="fa fa-building-o"></i>
                <a href="#">Add New Post</a>
              </div>
              <div class="sidebar__link">
                <i class="fa fa-wrench"></i>
                <a href="#">Forms and Components</a>
              </div>
              <div class="sidebar__link">
                <i class="fa fa-archive"></i>
                <a href="#">Tables</a>
              </div>
              <div class="sidebar__link">
                <i class="fa fa-handshake-o"></i>
                <a href="#">User Profile</a>
              </div>
              <div class="sidebar__link">
                <i class="fa fa-handshake-o"></i>
                <a href="#">Errors</a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
