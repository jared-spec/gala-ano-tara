/* ===== DATA ===== */
const allSpots=[];
function S(id,name,region,location,rating,reviews,price,desc,hl,e,near){
  allSpots.push({id,name,region,location,img:"",rating,reviews,price,desc,highlights:hl.split("|"),
    expenses:{airfare:e[0],hotel:e[1],food:e[2],transport:e[3],activities:e[4],misc:e[5]},nearTo:near.split("|")});
}
// img: "" shows a gradient. Paste an Unsplash URL into any spot's img to show a photo.
S(1,"Banaue Rice Terraces","Luzon","Ifugao Province",4.8,2340,3500,"Often called the “Eighth Wonder of the World,” these 2,000-year-old terraces were carved into the mountains by ancestors of the Ifugao people. A UNESCO World Heritage Site.","UNESCO Heritage|Hiking Trails|Cultural Tours|Photography",[2500,1200,800,500,800,500],"Baguio City|Laguna|Metro Manila|Pampanga|Quezon Province");
S(2,"Vigan Heritage City","Luzon","Ilocos Sur",4.6,1890,2500,"A UNESCO World Heritage Site known for its preserved Spanish colonial architecture, cobblestone streets, and horse-drawn carriages (kalesa).","Kalesa Ride|Calle Crisologo|Empanada|Heritage Walk",[2000,1000,600,400,500,400],"Ilocos Norte|Baguio City|Pampanga|Metro Manila|Zambales");
S(3,"Mayon Volcano","Luzon","Albay, Bicol",4.7,1560,3000,"Famous for its near-perfect cone shape, Mayon is the most active volcano in the Philippines. Enjoy ATV adventures at its base and the stunning Cagsawa Ruins.","ATV Adventure|Cagsawa Ruins|Zipline|Bicol Cuisine",[2200,1100,700,500,900,400],"Laguna|Batangas|Metro Manila|Quezon Province");
S(4,"Batanes Islands","Luzon","Batanes Province",4.9,980,8000,"The northernmost province of the Philippines, known for its rolling hills, stone houses, lighthouses, and dramatic cliffs overlooking the Pacific.","Rolling Hills|Stone Houses|Lighthouse|Honesty Store",[5000,2000,1000,600,800,600],"Ilocos Norte|Baguio City|Metro Manila");
S(5,"Sagada","Luzon","Mountain Province",4.7,1420,3200,"A mountain town famous for its hanging coffins, stunning caves, and breathtaking sunrise at Kiltepan Peak.","Hanging Coffins|Sumaguing Cave|Kiltepan Sunrise|Echo Valley",[2000,1000,700,600,700,500],"Baguio City|Ilocos Norte|Metro Manila|Pampanga");
S(6,"Hundred Islands","Luzon","Pangasinan",4.5,1100,2200,"A national park consisting of 124 islands and islets. Perfect for island hopping, snorkeling, and kayaking.","Island Hopping|Snorkeling|Kayaking|Zipline",[1500,900,600,400,600,400],"Pampanga|Zambales|Baguio City|Metro Manila|Laguna");
S(7,"Chocolate Hills","Visayas","Bohol",4.7,2100,2800,"Over 1,200 perfectly cone-shaped hills that turn brown during dry season, resembling giant chocolate kisses.","Viewing Deck|Tarsier Sanctuary|Loboc River|Panglao Beach",[2500,1200,700,500,600,400],"Cebu City|Bohol|Dumaguete City|Tacloban City");
S(8,"Boracay White Beach","Visayas","Aklan",4.8,5200,5000,"World-famous for its powdery white sand and turquoise waters. Enjoy water sports, vibrant nightlife, and stunning sunsets.","White Beach|Island Hopping|Parasailing|Nightlife",[3000,2000,1000,400,1200,600],"Iloilo City|Bacolod City|Cebu City|Dumaguete City");
S(9,"Oslob Whale Sharks","Visayas","Cebu",4.6,3400,3200,"Swim alongside gentle whale sharks in their natural habitat. A once-in-a-lifetime experience.","Whale Shark Swim|Tumalog Falls|Sumilon Island|Snorkeling",[2500,1200,700,600,1000,500],"Cebu City|Bohol|Dumaguete City|Tacloban City");
S(10,"Kawasan Falls","Visayas","Badian, Cebu",4.8,2800,2500,"A multi-layered waterfall with stunning turquoise pools perfect for canyoneering adventures.","Canyoneering|Swimming|Bamboo Rafting|Cliff Jumping",[2500,1100,600,500,900,400],"Cebu City|Bohol|Dumaguete City");
S(11,"Siquijor Island","Visayas","Siquijor",4.6,890,2600,"Known as the “Island of Fire,” a mystical island with enchanting waterfalls, century-old trees, and white sand beaches.","Cambugahay Falls|Salagdoong Beach|Old Balete Tree|Cliff Diving",[2200,1000,600,400,600,400],"Dumaguete City|Cebu City|Bohol|Bacolod City");
S(12,"Kalanggaman Island","Visayas","Leyte",4.8,760,2400,"A pristine uninhabited island famous for its long white sandbar stretching into crystal-clear waters.","White Sandbar|Camping|Snorkeling|Sunrise View",[2800,800,500,600,500,400],"Tacloban City|Cebu City|Bohol");
S(13,"Enchanted River","Mindanao","Surigao del Sur",4.9,1800,4200,"A deep spring river with mesmerizing blue waters so clear you can see the bottom. Locals believe it is enchanted by supernatural beings.","Swimming|Fish Feeding|Cave Exploration|Photography",[3500,1200,700,500,600,500],"Surigao City|Butuan City|Davao City|Cagayan de Oro");
S(14,"Siargao Island","Mindanao","Surigao del Norte",4.9,4100,5500,"The surfing capital of the Philippines! Known for Cloud 9 waves, island hopping, lagoons, and a laid-back island lifestyle.","Cloud 9 Surfing|Island Hopping|Sugba Lagoon|Coconut Road",[4000,1800,900,500,1000,600],"Surigao City|Butuan City|Cagayan de Oro|Davao City");
S(15,"Camiguin Island","Mindanao","Camiguin Province",4.7,1200,3800,"The “Island Born of Fire” with more volcanoes per square kilometer than any other island. Features hot springs, waterfalls, and the sunken cemetery.","Sunken Cemetery|White Island|Katibawasan Falls|Hot Springs",[3200,1200,700,400,700,500],"Cagayan de Oro|Butuan City|Davao City");
S(16,"Dahilayan Adventure Park","Mindanao","Bukidnon",4.5,960,2800,"Home to Asia’s longest dual zipline at 840 meters! Enjoy the cool mountain climate, pine forests, and thrilling outdoor activities.","Dual Zipline|Rope Course|Horseback Riding|Pine Forest",[2500,1000,600,500,900,400],"Cagayan de Oro|Davao City|Butuan City|General Santos City");
S(17,"Samal Island","Mindanao","Davao del Norte",4.6,1350,2500,"A tropical island paradise just minutes from Davao City. Known for white sand beaches, coral gardens, and the famous Monfort Bat Cave.","Beach Resorts|Monfort Bat Cave|Coral Garden|Hagimit Falls",[2000,1200,600,300,600,400],"Davao City|General Santos City|Cagayan de Oro");
S(18,"Tinuy-an Falls","Mindanao","Surigao del Sur",4.7,890,3500,"Known as the “Niagara Falls of the Philippines,” this majestic curtain waterfall spans 95 meters wide and drops 55 meters across three tiers.","Bamboo Raft Ride|Swimming|Photography|Nature Trek",[3200,1000,600,500,500,400],"Surigao City|Butuan City|Davao City");

