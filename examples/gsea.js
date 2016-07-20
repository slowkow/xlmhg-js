// helper
function intersect(a, b) {
    var t;
    if (b.length > a.length) t = b, b = a, a = t; // indexOf to loop over shorter
    return a.filter(function (e) {
	if (b.indexOf(e) !== -1) return true;
    });
}

// from org.Hs.GO2Symbol.js
var json = '{"GO:0000075 cell cycle checkpoint":["AKT1","ANAPC1","ANAPC10","ANAPC11","ANAPC15","ANAPC2","ANAPC4","ANAPC5","ANAPC7","APC","ATF2","ATM","ATR","ATRIP","BABAM1","BCL2L1","BIRC5","BLM","BRCA1","BRCC3","BRD4","BRE","BRSK1","BUB1","BUB1B","BUB3","CASC5","CASP2","CCAR2","CCNA2","CCNB1","CCND1","CCNE2","CCNG2","CDC14B","CDC16","CDC20","CDC23","CDC26","CDC27","CDC45","CDC5L","CDC6","CDK2","CDK5RAP2","CDK5RAP3","CDKN1A","CDKN1B","CDKN2B","CDT1","CEP63","CHEK1","CHEK2","CHFR","CLOCK","CLSPN","CRADD","CRY1","CSNK2A1","CSNK2A2","DCLRE1B","DDX39B","DGKZ","DNA2","DTL","DUSP1","DYNC1LI1","E2F1","FAM175A","FANCG","FBXO31","FBXO6","FEM1B","FOXN3","FZR1","GEN1","GML","GSG2","H2AFX","HINFP","HMGA2","HORMAD1","HRAS","HUS1","INTS3","INTS7","KLHL22","KNTC1","LCMT1","MAD1L1","MAD2L1","MAD2L1BP","MAD2L2","MAPKAPK2","MDC1","MDM2","MUC1","NABP1","NABP2","NAE1","NBN","NDRG1","NEK11","NEK6","PCID2","PIDD1","PLK1","PLK2","PLK3","PLK5","PML","PPP2R5C","PRCC","PRKDC","PRPF19","PSMA1","PSMA2","PSMA3","PSMA4","PSMA5","PSMA6","PSMA7","PSMA8","PSMB1","PSMB10","PSMB11","PSMB2","PSMB3","PSMB4","PSMB5","PSMB6","PSMB7","PSMB8","PSMB9","PSMC1","PSMC2","PSMC3","PSMC4","PSMC5","PSMC6","PSMD1","PSMD10","PSMD11","PSMD12","PSMD13","PSMD14","PSMD2","PSMD3","PSMD4","PSMD5","PSMD6","PSMD7","PSMD8","PSMD9","PSME1","PSME2","PSME3","PSME4","PSMF1","RAD1","RAD17","RAD9A","RB1","RBBP8","RBM38","RFWD2","RFWD3","RHNO1","RINT1","RPA1","RPA2","RPA4","RPS27A","RPS27L","SETMAR","SMC1A","SOX11","SOX4","TAOK1","TAOK2","TAOK3","TERF1","TEX14","TGFB1","THOC1","THOC5","TICRR","TIPIN","TIPRL","TP53","TPR","TRIAP1","TTK","UBA52","UBB","UBC","UBE2C","UBE2D1","UBE2E1","UIMC1","USP17L2","USP28","USP44","WAC","WNT9A","XRCC3","ZAK","ZNF207","ZW10","ZWILCH","ZWINT"],"GO:0000077 DNA damage checkpoint":["ATF2","ATM","ATR","ATRIP","BABAM1","BLM","BRCA1","BRCC3","BRD4","BRE","BRSK1","CASP2","CCAR2","CCNA2","CCND1","CDC14B","CDC5L","CDK2","CDK5RAP3","CDKN1A","CDKN1B","CEP63","CHEK1","CHEK2","CLOCK","CLSPN","CRADD","CRY1","DDX39B","DGKZ","DTL","E2F1","FAM175A","FBXO31","FBXO6","FEM1B","FOXN3","FZR1","GML","H2AFX","HINFP","HMGA2","HUS1","INTS7","MAPKAPK2","MDC1","MDM2","MUC1","NBN","NEK11","NEK6","PIDD1","PLK1","PLK5","PML","PPP2R5C","PRKDC","PRPF19","PSMA1","PSMA2","PSMA3","PSMA4","PSMA5","PSMA6","PSMA7","PSMA8","PSMB1","PSMB10","PSMB11","PSMB2","PSMB3","PSMB4","PSMB5","PSMB6","PSMB7","PSMB8","PSMB9","PSMC1","PSMC2","PSMC3","PSMC4","PSMC5","PSMC6","PSMD1","PSMD10","PSMD11","PSMD12","PSMD13","PSMD14","PSMD2","PSMD3","PSMD4","PSMD5","PSMD6","PSMD7","PSMD8","PSMD9","PSME1","PSME2","PSME3","PSME4","PSMF1","RAD1","RAD17","RAD9A","RBBP8","RBM38","RFWD2","RFWD3","RHNO1","RINT1","RPA2","RPA4","RPS27A","RPS27L","SOX4","TAOK1","TAOK2","TAOK3","THOC1","THOC5","TIPIN","TIPRL","TP53","TRIAP1","UBA52","UBB","UBC","UIMC1","USP28","WAC","ZAK"],"GO:0000079 regulation of cyclin-dependent protein serine/threonine kinase activity":["ADAM17","AKT1","APC","ATRAID","BCCIP","BLM","CCND1","CCND2","CCND3","CCNE2","CCNG1","CCNY","CDC25A","CDC25C","CDC37","CDC6","CDK5R1","CDK5R2","CDK5RAP1","CDK5RAP3","CDK7","CDKN1A","CDKN1B","CDKN2A","CDKN2B","CDKN2C","CDKN2D","CDKN3","CEBPA","CKS1B","CKS2","CUL3","DAB2IP","DIRAS3","EGFR","FBXO31","FGF10","GADD45A","GTF2H1","GTPBP4","HERC5","HEXIM1","HEXIM2","HHEX","INCA1","LATS1","LATS2","MAPRE3","MEN1","MNAT1","MYOCD","NELL1","NR2F2","PDGFB","PIM1","PKD1","PKD2","PKMYT1","PLK1","PROX1","PSMD10","PSRC1","PTEN","RGCC","SERTAD1","TFAP4","UBE2C"],"GO:0000082 G1/S transition of mitotic cell cycle":["ACVR1","ACVR1B","ADAM17","AIF1","AKT1","ANKRD17","ATM","BACH1","BCAT1","BRD4","BRD7","CACUL1","CAMK2A","CASP2","CCNA1","CCNB1","CCND1","CCNE1","CCNE2","CCNH","CDC25A","CDC45","CDC6","CDC7","CDC73","CDCA5","CDK1","CDK10","CDK2","CDK3","CDK4","CDK6","CDK7","CDKN1A","CDKN1B","CDKN2A","CDKN2C","CDKN2D","CDKN3","CDT1","CKS1B","CRADD","CRLF3","CUL1","CUL2","CUL3","CUL4A","CUL5","DACT1","DBF4","DDX3X","DGKZ","DHFR","DHFRP1","E2F1","E2F7","EGFR","EIF4E","EIF4EBP1","FBXO31","FBXO5","FGF10","FHL1","GFI1","GML","GSPT1","HINFP","ID2","INHBA","INO80","JADE1","KANK2","KIF14","KLF11","LATS2","LSM10","LSM11","MCM10","MCM2","MCM3","MCM4","MCM5","MCM6","MCM7","MCM8","MDM2","MNAT1","MUC1","MYO16","NACC2","NPAT","ORC1","ORC2","ORC3","ORC4","ORC5","ORC6","PCNA","PHF8","PID1","PIDD1","PIM1","PIM2","PKD1","PKD2","PKMYT1","PLCB1","PLK2","PLK3","PLK5","PML","POLA1","POLA2","POLE","POLE2","PPP1R1C","PPP2R3B","PPP2R5C","PPP6C","PRIM1","PRIM2","PRKDC","PRMT2","PSMA1","PSMA2","PSMA3","PSMA4","PSMA5","PSMA6","PSMA7","PSMA8","PSMB1","PSMB10","PSMB11","PSMB2","PSMB3","PSMB4","PSMB5","PSMB6","PSMB7","PSMB8","PSMB9","PSMC1","PSMC2","PSMC3","PSMC4","PSMC5","PSMC6","PSMD1","PSMD10","PSMD11","PSMD12","PSMD13","PSMD14","PSMD2","PSMD3","PSMD4","PSMD5","PSMD6","PSMD7","PSMD8","PSMD9","PSME1","PSME2","PSME3","PSME4","PSMF1","PTEN","PTPN6","RB1","RBM38","RCC1","RFWD2","RFWD3","RGCC","RPA1","RPA2","RPA3","RPA4","RPS27A","RPS27L","RPS6KB1","RRM2","SKP1","SKP2","SLFN11","SMARCA4","SOX4","SPDYA","TCF3","TFDP1","TFDP3","TP53","TRIAP1","TRIM71","TYMS","UBA52","UBB","UBC","UBE2E2","USP37","WEE1","ZC3H12D","ZNF655","ZPR1"],"GO:0000083 regulation of transcription involved in G1/S transition of mitotic cell cycle":["BACH1","BRD4","CCNA1","CCNE1","CDC45","CDC6","CDK1","CDT1","DHFR","DHFRP1","E2F1","E2F7","FBXO5","GFI1","HINFP","KLF11","NPAT","ORC1","PCNA","POLA1","RB1","RRM2","TYMS","ZPR1"],"GO:0000086 G2/M transition of mitotic cell cycle":["ABCB1","ACTR1A","AJUBA","AKAP9","ALMS1","ARPP19","ATM","AURKA","BACH1","BIRC5","BORA","BRD4","BRSK2","BTRC","CCNA1","CCNA2","CCNB1","CCNB2","CCND1","CCNH","CCNY","CCP110","CDC25A","CDC25B","CDC25C","CDC7","CDK1","CDK14","CDK2","CDK4","CDK5RAP2","CDK7","CDKN1A","CDKN2A","CDKN2B","CENPF","CENPJ","CEP131","CEP135","CEP152","CEP164","CEP192","CEP250","CEP290","CEP41","CEP57","CEP63","CEP70","CEP72","CEP76","CEP78","CETN2","CHEK2","CKAP5","CLASP1","CLSPN","CNTRL","CSNK1D","CSNK1E","CUL1","DBF4B","DCTN1","DCTN2","DCTN3","DYNC1H1","DYNC1I2","DYNLL1","ENSA","EP300","FBXL15","FBXL7","FBXW11","FGFR1OP","FHL1","FOXM1","HAUS2","HSP90AA1","KCNH5","KDM8","KHDRBS1","KIF14","LATS1","LIN37","LIN52","LIN54","LIN9","LOC400927-CSNK1E","MAPRE1","MASTL","MELK","MNAT1","MYBL2","NAE1","NDE1","NEDD1","NEK2","NES","NINL","NUMA1","ODF2","OFD1","OPTN","PAFAH1B1","PCM1","PCNT","PHOX2B","PKMYT1","PLCB1","PLK1","PLK3","PLK4","PPP1CB","PPP1R12A","PPP1R12B","PPP2R1A","PPP2R2A","PRKACA","PRKAR2B","RAB11A","RAB8A","RAD51B","RAD51C","RBBP4","RCC2","RPS27A","SDCCAG8","SFI1","SKP1","SSNA1","TAF2","TERF1","TICRR","TPD52L1","TUBA1A","TUBA4A","TUBB","TUBB4A","TUBB4B","TUBG1","TUBG2","TUBGCP2","TUBGCP3","TUBGCP4","TUBGCP5","TUBGCP6","UBA52","UBB","UBC","USH1C","USP47","VPS4B","WEE1","YWHAE","YWHAG"],"GO:0000096 sulfur amino acid metabolic process":["ADI1","AGXT","AHCY","APIP","BHMT","BHMT2","CBS","CDO1","CNDP2","CPS1","CSAD","CTH","DPEP1","ENOPH1","ETHE1","GCLC","GCLM","GGT1","GOT1","MAT1A","MRI1","MSRA","MTAP","MTHFR","MTR","MTRR","MUT","NFS1","NOX4","SLC25A10","SMS","SQRDL","SUOX","TST"]}';
var gs = JSON.parse(json);

