window.addEventListener('DOMContentLoaded',function(){

  const boy_girl = document.getElementById('boy_girl');
  const cool_cute = document.getElementById('cool_cute');
  const up_down = document.getElementById('up_down');
  const sawayaka_deep = document.getElementById('sawayaka_deep');
  const love = document.getElementById('love');
  const submitButton = document.getElementById('submitButton');
  const resultText = document.getElementById('resultText');
  const btn = document.getElementById('submitButton');

  btn.addEventListener('click', () => {
    // ボタンを無効化して再連打を防ぐ
    submitButton.disabled = true;

    // 読み込み中メッセージを表示
    resultText.textContent = '読み込み中...';
    console.log("読み込み中")

   setTimeout(() => {
     const selectedboy_girl = document.querySelector('input[name="boy_girl"]:checked');
     const selectedcool_cute = document.querySelector('input[name="cool_cute"]:checked');
     const selectedup_down = document.querySelector('input[name="up_down"]:checked');
     const selectedsawayaka_deep = document.querySelector('input[name="sawayaka_deep"]:checked');
     const selectedlove = document.querySelector('input[name="love"]:checked');
     console.log(selectedboy_girl);
     console.log(selectedcool_cute);
     console.log(selectedup_down);
     console.log(selectedsawayaka_deep);
     console.log(selectedlove);
     if (selectedboy_girl && selectedcool_cute && selectedup_down && selectedsawayaka_deep && selectedlove) {
       const boy_girlValue = selectedboy_girl.value;
       const cool_cuteValue = selectedcool_cute.value;
       const up_downValue = selectedup_down.value;
       const sawayaka_deepValue = selectedsawayaka_deep.value;
       const loveValue = selectedlove.value;

       let message = '';
       let videoURL = '';

      //musicdataから一致するYouTube動画のURLを取得
       const selectedVideoURL = musicdata[boy_girlValue] &&
         musicdata[boy_girlValue][cool_cuteValue] &&
         musicdata[boy_girlValue][cool_cuteValue][up_downValue] &&
         musicdata[boy_girlValue][cool_cuteValue][up_downValue][sawayaka_deepValue] &&
         musicdata[boy_girlValue][cool_cuteValue][up_downValue][sawayaka_deepValue][loveValue];
        
       console.log(selectedVideoURL)
       if (selectedVideoURL) {
         videoURL = selectedVideoURL;
       } else {
         message = "該当する動画は見つかりませんでした。";
       }

       if (videoURL) {
        //iframeでYouTube動画を表示
         const iframe = document.createElement('iframe');
         iframe.src = videoURL;
         iframe.width = "560"; // iframeの幅を調整
         iframe.height = "315"; // iframeの高さを調整
         iframe.allowFullscreen = true; // フルスクリーン表示を許可
         iframe.frameBorder = "0"; // ボーダーを非表示に
         resultText.innerHTML = ''; // 以前の結果をクリア
         resultText.appendChild(iframe);
       } else {
         resultText.textContent = message;
       }
     } else {
       resultText.textContent = '今の気分を教えてください';
     }

    //ボタンを再度有効化
     submitButton.disabled = false;
   }, 2000); // 2秒間待機
  });
});

 const musicdata = {
   "女": {
     "かわいい": {
       "テンションup": {
         "さわやか": {
           "恋愛系": ["https://www.youtube.com/embed/CMNahhgR_ss?si=C8UpR7UNcyhBgqZ-","https://www.youtube.com/embed/mH0_XpSHkZo?si=2C4y8wte0B15t6jv", "https://www.youtube.com/embed/i0p1bmr0EmE?si=X2uUxqq3JmQH8QEt","https://www.youtube.com/embed/rRzxEiBLQCA?si=jq4ANNTUJBZdUcAd","https://www.youtube.com/embed/Fm5iP0S1z9w?si=sz_JJSxI6fpPhXZ3","https://www.youtube.com/embed/F0B7HDiY-10?si=XgNl6TSgyYZE_uUa","https://www.youtube.com/embed/V9Wsm0hlLUI?si=NNaycC6jvkHpK_6W"],
           "恋愛系以外": ["https:www.youtube.com/watch?v=-uqWaGzQyxA&pp=ygUPaGFyZSBoYXJlIHR3aWNl", "..."],
         },
         "ディープ": {
           "恋愛系": [],
           "恋愛系以外": [],
         }
       },
       "落ち着いてる": {
         "さわやか": {
           "恋愛系": [],
           "恋愛系以外": [],
         },
         "ディープ": {
           "恋愛系": [],
           "恋愛系以外": [],
         }
       }
     },
    
     "かっこいい": {
       "テンションup": {
         "さわやか":{
           "恋愛系": ["https:www.youtube.com/embed/9YnlX1lSWHg?si=AUHoChmJ32AdiiFg", "..."],
           "恋愛系以外": ["https:www.youtube.com/embed/zQELp93xxfo?si=CQC87MTQ-pKaMuj", "..."]
         },
         "ディープ": {
           "恋愛系": [""],
           "恋愛系以外": [""],
         }
       },
       "落ち着いてる": {
         "さわやか": {
           "恋愛系": [],
           "恋愛系以外": [],

         },
         "ディープ": {
           "恋愛系": [],
           "恋愛系以外": [],
         },
       },
     },
    
   },

   "男": {
     "かっこいい": {
       "テンションup": {
         "さわやか": {
           "恋愛系": [],
           "恋愛系以外": [],
         },
         "ディープ": {
           "恋愛系": [],
           "恋愛系以外": [],
         }
       },
       "落ち着いてる": {
         "さわやか": {
           "恋愛系": [],
           "恋愛系以外": [],

         },
         "ディープ": {
           "恋愛系": [],
           "恋愛系以外": [],
         }
       }
     },

     "かわいい": {
       "テンションup": {
         "さわやか": {
           "恋愛系": [],
           "恋愛系以外": [],
         },
         "ディープ": {
           "恋愛系": [],
           "恋愛系以外": [],
         }
       },
       "落ち着いてる": {
         "さわやか": {
           "恋愛系": ["https:www.youtube.com/embed/CMNahhgR_ss?si=Mgy3ubyj8cb_3yoU",],
           "恋愛系以外": [""],
         },
         "ディープ": {
           "恋愛系": [],
           "恋愛系以外": [],
         }
       }
     },
    
   }
 };


  //"女": {
  //   "かわいい": {
  //     "テンションup": {
  //       "さわやか": {
  //         "恋愛系": "https://www.youtube.com/watch?v=CMNahhgR_ss&pp=ygUDYmR6",
  //       },
  //     },
  //   },

  //   "女" {ｓ
  //     "かっこいい": {
  //       "テンションup": {
  //         "さわやか": {
  //           "恋愛系以外": "https://www.youtube.com/watch?v=CMNahhgR_ss&pp=ygUDYmR6",
  //         },
  //       },
  //     },
  //   },
  //   "女": {
  //     "かっこいい": {
  //       "テンションup": {
  //         "さわやか": {
  //           "恋愛系": "https://www.youtube.com/watch?v=OWYU6QVAcK8&pp=ygUPdG91Y2hkb3duIHR3aWNl",
  //         },
  //       },
  //     },
  //   },
  //   "女": {
  //     "かわいい": {
  //       "テンションup": {
  //         "さわやか": {
  //           "恋愛系": "https://www.youtube.com/watch?v=mH0_XpSHkZo&pp=ygULbW9yZWFuZG1vcmU%3D",
  //         },
  //       },
  //     },
  //   },
  //   "女": {
  //     "かっこいい": {
  //       "テンションup": {
  //         "ディープ": {
  //           "恋愛系": "https://www.youtube.com/watch?v=fmOEKOjyDxU&pp=ygUMcGVyZmVjdHdvcmxk",
  //         },
  //       },
  //     },
  //   },
  //   "女": {
  //     "かっこいい": {
  //       "テンションup": {
  //         "ディープ": {
  //           "恋愛系": "https://www.youtube.com/watch?v=w4cTYnOPdNk&pp=ygULc2V0IG1lIGZyZWU%3D",
  //         },
  //       },
  //     },
  //   },
  //   "女": {
  //     "かわいい": {
  //       "テンションup": {
  //         "さわやか": {
  //           "恋愛系": "https://www.youtube.com/watch?v=ePpPVE-GGJw&pp=ygUCdHQ%3D",
  //         },
  //       },
  //     },
  //   },
  //   "女": {
  //     "かっこいい": {
  //       "テンションup": {
  //         "ディープ": {
  //           "恋愛系": "https://www.youtube.com/watch?v=3ymwOvzhwHs&pp=ygUMZmVlbCBzcGVjaWFs",
  //         },
  //       },
  //     },
  //   },
  //   "女": {
  //     "かわいい": {
  //       "テンションup": {
  //         "さわやか": {
  //           "恋愛系": "https://www.youtube.com/watch?v=i0p1bmr0EmE&pp=ygUMd2hhdCBpcyBsb3Zl",
  //         },
  //       },
  //     },
  //   },
  //   "女": {
  //     "かわいい": {
  //       "テンションup": {
  //         "さわやか": {
  //           "恋愛系以外": "https://www.youtube.com/watch?v=-uqWaGzQyxA&pp=ygUPaGFyZSBoYXJlIHR3aWNl",
  //         },
  //       },
  //     },
  //   },
  //   "女": {
  //     "かわいい": {
  //       "テンションup": {
  //         "さわやか": {
  //           "恋愛系": "https://www.youtube.com/watch?v=mAKsZ26SabQ&pp=ygUKeWVzIG9yIHllcw%3D%3D",
  //         },
  //       },
  //     },
  //   },
  //   "女": {
  //     "かわいい": {
  //       "テンションup": {
  //         "さわやか": {
  //           "恋愛系": "https://www.youtube.com/watch?v=rRzxEiBLQCA&pp=ygUY44OP44O844OI44K344Kn44Kk44Kr44O8",
  //         },
  //       },
  //     },
  //   },
  //   "女": {
  //     "かわいい": {
  //       "テンションup": {
  //         "さわやか": {
  //           "恋愛系": "https://www.youtube.com/watch?v=Fm5iP0S1z9w&pp=ygUUZGFuY2UgdGhlIG5pZ2h0IGF3YXk%3D",
  //         },
  //       },
  //     },
  //   },
  //   "女": {
  //     "かわいい": {
  //       "テンションup": {
  //         "ディープ": {
  //           "恋愛系以外": "https://www.youtube.com/watch?v=715h-XJ9Wzg&t=86s&pp=ygUQb25lIGluIGEgbWlsbGlvbg%3D%3D",
  //         },
  //       },
  //     },
  //   },
  //   "女": {
  //     "かわいい": {
  //       "落ち着いた": {
  //         "ディープ": {
  //           "恋愛系": "https://www.youtube.com/watch?v=VcOSUOpACq0&pp=ygUOZG91Z2hudXQgdHdpY2U%3D",
  //         },
  //       },
  //     },
  //   },
  //   "女": {
  //     "かわいい": {
  //       "落ち着いた": {
  //         "ディープ": {
  //           "恋愛系以外": "https://www.youtube.com/watch?v=pXS9WVPC1pg&pp=ygUJYmUgYXMgb25l",
  //         },
  //       },
  //     },
  //   },
  //   "女": {
  //     "かわいい": {
  //       "落ち着いた": {
  //         "さわやか": {
  //           "恋愛系": "https://www.youtube.com/watch?v=CfUGjK6gGgs&pp=ygUfdGhlIGJlc3QgdGhpbmcgaSBldmVyIGRpZCB0d2ljZQ%3D%3D",
  //         },
  //       },
  //     },
  //   },
  // },


  // "女": {
  //   "かっこいい": {
  //     "テンションup": {
  //       "さわやか": {
  //         "恋愛系以外": "https://www.youtube.com/watch?v=6ZUIwj3FgUY&pp=ygUEaSBhbQ%3D%3D",
  //       },
  //     },
  //   },
  // },
  // "女": {
  //   "かっこいい": {
  //     "テンションup": {
  //       "ディープ": {
  //         "恋愛系以外": "https://www.youtube.com/watch?v=pG6iaOMV46I&pp=ygUGa2l0c2No",
  //       },
  //     },
  //   },
  // },
  // "女": {
  //   "かっこいい": {
  //     "テンションup": {
  //       "ディープ": {
  //         "恋愛系": "https://www.youtube.com/watch?v=Y8JFxS1HlDo&pp=ygUIbG92ZWRpdmU%3D",
  //       },
  //     },
  //   },
  // },
  // "女": {
  //   "かわいい": {
  //     "テンションup": {
  //       "ディープ": {
  //         "恋愛系": "https://www.youtube.com/watch?v=Y8JFxS1HlDo&pp=ygUIbG92ZWRpdmU%3D", lovedive
  //       },
  //     },
  //   },
  // },
  // "女": {
  //   "かっこいい": {
  //     "テンションup": {
  //       "ディープ": {
  //         "恋愛系": "https://www.youtube.com/watch?v=--FmExEAsM8&pp=ygUGZWxldmVu", eleven
  //       },
  //     },
  //   },
  // },
  // "女": {
  //   "かわいい": {
  //     "テンションup": {
  //       "ディープ": {
  //         "恋愛系": "https://www.youtube.com/watch?v=--FmExEAsM8&pp=ygUGZWxldmVu", eleven
  //       },
  //     },
  //   },
  // },
  // "女": {
  //   "かっこいい": {
  //     "テンションup": {
  //       "さわやか": {
  //         "恋愛系": "https://www.youtube.com/watch?v=F0B7HDiY-10&pp=ygUKYWZ0ZXIgbGlrZQ%3D%3D", afterlike
  //       },
  //     },
  //   },
  // },
  // "女": {
  //   "かわいい": {
  //     "テンションup": {
  //       "さわやか": {
  //         "恋愛系": "https://www.youtube.com/watch?v=F0B7HDiY-10&pp=ygUKYWZ0ZXIgbGlrZQ%3D%3D", afterlike
  //       },
  //     },
  //   },
  // },


  // "女": {
  //   "かっこいい": {
  //     "テンションup": {
  //       "ディープ": {
  //         "恋愛系以外": "https://www.youtube.com/watch?v=4vbDFu0PUew&pp=ygUIZmVhcmxlc3M%3D",
  //       },
  //     },
  //   },
  // },
  // "女": {
  //   "かっこいい": {
  //     "テンションup": {
  //       "ディープ": {
  //         "恋愛系以外": "https://www.youtube.com/watch?v=pyf8cbqyfPs&pp=ygULYW50aWZyYWdpbGU%3D",
  //       },
  //     },
  //   },
  // },
  // "女": {
  //   "かっこいい": {
  //     "テンションup": {
  //       "ディープ": {
  //         "恋愛系以外": "https://www.youtube.com/watch?v=UBURTj20HXI&pp=ygUKdW5mb3JnaXZlbg%3D%3D",
  //       },
  //     },
  //   },
  // },
  // "女": {
  //   "かわいい": {
  //     "落ち着いた": {
  //       "さわやか": {
  //         "恋愛系": "https://www.youtube.com/watch?v=V9Wsm0hlLUI&pp=ygUVc291ciBncmFwZSBsZXNzZXJhZmlt",
  //       },
  //     },
  //   },
  // },


  // "男": {
  //   "かっこいい": {
  //     "テンションup": {
  //       "ディープ": {
  //         "恋愛系以外": "https://www.youtube.com/watch?v=JsOOis4bBFg&pp=ygUGc2NsYXNz",
  //       },
  //     },
  //   },
  // },
  // "男": {
  //   "かっこいい": {
  //     "テンションup": {
  //       "ディープ": {
  //         "恋愛系以外": "https://www.youtube.com/watch?v=b3GYcA7j5mg&pp=ygUHdG9wbGluZQ%3D%3D",
  //       },
  //     },
  //   },
  // },
  // "男": {
  //   "かっこいい": {
  //     "テンションup": {
  //       "ディープ": {
  //         "恋愛系以外": "https://www.youtube.com/watch?v=X-uJtV8ScYk&pp=ygUJYmFjayBkb29y",
  //       },
  //     },
  //   },
  // },
  // "男": {
  //   "かっこいい": {
  //     "テンションup": {
  //       "ディープ": {
  //         "恋愛系以外": "https://www.youtube.com/watch?v=TQTlCHxyuu8&pp=ygUIZ29kc21lbnU%3D",
  //       },
  //     },
  //   },
  // },
  // "男": {
  //   "かっこいい": {
  //     "テンションup": {
  //       "さわやか": {
  //         "恋愛系以外": "https://www.youtube.com/watch?v=Dab4EENTW5I&pp=ygUFbWlyb2g%3D",
  //       },
  //     },
  //   },
  // },
  // "男": {
  //   "かっこいい": {
  //     "テンションup": {
  //       "ディープ": {
  //         "恋愛系以外": "https://www.youtube.com/watch?v=AdfIfFGCqgo&pp=ygUKaGVsbGV2YXRvcg%3D%3D",
  //       },
  //     },
  //   },
  // },
  // "男": {
  //   "かっこいい": {
  //     "落ち着いた": {
  //       "ディープ": {
  //         "恋愛系以外": "https://www.youtube.com/watch?v=5rPluw_-Eb4&pp=ygUVc2lkZWVmZmVjdHMgc3RyYXlraWRz",
  //       },
  //     },
  //   },
  // },
  // "男": {
  //   "かっこいい": {
  //     "落ち着いた": {
  //       "ディープ": {
  //         "恋愛系以外": "https://www.youtube.com/watch?v=UWoyeuwj9c0&pp=ygULZG91YmxlIGtub3Q%3D",
  //       },
  //     },
  //   },
  // },
  // "男": {
  //   "かっこいい": {
  //     "落ち着いた": {
  //       "ディープ": {
  //         "恋愛系": "https://www.youtube.com/watch?v=k8Y6ZTjmCXs&pp=ygUKcmVkbGlnaHRzIA%3D%3D",
  //       },
  //     },
  //   },
  // },
  // "男": {
  //   "かわいい": {
  //     "テンションup": {
  //       "ディープ": {
  //         "恋愛系以外": "https://www.youtube.com/watch?v=YLtEc-kvOqA&pp=ygUGY2hlZXNl",
  //       },
  //     },
  //   },
  // },
  // "男": {
  //   "かっこいい": {
  //     "テンションup": {
  //       "ディープ": {
  //         "恋愛系以外": "https://www.youtube.com/watch?v=EaswWiwMVs8&pp=ygUKdGh1bmRlcm91cw%3D%3D",
  //       },
  //     },
  //   },
  // },
  // "男": {
  //   "かわいい": {
  //     "テンションup": {
  //       "さわやか": {
  //         "恋愛系以外": "https://www.youtube.com/watch?v=UcGWYKHBDA4&pp=ygUDZm5m",
  //       },
  //     },
  //   },
  // },
  // "男": {
  //   "かわいい": {
  //     "テンションup": {
  //       "さわやか": {
  //         "恋愛系以外": "https://www.youtube.com/watch?v=pok5yDw77uM&pp=ygUGbXlwYWNl",
  //       },
  //     },
  //   },
  // },
  // "男": {
  //   "かわいい": {
  //     "テンションup": {
  //       "さわやか": {
  //         "恋愛系以外": "https://www.youtube.com/watch?v=Smgql_DESn8&pp=ygUKc3VyZmluIHNreg%3D%3D",
  //       },
  //     },
  //   },
  // },
  // "男": {
  //   "かわいい": {
  //     "テンションup": {
  //       "さわやか": {
  //         "恋愛系以外": "https://www.youtube.com/watch?v=LYJDf9oPQ-0&pp=ygUJYmx1ZXByaW50",
  //       },
  //     },
  //   },
  // },
  // "男": {
  //   "かわいい": {
  //     "落ち着いた": {
  //       "さわやか": {
  //         "恋愛系": "https://www.youtube.com/watch?v=S4qK-Gzyws0&pp=ygUMd2ludGVyIGZhbGxz",
  //       },
  //     },
  //   },
  // },
  // "男": {
  //   "かっこいい": {
  //     "落ち着いた": {
  //       "さわやか": {
  //         "恋愛系": "https://www.youtube.com/watch?v=dtV1I9WtQuo&pp=ygUFY2hpbGw%3D",
  //       },
  //     },
  //   },
  // },
  // "男": {
  //   "かっこいい": {
  //     "落ち着いた": {
  //       "ディープ": {
  //         "恋愛系": "https://www.youtube.com/watch?v=Eauqg3aPkTs&pp=ygUFdGFzdGU%3D",
  //       },
  //     },
  //   },
  // },


  // "男": {
  //   "かっこいい": {
  //     "テンションup": {
  //       "さわやか": {
  //         "恋愛系": "https://www.youtube.com/watch?v=gdZLi9oWNZg&pp=ygUIZHluYW1pdGU%3D",
  //       },
  //     },
  //   },
  // },
  // "男": {
  //   "かっこいい": {
  //     "テンションup": {
  //       "ディープ": {
  //         "恋愛系以外": "https://www.youtube.com/watch?v=ALj5MKjy2BU&pp=ygUIZmlyZSBidHM%3D",
  //       },
  //     },
  //   },
  // },
  // "男": {
  //   "かっこいい": {
  //     "落ち着いた": {
  //       "ディープ": {
  //         "恋愛系": "https://www.youtube.com/watch?v=7OX7dIRReSA&pp=ygUJ6KGA5rGX5raZ",
  //       },
  //     },
  //   },
  // },
  // "男": {
  //   "かっこいい": {
  //     "テンションup": {
  //       "ディープ": {
  //         "恋愛系以外": "https://www.youtube.com/watch?v=BVwAVbKYYeM&pp=ygUEZG9wZQ%3D%3D",
  //       },
  //     },
  //   },
  // },
  // "男": {
  //   "かわいい": {
  //     "落ち着いた": {
  //       "さわやか": {
  //         "恋愛系以外": "https://www.youtube.com/watch?v=-5q5mZbe3V8&pp=ygUMbGlmZSBnb2VzIG9u",
  //       },
  //     },
  //   },
  // },
  // "男": {
  //   "かっこいい": {
  //     "落ち着いた": {
  //       "ディープ": {
  //         "恋愛系": "https://www.youtube.com/watch?v=7C2z4GqqS5E&pp=ygUJZmFrZSBsb3Zl",
  //       },
  //     },
  //   },
  // },
  // "男": {
  //   "かっこいい": {
  //     "テンションup": {
  //       "ディープ": {
  //         "恋愛系": "https://www.youtube.com/watch?v=MBdVXkSdhwU&pp=ygUDZG5h",
  //       },
  //     },
  //   },
  // },
  // "男": {
  //   "かわいい": {
  //     "落ち着いた": {
  //       "さわやか": {
  //         "恋愛系": "https://www.youtube.com/watch?v=zFT3f9biz68&pp=ygUIZmlsbSBvdXQ%3D",
  //       },
  //     },
  //   },
  // },
  // "男": {
  //   "かっこいい": {
  //     "テンションup": {
  //       "さわやか": {
  //         "恋愛系": "https://www.youtube.com/watch?v=XQmpVHUi-0A&pp=ygUSd2FyIG9mIGhvcm1vbmUgYnRz",
  //       },
  //     },
  //   },
  // },
  // "男": {
  //   "かっこいい": {
  //     "落ち着いた": {
  //       "ディープ": {
  //         "恋愛系": "https://www.youtube.com/watch?v=LYAcYSmaLoc&pp=ygUKaSBuZWVkIHlvdQ%3D%3D",
  //       },
  //     },
  //   },
  // },
  // "男": {
  //   "かっこいい": {
  //     "テンションup": {
  //       "ディープ": {
  //         "恋愛系以外": "https://www.youtube.com/watch?v=gwMa6gpoE9I&pp=ygUCb24%3D",
  //       },
  //     },
  //   },
  // },
  // "男": {
  //   "かわいい": {
  //     "落ち着いた": {
  //       "さわやか": {
  //         "恋愛系": "https://www.youtube.com/watch?v=BGQveM9aiBM&pp=ygUGZGltcGxl",
  //       },
  //     },
  //   },
  // },
  // "男": {
  //   "かわいい": {
  //     "テンションup": {
  //       "さわやか": {
  //         "恋愛系以外": "https://www.youtube.com/watch?v=P131csq4P6Q&pp=ygUEZ29nbw%3D%3D",
  //       },
  //     },
  //   },
  // },
  // "男": {
  //   "かわいい": {
  //     "落ち着いた": {
  //       "さわやか": {
  //         "恋愛系": "https://www.youtube.com/watch?v=9IHwqdz8Xhw&pp=ygUJc3RheSBnb2xk",
  //       },
  //     },
  //   },
  // },
  // "男": {
  //   "かっこいい": {
  //     "落ち着いた": {
  //       "ディープ": {
  //         "恋愛系以外": "https://www.youtube.com/watch?v=0lapF4DQPKQ&pp=ygUKYmxhY2sgc3dhbg%3D%3D",
  //       },
  //     },
  //   },
  // },
  // "男": {
  //   "かっこいい": {
  //     "落ち着いた": {
  //       "ディープ": {
  //         "恋愛系": "https://www.youtube.com/watch?v=VEZ_Ui6d9AM&pp=ygUKcGllZCBwaXBlcg%3D%3D",
  //       },
  //     },
  //   },
  // },





  // 他の季節と色のデータも同様に追加
