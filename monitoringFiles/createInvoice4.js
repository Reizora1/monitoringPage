function _0x3f05(_0x17d3eb,_0x283c2c){const _0x25bd90=_0x25bd();return _0x3f05=function(_0x3f0522,_0x10c8f6){_0x3f0522=_0x3f0522-0x124;let _0x469f74=_0x25bd90[_0x3f0522];return _0x469f74;},_0x3f05(_0x17d3eb,_0x283c2c);}(function(_0x29398e,_0x1d21e6){const _0x27f704=_0x3f05,_0x51539e=_0x29398e();while(!![]){try{const _0x3a6857=parseInt(_0x27f704(0x12a))/0x1*(parseInt(_0x27f704(0x142))/0x2)+parseInt(_0x27f704(0x137))/0x3*(parseInt(_0x27f704(0x132))/0x4)+-parseInt(_0x27f704(0x130))/0x5*(parseInt(_0x27f704(0x133))/0x6)+-parseInt(_0x27f704(0x13f))/0x7+parseInt(_0x27f704(0x12c))/0x8+parseInt(_0x27f704(0x145))/0x9+-parseInt(_0x27f704(0x127))/0xa*(parseInt(_0x27f704(0x124))/0xb);if(_0x3a6857===_0x1d21e6)break;else _0x51539e['push'](_0x51539e['shift']());}catch(_0x2edf6d){_0x51539e['push'](_0x51539e['shift']());}}}(_0x25bd,0x7d96e));async function createInvoice(){const _0x34d409=_0x3f05,_0x4f4d65=process[_0x34d409(0x143)][_0x34d409(0x13d)],_0x56c02e=document[_0x34d409(0x135)](_0x34d409(0x13a))['value'];let _0x3bbb02=document[_0x34d409(0x135)](_0x34d409(0x139))['value'];const _0x27ebbd=document[_0x34d409(0x135)](_0x34d409(0x141)),_0x47a0b3=_0x27ebbd[_0x34d409(0x126)];_0x3bbb02==''&&(_0x3bbb02=_0x34d409(0x148));const _0x42e1fb={'external_id':_0x34d409(0x144),'amount':_0x56c02e,'description':'Invoice\x20Demo\x20#123','invoice_duration':0x12c,'currency':_0x34d409(0x12b),'payment_methods':[_0x47a0b3],'customer':{'email':_0x3bbb02},'customer_notification_preference':{'invoice_created':['email'],'invoice_paid':[_0x34d409(0x125)]}};if(_0x56c02e=='')alert(_0x34d409(0x128));else{if(_0x56c02e<0xa)alert('Please\x20input\x20the\x20minimum\x20amount\x20required\x20for\x20the\x20transaction.');else{if(_0x47a0b3=='')alert(_0x34d409(0x134));else try{const _0x5977ff=await fetch(_0x34d409(0x129),{'method':_0x34d409(0x12d),'headers':{'Content-Type':_0x34d409(0x147),'Authorization':'Basic\x20'+window[_0x34d409(0x146)](_0x4f4d65+':')[_0x34d409(0x131)](_0x34d409(0x13c))},'body':JSON[_0x34d409(0x12e)](_0x42e1fb)}),_0x473047=await _0x5977ff['json']();console[_0x34d409(0x12f)]('Invoice\x20created\x20successfully:',_0x473047);let _0x5e768c=_0x34d409(0x136)+_0x473047['id'];alert(_0x5e768c),window[_0x34d409(0x13b)][_0x34d409(0x13e)]=_0x473047['invoice_url'];}catch(_0x31f741){console[_0x34d409(0x138)](_0x34d409(0x140),_0x31f741);}}}}function _0x25bd(){const _0x1a33f5=['https://api.xendit.co/v2/invoices','1Eacgyg','PHP','867744zkHZMK','POST','stringify','log','1583620NgUbSz','toString','2264SMMEZb','6ASlywH','Please\x20select\x20an\x20eWallet\x20for\x20the\x20payment.','getElementById','Redirecting\x20to\x20checkout\x20url.\x0aTransaction\x20ID:\x20','1446YoFhfG','error','cEmail','amount','location','base64','XENDIT_API_KEY','href','3448816FzhJJC','Error\x20creating\x20invoice:','selectedEwallet','1871302aIWXiD','env','machineTest4','8224587otlxcW','btoa','application/json','admin@admin.com','1425204OopaXh','email','value','70MnqVFg','Please\x20input\x20amount\x20for\x20the\x20payment.'];_0x25bd=function(){return _0x1a33f5;};return _0x25bd();}