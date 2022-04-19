import './style.css'
import axios from 'axios';

const allInfo = [];
let champNames = "";
let pointer = 0;

// Buttons
const backButton = document.querySelector("#back") ;
const frontButton =document.querySelector("#forward") ;

// Left side pic and name
const championName=document.querySelector("#name") ;
const championTitle=document.querySelector("#title") ;
const championPic=document.querySelector("#champion-photo-area > img") ;

// Champion Lore
const championLore=document.querySelector("#lore") ;

// Champion info
const championAtk=document.querySelector("#atk") ;
const championDef=document.querySelector("#def") ;
const championMagic=document.querySelector("#magic") ;
const championDiff=document.querySelector("#diff") ;

// Champion stats
const championHp=document.querySelector("#hp")
const championHpperlevel=document.querySelector("#hpperlevel")
const championMp=document.querySelector("#mp")
const championMpperlevel=document.querySelector("#mpperlevel")
const championMovespeed=document.querySelector("#movespeed")
const championArmor=document.querySelector("#armor")
const championArmorperlevel=document.querySelector("#armorperlevel")
const championSpellblock =document.querySelector("#spellblock")
const championSpellblockperlevelk=document.querySelector("#spellblockperlevel")
const championAttackrange=document.querySelector("#attackrange")
const championHpregen=document.querySelector("#hpregen")
const championHpregenperlevel=document.querySelector("#hpregenperlevel")
const championMpregen=document.querySelector("#mpregen")
const championmpRegenperlevel=document.querySelector("#mpregenperlevel")
const championCrit=document.querySelector("#crit")
const championCritperlevel=document.querySelector("#critperlevel")
const championAttackdamage=document.querySelector("#attackdamage")
const championAttackdamageperlevel=document.querySelector("#attackdamageperlevel")
const championAttackSpeedperlevel=document.querySelector("#attackspeedperlevel")
const championAttackSpeed=document.querySelector("#attackspeed")


//get request
axios.get("https://ddragon.leagueoflegends.com/cdn/12.7.1/data/en_US/champion.json").then( response=> {
  //push all information into an array
     allInfo.push(response.data.data);
    console.log(allInfo)
  // let the variable champName equal to all champ names
 champNames=(Object.keys(response.data.data));
    console.log(champNames);
    
});



