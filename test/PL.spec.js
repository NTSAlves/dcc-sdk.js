const {sign, verify, pack, unpack, signAndPack, unpackAndVerify, makeCWT, parseCWT, debug} = require('../lib/index');const expect = require('chai').expect; 

describe('PL', async () => {
  it('should verify PL_2DCode_raw_6', async () => {
    const HC1 = 'HC1:6BFC80Z80T9WTWGVLK659A:TG4G$BTZM0X*4FBBE*3FN0KKC+H3WY0/9CWC4*70 6AD97TK0F90KECTHGXJC$+D.JCBECB1A-:8$966469L6OF6VX6Z/ER2DD46JH8946XJCCWENF6OF63W5NW60A6WJCT3E 6AWJC0FDTA6AIA%G7X+AQB9746XG7TS9 967:6DL6WX8BM8CA6DB83R63X6$A7UF6QG8Q46/A8.A8$96V47.JCP9EJY8L/5M/5 96.96WF6%JCXQEIN8G/D6LE ZDQZCAJB0LEE4F0ECKQEPD09WEQDD+Q6TW6FA7C46TPCBEC8ZKW.CHWEBIAG09:S9Q+9DN90S7BIAOT9W.CUEEY3EAECWGDMXG2QDUW5*MEWUMMPCG/D8EDETAG+9*NAWB8 JC6/DYOACEC+EDR/OLEC$PC5$CUZCY$5Y$5JPCT3E5JDKA7Q47%964W5WA6N68$E5FAWIBG9SQCLEH19FZMD8B TL6AW8JJRBHTB91L0GMSNRCBBPL8R958CR2:7T84H7*6C V86W0*8G1MZJVS72L:M5WAB9UB0HF0';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload.credential)).to.eql({'ver': '1.0.0', 'nam': {'fn': 'Rogaliński-Król', 'fnt': 'ROGALINSKI<KROL', 'gn': 'Stanisław', 'gnt': 'STANISLAW'}, 'dob': '1958-11-11', 'v': [{'tg': '840539006', 'vp': 'J07BX03', 'mp': 'EU/1/21/1529', 'ma': 'ORG-100030215', 'dn': 2, 'sd': 2, 'dt': '2021-05-18', 'co': 'PL', 'is': 'Centrum e-Zdrowia', 'ci': 'URN:UVCI:01:PL:1/7934E5C11DAD485F9F27B20DA5A41082'}]});
  });

  it('should verify PL_2DCode_raw_7', async () => {
    const HC1 = 'HC1:6BFOXN%TS3DHCUO-4NW3U%:38$BCID:D4TUK%CMEY4GQV5DOP-IQVV%W0:WK1/3F/8X*G3M9BM9Y0BFU2O1BLD3423ZQT-EJEG3LVG4NJZ7386B%336J37A0*$KLZOHM9B69W9582B9NGYPLET4615IHP8-R6QQG9RAHL-INAQR$HMA:7-7ODYAKA799M+BLN3B$S4PCN-7O 96AL6N95N149NGR-SAG10EQ928GEQW2DVJ5/O8V00IK5B$FG0B3:4FOCN1BN.2G/44N85.4/MAXL9OJ4VK4K2DCNC6H01ZSP+PYH8ZDLPKLWBA3%88:SXI0 PQVW5/O16%HAT1Z%P2J9QH6 ZPSR9-Z9LTT WUQRENS431TA$SVPV9Q7ADF8V0QTF$7F5RVLS4A/SA*0-5LU5T4%3$C5S6Q :U6J76A7SA7G6MHL6U*OX8QAIR4A6R95F/5%BN JTETS4 9A2TF%CD 810H% 0R%0ZD5CC9T0H%:K5QNX/GZS2+9CHBF-D8S-RFJRH:5 MTZR6P 8MZPD/3K9N2OR$$FRH9KAW6QO50H/%CKYO8%NRLQV$V6DUT/QT8U5/IJ%DF%VSV4NX35%QSKV/*MY30DKBT1';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload.credential)).to.eql({'ver': '1.0.0', 'nam': {'fn': 'Rogaliński-Król', 'fnt': 'ROGALINSKI<KROL', 'gn': 'Stanisław', 'gnt': 'STANISLAW'}, 'dob': '1958-11-11', 't': [{'tg': '840539006', 'tt': 'LP217198-3', 'ma': '9999', 'sc': '2021-05-24T15:20:00+02:00', 'dr': '2021-05-24T15:40:00+02:00', 'tr': '260415000', 'tc': 'Narodowe centrum testowania', 'co': 'PL', 'is': 'Centrum e-Zdrowia', 'ci': 'URN:UVCI:01:PL:2/6E4B336EAD9B11EB85290242AC130003'}]});
  });

  it('should verify PL_2DCode_raw_10', async () => {
    const HC1 = 'HC1:6BFOXN%TS3DH8Q8 -LP+F2YUW 2 *M0II3VDC9BYE2T+AI9C5I9AB7TFOYS2URC/GPWBILC9%FAGUUS I4Q5%H0AN8MH0PZBITH$*SSCK1JAA/C6ECXCI*ZAVDJG8LKHGI A$6I7LM9JJTHH*KM9JJHUK.-KMJK3VLH+GPII4HGRHHCVK%JKXGGHGGYIAJGEQQEH-B6DAF1MPOLNTARDASFFFJC0D9E2LBHHGKLO-K%FGMIAJB2I$59G6RH9TUGCO1:PI/E2$4J6ALW.IG016UN+TVFRVLRF%RRG01WXVY/KRT2L1T:15PTC0 DM6QM-Q:$5ZZN6/4-Z7.P4.77QNQ.O688PBR73X7WN5+P4G167IVGOA+FFUDBQEAJJKHHGEC8ZI9$JAQJKHJLR0MNDQNTOI6H1RM62VWBU.-7B.SA4M$S46T08NBX0S/KTC*DVNPDOF4UPHAQB+4OWTOIVDRNZ3JRQ2Y05HDS83W90GXMM/KE5D7 U56CWZZH2F8 O4 -SAZF';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload.credential)).to.eql({'ver': '1.0.0', 'nam': {'fn': 'Rogaliński-Król', 'fnt': 'ROGALINSKI<KROL', 'gn': 'Stanisław', 'gnt': 'STANISLAW'}, 'dob': '1958-11-11', 'r': [{'tg': '840539006', 'fr': '2021-01-07', 'co': 'PL', 'is': 'Centrum e-Zdrowia', 'df': '2021-01-18', 'du': '2021-04-18', 'ci': 'URN:UVCI:01:PL:3/6E4B336EAD9B11EB85290242AC130003'}]});
  });

  it('should verify PL_2DCode_raw_1', async () => {
    const HC1 = 'HC1:6BFOXN%TS3DH1QG9WA6H98BRPRHO DJS4/ R-%2%T4E+NAVDQ81LO2-36/X0X6BMF6.UCOMIN6R%E5UX4U96:/6N9R%EPXCROGO3HOWGOKEQBKL/645YPL$R-ROM47L*K1UPB65%PD*ZL*9DJZI202K-JKYJGCC:H3J1D1I3-*TW C57DNGSE%CM6EJ.CN8TF*SD8CL0D3VCL0DK0D4.S%JCJBCTYDWBDWVDUMCS1J+PB/VSQOL9DLSWCZ3EBKDVIJGDBDIT1NJGIA+OJ:CI-L3ZJA/3CZIJFVA.QO5VA81K0ECM8CXVDC8C 1JI7JSTNCA7G6M%28ODSINQIVQUIRYYQ4P7M9SB95S6M/355X7C25E8DLFEA3LS6FPOSXD79NT+X4VIOS0I63K*+7SLS9NTRFBOX4YGFD.O8RJ5XPUVPQRHIY1VS1NQ1PRAAUICO12Y99UE$V1*65CHK62HJEEK*M:C9GXN.SMPT1+2O::BOJHLTIPFEL-D+HD.35IIM:/M0S4*PA6447S6+1TIARN/NV 1S86P.N2SBDRNW2GTET6/VTKIX200TTJ2';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload.credential)).to.eql({'ver': '1.0.0', 'nam': {'fn': 'Rogaliński-Król', 'fnt': 'ROGALINSKI<KROL', 'gn': 'Stanisław', 'gnt': 'STANISLAW'}, 'dob': '1958-11-11', 'v': [{'tg': '840539006', 'vp': 'J07BX03', 'mp': 'EU/1/21/1529', 'ma': 'ORG-100030215', 'dn': 1, 'sd': 2, 'dt': '2021-03-18', 'co': 'PL', 'is': 'Centrum e-Zdrowia', 'ci': 'URN:UVCI:01:PL:1/4F86BBF0865B465F9BDD907C3A2C141F'}]});
  });

  it('should verify PL_2DCode_raw_2', async () => {
    const HC1 = 'HC1:6BFOXN%TS3DH1QG9WA6H98BRPRHO DJS4/ R-%2LXKQGLAVDQ81LO2-36/X0X6BMF6.UCOMIN6R%E5UX4795:/6N9R%EPXCROGO3HOWGOKEQBKL/645YPL$R-ROM47L*K1UPB65%PDMOL*9DJZI202K-JKYJGCC:H3J1D1I3-*TW C57DNGSE%C-3EXED2SSRST BD%USVJC1HCK0DM.C86U*XC0SSNST$JCD8CBZI+PB/VSQOL9DLSWCZ3EBKDVIJGDBDIT1NJGIA+OJ:CI-L3ZJA/3CZIJFVA.QO5VA81K0ECM8CXVDC8C 1JI7JSTNCA7G6M%28ODSINQIVQUIRYYQ4P7M9SB95S6M/355X7C25E8DLFEA3LS6FPOSXD79NT+X4VIOS0I63K*+7SLS9NTRFBOX4YGFD.O8RJ5XPUVPQRHIY1VS1NQ1PRAAUICO12Y99UE$V1*65ZHK5DJ:CVF0EQ%7Q:F+Y4/-M7/VLJ6PYRKUAKZRJWNHIEMRMJOS$2OP.26OD-3TO+HIK3DBLDJM23E5VHM5G1DT1YLZZ8Q.SV4JTUFR10%NJK0';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload.credential)).to.eql({'ver': '1.0.0', 'nam': {'fn': 'Rogaliński-Król', 'fnt': 'ROGALINSKI<KROL', 'gn': 'Stanisław', 'gnt': 'STANISLAW'}, 'dob': '1958-11-11', 'v': [{'tg': '840539006', 'vp': 'J07BX03', 'mp': 'EU/1/21/1529', 'ma': 'ORG-100030215', 'dn': 2, 'sd': 2, 'dt': '2021-05-18', 'co': 'PL', 'is': 'Centrum e-Zdrowia', 'ci': 'URN:UVCI:01:PL:1/7934E5C11DAD485F9F27B20DA5A41082'}]});
  });

  it('should verify PL_2DCode_raw_3', async () => {
    const HC1 = 'HC1:6BFOXN%TS3DH8Q8 -LP+F2YUW 2 *M0II3VDC9B5E2ZZD*CMEY4PDATFOYS2URC/GPWBILC9%FAGUUS I4Q5%H0AN8XI06YB0YQ$*SSCK1JAA/C6ECXCI*ZAVDJG8LKHGI A$6I7LM7JJDJLTJL%SHGKLVUK2IHYULZ.KIUJZIKCVKT.K1KK$JL2ILYIAJGEQQEH-B6DAF1MPOLNTARDASFFFJC0D9E2LBHHGKLO-K%FGMIAJB2O%56YB2 U5XI8872EQEA7IB6$C94JB4D9KDIKWNA7IG4CZ9NZ*HKDIB1A4JBRDCN:FBJC48TG3JC*TH*B.PKFTJCPI2YUGH6ZL8S0W1SGSS3.UIG UALG H2OH6W4I$X4A057*KB*KYQTHFTNS4.$S6ZCJKB7MBMD38D0CZG0KI%.K:4N9ZF-3CD+EXHKC4V$AV0PVJU1IMSG*0UF6A79HNN+QT2ZDJ8Q%R6 VT:Z6Z97+G420TQJRJS3XPVX%TXTG*ZHRBNJ-TNGAZ-09BF';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload.credential)).to.eql({'ver': '1.0.0', 'nam': {'fn': 'Rogaliński-Król', 'fnt': 'ROGALINSKI<KROL', 'gn': 'Stanisław', 'gnt': 'STANISLAW'}, 'dob': '1958-11-11', 'r': [{'tg': '840539006', 'fr': '2021-05-07', 'co': 'PL', 'is': 'Centrum e-Zdrowia', 'df': '2021-05-18', 'du': '2021-09-05', 'ci': 'URN:UVCI:01:PL:3/655052DD53A649E897FA10AC9C175654'}]});
  });

  it('should verify PL_2DCode_raw_8', async () => {
    const HC1 = 'HC1:6BFOXN%TS3DH8Q8 -LP+F2YUW 2 *M0II3VDC9B5E2ZZD*CMEY4PDATFOYS2URC/GPWBILC9%FAGUUS I4Q5%H0AN8XI06YB0YQU.S0 KJGPR-SAG10EQ928GEQW2DVJ5/O8V00$L5B$FG0B3:4FOCN1BN.2G/44N85.4/MAXL9OJ4VK4K2DCNC6H01ZSP+PRK8A+Q8OIWQQM%G:0SPZI:/V+*PA KZ*U0I1-I0*OC6H0/VMYYM CLM3LB*09B9$EDJ2K3Z8.-B97U3-SY$NE*V65GR:8U3AR8C10AGAU16G: K$%N$FKK.U0$JDSKO0POJJL4SA4H.9T8AL**I6$0697MDF7YV8/G /KVYC$4JV5T%Z2X D3R5G%5TW5A 6YO6XL69/9-3AKI6%T6LEQ-P6ZLK.:0IDQ B8V18N08JAU0WL2BT8LU*EU$9SE67H/SUTV%OM 4B3-7YYGUD4Y1H 398OF7 4M13:22Q4B6P519UGM19V08RE*OHW-MXBT3H0TZB-LF';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload.credential)).to.eql({'ver': '1.0.0', 'nam': {'fn': 'Rogaliński-Król', 'fnt': 'ROGALINSKI<KROL', 'gn': 'Stanisław', 'gnt': 'STANISLAW'}, 'dob': '1958-11-11', 'r': [{'tg': '840539006', 'fr': '2021-05-07', 'co': 'XY', 'is': 'Centrum e-Zdrowia', 'df': '2021-05-18', 'du': '2021-09-05', 'ci': 'URN:UVCI:01:PL:3/6E4B336EAD9B11EB85290242AC130003'}]});
  });

  it('should verify PL_2DCode_raw_4', async () => {
    const HC1 = 'HC1:6BFOXN%TS3DHCUO-4NW3U%:38$BCID:D4UVM%CM3Z43/UI9C.H9YN5C9GNC5FAPQHIZC4.OI:OI8ZA80PWW2G%89-8CNNM3L3*8D942 0K.GH*A:%0VZ0958-B5621Q3RT*ON*O62114N6T4615+*P2$P-8RD9527N/352A7%$A0/4TZ76*OWF6+05889F767A7AHL-INAQR$HMA:7-7ODYAKA799M+BLN3B$S4PCN-7O 96AL6N95N14BPKR-SAG10EQ928GEQW2DVJ5/O8V00IK5U%FAL8W/40J0KPE I10I1IL4%NAS-2J.27N9KNCJJ142DCJ0W9NP+PYH8ZDLPKLWBA3%88:SXI0 PQVW5/O16%HAT1Z%P2J9QH6 ZPSR9FX9ON1:PI/E2$4J6ALW.IG016UN+TVFRVLRF%RRG01WXVY/KRT2L1T:15PTC0 DM6QM-Q:$5ZZN6/4-Z7.P4.77QNQ.O688PBR73X7WN5-R0FJS0TKLJHWKP/HLIJL8JF8JFHJP7NVDEB12JD*2D0HO48-NSB$MNPA5 A+VUXED.UII7VA3RV I2MD6%LY:BSVIGQPVSKQZUD2W28LTS0SUAHNB7SIPD3-UNB9UXTLZ*D/D1/A7I17:QREIBVYV.D5I93QKJ';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload.credential)).to.eql({'ver': '1.0.0', 'nam': {'fn': 'Rogaliński-Król', 'fnt': 'ROGALINSKI<KROL', 'gn': 'Stanisław', 'gnt': 'STANISLAW'}, 'dob': '1958-11-11', 't': [{'tg': '840539006', 'tt': 'LP6464-4', 'nm': 'Roche LightCycler qPCR', 'sc': '2021-05-24T20:10:00+02:00', 'dr': '2021-05-25T14:20:00+02:00', 'tr': '260415000', 'tc': 'Narodowe centrum testowania', 'co': 'PL', 'is': 'Centrum e-Zdrowia', 'ci': 'URN:UVCI:01:PL:2/710B50E7F8F842C59D2DA913885C603F'}]});
  });

  it('should verify PL_2DCode_raw_5', async () => {
    const HC1 = 'HC1:6BFOXN%TS3DHCUO-4NW3U%:38$BCID:D4TUK%CM3Z4DHN+9G4G5/2VPV0EA92-7:ZH6I1$4JM:IN1MUF533M.Q6846A$Q 76SW6D71ZT6PF6GCMV76C%6SE0IE9DFH*/G/2P9B9V$8 NL3BI.+IJYCDN0TA3RK37MBZD3K%IO1BXXVB+25ALX7JXE57AL4%IY.IAH5LXK49J+4JV5T1$4SZ46J0MCIKYJGCC:H3J1D1I3-*TW C57DNGSA%CQ6E2NDDVCNYDGVTVMC9VC1KT2VCBKDLED3VCA.SWVDOVDC8CYZJGDB4FTRW6ZYARH5 65RQ3Y7CXMFU*GSHGRKMXGG6DB4C9Q2LCIJ/HH1A5T%F.-B97U3-SY$NE*V65GR:8U3AR8C10AGAU16G: K$%N$FKK.U0$JDSKO0POJJL4SA4H.9T8AL**I6$0697MDF7YV8/G /KVYC14J1W3JYF8C5KU7FT5D75W9AV88E34+V4YC5/HQN$QXCR2422E49.BA9OV:CQ:Q94W$ZD58I ET0WR YV6XOX-JRL6RWO0EWWBW:PAYQIPH2CRTIN78BF6*P5 5R7W7ATQZNLZ7 1TKR4M%G/VLIHN8TC830KNHD1';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload.credential)).to.eql({'ver': '1.0.0', 'nam': {'fn': 'Rogaliński-Król', 'fnt': 'ROGALINSKI<KROL', 'gn': 'Stanisław', 'gnt': 'STANISLAW'}, 'dob': '1958-11-11', 't': [{'tg': '840539006', 'tt': 'LP217198-3', 'ma': '1232', 'sc': '2021-05-24T12:20:00+02:00', 'dr': '2021-05-24T12:40:00+02:00', 'tr': '260415000', 'tc': 'Narodowe centrum testowania', 'co': 'PL', 'is': 'Centrum e-Zdrowia', 'ci': 'URN:UVCI:01:PL:2/6E4B336EAD9B11EB85290242AC130003'}]});
  });

  it('should verify PL_2DCode_raw_9', async () => {
    const HC1 = 'HC1:6BFOXN%TS3DH1QG9WA6H98BRPRHO DJS4:$T-%2LXKQGLAVDQ81LO2-36/X0X6BMF6.UCOMIN6R%E5UX4795:/6M8P%EPN8R6F1HOP*SQ R1-%JHQ14SI.J9WVHWVH+ZE/T9/T1$NICZUGOJWLI+J53O8J.V J8$XJK*L5R16E0YXLF3V4UBQZJV-H1TB2ZBJ%J1V16*JMU9RP56XH3WHK%JJ$H5Q1C-4A+2XEN QT QTJC3TI301TOH63L1QRA2J9OI9DV2A*EPJAAVUPK6FTIPPAAMI PQVW5/O16%HAT1Z%P WUQRENS431TA$SVPV9Q7ADF8V0QTF$7F5RVLS4A/SA*0-5LU5T4%3$C5S6Q :U6J76A7SA7G6MHL6U*OX8QAIR4A6R95F/5PCN 96$XMM8D9KCNKE$JDVPLW1KD0K8KES/F-1JJ.KM+GTGKP22F67M6G CVH+SUDWXGA%PAN7I8MH0VB1MO/J4ZE8G4QK6M 3IT8W36L$L6F6K88K8-Q%-V*5DGSV0E8$V7IAQ4PN.*CZ%EV.SOIQLTU/S1H6DCNG';
    const cwtPayload = await unpackAndVerify(HC1);
    expect(cwtPayload).not.to.be.null;
    expect(cwtPayload).not.to.be.undefined;
    expect(await parseCWT(cwtPayload.credential)).to.eql({'ver': '1.0.0', 'nam': {'fn': 'Rogaliński-Król', 'fnt': 'ROGALINSKI<KROL', 'gn': 'Stanisław', 'gnt': 'STANISLAW'}, 'dob': '1958-11-11', 'v': [{'tg': '840539006', 'vp': 'J07BX03', 'mp': 'EU/1/21/1529', 'ma': 'ORG-99999999', 'dn': 2, 'sd': 2, 'dt': '2021-05-18', 'co': 'PL', 'is': 'Centrum e-Zdrowia', 'ci': 'URN:UVCI:01:PL:1/6E4B336EAD9B11EB85290242AC130003'}]});
  });

});

