const accessKey="Wb6qsTF9_PQOl2cYl-tiEgUnpPQz26q66268d4CsOPs";
const searchform=document.getElementById("search-form");
const searchbox=document.getElementById("searchbox");
const searchhresult=document.getElementById("search-result");
const showmore=document.getElementById("show-more");

let keyword="";
let page=1;
async function searchImage(){
    keyword=searchbox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`
    const response=await fetch(url);
    const data=await response.json();
    if(page==1){
        searchhresult.innerHTML="";
    }
    console.log(data);
    const results=data.results;
    results.map((result)=>{
        const image=document.createElement("img");
        image.src=result.urls.small;
        const imageLink=document.createElement("a");
        imageLink.href=result.links.html;
        imageLink.target="_blank";

        imageLink.appendChild(image);
        searchhresult.appendChild(imageLink);

    })
    showmore.style.display="block";
}
searchform.addEventListener("submit",(e)=>{

    e.preventDefault();
    page=1;
    searchImage();
})
showmore.addEventListener("click",()=>{
    page++;
    searchImage();
})