const agencies=[
 {name:"Island Hoppers PH",emoji:"🌊",color:"#d6f1f5",rating:4.9,reviews:1240,desc:"Island hopping tours across Visayas and Palawan",tags:["Palawan","Boracay","Cebu","Bohol"],phone:"+63 917 123 4567",email:"book@islandhoppersph.com",regions:["Visayas","Luzon"]},
 {name:"Trek Philippines",emoji:"🏔️",color:"#dff3e1",rating:4.8,reviews:890,desc:"Adventure and eco-tourism specialists",tags:["Banaue","Batanes","Mt. Pulag","Sagada"],phone:"+63 928 765 4321",email:"info@trekphilippines.com",regions:["Luzon"]},
 {name:"Surf & Sun Tours",emoji:"🏄",color:"#fff0cc",rating:4.7,reviews:670,desc:"Siargao, Zambales, La Union surf trips",tags:["Siargao","La Union","Zambales"],phone:"+63 935 111 2233",email:"hello@surfsuntours.ph",regions:["Mindanao","Luzon"]},
 {name:"Kultura Travel Co.",emoji:"🎭",color:"#f8dfe9",rating:4.8,reviews:1050,desc:"Cultural and heritage tours",tags:["Vigan","Intramuros","Zamboanga","Festivals"],phone:"+63 906 888 9900",email:"tours@kulturatravel.ph",regions:["Luzon","Visayas","Mindanao"]},
 {name:"Deep Blue Dive PH",emoji:"🤿",color:"#d9e6fb",rating:4.9,reviews:780,desc:"Premier diving and snorkeling tours",tags:["Tubbataha","Coron","Oslob","Apo Reef"],phone:"+63 919 555 6677",email:"dive@deepblueph.com",regions:["Visayas","Luzon"]},
 {name:"Lakad Pilipinas Tours",emoji:"🚐",color:"#ffe3d6",rating:4.6,reviews:1430,desc:"Budget-friendly group tours and DIY packages",tags:["Nationwide","Budget","Group Tours","DIY"],phone:"+63 912 333 4455",email:"book@lakadpilipinas.com",regions:["Luzon","Visayas","Mindanao"]},
 {name:"Mindanao Explorer",emoji:"🌿",color:"#dcf2e8",rating:4.7,reviews:560,desc:"Specialists in Mindanao adventures",tags:["Siargao","Enchanted River","Camiguin","Bukidnon"],phone:"+63 945 222 3344",email:"explore@mindanaoexplorer.ph",regions:["Mindanao"]},
 {name:"Cebu Pacific Tours",emoji:"✈️",color:"#e5e2fa",rating:4.5,reviews:2100,desc:"Affordable fly-and-tour packages",tags:["Boracay","Palawan","Cebu","Siargao"],phone:"+63 932 444 5566",email:"tours@cebupackages.ph",regions:["Luzon","Visayas","Mindanao"]}
];

