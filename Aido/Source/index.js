function changePage(bid,aid)
{
    document.getElementById(bid).style.display = "none";
    document.getElementById(aid).style.display = "block";
}
function show(id)
{
    document.getElementById(id).style.display = "block";
}
// ======================================================== bay bong ========================================================
baybong = 0;
function choose(elm)
{
    elm.style.border = "1px solid black";
    elm.onclick = "";
    baybong++;
    if (baybong >= 3) show('mess-bay-bong');
}
// ======================================================== thu thai ========================================================
meow = 0;
function playThuThai(id)
{
    meow++;
    if(meow >= 11)
    {
        document.getElementById('meow-said-thuthai').style.display = "block";
    }
    document.getElementById(id).play();
}
function startThuThai(idx,idy)
{
    playThuThai(idx);
    playThuThai(idy);
}
function endThuThai(idx,idy)
{
    if (meow<11) show(idx);
    playThuThai(idy);
}
// ====================================================== ngot ngao ======================================================
filmstt = 1;
function moveNgotNgao(elm)
{
    if (filmstt) 
    {
        filmstt = 0;
        elm.style.left = "60%";
    } else
    {
        filmstt = 1;
        elm.style.left = "10%";
    }
}
// ====================================================== May Man ======================================================
luck = 0;
stt = 0;
MayMan = 0;
function checkMayMan(id,loc)
{
    luck++;
    if (luck<=10)
    {
        if (loc == 0) document.getElementById(id).style.top = '10%';
        else document.getElementById(id).style.top = '60%';
    } else
    {
        if (stt != loc) 
        {
            MayMan = 1;
            document.getElementById('door1-mayman').style.transform = "rotateY(180deg)";
            document.getElementById('door2-mayman').style.transform = "rotateY(180deg)";
            show('mess-may-man');
        }   
    }
}
function setMayMan(id)
{
    if (MayMan == 1) return;
    stt = Math.floor(Math.random()*2);
    if (stt == 0)  document.getElementById(id).style.top = '10%';
    else  document.getElementById(id).style.top = '60%';
    console.log(stt);
}
// ====================================================== Vung Vang ======================================================
lineVungVang = 2;
spaceVungVang = 0;
function checkVungVang(sts,stl)
{
    console.log(sts+' '+stl);
    if (stl!=0) lineVungVang = stl;
    if (sts!=0) spaceVungVang = sts;
    if (lineVungVang == 1 || spaceVungVang == 2) showVungVang();
    if (lineVungVang == 2 && spaceVungVang == 1) hideVungVang();
}
function showVungVang()
{
    idx = 'pivot-vungvang';
    idy = 'happy-vungvang';
    document.getElementById(idx).style.display = 'block';
    document.getElementById(idy).style.display = 'block';
}
function hideVungVang()
{
    idx = 'pivot-vungvang';
    idy = 'happy-vungvang';
    document.getElementById(idx).style.display = 'none';
    document.getElementById(idy).style.display = 'none';
}
function endVungVang()
{
    show('mess-vung-vang');
    document.getElementById('road-vungvang').style.width = "400px";
}