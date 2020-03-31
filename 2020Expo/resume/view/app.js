var app = new Vue({
    //el: '#app',
    data: {
        head: {
            my_photo: 'src/img/myphoto.jpg',
            title: '朱庭宏 <span style="font-size: 20pt; vertical-align: baseline;">Hank, CHU</span>',
            subtitle: '@did1335',
            quote: '<span style="vertical-align: middle;">&nbsp;用網路來串聯社群，用程式來改變世界&nbsp;</span>'
        },
        contact: {
            title: 'Contact',
            mail: 'did1335@gmail.com',
            fb: '朱庭宏',
            github: 'did1335'
        },
        icon: {
            mail: 'src/icon/gmail.svg',
            fb: 'src/icon/facebook.svg',
            github: 'src/icon/github.svg'
        },
        compitition: {
            title: 'Compitition',
            num1: '2019國際智慧機器人運動大賽全能機器人組跳遠第一名',
            num2: '2018臺灣國際創新發明暨設計競賽發明類設計組銀牌'
        },
        experience: {
            title: 'Experience',
            date1: '2020/02', //202002210
            exp1: 'WikiData Taiwan 地方學專題社群共同發起人',
            date2: '2019/09~2020/01',
            exp2: '財團法人工業技術研究院工讀生',
            date3: '2019/10', //20191017-20191019
            exp3: '第23屆TDK盃競賽(2019 Taiwan TDK Robocon)助理裁判',
            date4: '2018/05', //20180504-20180506
            exp4: '2018永續環境黑客松技職盃全國大賽工作人員',
            date5: 'others',
            yellow: 'background: linear-gradient(135deg, rgba(250, 78, 78, 0.8), #fb5a22);',
            //exp5: '網頁前端教育訓練課程講師',
            exp6: '產品設計助教, 氣壓學助教, 工程材料助教, 創意思考助教',
            exp7: '創意機器人研究社社長, 攝影生活美學社社長'
        },
        skills: {
            title: 'Skills',
            FEE: '前端',
            BEE: '後端',
            Management: '管理工具',
            Robotics: '機器人學',
            MCU: '單晶片',
            Hstyle: 'font-size:20pt; display:flex; flex-wrap: wrap;'
        },
        FEE: {
            skill1: 'HTML',
            skill2: 'CSS',
            skill3: 'Javascript',
            skill4: 'Bootstrap',
            skill5: 'jQuery',
            skill6: 'Vue.js'
        },
        BEE: {
            skill1: 'PHP',
            skill2: 'MS SQL'
        },
        Management: {
            skill1: 'Git',
            skill2: 'Trello'
        },
        Robotics: {
            skill1: 'ROS',
            skill2: 'OpenCV',
            skill3: 'C++'
        },
        MCU: {
            skill1: 'Arduino',
            skill2: 'ARM'
        }
    },
    methods: {
        goMail: function() {
            window.open('mailto:did1335@gmail.com', 'mail', config = 'height=800,width=600');
        },
        goFb: function() {
            window.open('https://www.facebook.com/profile.php?id=100000199854451&ref=bookmarks');
        },
        goGithub: function() {
            window.open('https://github.com/did1335');
        }
    }
});