// Places users can pick as their starting point: [latitude, longitude]. Add more towns here anytime.
const PLACES={"Metro Manila":[14.6,121.0],"Quezon City":[14.68,121.04],"Makati":[14.55,121.02],"Cavite":[14.28,120.9],"Rizal":[14.6,121.3],"Laguna":[14.27,121.41],"Batangas":[13.76,121.06],"Quezon Province":[13.95,121.6],"Bulacan":[14.85,120.85],"Pampanga":[15.05,120.7],"Bataan":[14.68,120.5],"Tarlac":[15.48,120.6],"Nueva Ecija":[15.5,121.0],"Zambales":[15.33,119.98],"Pangasinan":[16.04,120.33],"La Union":[16.62,120.32],"Baguio City":[16.41,120.6],"Ilocos Norte":[18.2,120.59],"Vigan":[17.57,120.39],"Tuguegarao":[17.61,121.73],"Calapan":[13.41,121.18],"Legazpi":[13.14,123.74],"Naga City":[13.62,123.18],"Puerto Princesa":[9.74,118.74],
"Cebu City":[10.32,123.89],"Lapu-Lapu":[10.31,123.95],"Bohol":[9.65,123.85],"Dumaguete City":[9.31,123.3],"Tacloban City":[11.24,125.0],"Ormoc":[11.0,124.6],"Catbalogan":[11.78,124.88],"Iloilo City":[10.72,122.56],"Bacolod City":[10.68,122.95],"Kalibo":[11.7,122.37],"Roxas City":[11.58,122.75],
"Davao City":[7.07,125.61],"Tagum":[7.45,125.8],"Kidapawan":[7.01,125.09],"General Santos City":[6.11,125.17],"Koronadal":[6.5,124.85],"Cagayan de Oro":[8.48,124.65],"Iligan":[8.23,124.24],"Malaybalay":[8.15,125.13],"Surigao City":[9.78,125.49],"Butuan City":[8.95,125.54],"Zamboanga City":[6.91,122.08],"Cotabato City":[7.22,124.25],"Pagadian":[7.83,123.44],"Dipolog":[8.59,123.34]};
const SPOT_XY={1:[16.918,121.054],2:[17.5747,120.3869],3:[13.2575,123.6856],4:[20.4487,121.971],5:[17.0826,121.006],6:[16.1975,119.9453],7:[9.7985,124.1312],8:[11.9674,121.9248],9:[9.4618,123.3879],10:[9.8108,123.3862],11:[9.1985,123.595],12:[11.16,124.35],13:[8.1253,126.1947],14:[9.8482,126.0458],15:[9.1733,124.722],16:[8.2833,124.9167],17:[7.0833,125.7167],18:[8.2,126.2167]};
allSpots.forEach(s=>{[s.lat,s.lng]=SPOT_XY[s.id]});
const MANILA=[14.5995,120.9842];
// rough island code so we know when a land route is possible: L=Luzon, C=Cebu, B=Bohol, M=Mindanao, V=other
const island=(a,b)=>a>=13&&b>=119.7?"L":a>=9.4&&a<=11.4&&b>=123.3&&b<=124.1&&!(a<10&&b>123.7)?"C":a>=9.5&&a<=10.2&&b>=123.7&&b<=124.7?"B":(a<9.9&&b>=124.2)||(a<9&&b>=122)?"M":"V";
// price presets [hotel b,b,m,m,l,l, food b,b,m,m,l,l] (PHP per night / per day)
const HP=[[500,1000,1500,3000,4000,10000,200,400,500,1000,1500,3000],[600,1200,2000,4500,5000,15000,250,450,600,1200,1800,4000],[600,1200,2000,4000,6000,15000,250,450,600,1200,1800,4000],[800,1500,2500,5000,8000,25000,300,500,800,1500,2000,5000],[800,1500,2500,5000,6000,12000,300,500,700,1300,1800,4000]];
// X(id, preset, flight[min,max]|0, land island code|"", ferry[min,max]|0, local/day[min,max], activities[[name,min,max]], entrance[min,max], misc[min,max])
function X(id,p,air,land,ferry,local,acts,ent,misc){
  const s=allSpots.find(q=>q.id===id),h=HP[p];s.land=land;
  s.expenseDetails={
    transport:{flight:air&&{min:air[0],max:air[1],note:"Round trip airfare from Manila"},bus:land?{note:"Priced per kilometre from your location"}:null,ferry:ferry&&{min:ferry[0],max:ferry[1],note:"Round trip ferry from the nearest port"},local:{min:local[0],max:local[1],note:"Tricycle / habal-habal / van per day"}},
    accommodation:{budget:{min:h[0],max:h[1],note:"Hostels, homestays"},midrange:{min:h[2],max:h[3],note:"3-star hotels, Airbnb"},luxury:{min:h[4],max:h[5],note:"Resorts, 4-5 star hotels"}},
    food:{budget:{min:h[6],max:h[7],note:"Carinderias, street food"},midrange:{min:h[8],max:h[9],note:"Local restaurants"},luxury:{min:h[10],max:h[11],note:"Fine dining, resort restaurants"}},
    activities:acts.map(([name,min,max])=>({name,min,max,note:"Per person"})),entranceFees:{min:ent[0],max:ent[1]},miscellaneous:{min:misc[0],max:misc[1],note:"Souvenirs, tips, emergency fund"}};
}
X(1,0,0,"L",0,[300,600],[["Rice terraces tour",800,1500],["Batad hike",500,1000],["Cultural show",200,500],["Local guide (per day)",500,1000]],[50,150],[500,1500]);
X(2,0,[2500,4500],"L",0,[300,600],[["Kalesa ride",150,300],["Heritage walking tour",300,600],["Pottery (Pagburnayan) visit",100,300]],[50,150],[500,1500]);
X(3,1,[2500,5000],"L",0,[300,700],[["ATV adventure",700,1500],["Cagsawa Ruins & Mayon tour",1000,1800],["Zipline",400,800]],[20,100],[500,1500]);
X(4,4,[5000,12000],"",0,[300,500],[["North Batan tour",2000,3000],["South Batan tour",2000,3000],["Sabtang tour",2500,3500]],[100,300],[800,2000]);
X(5,0,0,"L",0,[300,600],[["Sumaguing Cave tour",500,800],["Kiltepan sunrise trip",500,1000],["Hanging coffins guide",200,500]],[50,150],[500,1500]);
X(6,0,0,"L",0,[200,400],[["Island hopping boat",1500,2500],["Kayaking",300,500],["Zipline",150,300]],[50,150],[300,1000]);
X(7,1,[2500,5000],"B",[600,1500],[300,800],[["Countryside tour",800,1500],["Loboc River cruise",550,800],["Tarsier sanctuary",60,100],["Panglao island hopping",1000,2000]],[50,150],[500,1500]);
X(8,3,[3000,6000],"",[1800,3000],[100,300],[["Island hopping",1500,2500],["Parasailing",2500,3500],["Helmet diving",800,1200],["Sunset sailing",1000,2000]],[100,300],[800,2500]);
X(9,1,[2500,5000],"C",[500,1200],[300,700],[["Whale shark watching",1000,1500],["Tumalog Falls",50,100],["Sumilon Island trip",800,1500],["Snorkeling gear",150,300]],[50,150],[500,1500]);
X(10,1,[2500,5000],"C",0,[300,700],[["Canyoneering",1200,1800],["Bamboo rafting",150,300],["Cliff jumping & swimming",100,300]],[50,150],[500,1500]);
X(11,1,[2500,5500],"",[600,1500],[300,600],[["Island tour (van/motorbike)",1200,2000],["Cambugahay Falls",50,100],["Cliff diving",100,300]],[50,150],[500,1500]);
X(12,1,[2800,5000],"",[500,1500],[300,700],[["Island boat tour",1500,2500],["Camping fee",100,300],["Snorkeling gear",150,300]],[100,300],[500,1500]);
X(13,0,[3500,6500],"M",0,[300,600],[["Cave exploration",200,500],["Boat / habal-habal ride",300,600]],[100,200],[500,1500]);
X(14,2,[4000,8000],"",[800,1800],[350,500],[["Surfing lesson",500,800],["Island hopping",1500,2000],["Sugba Lagoon",300,500],["Sohoton Cove tour",1800,2500]],[50,200],[800,2000]);
X(15,1,[3200,6000],"",[600,1500],[300,600],[["Island tour (van/tricycle)",1000,1800],["White Island boat",300,600],["Sunken cemetery trip",200,400],["Hot springs",100,300]],[50,150],[500,1500]);
X(16,1,[2500,5000],"M",0,[300,600],[["Dual zipline",800,1200],["Rope course",300,600],["Horseback riding",200,400]],[100,200],[500,1500]);
X(17,1,[2000,4500],"",[100,300],[300,600],[["Island hopping",1500,2500],["Monfort Bat Cave",100,200],["Hagimit Falls",100,200]],[50,150],[400,1200]);
X(18,0,[3200,6000],"M",0,[300,600],[["Bamboo raft ride",50,150],["Habal-habal to the falls",200,400],["Guided nature trek",200,500]],[50,100],[300,1000]);
// where the user is traveling from: [lat,lng] (picked place or GPS)
const me=()=>user.lat!=null?[user.lat,user.lng]:PLACES[user.loc];
// Haversine distance in km between two coordinates
const hav=(a,b,c,d)=>{const R=Math.PI/180,x=Math.sin((c-a)*R/2)**2+Math.cos(a*R)*Math.cos(c*R)*Math.sin((d-b)*R/2)**2;return Math.round(12742*Math.asin(Math.sqrt(x)))};
const km=s=>hav(...me(),s.lat,s.lng);
const ICON={Luzon:"🏔️",Visayas:"🏝️",Mindanao:"🌴"};
const INFO={Luzon:"Mountains, heritage towns and volcanoes in the north.",Visayas:"White-sand beaches, waterfalls and island adventures.",Mindanao:"Surf, rivers, and wild adventures in the south."};