function goNext () {
championPic.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champNames[pointer]}_0.jpg`;
  
  championLore.innerText = allInfo[0][champNames[pointer]]['blurb'];
  
  championName.innerText = allInfo[0][champNames[pointer]]['name'];
  
  championTitle.innerText = allInfo[0][champNames[pointer]]['title'];

//Info
  championAtk.innerText = allInfo[0][champNames[pointer]]['info']['attack'];
  championDef.innerText = allInfo[0][champNames[pointer]]['info']['defense'];
  championMagic.innerText = allInfo[0][champNames[pointer]]['info']['magic'];
  championDiff.innerText = allInfo[0][champNames[pointer]]['info']['difficulty'];

  // stats
  championHp.innerText = allInfo[0][champNames[pointer]]['stats']['hp'];
  championHpperlevel.innerText = allInfo[0][champNames[pointer]]['stats']['hpperlevel'];
  championMp.innerText = allInfo[0][champNames[pointer]]['stats']['mp'];
  championMpperlevel.innerText = allInfo[0][champNames[pointer]]['stats']['mpperlevel'];
  championMovespeed.innerText = allInfo[0][champNames[pointer]]['stats']['movespeed'];
  championArmor.innerText = allInfo[0][champNames[pointer]]['stats']['armor'];
  championArmorperlevel.innerText = allInfo[0][champNames[pointer]]['stats']['armorperlevel'];
  championSpellblock.innerText = allInfo[0][champNames[pointer]]['stats']['spellblock'];
  championSpellblockperlevelk.innerText = allInfo[0][champNames[pointer]]['stats']['spellblockperlevel'];
  championAttackrange.innerText = allInfo[0][champNames[pointer]]['stats']['attackrange'];
  championHpregen.innerText = allInfo[0][champNames[pointer]]['stats']['hpregen'];
  championHpregenperlevel.innerText = allInfo[0][champNames[pointer]]['stats']['hpregenperlevel'];
  championMpregen.innerText = allInfo[0][champNames[pointer]]['stats']['mpregen'];
  championmpRegenperlevel.innerText = allInfo[0][champNames[pointer]]['stats']['mpregenperlevel'];
  championCrit.innerText = allInfo[0][champNames[pointer]]['stats']['crit'];
  championCritperlevel.innerText = allInfo[0][champNames[pointer]]['stats']['critperlevel'];
  championAttackdamage.innerText = allInfo[0][champNames[pointer]]['stats']['attackdamage'];
  championAttackdamageperlevel.innerText = allInfo[0][champNames[pointer]]['stats']['attackdamageperlevel'];
  championAttackSpeedperlevel.innerText = allInfo[0][champNames[pointer]]['stats']['attackspeedperlevel'];
  championAttackSpeed.innerText = allInfo[0][champNames[pointer]]['stats']['attackspeed'];

  
  pointer += 1;

  console.log(pointer-1);

  if (pointer > 158) {
    pointer = 0;
  }
}



function goBack () {
  //photo
championPic.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champNames[pointer]}_0.jpg`;

  // left side information
  championName.innerText = allInfo[0][champNames[pointer]]['name'];
  championTitle.innerText = allInfo[0][champNames[pointer]]['title'];

  //Lore area
  championLore.innerText = allInfo[0][champNames[pointer]]['blurb'];

  //info
  championAtk.innerText = allInfo[0][champNames[pointer]]['info']['attack'];
  championDef.innerText = allInfo[0][champNames[pointer]]['info']['defense'];
  championMagic.innerText = allInfo[0][champNames[pointer]]['info']['magic'];
  championDiff.innerText = allInfo[0][champNames[pointer]]['info']['difficulty'];

  // stats
  championHp.innerText = allInfo[0][champNames[pointer]]['stats']['hp'];
  championHpperlevel.innerText = allInfo[0][champNames[pointer]]['stats']['hpperlevel'];
  championMp.innerText = allInfo[0][champNames[pointer]]['stats']['mp'];
  championMpperlevel.innerText = allInfo[0][champNames[pointer]]['stats']['mpperlevel'];
  championMovespeed.innerText = allInfo[0][champNames[pointer]]['stats']['movespeed'];
  championArmor.innerText = allInfo[0][champNames[pointer]]['stats']['armor'];
  championArmorperlevel.innerText = allInfo[0][champNames[pointer]]['stats']['armorperlevel'];
  championSpellblock.innerText = allInfo[0][champNames[pointer]]['stats']['spellblock'];
  championSpellblockperlevelk.innerText = allInfo[0][champNames[pointer]]['stats']['spellblockperlevel'];
  championAttackrange.innerText = allInfo[0][champNames[pointer]]['stats']['attackrange'];
  championHpregen.innerText = allInfo[0][champNames[pointer]]['stats']['hpregen'];
  championHpregenperlevel.innerText = allInfo[0][champNames[pointer]]['stats']['hpregenperlevel'];
  championMpregen.innerText = allInfo[0][champNames[pointer]]['stats']['mpregen'];
  championmpRegenperlevel.innerText = allInfo[0][champNames[pointer]]['stats']['mpregenperlevel'];
  championCrit.innerText = allInfo[0][champNames[pointer]]['stats']['crit'];
  championCritperlevel.innerText = allInfo[0][champNames[pointer]]['stats']['critperlevel'];
  championAttackdamage.innerText = allInfo[0][champNames[pointer]]['stats']['attackdamage'];
  championAttackdamageperlevel.innerText = allInfo[0][champNames[pointer]]['stats']['attackdamageperlevel'];
  championAttackSpeedperlevel.innerText = allInfo[0][champNames[pointer]]['stats']['attackspeedperlevel'];
  championAttackSpeed.innerText = allInfo[0][champNames[pointer]]['stats']['attackspeed'];

  pointer -= 1;

  console.log(pointer+1);

 if (pointer < 0) {
   pointer = 158
 }
}




frontButton.addEventListener("click",goNext,);
backButton.addEventListener("click",goBack,);
/*
data:
data:
Aatrox:
blurb: "Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find..."
id: "Aatrox"
image: {full: 'Aatrox.png', sprite: 'champion0.png', group: 'champion', x: 0, y: 0, …}
info: {attack: 8, defense: 4, magic: 3, difficulty: 4}
key: "266"
name: "Aatrox"
partype: "Blood Well"
stats: {hp: 580, hpperlevel: 90, mp: 0, mpperlevel: 0, movespeed: 345, …}
tags: (2) ['Fighter', 'Tank']
title: "the Darkin Blade"
version: "12.7.1"*/