(window.webpackJsonpmade_in_nizar=window.webpackJsonpmade_in_nizar||[]).push([[0],[,,,,,,,,,function(e,t,o){e.exports=o(17)},,,,,function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var r=o(0),a=o.n(r),n=o(2),c=o.n(n),s=(o(14),o(3)),i=o(4),l=o(5),u=o(7),d=o(6),m=o(8),w=(o(15),function(e){var t=e.quiz,o=e.show,r=e.selected,n=e.answer,c=e.image;return a.a.createElement("div",{className:"quiz"},a.a.createElement("div",{className:"vraag"},a.a.createElement("img",{src:c,alt:"foto over ict"}),a.a.createElement("p",null,t.vraag)),a.a.createElement("div",{className:"antwoorden"},t.antwoorden.map((function(e,t){return a.a.createElement("div",{key:"".concat(e.text.substring(0,5),"-").concat(t),onClick:function(e){return n(t)},className:"antwoord ".concat(o?e.correct?"correct":"wrong":""," ").concat(r===t?"selected":"")},a.a.createElement("p",null,t+1," - ",e.text))}))))});o(16);function p(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function h(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?p(o,!0).forEach((function(t){Object(s.a)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var g=function(e){function t(e){var o;return Object(i.a)(this,t),(o=Object(u.a)(this,Object(d.a)(t).call(this,e))).selectAnswer=function(e){console.log(e),o.setState(h({},o.state,{selectedAnswer:e}))},o.startTimer=function(){o.state.countDown>0&&o.setState(h({},o.state,{countDown:o.state.countDown-1}))},o.showAnswer=function(){var e=o.state.score,t=o.state,r=t.quizes,a=t.currentIndex,n=t.selectedAnswer;(console.log(r[a].antwoorden[n].correct),r[a].antwoorden[n].correct)&&(e+=10*o.state.countDown);clearInterval(o.intervalId),o.setState(h({},o.state,{score:e,showResult:!0}))},o.changeQuestion=function(){var e=setInterval(o.startTimer,1e3);o.intervalId=e;var t=o.state,r=t.quizes,a=t.currentIndex;a<r.length-1?o.setState(h({},o.state,{currentIndex:a+1,showResult:!1,countDown:30})):(o.setState(h({},o.state,{showModal:!0})),clearInterval(o.intervalId))},o.resetQuiz=function(){o.setState(h({},o.state,{showModal:!1,currentIndex:0,score:0,selectedAnswer:0,showResult:!1,countDown:30}));var e=setInterval(o.startTimer,1e3);o.intervalId=e},o.state={quizes:[{vraag:"what is the name of this device?",antwoorden:[{text:"Keyboard",correct:!0},{text:"Typewriter",correct:!1},{text:"Letter writer",correct:!1},{text:"Letter board",correct:!1}]},{vraag:"which technology company uses this logo?",antwoorden:[{text:"Samsung",correct:!1},{text:"Windows",correct:!1},{text:"Apple",correct:!0},{text:"HP",correct:!1}]},{vraag:"what does ICT mean?",antwoorden:[{text:"Internet and Computer Technology",correct:!1},{text:"Informative and Calculator Telephone",correct:!1},{text:"Information and Communication Technology",correct:!0},{text:"Information and Calculator Technology",correct:!1}]},{vraag:"the data protection act does",antwoorden:[{text:"Protects against the misuse of personal information",correct:!0},{text:"Makes it a criminal offence to copy/steal media/work/ideas",correct:!1},{text:"Covers the misuse of computer equipment",correct:!1}]},{vraag:"the computer misuse act",antwoorden:[{text:"Protects against the misuse of personal information",correct:!1},{text:"Makes it a criminal offence to copy/steal media/work/ideas",correct:!1},{text:"Covers the misuse of computer equipment/access to files",correct:!0},{text:"Stops people from illegally downloading media",correct:!1}]},{vraag:"the copyright and patents act",antwoorden:[{text:"Protects against the misuse of personal information",correct:!1},{text:"Makes it a criminal offence to copy/steal media/work/ideas",correct:!0},{text:"Covers the misuse of computer equipment",correct:!1},{text:"Stops people from illegally downloading media",correct:!1}]},{vraag:"the digital economy act",antwoorden:[{text:"Protects against the misuse of personalinformation",correct:!1},{text:"Makes it a criminal offence to copy/stealmedia/work/ideas",correct:!1},{text:"Covers the misuse of computerequipment",correct:!1},{text:"Stops people from illegally downloading media",correct:!0}]},{vraag:"if you was to sell a piece of software that does not belong to you, which law are you breaking?",antwoorden:[{text:"Cooling off period",correct:!1},{text:"Computer misuse act",correct:!1},{text:"Digital economy ac",correct:!0},{text:"Copyright act",correct:!0}]},{vraag:"if you download music from website and don\u2019t pay for it, which law might you be breaking?",antwoorden:[{text:"Copyright law",correct:!0},{text:"Digital economy act",correct:!0},{text:"Computer misuse act",correct:!1},{text:"Cooling off period",correct:!1}]},{vraag:"what is e-waste?",antwoorden:[{text:"Old computers that end up on landfills",correct:!0},{text:"Toxic chemicals",correct:!1},{text:"Not disposing of computers in the recommended way",correct:!0},{text:"Deleting data",correct:!1}]},{vraag:"how could we avoid producing e-waste?",antwoorden:[{text:"Recycle old computer parts",correct:!0},{text:"Throw away",correct:!1},{text:"Placing old computers in landfill",correct:!1},{text:"Sell computer so specialist shops/organisations",correct:!0}]},{vraag:"gaining access to someones data without their permission is illegal. Which law applies to this?",antwoorden:[{text:"Copyright law",correct:!1},{text:"Data protection act",correct:!1},{text:"Computer misuse act",correct:!0},{text:"Sales of good act",correct:!1}]},{vraag:"hacking is a security issue. Which of these can prevent hacking?",antwoorden:[{text:"Logging of computers properly when finished using",correct:!0},{text:"Setting strong passwords",correct:!0},{text:"Use a firewall on your computer",correct:!0},{text:"Writing down passwords",correct:!1}]},{vraag:"when a company is obliged not to share your data, this is covered under which act?",antwoorden:[{text:"Data protection act",correct:!0},{text:"Computer misuse act",correct:!1},{text:"Copyright law",correct:!1},{text:"Cooling off period",correct:!1}]},{vraag:"what is this device?",antwoorden:[{text:"Printer",correct:!1},{text:"Scanner",correct:!1},{text:"Projector",correct:!0},{text:"monitor",correct:!1}]},{vraag:"what does www mean?",antwoorden:[{text:"world wresling winner",correct:!1},{text:"World wide web",correct:!0}]}],currentIndex:0,showResult:!1,showModal:!1,selectedAnswer:0,score:0,countDown:30},o.intervalId=null,o}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=setInterval(this.startTimer,1e3);this.intervalId=e}},{key:"componentDidUpdate",value:function(){var e=this.state,t=e.countDown,o=e.currentIndex,r=e.quizes;0===t&&o<r.length-1&&this.setState(h({},this.state,{currentIndex:o+1,countDown:30}))}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"render",value:function(){var e=this.state,t=e.quizes,o=e.currentIndex,r=e.showResult,n=e.showModal,c=e.score,s=e.selectedAnswer,i=e.countDown,l="".concat("/Made_in_Nizar","/assets/").concat(o+1,".png");return a.a.createElement("div",{className:"App"},a.a.createElement(w,{image:l,quiz:t[o],show:r,selected:s,answer:this.selectAnswer}),a.a.createElement("button",{onClick:this.showAnswer,disabled:r},"show result"),r?a.a.createElement("button",{onClick:this.changeQuestion},"next"):null,n?a.a.createElement("div",{className:"modal"},a.a.createElement("div",{className:"popup"},a.a.createElement("p",null,"Congratiolations your score is ",c)),a.a.createElement("button",{onClick:this.resetQuiz},"play again!")):null,a.a.createElement("div",{className:"results"},a.a.createElement("p",null,"Score: ",c),a.a.createElement("p",null,"Timer: ",i)))}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.787dc6d4.chunk.js.map