/* ===== STATE & HELPERS ===== */
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const fmt=n=>"₱"+Math.round(n).toLocaleString("en-PH");
let user=null,favs=[],agF="All",tt,gps=null,actOff=new Set();
try{user=JSON.parse(localStorage.getItem("lp_user"));favs=JSON.parse(localStorage.getItem("lp_favs"))||[]}catch(e){}
const save=()=>{try{localStorage.setItem("lp_user",JSON.stringify(user));localStorage.setItem("lp_favs",JSON.stringify(favs))}catch(e){}};
function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("show");clearTimeout(tt);tt=setTimeout(()=>t.classList.remove("show"),3000)}
function soon(){toast("Coming soon!");return false}

const dc=s=>{const d=km(s);return d<200?"near":d<=500?"medium":"far"};
const score=s=>Math.max(0,100-km(s)/10)+s.rating*15+Math.min(s.reviews/100,20)+Math.max(0,30-s.price/500);
const match=s=>Math.min(99,Math.round(score(s)/225*100));
const stars=s=>`<span class="star">★</span> ${s.rating} <small>(${s.reviews.toLocaleString()})</small>`;
const pic=s=>`<div class="pic ${s.region}">${s.img?`<img src="${s.img}" alt="${s.name}" loading="lazy" onerror="this.remove()">`:""}<span>${ICON[s.region]}</span>`;
const card=(s,i=0,m)=>`<div class="card" style="animation-delay:${i*60}ms" onclick="openSpot(${s.id})">${pic(s)}${m?`<span class="match-badge">${m}% Match</span>`:""}<button class="heart" onclick="fav(${s.id},event)">${favs.includes(s.id)?"❤️":"🤍"}</button></div><div class="cb"><h3>${s.name}</h3><p class="loc">📍 ${s.location}</p><p><span class="distance-badge ${dc(s)}">📍 ~${km(s).toLocaleString()} km from you</span></p><p>${stars(s)}</p><p>From <span class="price">${fmt(s.price)}</span></p></div></div>`;
const grid=(list,m)=>`<div class="grid">${list.map((s,i)=>card(s,i,m&&match(s))).join("")}</div>`;

