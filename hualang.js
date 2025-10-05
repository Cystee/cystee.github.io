const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const btn1 = document.getElementById("the-about");
const btn2 = document.getElementById("the-lisence");
const btn3 = document.getElementById("the-backtop");
let opsty = 0;
let top2 = 0;
let theBox = document.getElementById('box');
let theImg = theBox.getElementsByClassName('showing')[0];
let a1 = window.innerWidth > 800;//布尔，初始值
let qryLoading = document.getElementById("qry-loading");
let loadingInterval;
let text = "Loading visited picture";
let tt=0;
let showingImgEle;
let showingInfoImg;
var style = document.createElement('style')
var head = document.getElementsByTagName('head')[0]
style.rel = 'stylesheet'
a1 ? setImg33Percent() : setImg50Percent();
btn1.addEventListener("click", function () {
    div1.classList.remove('div2');
    dontClick();
});
btn2.addEventListener("click", function () {
    div2.classList.remove('div2');
    dontClick();
});
document.body.style = 'transition: .5s';
document.querySelector('.按钮3').addEventListener('click', () => { //关闭灯箱
    // const btn1 = document.getElementById(decodeURI(window.location.hash.replace("#", "").replace("-anchor", "") + "-info"));
    // const btn2 = document.getElementById(decodeURI(window.location.hash.replace("#", "").replace("-anchor", "") + "-xz"));
    const btn1 = document.getElementById("the-info");
    const btn2 = document.getElementById("the-xz");
    document.querySelector('.按钮').classList.add('div2');
    setTimeout(() => {
        if (!btn1.classList.contains('div2') || !btn2.classList.contains('div2')) {
            theBox.classList.add('div2');
            theBox.classList.add('notransition');
            btn1.classList.add('div2');
            btn2.classList.add('div2');
            setTimeout(() => {
                theBox.classList.remove('notransition');
            }, 100);
        } else {
            theBox.classList.add('div2');
            btn1.classList.add('div2');
            btn2.classList.add('div2');
        }
    }, 125);
    const elele = document.getElementById(decodeURI(window.location.hash.replace("#", "")));
    //theBox.addEventListener("transitionend", () => {
    setTimeout(() => {
        elele.getElementsByTagName('img')[0].style.opacity = '1';
        setTimeout(() => {
            theImg.src = "";
            //setTimeout(() => {
                document.getElementById("the-place").innerHTML = "";
                cancelDontClick();
            //}, 150);
        }, 25);
    }, 350);
    //}, { once: true });
    // window.addEventListener("transitionend", () => {
    //     //waterFall();
    //     document.getElementById("the-place").innerHTML = "";
    //     cancelDontClick();
    // }, { once: true });
});
document.querySelector('.按钮1').addEventListener('click', () => { //分享与下载按钮
    // const btn1 = document.getElementById(decodeURI(window.location.hash.replace("#", "").replace("-anchor", "") + "-info"));
    // const btn2 = document.getElementById(decodeURI(window.location.hash.replace("#", "").replace("-anchor", "") + "-xz"));
    const btn1 = document.getElementById("the-info");
    const btn2 = document.getElementById("the-xz");
    btn2.classList.remove('div2');
    btn2.style.setProperty('z-index', '4500', 'important');
    btn2.addEventListener('transitionend', () => {
        btn1.classList.add('div2');
        btn2.style.zIndex = 'unset';
    }, { once: true });
});
document.querySelector('.按钮2').addEventListener('click', () => { //照片信息按钮
    // const btn1 = document.getElementById(decodeURI(window.location.hash.replace("#", "").replace("-anchor", "") + "-info"));
    // const btn2 = document.getElementById(decodeURI(window.location.hash.replace("#", "").replace("-anchor", "") + "-xz"));
    const btn1 = document.getElementById("the-info");
    const btn2 = document.getElementById("the-xz");
    btn1.classList.remove('div2');
    btn1.addEventListener('transitionend', () => {
        btn2.classList.add('div2');
    }, { once: true });
});
document.querySelectorAll('.confirming').forEach(btn => {
    if (!btn.classList.contains('dwn')) {
        btn.addEventListener('click', () => {
            btn.parentElement.parentElement.classList.add('div2');
        });
    }
});
document.querySelectorAll('.dwn').forEach(btn => {
    btn.addEventListener("click", function () {
        btn.innerText = "."
        setTimeout(() => { btn.innerText = ".." }, 500)
        setTimeout(() => { btn.innerText = "..." }, 1000)
        setTimeout(() => { btn.innerText = "下载" }, 1500)
    });
});
document.getElementById('on1').addEventListener('click', () => {
    cancelDontClick();
});
document.getElementById('on2').addEventListener('click', () => {
    cancelDontClick();
});
window.addEventListener('scroll', () => { //每当滚动时
    const theFoot = document.getElementById("the-foot");
    const galleryTop = document.getElementsByClassName("gallery")[0].getBoundingClientRect().top;
    // galleryTop >= 0 ? top2 = 0 : top2=80;
    // theFoot.style.marginTop = `${top2}px`;
    galleryTop >= 0 ? top2 = -theFoot.getBoundingClientRect().height : top2 = 0;
    theFoot.style.bottom = `${top2-1}px`;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    top1 = Math.max(0, first - scrollTop/2);
    top3 = Math.max(0, second - scrollTop/200);
    //top2 = Math.max(0,500 - scrollTop/3);
    function resizeHead() {
        title.style.background = `rgba(var(--orihead-rgb),${opsty})`;//背景透明度设置
        title.style.boxShadow = `0 -300px 0 300px rgba(var(--orihead-rgb),${opsty})`;
        inner.style.fontSize = `${1 - 0.2 * opsty}em`;
        //inner.style.borderLeft = `dashed 2px rgba(var(--cs-rgb), ${opsty/* 3*opsty - 2 */})`;
        innerSpan.style.paddingLeft = `${1 * (1 - (2*opsty>=1?1:2*opsty))}em`;
        inner.style.paddingLeft = `${1 * (1 - (2 * opsty - 1 <= 0 ? 0 : 2 * opsty - 1))}em`;
    }
    requestAnimationFrame(resizeHead);
    if (galleryTop <= title.getBoundingClientRect().height + top1) { //当瀑布流接近标题
        top1 -= title.getBoundingClientRect().height + top1 - galleryTop; //标题多移动高差
        top1 <= 0 ? top1 = 0 : null;
    }
    requestAnimationFrame(function () {
        title.style.top = `${top1}px`;
        content.style.marginTop = `${top3}px`;
    });
    //content.style.top = `${top2}px`;
    if (galleryTop <= 600) { //瀑布流距离顶部小于等于300时
        opsty = Math.min(1 - ((galleryTop-100) / 500), 1); //透明度变化
        requestAnimationFrame(resizeHead);
    } else {
        opsty = 0;
        window.addEventListener('scrollend', () => { requestAnimationFrame(resizeHead); }, { once: true });
    }
});
window.addEventListener('DOMContentLoaded', () => {
    resizeImg();
    setTimeout(灯箱哈希, 500);
});
// window.onload = function() {
//     window.addEventListener("transitionend", setTimeout(灯箱哈希, 500), { once: true });
// }
/*  window.onhashchange = function() {
    灯箱哈希();
}  */
window.onresize = function () {
    //setImgNoTransition();
    const b1 = window.innerWidth > 800;
    if (a1 === b1) {
        resizeImg();
    } else { //图片宽度发生变化了
        b1 ? setImg33Percent() : setImg50Percent();
        resizeImg();
        a1 = b1;
    }
    setSize();
};
function setImg50Percent() {
    document.querySelectorAll('.item').forEach((item) => {
        item.style.width = "50%";
    })
}
function setImg33Percent() {
    document.querySelectorAll('.item').forEach((item) => {
        item.style.width = "33.3333%";
    })
}
function resizeImg() {
    document.querySelectorAll('.item').forEach((item) => {
        const itemImg = item.getElementsByTagName('img')[0];
        const fullHeight = (item.getBoundingClientRect().width - 2 * Number(getComputedStyle(item).getPropertyValue("padding").replace("px", "")))
            /*  (
                window.innerWidth>800?
                    (window.innerWidth > 1200 ? 1130 / 3 : (window.innerWidth-50)/3)
                    :
                    (window.innerWidth-50)/2
            )  */
            * (Number(itemImg.getAttribute("height").replace("px", "")) / Number(itemImg.getAttribute("width").replace("px", ""))) + 2 * Number(getComputedStyle(item).getPropertyValue("padding").replace("px", ""));
        item.style.height = fullHeight + "px";
        itemImg.parentElement.style.height = fullHeight - 2 * Number(getComputedStyle(item).getPropertyValue("padding").replace("px", "")) + "px";
    })
    waterFall();
}
function setSize(ele) {
    theBox.classList.remove("transition");
    const theWindowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const theWindowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const theHeight = ele instanceof Element || ele instanceof HTMLElement ? Number(ele.getAttribute("height").replace("px", "")) : theImg.getBoundingClientRect().height;
    const theWidth = ele instanceof Element || ele instanceof HTMLElement ? Number(ele.getAttribute("width").replace("px", "")) : theImg.getBoundingClientRect().width;
    const ratioWidth = theWidth / theWindowWidth;
    const ratioHeight = theHeight / theWindowHeight;
    if (ratioWidth > ratioHeight) {
        theBox.style.width = '85vw';
        theImg.style.height = 'unset!important';
    } else {
        theImg.style.height = '85vh';
        theBox.style.width = "max-content";
    }
    theBox.classList.add("transition");
}
function loadingText() {
    if (text === "Loading visited picture") {
        text += ".";
    } else if (text === "Loading visited picture." || text === "Loading visited picture..") {
        text += ".";
    } else {
        text = "Loading visited picture";
    }
    return text;
}
function 灯箱(ele) {
    const eleImg = ele.getElementsByTagName('img')[0];
    const theSrc = eleImg.dataset.link;
    const thisName = eleImg.alt;
    const btn2 = document.getElementById("the-info");
    const btn1 = document.getElementById("the-xz");
    const thisWidth = Number(eleImg.getAttribute("width").replace("px", ""));
    const thisHeight = Number(eleImg.getAttribute("height").replace("px", ""));
    const theInfoImg = btn1.getElementsByTagName('img')[0];
    const thisPlace = document.getElementById("the-place");
    const thisPx = document.getElementById("this-px");
    const thisHrf = document.getElementById("this-hrf");
    const thisDwn = document.getElementById("this-dwn");
    const theExif = m[thisName]["Exif"];
    const thisExif = document.getElementById("Name-exif");
    const exifStr = ((theExif["Lat"] || theExif["Long"] || theExif["Date"]) ? `<p>${theExif["Date"] ? theExif["Date"].slice(0, 4) + "." + theExif["Date"].slice(5, 7) : ""}${theExif["Lat"] ? ("&emsp;&emsp;" + theExif["Lat"] + theExif["Long"] ? " / " : "") : ""}${theExif["Long"] ? theExif["Long"] : ""}</p>` : "") + ((theExif["Tags"]["ExposureTime|*imagemeta.rat[uint32]"] || theExif["Tags"]["FNumber|*imagemeta.rat[uint32]"] || theExif["Tags"]["ISO|uint16"] || theExif["Tags"]["FocalLength|*imagemeta.rat[uint32]"] || theExif["Tags"]["FocalLengthIn35mmFormat|uint16"]) ? `<p>${theExif["Tags"]["FocalLength|*imagemeta.rat[uint32]"] ? theExif["Tags"]["FocalLength|*imagemeta.rat[uint32]"] + "MM" : ""} ${theExif["Tags"]["FocalLengthIn35mmFormat|uint16"] ? "(" + theExif["Tags"]["FocalLengthIn35mmFormat|uint16"] + "MM)" : ""}&emsp;&emsp;${theExif["Tags"]["ExposureTime|*imagemeta.rat[uint32]"] ? theExif["Tags"]["ExposureTime|*imagemeta.rat[uint32]"] + "S&emsp;&emsp;" : ""}${theExif["Tags"]["FNumber|*imagemeta.rat[uint32]"] ? "F/" + ((theExif["Tags"]["FNumber|*imagemeta.rat[uint32]"]).includes("/") ? (Number(theExif["Tags"]["FNumber|*imagemeta.rat[uint32]"].split("/")[0]) / Number(theExif["Tags"]["FNumber|*imagemeta.rat[uint32]"].split("/")[1])).toFixed(1).toString() : Number(theExif["Tags"]["FNumber|*imagemeta.rat[uint32]"]).toFixed(1).toString()) + "&emsp;&emsp;" : ""}${theExif["Tags"]["ISO|uint16"] ? 'ISO' + theExif["Tags"]["ISO|uint16"] : ""}</p>` : "") + ((theExif["Tags"]["LensModel"] || theExif["Tags"]["Model"]) ? `<p>${theExif["Tags"]["LensModel"] ? theExif["Tags"]["LensModel"] : ""}${theExif["Tags"]["Model"] ? theExif["Tags"]["LensModel"] ? ", " + theExif["Tags"]["Model"] : theExif["Tags"]["Model"] : ""}</p>` : "");
    showingImgEle = eleImg;
    showingInfoImg = theInfoImg;
    if (theExif) {
        thisExif.innerHTML = exifStr;
        if (!(theExif["Lat"] || theExif["Long"] || theExif["Date"] || theExif["Tags"]["ExposureTime|*imagemeta.rat[uint32]"] || theExif["Tags"]["FNumber|*imagemeta.rat[uint32]"] || theExif["Tags"]["ISO|uint16"] || theExif["Tags"]["FocalLength|*imagemeta.rat[uint32]"] || theExif["Tags"]["FocalLengthIn35mmFormat|uint16"] || theExif["Tags"]["LensModel"] || theExif["Tags"]["Model"])) {
            thisExif.innerHTML = `<p>None.</p>`
        }
    } else {
        thisExif.innerHTML = `<p>None.</p>`
    }
    thisDwn.onclick = () => { download(theSrc, thisName); }
    thisPx.innerText = `${thisWidth}x${thisHeight}`;
    thisHrf.innerText = `https://cystee.github.io/hualang/#${thisName}-anchor`;
    地点.forEach(点 => {
        const 地 = 点[1];
        const 名 = 点[0].split("/");
        名.forEach(件 => {
            件 === thisName.replace("photographs/","") ? thisPlace.innerHTML = `照片拍摄于 ${地}。`: null;
        })
        //console.log(名);
    })
    theInfoImg.alt = eleImg.dataset.iconName;
    requestAnimationFrame(function(){setSize(eleImg)});
    // //Replace Lazyload.load(ele,settings)
    // theImg.addEventListener("load", () => {
    //     clearInterval(loadingInterval);
    //     qryLoading.classList.add("div2");
    //     if (theImg.classList.contains("loaded")) {
    //         eleImg.style.opacity = '0';
    //         setTimeout(() => {
    //             theBox.classList.remove('div2');
    //             setTimeout(() => {
    //                 document.querySelector('.按钮').classList.remove('div2');
    //             }, 100);
    //         }, 150);
    //     }
    //     theInfoImg.src = eleImg.dataset.iconRel;
    // },{ once: true });
    dontClick();
    theImg.dataset.src = theSrc;
    // LazyLoad.load(theImg);
    LazyLoad.resetStatus(theImg);
    lazyLoadInstance.update();
    loadingInterval = setInterval(() => {
        qryLoading.innerText = loadingText();
    }, 500);
    qryLoading.classList.remove("div2");
    window.location.hash === ele.id ? null : history.pushState({}, '', '#' + ele.id);
}
function download(href, title) {
    const a = document.createElement('a');
    a.setAttribute('href', href);
    a.setAttribute('download', title);
    a.click();
}
function share(ele) {
    if (navigator.share) {
        navigator.share({
            title: window.location.hash.replace("#", "").replace("-anchor", "").replace("photographs\/", ""),
            url: window.location.href,
            text: ele.innerText.includes("拍摄于") ? ele.innerText.replace("分享", "") : "照片拍摄由 HCY。" + ele.innerText.replace("分享", ""),
        })
    } else {
        alert('检测到你的浏览器不支持分享功能！');
    }
}
function 灯箱哈希() {
    window.location.hash === '' ? null : 灯箱(document.getElementById(decodeURI(window.location.hash.replace("#", ""))));
}
function waterFall() {
    //console.log("瀑布流布局");
    document.querySelector('.list').classList.remove('div2')
    let items = document.querySelectorAll('.item');
    let firstItem = document.querySelector(".item");
    let isWidthLessThan800 = window.innerWidth < 800;
    let x = 0;
    let y2 = 0,
        y3 = 0,
        y = 0;
    let y1 = firstItem.getBoundingClientRect().height;
    for (let i = 2; i < items.length + 1; i++) {
        const item = items[i - 1];
        if (!isWidthLessThan800) {
            if ((i - 2) % 3 === 0) {    //第二列
                n = Math.min(y1, y2, y3);
                x = item.getBoundingClientRect().width;
                if (i > 3) {
                    if (n === y1) {
                        y = y1;
                        x = 0;
                        y1 += item.getBoundingClientRect().height;
                    } else if (n === y3) {
                        y = y3;
                        x = 2 * item.getBoundingClientRect().width;
                        y3 += item.getBoundingClientRect().height;
                    } else {
                        y = y2;
                        y2 += item.getBoundingClientRect().height;
                    }
                } else {
                    y2 += item.getBoundingClientRect().height;
                }
            } else if ((i - 3) % 3 === 0) {    //第三列
                n = Math.min(y1, y2, y3);
                x = 2 * item.getBoundingClientRect().width;
                if (i > 3) {
                    if (n === y1) {
                        y = y1;
                        x = 0;
                        y1 += item.getBoundingClientRect().height;
                    } else if (n === y2) {
                        y = y2;
                        x = item.getBoundingClientRect().width;
                        y2 += item.getBoundingClientRect().height;
                    } else {
                        y = y3;
                        y3 += item.getBoundingClientRect().height;
                    }
                } else {
                    y3 += item.getBoundingClientRect().height;
                }
            } else {    //第一列
                n = Math.min(y1, y2, y3);
                x = 0;
                if (i > 3) {
                    if (n === y2) {
                        y = y2;
                        x = item.getBoundingClientRect().width;
                        y2 += item.getBoundingClientRect().height;
                    } else if (n === y3) {
                        y = y3;
                        x = 2 * item.getBoundingClientRect().width;
                        y3 += item.getBoundingClientRect().height;
                    } else {
                        y = y1;
                        y1 += item.getBoundingClientRect().height;
                    }
                } else {
                    y1 += item.getBoundingClientRect().height; //i>=2, i!=1，本句不可能事件
                }
            }
        } else {
            if (i % 2 === 0) {    //第二列
                n = Math.min(y1, y2);
                x = item.getBoundingClientRect().width;
                if (i > 2) {
                    if (n === y1) {
                        y = y1;
                        x = 0;
                        y1 += item.getBoundingClientRect().height;
                    } else {
                        y = y2;
                        y2 += item.getBoundingClientRect().height;
                    }
                } else {
                    y2 += item.getBoundingClientRect().height;
                }
            } else {    //第一列
                n = Math.min(y1, y2);
                x = 0;
                if (i > 2) {
                    if (n === y2) {
                        y = y2;
                        x = item.getBoundingClientRect().width;
                        y2 += item.getBoundingClientRect().height;
                    } else {
                        y = y1;
                        y1 += item.getBoundingClientRect().height;
                    }
                } else {
                    y1 += item.getBoundingClientRect().height; //i>=2, i!=1，本句不可能事件
                }
            }
        }
        item.style.transform = `translate(${x}px,${y}px) scale(1)`;
        document.querySelector('.list').style.height = isWidthLessThan800 ? Math.max(y1, y2) + 'px' : Math.max(y1, y2, y3) + 'px';
    }
}
function loadCssCode(code) {
    style.textContent = "";
    try {
        //for Chrome Firefox Opera Safari
        style.appendChild(document.createTextNode(code))
    } catch (ex) {
        //for IE
        style.styleSheet.cssText = code
    }
    head.appendChild(style)
}
function dontClick() {
    btn1.style.pointerEvents = 'none';
    btn2.style.pointerEvents = 'none';
    btn3.style.pointerEvents = 'none';
    loadCssCode('.item,.header{pointer-events:none!important}'); //禁止点击
}
function cancelDontClick() {
    btn1.style.pointerEvents = 'auto';
    btn2.style.pointerEvents = 'auto';
    btn3.style.pointerEvents = 'auto';
    loadCssCode('.item,.header{pointer-events:auto!important}'); //恢复点击
}
