const {sign, verify, pack, unpack, signAndPack, unpackAndVerify, makeCWT, parseCWT, debug} = require('../lib/index');const expect = require('chai').expect; 

describe('BE', async () => {
  it('should verify BE_2DCode_raw_1', async () => {
    const HC1 = 'HC1:NCFM70P90T9WTWGSLKC 4+79MHEJZGQW79ADABB0XK:ICSW82F3Z0RUIE2F3Z0M JEY50.FK6ZK7:EDOLOPCF8F7460H8.+A$Y9G:67Y8.*9W09.1BETAKN9/%6.G8NB8YK4WJCT3E0H8XJC +DXJCCWENF6OF63W5NW6.96%JCKQEV+AQIB.JCBECB1A-:8$96646746-Q6307Q$D.UDRYA 96NF6L/5SW6VX6KQE*709WEQDD+Q6TW6FA7C466KCN9E%961A69L6QW6B46JPCT3E5JDNA73467464W51S6..DX%DZJC3/DWY8VKE5$C4WEI3D.8E7$C5$C$34JEC5UD9Z9*KE1ECW.C9WE0Y8.HAGY83UAI3DIWET6AITA$HAP6ABZA2S7RB8XB9$PC5$CUZCY$5Y$527B:VDORSZ7WGN707LC/E-VK*QS2RIC$G2G6OTT-ABGW9WNBRYKZ7N$TJEO6I*NQ8T6G2NNIK-7EOBVER-LN4+Q5.UHXOK.0NQ30AB8CF';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload.credential)).to.eql({'ver': '1.0.0', 'nam': {'fn': 'Ebraert', 'fnt': 'EBRAERT', 'gn': 'Peter Paul Maria', 'gnt': 'PETER<PAUL<MARIA'}, 'dob': '1980-01-14', 'v': [{'tg': '840539006', 'vp': '1119305005', 'mp': 'EU/1/20/1525', 'ma': 'ORG-100001417', 'dn': 1, 'sd': 1, 'dt': '2021-05-15', 'co': 'BE', 'is': 'VAZG', 'ci': '01BEVLMP7BEIN6GQWZTAKP6OBBAN#J'}]});
  });

  it('should verify BE_2DCode_raw_2', async () => {
    const HC1 = 'HC1:NCFOXN%TSMAHN-H%OCHOS80JS3NL734E47X5+T9ZKEOGI+FNRM4:X9EFCJ0FCV4*XUA2P-FHT-HNTI4L6F$SYQ1WWB1 FC+N3+VAN80%N2/J0%NBG81*F$H0FPOP0SDZ7:PIWIG4SISSQWVHWVH+ZE/T9U-HIMIWG9$R73DKGY8HHB/WBFDOAC5Y47ZFRQ:2L*KW 70SO:GOLIROGOQQ5+V4YC5/HQTNO9CLXCR3Q4L/5R3FMIA+/BOPD:CA$JD5C96LF9B8TJDBLD+G8%JCW0IT3E3DA2KC4JBJE9TTL$CIMPD6796LFXB9PAG3BH-AIHAG-DL1-HIQCB7LNKE$JDVPLW1KD0KCZG2Q3D 85TPR:7Q3JVNR/+SJYDBE684L65JA.3Q4Q%LNBTBTHVW8SFPDJ-PH4H+WJR5NUCAV+JQDGM4RP.4TM3S61QYT6+720SBT7-WVW10D0I15';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload.credential)).to.eql({'ver': '1.0.0', 'nam': {'fn': 'Ebraert', 'fnt': 'EBRAERT', 'gn': 'Peter Paul Maria', 'gnt': 'PETER<PAUL<MARIA'}, 'dob': '1980-01-14', 'r': [{'tg': '840539006', 'fr': '2021-05-01', 'co': 'BE', 'is': 'SC-BE', 'df': '2021-05-26', 'du': '2021-11-08', 'ci': '01BEVLOKPNUUDKCBFKBUYMSPXV5G#I'}]});
  });

  it('should verify BE_2DCode_raw_3', async () => {
    const HC1 = 'HC1:NCFOXN%TSMAHN-H%OCHOS80JS3NL73:D4+OV-36HD7AOMOW4S2S**J4G5W/JT3FF/8X*G3M9BM9Z0BZW4V/AY733J7%2HV77ADFYRVNDF.93$PN-*0X37*090GVVNNGM5V.499TP+M5*K*U3*96846A$Q 76UW62U10%MPF65ZMNH6LK92R5QV1O2R0NLD+9 BLXE6UC65ZM176NF675IPF5$5QA46/Q6576PR6PF5RBQ746B46O1N646RM9XC5.Q69L6-96QW6U46%E5 NPC71AL6ZO66X69/9-3AKI63ZMLEQZ76UW6*E99Q9E$BDZIE9J/MJFZI*IB*NIZ0KA42BKBTKBA4229BCWKXSJGZI8DJC0J*PITQTA.SGD32OIZ0K%GA+ESCQSETC%ESISTR SR63+NTWVBDKBYLDN4DE1D-NSLFUKQ9B.UP-1AZJS9JE6F*ZJKE7+3G3UUS.77SU1QUB5JPN2R*O55OOQC*3JSH53SFN*46PBMZL+H2%-T$LVVV1Y:D3T3AP7BFPI7SYM0/KO+DG';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload.credential)).to.eql({'ver': '1.0.0', 'nam': {'fn': 'Ebraert', 'fnt': 'EBRAERT', 'gn': 'Peter Paul Maria', 'gnt': 'PETER<PAUL<MARIA'}, 'dob': '1980-01-14', 't': [{'tg': '840539006', 'tt': 'LP6464-4', 'sc': new Date('2021-05-25T09:02:07.000000Z'), 'dr': new Date('2021-05-15T19:21:22.000000Z'), 'tr': '260415000', 'tc': '81160393', 'co': 'BE', 'is': 'SC-BE', 'ci': '01BEVLBDIML2KR1IFKPPCSX8OQF3#K'}]});
  });

});