function fav(id,e){
  e.stopPropagation();
  const had=favs.includes(id);
  favs=had?favs.filter(x=>x!==id):[...favs,id];save();
  document.querySelectorAll(`[onclick="fav(${id},event)"]`).forEach(b=>b.textContent=had?"🤍":"❤️");
  toast(had?"Removed from favorites":"Added to favorites!");
}

/* ===== PAGES ===== */
const PAGES={
 home(){
  const near=[...allSpots].sort((a,b)=>km(a)-km(b)).slice(0,6),perf=[...allSpots].sort((a,b)=>score(b)-score(a)).slice(0,4);
  const top=[...allSpots].sort((a,b)=>b.rating-a.rating||b.reviews-a.reviews).slice(0,6);
  const fv=allSpots.filter(s=>favs.includes(s.id));
  return `<section class="hero"><h1>Mabuhay, ${esc(user.name)}! 👋</h1><p>Discover ${allSpots.length} dream destinations across the Philippines</p><input id="q" placeholder="🔍 Search spots, places or activities..." oninput="search(this.value)"></section>
  <div class="wrap"><div id="res"></div><div id="main">
   <h2>Explore by Island Group</h2><div class="grid">${["Luzon","Visayas","Mindanao"].map(r=>`<div class="card rc ${r}" onclick="go('${r}')"><div class="big">${ICON[r]}</div><h3>${r}</h3><p>${INFO[r]}</p><p><b>${allSpots.filter(s=>s.region===r).length} spots</b></p></div>`).join("")}</div>
   ${fv.length?`<h2>❤️ Your Favorites</h2>${grid(fv)}`:""}
   <h2 title="Recommendations based on your location, ratings, and estimated budget">🎯 Perfect For You</h2><p class="sub">Recommendations based on your location, ratings, and estimated budget</p>${grid(perf,true)}
   <h2>📍 Near You</h2><p class="sub">Based on your location in ${esc(user.loc)}</p>${grid(near)}
   <h2>⭐ Top Rated</h2>${grid(top)}</div></div>`;
 },
 expenses(){
  return `<div class="wrap"><h2>💰 Trip Budget Calculator</h2><p class="sub">Estimates start from ${esc(user.loc)}.<br>📌 <b>Note:</b> All expenses shown are estimated and tentative only. Actual costs may vary depending on season, availability, travel dates, booking platform, and personal preferences.</p>
  <div class="calc"><div class="panel"><label>Destination<select id="ed" onchange="calc(1)">${allSpots.map(s=>`<option value="${s.id}">${s.name} — ${s.region}</option>`).join("")}</select></label>
  <label>Travelers<input id="et" type="number" min="1" max="20" value="2" oninput="calc()"></label>
  <label>Number of days<input id="edy" type="number" min="1" max="30" value="3" oninput="calc()"></label>
  <label>Travel style<select id="es" onchange="calc()"><option value="budget">🎒 Budget</option><option value="midrange" selected>🏨 Mid-Range</option><option value="luxury">✨ Luxury</option></select></label>
  <label>Travel mode<select id="em" onchange="calc()"></select></label>
  <label>Show prices<select id="ev" onchange="calc()"><option value="person">Per person</option><option value="group">Whole group</option></select></label></div><div class="panel" id="eres"></div></div></div>`;
 },
 agencies(){
  return `<div class="wrap"><h2>🧭 Trusted Tour Agencies</h2><p class="sub">Book with local experts who know the islands best.</p>
  <div class="chips">${["All","Luzon","Visayas","Mindanao"].map(r=>`<button class="${r===agF?"on":""}" onclick="agF='${r}';go('agencies')">${r}</button>`).join("")}</div>
  <div class="grid">${agencies.filter(a=>agF==="All"||a.regions.includes(agF)).map((a,i)=>`<div class="card ag" style="animation-delay:${i*60}ms"><div class="al" style="background:${a.color}">${a.emoji}</div><h3>${a.name}</h3><p>${stars(a)}</p><p>${a.desc}</p><div>${a.tags.map(t=>`<span class="pill">${t}</span>`).join("")}</div><p><small>Covers: ${a.regions.join(", ")}</small></p><p>📞 <a href="tel:${a.phone.replace(/\s/g,"")}">${a.phone}</a></p><p>📧 <a href="mailto:${a.email}">${a.email}</a></p></div>`).join("")}</div></div>`;
 }
};
["Luzon","Visayas","Mindanao"].forEach(r=>PAGES[r]=()=>`<div class="wrap"><div class="bar"><div><h2>${ICON[r]} ${r}</h2><p class="sub">${INFO[r]}</p></div><select onchange="sortRegion('${r}',this.value)"><option value="near">Nearest to me</option><option value="rating">Top rated</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option></select></div><div id="rg">${grid(allSpots.filter(s=>s.region===r).sort((a,b)=>km(a)-km(b)))}</div></div>`);
function sortRegion(r,v){
  const l=allSpots.filter(s=>s.region===r).sort((a,b)=>v==="near"?km(a)-km(b):v==="low"?a.price-b.price:v==="high"?b.price-a.price:b.rating-a.rating);
  $("#rg").innerHTML=grid(l);
}
function search(v){
  v=v.trim().toLowerCase();$("#main").hidden=!!v;
  const r=allSpots.filter(s=>(s.name+" "+s.location+" "+s.region+" "+s.highlights.join(" ")).toLowerCase().includes(v));
  $("#res").innerHTML=v?`<h2>${r.length} result${r.length===1?"":"s"}</h2>${r.length?grid(r):""}`:"";
}
/* ===== EXPENSE ESTIMATOR ===== */
const MODE={air:"✈️ By Air",land:"🚌 By Land (Bus/Van)",ferry:"⛴️ By Sea (Ferry)"};
const rr=(a,b)=>a===b?fmt(a):fmt(a)+" – "+fmt(b);
function modes(s){ // only the travel modes that make sense for this spot and the user's location
  const d=km(s),x=s.expenseDetails.transport,land=s.land&&s.land===island(...me()),m=[];
  if(x.flight&&d>=100&&!(land&&d<300))m.push("air");
  if(land)m.push("land");
  if(x.ferry&&d<=450)m.push("ferry");
  return m.length?m:["air"];
}
function estimate(s,o){
  const d=km(s),x=s.expenseDetails,t=o.t,days=o.days,f=o.view==="person"?1/t:1,rows=[],ref=hav(...MANILA,s.lat,s.lng);
  const row=(label,a,b,note,ai)=>rows.push({label,min:Math.round(a*f/10)*10,max:Math.round(b*f/10)*10,note,ai,on:ai==null||!o.off.has(ai)});
  let a,b,L,n;
  if(o.mode==="land"){const r=d*1.4;a=r*4;b=r*6;L="🚌 Bus / Van (round trip)";n="About "+Math.round(r)+" road km each way"}
  else if(o.mode==="ferry"){a=x.transport.ferry.min;b=x.transport.ferry.max;L="⛴️ Ferry (round trip)";n=x.transport.ferry.note}
  else if(x.transport.flight){const k=Math.min(1.3,Math.max(.6,d/ref));a=x.transport.flight.min*k;b=x.transport.flight.max*k;L="✈️ Airfare (round trip)";n="Manila fares adjusted for your distance"}
  else{a=1800+d*2.2;b=3500+d*4;L="✈️ Airfare (round trip)";n="To the nearest airport, plus a land transfer"}
  row(L,a*t,b*t,n+(t>1?" · "+t+" travelers":""));
  const veh=Math.ceil(t/3),l=x.transport.local,nights=Math.max(1,days-1),rooms=Math.ceil(t/2),H=x.accommodation[o.style],F=x.food[o.style],pl=(k,w)=>k+" "+w+(k>1?"s":"");
  row("🚗 Local transport",l.min*days*veh,l.max*days*veh,l.note+" · "+pl(days,"day"));
  row("🏨 Accommodation",H.min*nights*rooms,H.max*nights*rooms,pl(nights,"night")+" × "+pl(rooms,"room")+" · "+H.note);
  row("🍽️ Food",F.min*days*t,F.max*days*t,F.note+" · "+pl(days,"day"));
  x.activities.forEach((c,i)=>row("🎯 "+c.name,c.min*t,c.max*t,c.note,i));
  row("🎟️ Entrance fees",x.entranceFees.min*t,x.entranceFees.max*t,"Per person, one-time");
  const m=x.miscellaneous;row("🛍️ Miscellaneous",m.min*t,m.max*t,m.note);
  const on=rows.filter(r=>r.on);
  return{rows,tot:[on.reduce((q,r)=>q+r.min,0),on.reduce((q,r)=>q+r.max,0)]};
}
const rowsHtml=(e,cb)=>e.rows.map(r=>{const c=cb&&r.ai!=null;return`<div class="ex" style="${r.on?"":"opacity:.45"}"><div>${c?`<label><input type="checkbox" ${r.on?"checked":""} onchange="toggleAct(${r.ai})"> `:""}${r.label}${c?"</label>":""}<div class="expense-note">${r.note}</div></div><span class="expense-range">${rr(r.min,r.max)}</span></div>`}).join("");
function toggleAct(i){actOff.has(i)?actOff.delete(i):actOff.add(i);calc()}
function calc(reset){
  if(reset)actOff.clear();
  const s=allSpots.find(x=>x.id==$("#ed").value),t=Math.max(1,+$("#et").value||1),days=Math.max(1,+$("#edy").value||1),ms=modes(s),em=$("#em"),prev=em.value,pp=$("#ev").value==="person";
  em.innerHTML=ms.map(m=>`<option value="${m}">${MODE[m]}</option>`).join("");em.value=ms.includes(prev)?prev:ms[0];
  const e=estimate(s,{t,days,style:$("#es").value,mode:em.value,off:actOff,view:$("#ev").value});
  $("#eres").innerHTML=`<h3>${s.name}</h3><p class="loc">📍 ~${km(s).toLocaleString()} km from ${esc(user.loc)} · ${t} traveler${t>1?"s":""} · ${days} day${days>1?"s":""} · ${pp?"per person":"whole group"}</p><p class="note" style="margin:6px 0">Tick or untick activities to match your plans.</p>${rowsHtml(e,true)}
  <div class="tot"><span>💰 Estimated Total</span><span>${rr(...e.tot)}</span></div><p class="note">With a 15% buffer: ${rr(Math.round(e.tot[0]*1.15/10)*10,Math.round(e.tot[1]*1.15/10)*10)}</p>
  <div class="disclaimer-box"><strong>⚠️ Disclaimer:</strong><ul style="margin:6px 0 0 18px"><li>Prices are based on average 2024–2026 rates and may change without notice</li><li>Airfare prices fluctuate significantly — book early for better deals</li><li>Peak season (December–May) prices may be 20-50% higher</li><li>These estimates do NOT include travel insurance, visa fees (for foreign tourists), or COVID-related requirements</li><li>We recommend adding a 10-15% buffer to your estimated budget for unexpected expenses</li><li>For the most accurate pricing, please contact the tour agencies listed on our website or check official booking platforms</li></ul></div>`;
}

