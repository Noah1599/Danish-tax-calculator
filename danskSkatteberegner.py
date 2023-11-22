# Løn
time_løn = 654.4
timer_arbejdet_om_dagen = 8
dage_arbejde_ugen = 5
uger_om_året = 52

# Skattesatser
su = 1004
grundskat_sats = 0.1206
kommuneskat_sats = 0.234
kirkeskat_sats = 0.0089
personligt_fraktræk = 49700
am_bidrag_sats = 0.08
skatte_loft = 0.5207
topskat_starter = 588900
topskat_sats = 0.15

# Nu starter programmet
betalt_skat = grundskat_sats + kommuneskat_sats + kirkeskat_sats
maksimal_skat_sats = betalt_skat + topskat_sats
total_timer = timer_arbejdet_om_dagen * dage_arbejde_ugen * uger_om_året
brutto_løn = total_timer * time_løn + su * 12

print("Skat før topskat er: ", betalt_skat * 100, "%")
print("Skat efter topskat er: ", maksimal_skat_sats * 100, "%\n")
print("Total timer arbejdet om året: ", total_timer, "og brutto løn er: ", brutto_løn, "kr")

uden_am_bidrag = brutto_løn - (brutto_løn * am_bidrag_sats)
uden_personligt_fraktræk = uden_am_bidrag - personligt_fraktræk
betaler_topskat = uden_personligt_fraktræk > topskat_starter

if betaler_topskat:
    topskat_betalt_af = uden_personligt_fraktræk - topskat_starter
    print("\n\ntopskat betales af: ", int(topskat_betalt_af), "kr")
    penge_med_normal_skat = topskat_starter - (topskat_starter * betalt_skat)
    print("Normal skat betales af: ", int(topskat_starter), "kr")
    print("\nTopskat blevet betalt", int(topskat_betalt_af * maksimal_skat_sats), "kr")
    print("Normal skat blevet betalt: ", int(topskat_starter * betalt_skat), "kr\n")
    topskat_betalt = topskat_betalt_af - (topskat_betalt_af * maksimal_skat_sats)
    penge_efter_skat = penge_med_normal_skat + topskat_betalt
    print("Penge efter skat: ", int(penge_efter_skat), "kr")
    print("\nPenge betalt i skat: ", int(brutto_løn - penge_efter_skat), "kr")
    print("Penge efter skat: ", int(penge_efter_skat), "kr")
else:
    penge_efter_skat = uden_personligt_fraktræk - (uden_personligt_fraktræk * betalt_skat)
    print("Penge betalt i skat: ", int(uden_personligt_fraktræk * betalt_skat), "kr")
    print("\nPenge efter skat: ", int(penge_efter_skat), "kr")
    print("Betalte penge i skat: ", int(uden_personligt_fraktræk * betalt_skat), "kr")
