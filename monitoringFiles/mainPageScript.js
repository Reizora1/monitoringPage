const _0x26e845=_0x825f;(function(_0x51295d,_0x488f16){const _0x4a2b68=_0x825f,_0x21dcf2=_0x51295d();while(!![]){try{const _0x598e56=-parseInt(_0x4a2b68(0x1f5))/0x1*(parseInt(_0x4a2b68(0x1e8))/0x2)+-parseInt(_0x4a2b68(0x1e5))/0x3+-parseInt(_0x4a2b68(0x1eb))/0x4*(parseInt(_0x4a2b68(0x1ed))/0x5)+parseInt(_0x4a2b68(0x1db))/0x6*(-parseInt(_0x4a2b68(0x1e9))/0x7)+parseInt(_0x4a2b68(0x1e4))/0x8*(-parseInt(_0x4a2b68(0x20d))/0x9)+parseInt(_0x4a2b68(0x1ff))/0xa*(-parseInt(_0x4a2b68(0x208))/0xb)+-parseInt(_0x4a2b68(0x1f0))/0xc*(-parseInt(_0x4a2b68(0x1d6))/0xd);if(_0x598e56===_0x488f16)break;else _0x21dcf2['push'](_0x21dcf2['shift']());}catch(_0x35da11){_0x21dcf2['push'](_0x21dcf2['shift']());}}}(_0x49f3,0x620cd));import{initializeApp}from'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';import{getAuth,onAuthStateChanged,signInWithEmailAndPassword,signOut}from'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';import{getDatabase,ref,onValue}from'https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js';let userID;const firebaseConfig={'apiKey':_0x26e845(0x201),'authDomain':'apsc-database.firebaseapp.com','databaseURL':_0x26e845(0x1e0),'projectId':_0x26e845(0x1da),'storageBucket':_0x26e845(0x1c9),'messagingSenderId':_0x26e845(0x202),'appId':_0x26e845(0x20e)},firebaseApp=initializeApp(firebaseConfig),auth=getAuth(firebaseApp),database=getDatabase(firebaseApp);onAuthStateChanged(auth,_0x70445a=>{const _0x242fa9=_0x26e845,_0x553224=document[_0x242fa9(0x1f7)](_0x242fa9(0x1e6));_0x70445a?(userID=_0x70445a[_0x242fa9(0x210)],_0x553224['style'][_0x242fa9(0x1d5)]='block',welcomeTxt[_0x242fa9(0x1ca)]=_0x242fa9(0x1e1)+_0x70445a['email']+'!'):window[_0x242fa9(0x20c)][_0x242fa9(0x1fe)]=_0x242fa9(0x1cc);});const toggleViewButton=document['getElementById']('toggleButton'),displayTransactTypeBtn=document[_0x26e845(0x1f7)](_0x26e845(0x1c3)),searchLink=document[_0x26e845(0x1f7)](_0x26e845(0x207)),searchPopup=document['getElementById'](_0x26e845(0x1d3)),rootNodeInput=document[_0x26e845(0x1f7)](_0x26e845(0x212)),searchBtn=document[_0x26e845(0x1f7)](_0x26e845(0x1f4)),dataContainer=document['getElementById']('dataContainer'),txtView=document[_0x26e845(0x1f7)](_0x26e845(0x1f3)),txtView1=document['getElementById'](_0x26e845(0x1f9)),welcomeTxt=document[_0x26e845(0x1f7)](_0x26e845(0x204));let isTransactionHistoryView=![];window[_0x26e845(0x1d4)]=function(){const _0x54068f=_0x26e845;if(rootNodeInput[_0x54068f(0x205)][_0x54068f(0x1c1)]()==''){alert(_0x54068f(0x1f1)),dataContainer[_0x54068f(0x1d7)]['display']=_0x54068f(0x1e2),txtView1[_0x54068f(0x1d7)]['display']=_0x54068f(0x1e2);return;}else isTransactionHistoryView?(toggleViewButton['textContent']=_0x54068f(0x1ef),txtView['textContent']=_0x54068f(0x1de),txtView1[_0x54068f(0x1ca)]='EWALLET\x20TRANSACTIONS',viewData(),searchLink['style'][_0x54068f(0x1d5)]=_0x54068f(0x1f2),displayTransactTypeBtn[_0x54068f(0x1d7)][_0x54068f(0x1d5)]='block',txtView1[_0x54068f(0x1d7)][_0x54068f(0x1d5)]=_0x54068f(0x1f2),dataContainer['style'][_0x54068f(0x1d5)]=_0x54068f(0x1f2),console['log'](_0x54068f(0x1c8))):(toggleViewButton['textContent']=_0x54068f(0x1c5),txtView[_0x54068f(0x1ca)]=_0x54068f(0x211),viewData(),searchLink[_0x54068f(0x1d7)][_0x54068f(0x1d5)]=_0x54068f(0x1e2),displayTransactTypeBtn[_0x54068f(0x1d7)][_0x54068f(0x1d5)]=_0x54068f(0x1e2),txtView1[_0x54068f(0x1d7)][_0x54068f(0x1d5)]='none',dataContainer[_0x54068f(0x1d7)]['display']=_0x54068f(0x1f2),console[_0x54068f(0x1ee)](_0x54068f(0x206)));isTransactionHistoryView=!isTransactionHistoryView;};function viewData(){const _0x23b9e0=_0x26e845,_0x4a9f81=rootNodeInput[_0x23b9e0(0x205)][_0x23b9e0(0x1c1)]();if(!isTransactionHistoryView){const _0x13a573=ref(database,_0x23b9e0(0x1df)+userID+'/'+_0x4a9f81+_0x23b9e0(0x1c4));onValue(_0x13a573,_0x71fddd=>{const _0x240513=_0x23b9e0;toggleViewButton['textContent']=_0x240513(0x1c5),txtView[_0x240513(0x1ca)]=_0x240513(0x211),txtView1['style']['display']=_0x240513(0x1e2),displayTransactTypeBtn['style'][_0x240513(0x1d5)]=_0x240513(0x1e2),searchLink[_0x240513(0x1d7)]['display']=_0x240513(0x1e2);const _0x2dad40=_0x71fddd[_0x240513(0x1f8)]();displayMachineData(_0x2dad40,dataContainer);}),console['log'](_0x4a9f81);}else{const _0x3d32d9=ref(database,_0x23b9e0(0x1df)+userID+'/'+_0x4a9f81+'/transactionHistory');onValue(_0x3d32d9,_0x501328=>{const _0x1a3fb8=_0x23b9e0,_0x36fec9=_0x501328[_0x1a3fb8(0x1f8)]();toggleCoinEwalletHistory();}),console[_0x23b9e0(0x1ee)](_0x4a9f81);}}function _0x825f(_0x17ec3b,_0x763027){const _0x49f37c=_0x49f3();return _0x825f=function(_0x825f34,_0x4e7909){_0x825f34=_0x825f34-0x1c1;let _0x33a4ea=_0x49f37c[_0x825f34];return _0x33a4ea;},_0x825f(_0x17ec3b,_0x763027);};let isDisplayEwalletHistory=!![];window[_0x26e845(0x1c7)]=function(){const _0x59f99e=_0x26e845;if(rootNodeInput['value'][_0x59f99e(0x1c1)]()==''){alert(_0x59f99e(0x1f1)),dataContainer[_0x59f99e(0x1d7)][_0x59f99e(0x1d5)]='none',txtView1['style'][_0x59f99e(0x1d5)]=_0x59f99e(0x1e2);return;}else isDisplayEwalletHistory?(displayTransactTypeBtn[_0x59f99e(0x1ca)]='Display\x20Coins',txtView1[_0x59f99e(0x1d7)]['display']=_0x59f99e(0x1f2),dataContainer[_0x59f99e(0x1d7)]['display']='block',txtView1[_0x59f99e(0x1ca)]=_0x59f99e(0x1c6),viewTransactionHistoryType(),console['log'](_0x59f99e(0x203))):(displayTransactTypeBtn[_0x59f99e(0x1ca)]=_0x59f99e(0x1dc),txtView1[_0x59f99e(0x1d7)][_0x59f99e(0x1d5)]=_0x59f99e(0x1f2),dataContainer[_0x59f99e(0x1d7)][_0x59f99e(0x1d5)]=_0x59f99e(0x1f2),txtView1['textContent']='COIN\x20TRANSACTIONS',viewTransactionHistoryType(),console[_0x59f99e(0x1ee)]('Viewing\x20Coins\x20History.'));isDisplayEwalletHistory=!isDisplayEwalletHistory;};function viewTransactionHistoryType(){const _0x23d474=_0x26e845,_0x2b963b=rootNodeInput['value'][_0x23d474(0x1c1)]();if(!isDisplayEwalletHistory){const _0x601686=ref(database,_0x23d474(0x1df)+userID+'/'+_0x2b963b+'/transactionHistory/coins');onValue(_0x601686,_0x5da803=>{const _0x426ea7=_0x23d474,_0x1adfcf=_0x5da803[_0x426ea7(0x1f8)]();displayCoinTransactionData(_0x1adfcf,dataContainer);});}else{const _0x2b6497=ref(database,'users/uid/'+userID+'/'+_0x2b963b+_0x23d474(0x1fd));onValue(_0x2b6497,_0xe715ce=>{const _0x5ea2a1=_0x23d474,_0x2e1355=_0xe715ce[_0x5ea2a1(0x1f8)]();displayTransactionData(_0x2e1355,dataContainer);});}}function _0x49f3(){const _0x1c601a=['Viewing\x20Transaction\x20History.','apsc-database.appspot.com','textContent','object','loginPage','/transactionHistory/eWallet/','reverse','sort','classList','contains','appendChild','searchPopup','toggleView','display','2573974uiazde','style','innerHTML','createElement','apsc-database','3708546ztPpAA','Display\x20E-Wallet','Error:\x20Invalid\x20MachineID','TRANSACTION\x20HISTORY','users/uid/','https://apsc-database-default-rtdb.asia-southeast1.firebasedatabase.app/','Welcome,\x20','none','tbody','16bpjuZm','1366875RmJUHI','authenticatedContent','click','2CxZCwA','7ftKSOD','target','88700VGakuf','table','45fdiIzJ','log','View\x20Machine\x20Data','180aRGUiL','Please\x20enter\x20a\x20machineID!','block','textView','searchBtn','719197Ptlqmy','Logout\x20failed:\x20','getElementById','val','textView1','transactionID','Enter\x20transactionID\x20to\x20search.','slice','/transactionHistory/eWallet','href','10JxoHWf','then','AIzaSyDxeU-bMAf-O0HYhz6X8yhsNPpqe19ld_8','848325536482','Viewing\x20E-Wallet\x20History.','welcomeTxt','value','Viewing\x20Machine\x20Data.','searchIDLink','5910663HPGUUJ','INVALID\x20TRANSACTION\x20ID!','close','length','location','173412DGAcUO','1:848325536482:web:b5397662213154786c0cbb','addEventListener','uid','MACHINE\x20DATA','rootNodeInput','trim','keys','displayTransactionType','/Machine\x20Information','View\x20Transaction\x20History','EWALLET\x20TRANSACTIONS','toggleCoinEwalletHistory'];_0x49f3=function(){return _0x1c601a;};return _0x49f3();};function searchTransactionHistory(){const _0xfeccab=_0x26e845,_0x569a22=rootNodeInput[_0xfeccab(0x205)][_0xfeccab(0x1c1)](),_0x284f3f=document[_0xfeccab(0x1f7)](_0xfeccab(0x1fa))[_0xfeccab(0x205)][_0xfeccab(0x1c1)](),_0x5738ce=ref(database,'users/uid/'+userID+'/'+_0x569a22+_0xfeccab(0x1cd)+_0x284f3f);txtView1[_0xfeccab(0x1ca)]='Transaction\x20ID:\x20'+_0x284f3f,_0x284f3f==''?alert(_0xfeccab(0x1fb)):onValue(_0x5738ce,_0x2c5c06=>{const _0x3db908=_0xfeccab,_0x6ec3f=_0x2c5c06['val']();console[_0x3db908(0x1ee)](_0x6ec3f),_0x6ec3f!=null?(displayMachineData(_0x6ec3f,dataContainer),txtView1[_0x3db908(0x1d7)][_0x3db908(0x1d5)]=_0x3db908(0x1f2)):(alert('Invalid\x20transactionID!'),dataContainer[_0x3db908(0x1ca)]=_0x3db908(0x209),txtView1['style'][_0x3db908(0x1d5)]=_0x3db908(0x1e2));});};searchLink[_0x26e845(0x20f)](_0x26e845(0x1e7),function(){const _0x4aac86=_0x26e845;rootNodeInput[_0x4aac86(0x205)][_0x4aac86(0x1c1)]()==''?(alert('Please\x20enter\x20a\x20MachineID\x20first!'),dataContainer[_0x4aac86(0x1d7)]['display']='none',txtView1[_0x4aac86(0x1d7)][_0x4aac86(0x1d5)]=_0x4aac86(0x1e2)):searchPopup[_0x4aac86(0x1d7)][_0x4aac86(0x1d5)]=_0x4aac86(0x1f2);});function closesearchPopup(){const _0xe391d8=_0x26e845;searchPopup[_0xe391d8(0x1d7)][_0xe391d8(0x1d5)]='none';}document['body'][_0x26e845(0x20f)](_0x26e845(0x1e7),function(_0x4af252){const _0x3be1cc=_0x26e845;_0x4af252[_0x3be1cc(0x1ea)][_0x3be1cc(0x1d0)][_0x3be1cc(0x1d1)](_0x3be1cc(0x20a))&&closesearchPopup();}),window['addEventListener'](_0x26e845(0x1e7),function(_0x118d02){const _0xf7ee4e=_0x26e845;_0x118d02[_0xf7ee4e(0x1ea)]==searchPopup&&closesearchPopup();}),searchBtn['addEventListener']('click',function(){const _0x591a4e=_0x26e845;searchTransactionHistory(),dataContainer[_0x591a4e(0x1d7)]['display']=_0x591a4e(0x1f2),closesearchPopup();});function displayMachineData(_0x4c1395,_0x310153){const _0x19853e=_0x26e845,_0x367c0b=document['createElement'](_0x19853e(0x1ec)),_0x3cc1ee=document['createElement'](_0x19853e(0x1e3));if(_0x4c1395&&typeof _0x4c1395===_0x19853e(0x1cb)){for(const _0x39b919 in _0x4c1395){const _0x673c6f=document[_0x19853e(0x1d9)]('tr'),_0xd8bc39=document[_0x19853e(0x1d9)]('td');_0xd8bc39['textContent']=_0x39b919,_0x673c6f[_0x19853e(0x1d2)](_0xd8bc39);const _0x3da8d8=document[_0x19853e(0x1d9)]('td');typeof _0x4c1395[_0x39b919]===_0x19853e(0x1cb)?displayMachineData(_0x4c1395[_0x39b919],_0x3da8d8):_0x3da8d8[_0x19853e(0x1ca)]=_0x4c1395[_0x39b919],_0x673c6f[_0x19853e(0x1d2)](_0x3da8d8),_0x3cc1ee[_0x19853e(0x1d2)](_0x673c6f);}_0x367c0b[_0x19853e(0x1d2)](_0x3cc1ee),_0x310153[_0x19853e(0x1d8)]='',_0x310153[_0x19853e(0x1d2)](_0x367c0b);}else{const _0x2732c0=document['createElement']('tr'),_0x4132e9=document['createElement']('td');_0x4132e9[_0x19853e(0x1ca)]=_0x19853e(0x1dd),_0x2732c0[_0x19853e(0x1d2)](_0x4132e9),_0x3cc1ee[_0x19853e(0x1d2)](_0x2732c0);}}function displayTransactionData(_0x230b04,_0x56ab2c){const _0x2c246d=_0x26e845,_0x53696c=document[_0x2c246d(0x1d9)](_0x2c246d(0x1ec)),_0x539e1e=document[_0x2c246d(0x1d9)](_0x2c246d(0x1e3));if(_0x230b04&&typeof _0x230b04==='object'){const _0x498b21=Object[_0x2c246d(0x1c2)](_0x230b04)[_0x2c246d(0x1cf)]((_0x9058e2,_0x4222ce)=>_0x4222ce-_0x9058e2),_0x135154=_0x498b21[_0x2c246d(0x1fc)](-0x5)[_0x2c246d(0x1ce)]();for(const _0x149674 of _0x135154){const _0x2b7d10=document[_0x2c246d(0x1d9)]('tr'),_0x24153c=document[_0x2c246d(0x1d9)]('td');_0x24153c[_0x2c246d(0x1ca)]=_0x149674,_0x2b7d10[_0x2c246d(0x1d2)](_0x24153c);const _0x248b40=document[_0x2c246d(0x1d9)]('td'),_0xef4ac=_0x230b04[_0x149674];typeof _0xef4ac===_0x2c246d(0x1cb)?displayTransactionData(_0xef4ac,_0x248b40):_0x248b40['textContent']=_0xef4ac,_0x2b7d10[_0x2c246d(0x1d2)](_0x248b40),_0x539e1e['appendChild'](_0x2b7d10);}}else{const _0x273a27=document[_0x2c246d(0x1d9)]('tr'),_0xb017b0=document['createElement']('td');_0xb017b0[_0x2c246d(0x1ca)]=_0x2c246d(0x1dd),_0x273a27['appendChild'](_0xb017b0),_0x539e1e['appendChild'](_0x273a27);}_0x53696c[_0x2c246d(0x1d2)](_0x539e1e),_0x56ab2c[_0x2c246d(0x1d8)]='',_0x56ab2c[_0x2c246d(0x1d2)](_0x53696c);}function displayCoinTransactionData(_0x46d220,_0x296656){const _0x2accc6=_0x26e845,_0x5cc253=document['createElement']('table'),_0x3ad2d7=document[_0x2accc6(0x1d9)](_0x2accc6(0x1e3));if(_0x46d220&&typeof _0x46d220==='object'){const _0x365b91=Object[_0x2accc6(0x1c2)](_0x46d220)[_0x2accc6(0x1cf)]((_0x3d137e,_0xe0253d)=>_0xe0253d-_0x3d137e),_0x243808=_0x365b91['filter'](_0x49dbb4=>_0x49dbb4[_0x2accc6(0x20b)]>=0xa)[_0x2accc6(0x1fc)](-0x5)[_0x2accc6(0x1ce)]();for(const _0x51604f of _0x243808){const _0x2afb7a=document[_0x2accc6(0x1d9)]('tr'),_0xe6e649=document[_0x2accc6(0x1d9)]('td');_0xe6e649['textContent']=_0x51604f,_0x2afb7a['appendChild'](_0xe6e649);const _0x20b892=document[_0x2accc6(0x1d9)]('td'),_0xd6677f=_0x46d220[_0x51604f];typeof _0xd6677f==='object'?displayTransactionData(_0xd6677f,_0x20b892):_0x20b892[_0x2accc6(0x1ca)]=_0xd6677f,_0x2afb7a[_0x2accc6(0x1d2)](_0x20b892),_0x3ad2d7[_0x2accc6(0x1d2)](_0x2afb7a);}}else{const _0x1459b9=document[_0x2accc6(0x1d9)]('tr'),_0x25d011=document['createElement']('td');_0x25d011[_0x2accc6(0x1ca)]=_0x2accc6(0x1dd),_0x1459b9['appendChild'](_0x25d011),_0x3ad2d7['appendChild'](_0x1459b9);}_0x5cc253[_0x2accc6(0x1d2)](_0x3ad2d7),_0x296656['innerHTML']='',_0x296656[_0x2accc6(0x1d2)](_0x5cc253);}window['logout']=function(){const _0x1718ea=_0x26e845;signOut(auth)[_0x1718ea(0x200)](()=>{})['catch'](_0x365f43=>{const _0x225100=_0x1718ea;console['error'](_0x225100(0x1f6)+_0x365f43['message']);});};
