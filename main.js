const sampleEvents=[
 {id:1,title:"مهرجان ثقافي",date:"2026-03-10",city:"وهران"},
 {id:2,title:"سباق رياضي",date:"2026-02-25",city:"الجزائر"},
];

const container=document.getElementById("eventCards");
sampleEvents.forEach(ev=>{
  const card=document.createElement("div");
  card.innerHTML=`<h3>${ev.title}</h3><p>${ev.date} – ${ev.city}</p>`;
  card.className="event-card";
  container.appendChild(card);
});