// ex. differentially expressed genes
var genesHave = ["BRD4","BRSK2","BTRC","CCNA1","CCNA2","CCNB1","CCNB2","CCND1","CCNH","CCNY","CCP110"]

// restrict to gene sets where we have genes
var gsFilter = {};
var gsName = Object.keys(gs);

for(var i = 0; i < gsName.length; i++) {
    var gst = gs[gsName[i]];
    var geneSet = intersect(gst, genesHave);
    // at least a genes in gene set in universe
    if(geneSet.length > 1) {
	gsFilter[gsName[i]] = gst;
    }
};

gsName = Object.keys(gsFilter);
var options = '';
for(var i = 0; i < gsName.length; i++) {
    options += "<option value=\"" + gsName[i] + "\">" + gsName[i] + "</option>"
}
   
document.body.innerHTML += "<select id='geneset_selection' class='btn btn-default'>" + options + '</select>';
document.body.innerHTML += "<div id='gsea' width=500 height=500></div>"

// filter to the genes we have
var geneset_selection = document.getElementById("geneset_selection").value;
var geneSet = intersect(gs[geneset_selection], genesHave);
var N = genesHave.length;
var K = geneSet.length;
var L = N;
var X = 1;
var v = genesHave.map(function(name) {
    if(geneSet.indexOf(name) >= 0) { return 1 }
    else { return 0 }
});
var vName = [];
genesHave.map(function(name) {
    if(geneSet.indexOf(name) >= 0) { vName.push(name); }
});

// make app
var app = require("mhg-js");
var instance = new app({
    el: '#gsea',
    v:v, N:N, K:K, L:L, X:X,
    plot:1
});

// display genes for sanity check
document.body.innerHTML += "<div id='genesHave'> Test genes: " + genesHave + "</div>"
document.body.innerHTML += "<div id='geneSet'> Gene set: " + gs[geneset_selection] + "</div>"
