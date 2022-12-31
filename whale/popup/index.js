const portalURL = "https://portal.korea.ac.kr/front/Intro.kpd";
const classURL = "http://registrar.korea.ac.kr/eduinfo/info/registration_courses.do";
const careerURL = "https://job.korea.ac.kr/";
const moneyURL = "http://www.korea.ac.kr/cop/portalBoard/portalBoardList.do?siteId=university&type=J&id=university_060206000000";
const submitURL = "http://sugang.korea.ac.kr/";
const kopasURL = "https://www.koreapas.com/bbs/main.php"
const klueURL = "https://klue.kr/";
const libURL = "https://library.korea.ac.kr/"
const GitRepoURL = "https://github.com/budlebee/GoYonsei";


function openURLInNewTab (url) {
    whale.tabs.create({ url });
}

document.getElementById('clickPortal').addEventListener('click', () => { openURLInNewTab(portalURL) }, false);
document.getElementById('clickClass').addEventListener('click', () => { openURLInNewTab(classURL) }, false);
document.getElementById('clickCareer').addEventListener('click', () => { openURLInNewTab(careerURL) }, false);
document.getElementById('clickMoney').addEventListener('click', () => { openURLInNewTab(moneyURL) }, false);
document.getElementById('clickSubmit').addEventListener('click', () => { openURLInNewTab(submitURL) }, false);
document.getElementById('clickKopas').addEventListener('click', () => { openURLInNewTab(kopasURL) }, false);
document.getElementById('clickKlue').addEventListener('click', () => { openURLInNewTab(klueURL) }, false);
document.getElementById('clickLib').addEventListener('click', () => { openURLInNewTab(libURL) }, false);

document.getElementById('clickEasterEgg').addEventListener('click', () => { openURLInNewTab(GitRepoURL) }, false);
