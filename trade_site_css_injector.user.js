// ==UserScript==
// @name            Trade Side Layout
// @namespace   https://github.com/Knicklichtjedi/PoE_Trade_CSS
// @version         1.1
// @description    New poe trade site layout by reddit user u/regularPoEplayer.
// @author           Knicklichtjedi
// @match           https://www.pathofexile.com/trade/*
// @grant             none
// ==/UserScript==


let css_string = "/* ==UserStyle==\\n@name         PoE - custom layout (bulk trade)\\n@version      1.1.0\\n@description  Custom layout for an official PathOfExile trade site (bulk trade section a.k.a. \"exchange\")\\n@author       regularPoEplayer\\n@homepageURL  https://github.com/regPoEp/PoEtools\\n==/UserStyle== */\\n\\n/*\\nTable of contents:\\n\\tOptions\\n\\tHide borders\\n\\tAdd \"I want/I have\" after headers of search filters\\n\\tReduce size of the logo\\n\\t\"Currency\" section\\n\\t\"Shards & Splinters\" section\\n\\t\"Fragments & Sets\" section\\n\\t\"Scarabs\" section\\n\\t\"Fossils\" section\\n\\t\"Essences\" section\\n\\t\"Cards\" and \"Maps\" sections\\n*/\\n\\n:root {\\n    --poe-custom-filter-group-name-color: #cec59f !important;\\n\\n    --poe-custom-item-size: 40px !important;\\n    --poe-custom-item-indent: 2px !important;\\n    --poe-custom-item-distance: calc(var(--poe-custom-item-size) + var(--poe-custom-item-indent)) !important;\\n\\n    --poe-custom-is-fragment-set-shown: 1 !important;\\n    --poe-custom-is-cards-width-doubled: 0 !important;\\n}\\n\\n\\n\\n/*------------------------------\\n\\tOptions\\n------------------------------*/\\n\\n/* hide legacy items */\\n[data-id=eternal], [data-id=ancient-reliquary-key], [data-id=timeworn-reliquary-key] {\\n    display: none !important;\\n}\\n\\n/* hide fragment sets */\\n:root { --poe-custom-is-fragment-set-shown: 0 !important; }\\n[data-id=sacrifice-set], [data-id=mortal-set], [data-id=pale-court-set], [data-id=shaper-set], [data-id=key-to-decay], [data-id=maddening-object] {\\n    display: none !important;\\n}\\n\\n/* double the width of the \\'Cards\\' section */\\n:root { --poe-custom-is-cards-width-doubled: 1 !important; }\\n\\n\\n\\n/*------------------------------\\n\\tHide borders\\n------------------------------*/\\n\\n/* hide borders for icon items */\\n\\n.exchange-filter-item:not(.text):not(.highlighted):not(.active) {\\n    border-color: transparent !important;\\n}\\n\\n\\n\\n/*------------------------------\\n\\tAdd \"I want/I have\" after headers of search filters\\n------------------------------*/\\n\\n/* fix color of names for filter-groups */\\n\\n.filter-group-header .filter-title {\\n    color: var(--poe-custom-filter-group-name-color) !important;\\n}\\n\\n/* add \"I want/have\" */\\n\\n.search-advanced-pane:nth-of-type(1) > .filter-group > .filter-group-body > .filter > .filter-title-clickable > span:not(.pull-right)::after {\\n    content: \" I want\" !important;\\n    color: grey !important;\\n}\\n\\n.search-advanced-pane:nth-of-type(2) > .filter-group > .filter-group-body > .filter > .filter-title-clickable > span:not(.pull-right)::after {\\n    content: \" I have\" !important;\\n    color: grey !important;\\n}\\n\\n\\n\\n/*------------------------------\\n\\tReduce size of the logo\\n------------------------------*/\\n\\n.logo > a {\\n    max-width: 96px !important;\\n}\\n\\n\\n\\n/*---------------------------\\n\\t\"Currency\" section\\n---------------------------*/\\n\\n/* setup currency container(1) */\\n\\ndiv.filter-group-body > div.filter:nth-of-type(1) > div.filter-options {\\n    position: relative !important;\\n    height: calc(5*var(--poe-custom-item-distance)) !important;\\n    width: calc(14*var(--poe-custom-item-distance)) !important;\\n    margin: auto !important;\\n}\\n\\ndiv.filter-group-body > div.filter:nth-of-type(1) > div.filter-options > .exchange-filter-item[data-id] {\\n    position: absolute !important;\\n}\\n\\n\\n\\n/* set Y-coordinate for each row */\\n\\n[data-id=chaos], [data-id=fusing], [data-id=alch], [data-id=scour], [data-id=regal], [data-id=orb-of-binding], [data-id=vaal], [data-id=regret], [data-id=apprentice-sextant], [data-id=journeyman-sextant], [data-id=master-sextant], [data-id=orb-of-horizons], [data-id=chisel] {\\n    top: calc(0*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=alt], [data-id=transmute], [data-id=aug], [data-id=chance], [data-id=chrome], [data-id=jewellers], [data-id=silver], [data-id=engineers], [data-id=whetstone], [data-id=scrap], [data-id=bauble], [data-id=gcp], [data-id=blessed] {\\n    top: calc(1*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=exalted], [data-id=crusaders-exalted-orb], [data-id=redeemers-exalted-orb], [data-id=hunters-exalted-orb], [data-id=warlords-exalted-orb], [data-id=awakeners-orb], [data-id=mavens-orb], [data-id=elevated-sextant], [data-id=orb-of-unmaking], [data-id=annul], [data-id=ancient-orb], [data-id=harbingers-orb], [data-id=divine] {\\n    top: calc(2*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=ritual-vessel], [data-id=prime-regrading-lens], [data-id=secondary-regrading-lens], [data-id=tempering-orb], [data-id=tailoring-orb], [data-id=infused-engineers-orb], [data-id=facetors]  {\\n    top: calc(3*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=stacked-deck], [data-id=blessing-xoph], [data-id=blessing-tul], [data-id=blessing-esh], [data-id=blessing-uul-netol], [data-id=blessing-chayula], [data-id=mirror], [data-id=eternal], [data-id=wisdom], [data-id=portal], [data-id=p], [data-id=rogues-marker] {\\n    top: calc(4*var(--poe-custom-item-distance)) !important;\\n}\\n\\n\\n\\n/* set X-coordinate for each column */\\n\\n[data-id=chaos], [data-id=alt], [data-id=exalted], [data-id=ritual-vessel], [data-id=stacked-deck], [data-id=exalted-shard], [data-id=ritual-splinter] {\\n    left: calc(0*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=fusing], [data-id=chrome], [data-id=crusaders-exalted-orb], [data-id=prime-regrading-lens], [data-id=mirror-shard], [data-id=blessing-xoph], [data-id=splinter-xoph] {\\n    left: calc(1*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=alch], [data-id=transmute], [data-id=redeemers-exalted-orb], [data-id=secondary-regrading-lens], [data-id=blessing-tul], [data-id=splinter-tul] {\\n    left: calc(2*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=scour], [data-id=chance], [data-id=hunters-exalted-orb], [data-id=tempering-orb], [data-id=chaos-shard], [data-id=blessing-esh], [data-id=splinter-esh] {\\n    left: calc(3*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=regal], [data-id=aug], [data-id=warlords-exalted-orb], [data-id=tailoring-orb], [data-id=regal-shard], [data-id=blessing-uul-netol], [data-id=splinter-uul] {\\n    left: calc(4*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=orb-of-binding], [data-id=jewellers], [data-id=awakeners-orb], [data-id=binding-shard], [data-id=blessing-chayula], [data-id=splinter-chayula] {\\n    left: calc(5*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=vaal], [data-id=silver], [data-id=mavens-orb], [data-id=horizon-shard] {\\n    left: calc(6*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=regret], [data-id=facetors], [data-id=mirror], [data-id=engineers-shard], [data-id=timeless-eternal-empire-splinter] {\\n    left: calc(7*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=engineers], [data-id=elevated-sextant], [data-id=infused-engineers-orb], [data-id=eternal], [data-id=timeless-karui-splinter] {\\n    left: calc(8*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=apprentice-sextant], [data-id=whetstone], [data-id=orb-of-unmaking], [data-id=timeless-maraketh-splinter] {\\n    left: calc(9*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=journeyman-sextant], [data-id=scrap], [data-id=annul], [data-id=annulment-shard], [data-id=wisdom], [data-id=timeless-templar-splinter] {\\n    left: calc(10*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=master-sextant], [data-id=bauble], [data-id=ancient-orb], [data-id=ancient-shard], [data-id=portal], [data-id=timeless-vaal-splinter] {\\n    left: calc(11*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=orb-of-horizons], [data-id=gcp], [data-id=harbingers-orb], [data-id=harbingers-shard], [data-id=p], [data-id=simulacrum-splinter] {\\n    left: calc(12*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=chisel], [data-id=blessed], [data-id=divine], [data-id=rogues-marker], [data-id=crescent-splinter] {\\n    left: calc(13*var(--poe-custom-item-distance)) !important;\\n}\\n\\n\\n\\n/*---------------------------\\n\\t\"Shards & Splinters\" section\\n---------------------------*/\\n\\n/* setup shards/splinters container(2) */\\n\\ndiv.filter-group-body > div.filter:nth-of-type(2) > div.filter-options {\\n    position: relative !important;\\n    height: calc(2*var(--poe-custom-item-distance)) !important;\\n    width: calc(14*var(--poe-custom-item-distance)) !important;\\n    margin: auto !important;\\n}\\n\\ndiv.filter-group-body > div.filter:nth-of-type(2) > div.filter-options > .exchange-filter-item[data-id] {\\n    position: absolute !important;\\n}\\n\\n\\n\\n/* set Y-coordinate for each row */\\n[data-id=exalted-shard], [data-id=mirror-shard], [data-id=chaos-shard], [data-id=regal-shard], [data-id=binding-shard], [data-id=engineers-shard], [data-id=horizon-shard], [data-id=annulment-shard], [data-id=ancient-shard], [data-id=harbingers-shard] {\\n    top: calc(0*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=ritual-splinter], [data-id=splinter-xoph], [data-id=splinter-tul], [data-id=splinter-esh], [data-id=splinter-uul], [data-id=splinter-chayula], [data-id=timeless-eternal-empire-splinter], [data-id=timeless-karui-splinter], [data-id=timeless-maraketh-splinter], [data-id=timeless-templar-splinter], [data-id=timeless-vaal-splinter], [data-id=simulacrum-splinter], [data-id=crescent-splinter] {\\n    top: calc(1*var(--poe-custom-item-distance)) !important;\\n}\\n\\n\\n\\n/* set X-coordinate for each column */\\n/* (they are set in the currency section) */\\n\\n\\n\\n/*---------------------------\\n\\t\"Fragments & Sets\" section\\n---------------------------*/\\n\\n/* setup fragments container(3) */\\n\\ndiv.filter-group-body > div.filter:nth-of-type(3) > div.filter-options {\\n    position: relative !important;\\n    height: calc((6 + var(--poe-custom-is-fragment-set-shown))*var(--poe-custom-item-distance)) !important;\\n    width: calc(14*var(--poe-custom-item-distance)) !important;\\n    margin: auto !important;\\n}\\n\\ndiv.filter-group-body > div.filter:nth-of-type(3) > div.filter-options > .exchange-filter-item[data-id] {\\n    position: absolute !important;\\n}\\n\\n\\n\\n/* set Y-coordinate for each row */\\n\\n[data-id=dusk], [data-id=mid], [data-id=grie], [data-id=rage], [data-id=volkuur], [data-id=eber], [data-id=hydra], [data-id=phoenix], [data-id=fragment-of-purification], [data-id=fragment-of-enslavement], [data-id=fragment-of-knowledge], [data-id=fragment-of-terror] {\\n    top: calc(0*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=noon], [data-id=dawn], [data-id=ign], [data-id=hope], [data-id=inya], [data-id=yriel], [data-id=chimer], [data-id=minot], [data-id=fragment-of-constriction], [data-id=fragment-of-eradication], [data-id=fragment-of-shape], [data-id=fragment-of-emptiness] {\\n    top: calc(1*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=sacrifice-set], [data-id=mortal-set], [data-id=pale-court-set], [data-id=shaper-set], [data-id=key-to-decay], [data-id=maddening-object] {\\n    top: calc(2*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=offer], [data-id=xophs-breachstone], [data-id=tuls-breachstone], [data-id=eshs-breachstone], [data-id=uul-breachstone], [data-id=chayulas-breachstone], [data-id=timeless-eternal-emblem], [data-id=timeless-karui-emblem], [data-id=timeless-maraketh-emblem], [data-id=timeless-templar-emblem], [data-id=timeless-vaal-emblem], [data-id=simulacrum] {\\n    top: calc((2 + var(--poe-custom-is-fragment-set-shown))*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=offer-tribute], [data-id=xophs-charged-breachstone], [data-id=tuls-charged-breachstone], [data-id=eshs-charged-breachstone], [data-id=uul-charged-breachstone], [data-id=chayulas-charged-breachstone], [data-id=haewark-hamlet], [data-id=tirns-end], [data-id=lex-proxima], [data-id=lex-ejoris], [data-id=ancient-reliquary-key] {\\n    top: calc((3 + var(--poe-custom-is-fragment-set-shown))*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=offer-gift], [data-id=xophs-enriched-breachstone], [data-id=tuls-enriched-breachstone], [data-id=eshs-enriched-breachstone], [data-id=uul-enriched-breachstone], [data-id=chayulas-enriched-breachstone], [data-id=new-vastir], [data-id=glennach-cairns], [data-id=valdos-rest], [data-id=lira-arthain], [data-id=timeworn-reliquary-key] {\\n    top: calc((4 + var(--poe-custom-is-fragment-set-shown))*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=offer-dedication], [data-id=xophs-pure-breachstone], [data-id=tuls-pure-breachstone], [data-id=eshs-pure-breachstone], [data-id=uul-pure-breachstone], [data-id=chayulas-pure-breachstone], [data-id=the-formed], [data-id=the-twisted], [data-id=the-forgotten], [data-id=the-hidden], [data-id=the-feared], [data-id=the-mavens-writ] {\\n    top: calc((5 + var(--poe-custom-is-fragment-set-shown))*var(--poe-custom-item-distance)) !important;\\n}\\n\\n/**/\\n\\n[data-id=divine-vessel] {\\n    top: calc(0.5*var(--poe-custom-item-distance)) !important;\\n}\\n\\n\\n\\n/* set X-coordinate for each column */\\n\\n[data-id=divine-vessel], [data-id=offer], [data-id=offer-tribute], [data-id=offer-gift], [data-id=offer-dedication] {\\n    left: calc(0*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=dusk], [data-id=noon] {\\n    left: calc(1*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=mid], [data-id=dawn] {\\n    left: calc(2*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=grie], [data-id=ign] {\\n    left: calc(3*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=rage], [data-id=hope] {\\n    left: calc(4*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=volkuur], [data-id=inya] {\\n    left: calc(5*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=eber], [data-id=yriel] {\\n    left: calc(6*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=hydra], [data-id=chimer] {\\n    left: calc(7*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=phoenix], [data-id=minot], [data-id=haewark-hamlet], [data-id=new-vastir] {\\n    left: calc(8*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=fragment-of-purification], [data-id=fragment-of-constriction], [data-id=tirns-end], [data-id=glennach-cairns] {\\n    left: calc(9*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=fragment-of-enslavement], [data-id=fragment-of-eradication], [data-id=lex-proxima], [data-id=valdos-rest] {\\n    left: calc(10*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=fragment-of-knowledge], [data-id=fragment-of-shape], [data-id=lex-ejoris], [data-id=lira-arthain] {\\n    left: calc(11*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=fragment-of-terror], [data-id=fragment-of-emptiness] {\\n    left: calc(12*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=simulacrum], [data-id=ancient-reliquary-key], [data-id=timeworn-reliquary-key], [data-id=the-mavens-writ] {\\n    left: calc(13*var(--poe-custom-item-distance)) !important;\\n}\\n\\n/**/\\n\\n[data-id=sacrifice-set], [data-id=xophs-breachstone], [data-id=xophs-charged-breachstone], [data-id=xophs-enriched-breachstone], [data-id=xophs-pure-breachstone] {\\n    left: calc(1.5*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=tuls-breachstone], [data-id=tuls-charged-breachstone], [data-id=tuls-enriched-breachstone], [data-id=tuls-pure-breachstone] {\\n    left: calc(2.5*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=mortal-set], [data-id=eshs-breachstone], [data-id=eshs-charged-breachstone], [data-id=eshs-enriched-breachstone], [data-id=eshs-pure-breachstone] {\\n    left: calc(3.5*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=uul-breachstone], [data-id=uul-charged-breachstone], [data-id=uul-enriched-breachstone], [data-id=uul-pure-breachstone] {\\n    left: calc(4.5*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=pale-court-set], [data-id=chayulas-breachstone], [data-id=chayulas-charged-breachstone], [data-id=chayulas-enriched-breachstone], [data-id=chayulas-pure-breachstone] {\\n    left: calc(5.5*var(--poe-custom-item-distance)) !important;\\n}\\n\\n/* {\\n    left: calc(6.5*var(--poe-custom-item-distance)) !important;\\n}*/\\n\\n[data-id=shaper-set], [data-id=timeless-eternal-emblem], [data-id=the-formed] {\\n    left: calc(7.5*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=timeless-karui-emblem], [data-id=the-twisted] {\\n    left: calc(8.5*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=key-to-decay], [data-id=timeless-maraketh-emblem], [data-id=the-forgotten] {\\n    left: calc(9.5*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=timeless-templar-emblem], [data-id=the-hidden] {\\n    left: calc(10.5*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=maddening-object], [data-id=timeless-vaal-emblem], [data-id=the-feared] {\\n    left: calc(11.5*var(--poe-custom-item-distance)) !important;\\n}\\n\\n\\n\\n/*---------------------------\\n\\t\"Scarabs\" section\\n---------------------------*/\\n\\n/* setup scarabs container(8) */\\n\\ndiv.filter-group-body > div.filter:nth-of-type(8) > div.filter-options {\\n    position: relative !important;\\n    height: calc(7.5*var(--poe-custom-item-distance)) !important;\\n    width: calc(13*var(--poe-custom-item-distance)) !important;\\n    margin: auto !important;\\n}\\n\\ndiv.filter-group-body > div.filter:nth-of-type(8) > div.filter-options > .exchange-filter-item[data-id] {\\n    position: absolute !important;\\n}\\n\\n\\n\\n/* set Y-coordinate for each row */\\n\\n[data-id$=-metamorph-scarab] {\\n    top: calc(0*var(--poe-custom-item-distance)) !important;\\n}\\n[data-id$=-legion-scarab] {\\n    top: calc(1*var(--poe-custom-item-distance)) !important;\\n}\\n[data-id$=-bestiary-scarab], [data-id$=-ambush-scarab], [data-id$=-harbinger-scarab] {\\n    top: calc(2*var(--poe-custom-item-distance)) !important;\\n}\\n[data-id$=-reliquary-scarab], [data-id$=-shaper-scarab], [data-id$=-elder-scarab] {\\n    top: calc(3*var(--poe-custom-item-distance)) !important;\\n}\\n[data-id$=-torment-scarab], [data-id$=-perandus-scarab], [data-id$=-divination-scarab] {\\n    top: calc(4*var(--poe-custom-item-distance)) !important;\\n}\\n[data-id$=-sulphite-scarab], [data-id$=-cartography-scarab], [data-id$=-breach-scarab] {\\n    top: calc(5*var(--poe-custom-item-distance)) !important;\\n}\\n\\n/**/\\n\\n[data-id$=-lure] {\\n    top: calc(6.5*var(--poe-custom-item-distance)) !important;\\n}\\n\\n\\n\\n/* set X-coordinate for each column */\\n\\n[data-id=rusted-bestiary-scarab], [data-id=rusted-reliquary-scarab], [data-id=rusted-torment-scarab], [data-id=rusted-sulphite-scarab] {\\n    left: calc(0*var(--poe-custom-item-distance)) !important;\\n}\\n[data-id=polished-bestiary-scarab], [data-id=polished-reliquary-scarab], [data-id=polished-torment-scarab], [data-id=polished-sulphite-scarab] {\\n    left: calc(1*var(--poe-custom-item-distance)) !important;\\n}\\n[data-id=gilded-bestiary-scarab], [data-id=gilded-reliquary-scarab], [data-id=gilded-torment-scarab], [data-id=gilded-sulphite-scarab] {\\n    left: calc(2*var(--poe-custom-item-distance)) !important;\\n}\\n[data-id=jewelled-bestiary-scarab], [data-id=jewelled-reliquary-scarab], [data-id=jewelled-torment-scarab], [data-id=jewelled-sulphite-scarab] {\\n    left: calc(3*var(--poe-custom-item-distance)) !important;\\n}\\n\\n/**/\\n\\n[data-id=farric-lure], [data-id=rusted-metamorph-scarab], [data-id=rusted-legion-scarab], [data-id=rusted-ambush-scarab], [data-id=rusted-shaper-scarab], [data-id=rusted-perandus-scarab], [data-id=rusted-cartography-scarab] {\\n    left: calc(4.5*var(--poe-custom-item-distance)) !important;\\n}\\n[data-id=saqawine-lure], [data-id=polished-metamorph-scarab], [data-id=polished-legion-scarab], [data-id=polished-ambush-scarab], [data-id=polished-shaper-scarab], [data-id=polished-perandus-scarab], [data-id=polished-cartography-scarab] {\\n    left: calc(5.5*var(--poe-custom-item-distance)) !important;\\n}\\n[data-id=fenumal-lure], [data-id=gilded-metamorph-scarab], [data-id=gilded-legion-scarab], [data-id=gilded-ambush-scarab], [data-id=gilded-shaper-scarab], [data-id=gilded-perandus-scarab], [data-id=gilded-cartography-scarab] {\\n    left: calc(6.5*var(--poe-custom-item-distance)) !important;\\n}\\n[data-id=craicic-lure], [data-id=jewelled-metamorph-scarab], [data-id=jewelled-legion-scarab], [data-id=jewelled-ambush-scarab], [data-id=jewelled-shaper-scarab], [data-id=jewelled-perandus-scarab], [data-id=jewelled-cartography-scarab] {\\n    left: calc(7.5*var(--poe-custom-item-distance)) !important;\\n}\\n\\n/**/\\n\\n[data-id=rusted-harbinger-scarab], [data-id=rusted-elder-scarab], [data-id=rusted-divination-scarab], [data-id=rusted-breach-scarab] {\\n    left: calc(9*var(--poe-custom-item-distance)) !important;\\n}\\n[data-id=polished-harbinger-scarab], [data-id=polished-elder-scarab], [data-id=polished-divination-scarab], [data-id=polished-breach-scarab] {\\n    left: calc(10*var(--poe-custom-item-distance)) !important;\\n}\\n[data-id=gilded-harbinger-scarab], [data-id=gilded-elder-scarab], [data-id=gilded-divination-scarab], [data-id=gilded-breach-scarab] {\\n    left: calc(11*var(--poe-custom-item-distance)) !important;\\n}\\n[data-id=jewelled-harbinger-scarab], [data-id=jewelled-elder-scarab], [data-id=jewelled-divination-scarab], [data-id=jewelled-breach-scarab] {\\n    left: calc(12*var(--poe-custom-item-distance)) !important;\\n}\\n\\n\\n\\n/*------------------------------\\n\\t\"Fossils\" section\\n------------------------------*/\\n\\n/* setup fossils container(10) */\\n\\ndiv.filter-group-body > div.filter:nth-of-type(10) > div.filter-options {\\n    position: relative !important;\\n    height: calc(4*var(--poe-custom-item-distance)) !important;\\n    width: calc(9*var(--poe-custom-item-distance)) !important;\\n    margin: auto !important;\\n}\\n\\ndiv.filter-group-body > div.filter:nth-of-type(10) > div.filter-options > .exchange-filter-item[data-id] {\\n    position: absolute !important;\\n}\\n\\n\\n\\n/* set Y-coordinate for each row */\\n\\n[data-id=jagged-fossil], [data-id=dense-fossil], [data-id=frigid-fossil], [data-id=aberrant-fossil], [data-id=scorched-fossil], [data-id=metallic-fossil], [data-id=pristine-fossil] {\\n    top: calc(0*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=bound-fossil], [data-id=corroded-fossil], [data-id=perfect-fossil], [data-id=prismatic-fossil], [data-id=enchanted-fossil], [data-id=aetheric-fossil], [data-id=lucent-fossil], [data-id=serrated-fossil], [data-id=shuddering-fossil] {\\n    top: calc(1*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=tangled-fossil], [data-id=bloodstained-fossil], [data-id=gilded-fossil], [data-id=encrusted-fossil], [data-id=sanctified-fossil], [data-id=hollow-fossil], [data-id=fractured-fossil] {\\n    top: calc(2*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=glyphic-fossil], [data-id=faceted-fossil] {\\n    top: calc(3*var(--poe-custom-item-distance)) !important;\\n}\\n\\n\\n\\n/* set X-coordinate for each column */\\n\\n[data-id=bound-fossil] {\\n    left: calc(0*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=jagged-fossil], [data-id=corroded-fossil], [data-id=glyphic-fossil] {\\n    left: calc(1*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=dense-fossil], [data-id=perfect-fossil] {\\n    left: calc(2*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=frigid-fossil], [data-id=prismatic-fossil], [data-id=gilded-fossil] {\\n    left: calc(3*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=aberrant-fossil], [data-id=enchanted-fossil], [data-id=encrusted-fossil] {\\n    left: calc(4*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=scorched-fossil], [data-id=aetheric-fossil], [data-id=sanctified-fossil] {\\n    left: calc(5*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=metallic-fossil], [data-id=lucent-fossil] {\\n    left: calc(6*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=pristine-fossil], [data-id=serrated-fossil], [data-id=faceted-fossil] {\\n    left: calc(7*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=shuddering-fossil] {\\n    left: calc(8*var(--poe-custom-item-distance)) !important;\\n}\\n\\n/**/\\n\\n[data-id=tangled-fossil] {\\n    left: calc(0.5*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=bloodstained-fossil] {\\n    left: calc(1.5*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=hollow-fossil] {\\n    left: calc(6.5*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=fractured-fossil] {\\n    left: calc(7.5*var(--poe-custom-item-distance)) !important;\\n}\\n\\n\\n\\n/*---------------------------\\n\\t\"Essences\" section\\n---------------------------*/\\n\\n/* setup essences container(11) */\\n\\ndiv.filter-group-body > div.filter:nth-of-type(11) > div.filter-options {\\n    position: relative !important;\\n    height: calc(12*var(--poe-custom-item-distance)) !important;\\n    width: calc(11.5*var(--poe-custom-item-distance)) !important;\\n    margin: auto !important;\\n}\\n\\ndiv.filter-group-body > div.filter:nth-of-type(11) > div.filter-options > .exchange-filter-item[data-id] {\\n    position: absolute !important;\\n}\\n\\n\\n\\n/* set Y-coordinate for each row */\\n\\n[data-id$=-essence-of-greed], [data-id$=-essence-of-loathing] {\\n    top: calc(0*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id$=-essence-of-contempt], [data-id$=-essence-of-zeal] {\\n    top: calc(1*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id$=-essence-of-hatred], [data-id$=-essence-of-anguish] {\\n    top: calc(2*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id$=-essence-of-woe], [data-id$=-essence-of-spite] {\\n    top: calc(3*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id$=-essence-of-fear], [data-id$=-essence-of-scorn] {\\n    top: calc(4*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id$=-essence-of-anger], [data-id$=-essence-of-envy] {\\n    top: calc(5*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id$=-essence-of-torment], [data-id$=-essence-of-misery] {\\n    top: calc(6*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id$=-essence-of-sorrow], [data-id$=-essence-of-dread] {\\n    top: calc(7*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id$=-essence-of-rage], [data-id=essence-of-insanity], [data-id=remnant-of-corruption] {\\n    top: calc(8*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id$=-essence-of-suffering], [data-id=essence-of-horror] {\\n    top: calc(9*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id$=-essence-of-wrath], [data-id=essence-of-delirium] {\\n    top: calc(10*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id$=-essence-of-doubt], [data-id=essence-of-hysteria] {\\n    top: calc(11*var(--poe-custom-item-distance)) !important;\\n}\\n\\n\\n\\n/* set X-coordinate for each column */\\n\\n[data-id^=deafening-essence-of-] {\\n    left: calc(0*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id^=shrieking-essence-of-] {\\n    left: calc(1*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id^=screaming-essence-of-] {\\n    left: calc(2*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id^=wailing-essence-of-] {\\n    left: calc(3*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id^=weeping-essence-of-] {\\n    left: calc(4*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id^=muttering-essence-of-] {\\n    left: calc(5*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id^=whispering-essence-of-] {\\n    left: calc(6*var(--poe-custom-item-distance)) !important;\\n}\\n\\n/**/\\n\\n[data-id=wailing-essence-of-loathing], [data-id=wailing-essence-of-zeal], [data-id=wailing-essence-of-anguish], [data-id=wailing-essence-of-spite] {\\n    left: calc(7.5*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=screaming-essence-of-loathing], [data-id=screaming-essence-of-zeal], [data-id=screaming-essence-of-anguish], [data-id=screaming-essence-of-spite], [data-id=screaming-essence-of-scorn], [data-id=screaming-essence-of-envy], [data-id=screaming-essence-of-misery], [data-id=screaming-essence-of-dread] {\\n    left: calc(8.5*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=shrieking-essence-of-loathing], [data-id=shrieking-essence-of-zeal], [data-id=shrieking-essence-of-anguish], [data-id=shrieking-essence-of-spite], [data-id=shrieking-essence-of-scorn], [data-id=shrieking-essence-of-envy], [data-id=shrieking-essence-of-misery], [data-id=shrieking-essence-of-dread], [data-id=remnant-of-corruption] {\\n    left: calc(9.5*var(--poe-custom-item-distance)) !important;\\n}\\n\\n[data-id=deafening-essence-of-loathing], [data-id=deafening-essence-of-zeal], [data-id=deafening-essence-of-anguish], [data-id=deafening-essence-of-spite], [data-id=deafening-essence-of-scorn], [data-id=deafening-essence-of-envy], [data-id=deafening-essence-of-misery], [data-id=deafening-essence-of-dread], [data-id=essence-of-insanity], [data-id=essence-of-horror], [data-id=essence-of-delirium], [data-id=essence-of-hysteria] {\\n    left: calc(10.5*var(--poe-custom-item-distance)) !important;\\n}\\n\\n\\n\\n/*------------------------------\\n\\t\"Cards\" and \"Maps\" sections\\n------------------------------*/\\n\\n/* change font, color and background color of text items */\\n\\n.exchange-filter-item.text {\\n    font-family: \"Helvetica Neue\",\"Helvetica\",Helvetica,Arial,sans-serif !important;\\n    color:#b1a38e !important;\\n}\\n\\n.exchange-filter-item.text:not(.highlighted):not(.active) {\\n    background-color: #111 !important;\\n}\\n\\n/* double the width of the cards container */\\n\\n@media (min-width: 1200px) {\\n    .search-advanced-pane:nth-of-type(1) > .filter-group > div.filter-group-body > div.filter:nth-of-type(12) > div.filter-options {\\n        width: calc(100% + (100% + 20px)*var(--poe-custom-is-cards-width-doubled)) !important;\\n        padding-top: calc(33px*var(--poe-custom-is-cards-width-doubled)) !important;\\n    }\\n}\\n\n";
(function() {
    'use strict';
    let style_element = document.createElement("style");
    style_element.textContent = css_string;
    document.getElementsByTagName("head")[0].appendChild(style_element);
})();