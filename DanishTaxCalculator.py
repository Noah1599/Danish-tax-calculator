  #løn
timeLøn=700
timerArbejdetOmDagen=8
dageArbejdeUgen=5
ugerOmÅret=52

#satser
bundSkat=0.1206
komuneskat=0.234
kirkeskat=0.0089
personFradrag=49700
amBidrag=0.08
#skatte loft er kommuneskat + bundskat + topskat ikke am bidrag og kirkeskat
skatteLoft=0.5207
#husk dev topskat bundkrense efter am bidrag fratrukket
topSkatStarter=588900
topSkat=0.15


#now the program starts
betalesSkat=bundSkat+komuneskat+kirkeskat
maxSkat=betalesSkat+topSkat
totalTimer=timerArbejdetOmDagen*dageArbejdeUgen*ugerOmÅret
bruttoLon=totalTimer*timeLøn
print("skat før topskat er: ",betalesSkat*100,"%")
print("skat efter topskat er: ",maxSkat*100,"%\n")
print("total timer arbejdet om året: ",totalTimer,"og brutto løn er: ",bruttoLon,"kr")
#print("betalt am bidrag: ",int(bruttoLon*amBidrag),"kr")
udenAmBidrag=bruttoLon-(bruttoLon*amBidrag)
#print("uden am bidrag: ",int(udenAmBidrag),"kr")
udenPersonFradrag=udenAmBidrag-personFradrag
#print("uden person fradrag: ",int(udenPersonFradrag),"kr")
betalerViTopskat=udenPersonFradrag>topSkatStarter
#print("betaler vi topskat: ",betalerViTopskat)
if betalerViTopskat:
    topskatBetalesAf=udenPersonFradrag-topSkatStarter
    print("\n\ntopskat betales af: ",int(topskatBetalesAf),"kr")
    PengeMedNormalSkat=topSkatStarter-(topSkatStarter*betalesSkat)
    print("Normal skat betales af: ",int(topSkatStarter),"kr")
    print("\nTopskat blevet betalt",int(topskatBetalesAf*maxSkat),"kr")
    print("Normal skat blevet betalt: ",int(topSkatStarter*betalesSkat),"kr\n")
    topSkatBetales=topskatBetalesAf-(topskatBetalesAf*maxSkat)
    pengeEfterSkat=PengeMedNormalSkat+topSkatBetales
    print("penge efter skat: ",int(pengeEfterSkat),"kr")
    print("\npenge betalt i skat: ",int(bruttoLon-pengeEfterSkat),"kr")
    print("penge efter skat: ",int(pengeEfterSkat),"kr")
else:
    pengeEfterSkat=udenPersonFradrag-(udenPersonFradrag*betalesSkat)
    print("penge betalt i skat: ",int(udenPersonFradrag*betalesSkat),"kr")
    print("\npenge efter skat: ",int(pengeEfterSkat),"kr")
    print("betalte penge i skat: ",int(udenPersonFradrag*betalesSkat),"kr")

