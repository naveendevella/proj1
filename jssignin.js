function fun1()
	{
	var u1=document.f1.us1.value;
	var p1=document.f1.ps1.value;
	var rp=document.f1.rps.value;
	var e1=document.f1.em1.value;
	
	if(p1!=rp)
	{
		alert("password should be same");
	}
	if(u1=="" ||u1==null)
	{
		alert("enter name");
	}
    else if(p1=="" ||p1==null)
	{
		alert("enter password");
	}
    else if(rp=="" ||rp==null)
	{
		alert("enter repeated password");
	}
    else if(e1=="" ||e1==null)
	{
		alert("enter email");
	}


	}
    function fun2()
    {
    var u2=document.f2.us2.value;
	var p2=document.f2.ps2.value;
    if(u2=="" ||u2==null)
	{
		alert("enter name");
	}
    else if(p2=="" ||p2==null)
	{
		alert("enter password");
	}
    }
    function fun3()
    {
    var e2=document.f3.em2.value;
    if(e2=="" ||e2==null)
	{
		alert("enter email");
	}
    }