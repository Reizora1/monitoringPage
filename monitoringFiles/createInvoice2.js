function _0x1b97(){const _0x549a24=['Please\x20input\x20amount\x20for\x20the\x20payment.','amount','log','Please\x20input\x20the\x20minimum\x20amount\x20required\x20for\x20the\x20transaction.','32pMjscz','btoa','selectedEwallet','10270BcePUW','cEmail','json','4762245PsBaNc','invoice_url','admin@admin.com','env','value','4046928moKQaL','1962210bMHfAA','1073957qJmQLD','947765CiYJsj','email','Invoice\x20created\x20successfully:','location','getElementById','stringify','Invoice\x20Demo\x20#123','Please\x20select\x20an\x20eWallet\x20for\x20the\x20payment.','Error\x20creating\x20invoice:','machineTest2','base64','href','XENDIT_API_KEY','4TWNZib','Redirecting\x20to\x20checkout\x20url.\x0aTransaction\x20ID:\x20','application/json','PHP','3447aBdlyv','POST','Basic\x20','1225236lQIAii'];_0x1b97=function(){return _0x549a24;};return _0x1b97();}function _0x4a4d(_0x1a0fcd,_0x346928){const _0x1b97d1=_0x1b97();return _0x4a4d=function(_0x4a4dce,_0x5e4799){_0x4a4dce=_0x4a4dce-0xae;let _0x5d9a33=_0x1b97d1[_0x4a4dce];return _0x5d9a33;},_0x4a4d(_0x1a0fcd,_0x346928);}(function(_0x2c93b5,_0x46a97d){const _0x19faa2=_0x4a4d,_0x3f96af=_0x2c93b5();while(!![]){try{const _0x1f1358=-parseInt(_0x19faa2(0xc0))/0x1+parseInt(_0x19faa2(0xbf))/0x2+-parseInt(_0x19faa2(0xae))/0x3+parseInt(_0x19faa2(0xce))/0x4*(parseInt(_0x19faa2(0xb9))/0x5)+-parseInt(_0x19faa2(0xbe))/0x6+-parseInt(_0x19faa2(0xc1))/0x7*(-parseInt(_0x19faa2(0xb3))/0x8)+-parseInt(_0x19faa2(0xd2))/0x9*(-parseInt(_0x19faa2(0xb6))/0xa);if(_0x1f1358===_0x46a97d)break;else _0x3f96af['push'](_0x3f96af['shift']());}catch(_0x1e9f89){_0x3f96af['push'](_0x3f96af['shift']());}}}(_0x1b97,0xadbc2));async function createInvoice(){const _0x42a141=_0x4a4d,_0x13d0f4=process[_0x42a141(0xbc)][_0x42a141(0xcd)],_0x5d9d5a=document[_0x42a141(0xc5)](_0x42a141(0xb0))[_0x42a141(0xbd)];let _0x9db49c=document[_0x42a141(0xc5)](_0x42a141(0xb7))['value'];const _0xf1333d=document[_0x42a141(0xc5)](_0x42a141(0xb5)),_0x3b4b40=_0xf1333d[_0x42a141(0xbd)];_0x9db49c==''&&(_0x9db49c=_0x42a141(0xbb));const _0x585c5f={'external_id':_0x42a141(0xca),'amount':_0x5d9d5a,'description':_0x42a141(0xc7),'invoice_duration':0x12c,'currency':_0x42a141(0xd1),'payment_methods':[_0x3b4b40],'customer':{'email':_0x9db49c},'customer_notification_preference':{'invoice_created':['email'],'invoice_paid':[_0x42a141(0xc2)]}};if(_0x5d9d5a=='')alert(_0x42a141(0xaf));else{if(_0x5d9d5a<0xa)alert(_0x42a141(0xb2));else{if(_0x3b4b40=='')alert(_0x42a141(0xc8));else try{const _0x3f5531=await fetch('https://api.xendit.co/v2/invoices',{'method':_0x42a141(0xd3),'headers':{'Content-Type':_0x42a141(0xd0),'Authorization':_0x42a141(0xd4)+window[_0x42a141(0xb4)](_0x13d0f4+':')['toString'](_0x42a141(0xcb))},'body':JSON[_0x42a141(0xc6)](_0x585c5f)}),_0x2f5962=await _0x3f5531[_0x42a141(0xb8)]();console[_0x42a141(0xb1)](_0x42a141(0xc3),_0x2f5962);let _0x3dc31e=_0x42a141(0xcf)+_0x2f5962['id'];alert(_0x3dc31e),window[_0x42a141(0xc4)][_0x42a141(0xcc)]=_0x2f5962[_0x42a141(0xba)];}catch(_0x3f6ffb){console['error'](_0x42a141(0xc9),_0x3f6ffb);}}}}