/* ===== MODAL ===== */
function openSpot(id){
  const s=allSpots.find(x=>x.id===id),e=estimate(s,{t:1,days:3,style:"midrange",mode:modes(s)[0],off:new Set(),view:"person"});
  $("#modal").innerHTML=`<div class="mc">${pic(s)}<button class="x" onclick="closeModal()">✕</button></div><div class="mb"><h2>${s.name}</h2><p class="loc">📍 ${s.location} · ${s.region}</p><p><span class="distance-badge ${dc(s)}">📍 ~${km(s).toLocaleString()} km from you</span></p><p>${stars(s)}</p><p style="margin:12px 0">${s.desc}</p><h4>Highlights</h4>${s.highlights.map(h=>`<span class="pill">${h}</span>`).join("")}
  <h4>Estimated Expenses from ${esc(user.loc)}</h4><p class="note" style="margin:-4px 0 8px">3 days · mid-range · 1 traveler</p>${rowsHtml(e)}<div class="tot"><span>💰 Estimated Total</span><span>${rr(...e.tot)}</span></div><p class="note">💡 Estimated costs only. Actual prices may vary. We recommend budgeting 10-15% extra.</p>
  <button class="favbtn" onclick="fav(${s.id},event)">${favs.includes(s.id)?"❤️":"🤍"}</button></div></div>`;
  $("#modal").classList.add("show");
}
function closeModal(){$("#modal").classList.remove("show")}
addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});

