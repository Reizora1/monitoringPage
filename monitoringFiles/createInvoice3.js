function _0x479c(){const _0x425aaa=['387786msqsSA','log','json','1652238qNFxFf','Redirecting\x20to\x20checkout\x20url.\x0aTransaction\x20ID:\x20','PHP','selectedEwallet','mobileNo','Please\x20input\x20the\x20minimum\x20amount\x20required\x20for\x20the\x20transaction.','error','Error\x20creating\x20invoice:','27dseWTC','131120IXksla','708236DEFLjZ','machineTest3','https://api.xendit.co/v2/invoices','4doeBFd','Invoice\x20Demo\x20#123','14709630zUMyiI','value','btoa','getElementById','amount','Please\x20select\x20an\x20eWallet\x20for\x20the\x20payment.','base64','POST','application/json','3bCUZRI','1691672oxrueX','invoice_url','toString','href','xnd_development_pBpucoqdlThPhCFsJixhcQh0SCVIBnTAS8JNiDPKtJaWbZSEKd78AYwqiPcKs','1497538kuJRgO'];_0x479c=function(){return _0x425aaa;};return _0x479c();}function _0x3223(_0x299d47,_0x220e5f){const _0x479ce2=_0x479c();return _0x3223=function(_0x322397,_0x4ba9cf){_0x322397=_0x322397-0x135;let _0x3654f5=_0x479ce2[_0x322397];return _0x3654f5;},_0x3223(_0x299d47,_0x220e5f);}(function(_0x515424,_0x571d9e){const _0x94addd=_0x3223,_0x59fbb3=_0x515424();while(!![]){try{const _0x99b31d=-parseInt(_0x94addd(0x140))/0x1+parseInt(_0x94addd(0x14d))/0x2*(parseInt(_0x94addd(0x139))/0x3)+-parseInt(_0x94addd(0x150))/0x4*(-parseInt(_0x94addd(0x14c))/0x5)+-parseInt(_0x94addd(0x143))/0x6+-parseInt(_0x94addd(0x13f))/0x7+-parseInt(_0x94addd(0x13a))/0x8*(parseInt(_0x94addd(0x14b))/0x9)+parseInt(_0x94addd(0x152))/0xa;if(_0x99b31d===_0x571d9e)break;else _0x59fbb3['push'](_0x59fbb3['shift']());}catch(_0x17acb3){_0x59fbb3['push'](_0x59fbb3['shift']());}}}(_0x479c,0x52f7b));async function createInvoice(){const _0x2e18f5=_0x3223,_0x15adb3=_0x2e18f5(0x13e),_0x5797d5=document[_0x2e18f5(0x155)](_0x2e18f5(0x156))[_0x2e18f5(0x153)],_0xc2c909=document['getElementById'](_0x2e18f5(0x147))[_0x2e18f5(0x153)],_0x5f25ff=document[_0x2e18f5(0x155)](_0x2e18f5(0x146)),_0x50114e=_0x5f25ff['value'];if(_0x5797d5=='')alert('Please\x20input\x20amount\x20for\x20the\x20payment.');else{if(_0x5797d5<0xa)alert(_0x2e18f5(0x148));else{if(_0x50114e=='')alert(_0x2e18f5(0x135));else{const _0x580f2e={'external_id':_0x2e18f5(0x14e),'amount':_0x5797d5,'description':_0x2e18f5(0x151),'invoice_duration':0x12c,'currency':_0x2e18f5(0x145),'payment_methods':[_0x50114e],'customer':{'mobile_number':_0xc2c909}};try{const _0x211bfd=await fetch(_0x2e18f5(0x14f),{'method':_0x2e18f5(0x137),'headers':{'Content-Type':_0x2e18f5(0x138),'Authorization':'Basic\x20'+window[_0x2e18f5(0x154)](_0x15adb3+':')[_0x2e18f5(0x13c)](_0x2e18f5(0x136))},'body':JSON['stringify'](_0x580f2e)}),_0x538778=await _0x211bfd[_0x2e18f5(0x142)]();console[_0x2e18f5(0x141)]('Invoice\x20created\x20successfully:',_0x538778);let _0x4bc7a4=_0x2e18f5(0x144)+_0x538778['id'];alert(_0x4bc7a4),window['location'][_0x2e18f5(0x13d)]=_0x538778[_0x2e18f5(0x13b)];}catch(_0x2e28e4){console[_0x2e18f5(0x149)](_0x2e18f5(0x14a),_0x2e28e4);}}}}}
