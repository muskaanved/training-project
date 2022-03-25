"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(1288);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: ./component/header.js
var header = __webpack_require__(8800);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(8167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
;// CONCATENATED MODULE: external "@mui/material/CardActions"
const CardActions_namespaceObject = require("@mui/material/CardActions");
var CardActions_default = /*#__PURE__*/__webpack_require__.n(CardActions_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/CardContent"
var CardContent_ = __webpack_require__(8455);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);
// EXTERNAL MODULE: external "@mui/material/CardMedia"
var CardMedia_ = __webpack_require__(6731);
var CardMedia_default = /*#__PURE__*/__webpack_require__.n(CardMedia_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/AppBar"
var AppBar_ = __webpack_require__(3882);
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);
;// CONCATENATED MODULE: ./component/courses.js










const Courses = ()=>{
    const { 0: course , 1: setCourse  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        fetch('http://94.237.3.78:4000/api/get_course').then((a)=>{
            return a.json();
        }).then((data)=>{
            setCourse(data);
        });
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
                position: "static",
                margin: "1rem",
                sx: {
                    bgcolor: "#0a203f",
                    alignItems: "center",
                    margin: "28px 0px"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    variant: "h6",
                    noWrap: true,
                    component: "div",
                    sx: {
                        m: 2,
                        display: {
                            xs: 'none',
                            md: 'flex'
                        }
                    },
                    children: "Latest 3 Courses"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                container: true,
                spacing: 2,
                children: course.slice(0, 3).map((item, i)=>{
                    return(/*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 4,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                            sx: {
                                maxWidth: 400
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((CardMedia_default()), {
                                    component: "img",
                                    height: "300",
                                    image: "http://94.237.3.78/demo_beta/" + item.Image,
                                    alt: "green iguana"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((CardContent_default()), {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            gutterBottom: true,
                                            variant: "h5",
                                            component: "div",
                                            children: item.Title
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                            variant: "body2",
                                            color: "text.secondary",
                                            children: [
                                                "By ",
                                                item.author
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                            variant: "body1",
                                            color: "text.secondary",
                                            children: [
                                                "Price - ",
                                                item.cost
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((CardActions_default()), {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                        size: "large",
                                        variant: "contained",
                                        href: localStorage.getItem("token") ? "" : "../login",
                                        sx: {
                                            width: "100%",
                                            bgcolor: "#e42a00"
                                        },
                                        children: "ENROLL"
                                    })
                                })
                            ]
                        })
                    }, i));
                })
            })
        ]
    }));
};
/* harmony default export */ const courses = (Courses);

;// CONCATENATED MODULE: ./component/news.js










function News() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
                position: "static",
                margin: "1rem",
                sx: {
                    bgcolor: "#0a203f",
                    alignItems: "center",
                    margin: "28px 0px"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    variant: "h6",
                    noWrap: true,
                    component: "div",
                    sx: {
                        m: 2,
                        display: {
                            xs: 'none',
                            md: 'flex'
                        }
                    },
                    children: "Latest News"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                container: true,
                spacing: 2,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 4,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                            sx: {
                                maxWidth: 400
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((CardMedia_default()), {
                                    component: "img",
                                    height: "300",
                                    image: "images/news1.jpg",
                                    alt: "green iguana"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        gutterBottom: true,
                                        variant: "h6",
                                        component: "div",
                                        children: "Free Ebooks for all classes"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((CardActions_default()), {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                        size: "small",
                                        children: "Learn More"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 4,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                            sx: {
                                maxWidth: 400
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((CardMedia_default()), {
                                    component: "img",
                                    height: "300",
                                    image: "images/news3.jpg",
                                    alt: "green iguana"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        gutterBottom: true,
                                        variant: "h6",
                                        component: "div",
                                        children: "Escrow Service Secure your Payment"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((CardActions_default()), {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                        size: "small",
                                        children: "Learn More"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 4,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Card_default()), {
                            sx: {
                                maxWidth: 400
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((CardMedia_default()), {
                                    component: "img",
                                    height: "300",
                                    image: "images/news2.jpg",
                                    alt: "green iguana"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        gutterBottom: true,
                                        variant: "h6",
                                        component: "div",
                                        children: "24/7 Counceling Service"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((CardActions_default()), {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                        size: "small",
                                        children: "Learn More"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    }));
};

// EXTERNAL MODULE: ./component/footer.js
var footer = __webpack_require__(2642);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
;// CONCATENATED MODULE: ./component/banner.js



const Banner = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
            sx: {
                flexGrow: 0.1,
                display: {
                    xs: 'none',
                    md: 'flex'
                }
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "images/3684.jpg",
                height: '600px',
                width: '100%'
            })
        })
    }));
};
/* harmony default export */ const banner = (Banner);

;// CONCATENATED MODULE: ./pages/index.js









function Home() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Home_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "muskan"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(banner, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(courses, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(News, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(footer/* default */.Z, {})
        ]
    }));
};


/***/ }),

/***/ 3365:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ 8017:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Search");

/***/ }),

/***/ 3882:
/***/ ((module) => {

module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ 2120:
/***/ ((module) => {

module.exports = require("@mui/material/Avatar");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 8167:
/***/ ((module) => {

module.exports = require("@mui/material/Card");

/***/ }),

/***/ 8455:
/***/ ((module) => {

module.exports = require("@mui/material/CardContent");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("@mui/material/CardMedia");

/***/ }),

/***/ 4475:
/***/ ((module) => {

module.exports = require("@mui/material/Container");

/***/ }),

/***/ 5612:
/***/ ((module) => {

module.exports = require("@mui/material/Grid");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 8855:
/***/ ((module) => {

module.exports = require("@mui/material/InputBase");

/***/ }),

/***/ 8125:
/***/ ((module) => {

module.exports = require("@mui/material/Menu");

/***/ }),

/***/ 9271:
/***/ ((module) => {

module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ 1431:
/***/ ((module) => {

module.exports = require("@mui/material/Toolbar");

/***/ }),

/***/ 7229:
/***/ ((module) => {

module.exports = require("@mui/material/Tooltip");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5927:
/***/ ((module) => {

module.exports = require("react-toast-notifications");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675,308], () => (__webpack_exec__(3936)));
module.exports = __webpack_exports__;

})();