/* ===== NAV, WELCOME, START ===== */
function go(p){
  closeModal();$("#nav").hidden=false;
  $("#av").textContent=user.name[0].toUpperCase();$("#un").textContent=user.name;
  document.querySelectorAll(".links button").forEach(b=>b.classList.toggle("on",b.dataset.p===p));
  $("#app").innerHTML=`<div class="page">${PAGES[p]()}</div>`;
  if(p==="expenses")calc();
  scrollTo(0,0);
}
function welcome(){
  $("#nav").hidden=true;
  $("#app").innerHTML=`<div class="welcome"><div class="wbox"><div class="wlogo">Gala, <b>Ano Tara?</b></div><p>Your guide to 7,641 islands. Tell us a bit about you for personalized picks and trip costs!</p>
  <label>Your name<input id="wn" placeholder="e.g. Juan dela Cruz" value="${user?esc(user.name):""}"></label>
  <label>Where are you traveling from?<input id="wl" list="places" placeholder="Type your city or town" value="${user?esc(user.loc):""}" autocomplete="off"><datalist id="places">${Object.keys(PLACES).map(l=>`<option value="${l}">`).join("")}</datalist></label>
  <button class="geo-btn" onclick="useGPS()">📍 Use My Exact Location</button><div class="geo-status" id="gs"></div>
  <button class="cta" onclick="start()">Start Exploring ✈️</button></div></div>`;
}
function start(){
  const n=$("#wn").value.trim();
  if(!n)return toast("Please enter your name first");
  const v=$("#wl").value.trim(),k=Object.keys(PLACES).find(x=>x.toLowerCase()===v.toLowerCase());
  if(!k)return toast("Pick your place from the suggestions, or use your exact location");
  const c=gps&&gps.city===k?gps:user&&user.loc===k&&user.lat!=null?user:{lat:PLACES[k][0],lng:PLACES[k][1]};
  user={name:n,loc:k,lat:c.lat,lng:c.lng};
  save();go("home");toast("Welcome, "+n+"!");
}
function useGPS(){
  const g=$("#gs"),say=(c,m)=>{g.className="geo-status "+c;g.textContent=m};
  if(!navigator.geolocation)return say("error","📍 Location access denied. Please select manually.");
  say("loading","📍 Detecting your location...");
  navigator.geolocation.getCurrentPosition(p=>{
    const lat=p.coords.latitude,lng=p.coords.longitude,city=Object.keys(PLACES).reduce((a,b)=>hav(lat,lng,...PLACES[b])<hav(lat,lng,...PLACES[a])?b:a);
    gps={lat,lng,city};$("#wl").value=city;say("success","✅ Location detected: "+city);
  },()=>say("error","📍 Location access denied. Please select manually."),{timeout:10000});
}
document.querySelectorAll(".links button").forEach(b=>b.onclick=()=>go(b.dataset.p));
setTimeout(()=>{$("#loader").classList.add("hide");setTimeout(()=>$("#loader").remove(),500)},1500);
user&&user.name?go("home"):welcome();
/* ===== DAY ↔ NIGHT SLIDER ===== */
const dnr=$("#dnr"),dnSet=v=>{const n=v/100;document.documentElement.style.filter=n?`invert(${n*.9}) hue-rotate(${n*180}deg)`:"";try{localStorage.setItem("lp_dn",v)}catch(e){}};
try{dnr.value=localStorage.getItem("lp_dn")||0}catch(e){}
dnSet(+dnr.value);dnr.oninput=()=>dnSet(+dnr.value);