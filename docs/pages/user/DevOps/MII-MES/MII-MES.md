---
title: MII => MES 
sidebar_label: MII => MES 
sidebar_position: 1
authors: Alexander
tags: [MII => MES]
description: MII => MES 
---

---

[📥 Download de Presentatie (PPTX)](/files/MES_MII_status_20260212.pptx)

1.	MII => MES: volg ik verder op met Nick wat er juist moet gebeuren. Struikelblok momenteel is machine communicatie & MES functionaliteiten
2.	WEMO is ongoing: Nick ging samenzitten met de leverancier om de machine communicatie na te gaan en lastenboek te schrijven, dan kunnen we zien wat er in MES moet voorzien worden en een gedetailleerd voorstel opmaken voor budgettering
3.	MES adaptie: over het algemeen heel hoog. Bij roll-outs soms lage cijfers, indien geen roll-out ga ik systematisch bijhouden waarom er soms toch SAP confirmaties gebeuren. => heb nog geen toegang tot Dynatrace en de bestanden om dit na te gaan, stem ik af met Tine.

=> voor panels in P010 en P300 => nagaan bij M410 Isometal hoe stabiel het daar draait. => hoog % voor gemaakte aantallen (stap 1 zonder verbruik), niet voor consumpties (stap 2)

comment van Jan Wauters:
Little change that consumption Isometall will happen this year.
Alessandro -> 8mth on META + Buzias + Alaco.
After I would like Alessandro to prioritize on input to AWS.

=> momenteel nog geen conso op M410
=> geplande deadline MII3 uitzetten => eind 2027. Zal gebeuren door externe programmeur (spagnolo) die ook isometal heeft gedaan.
=> bij dringende noodzaak aan oplossing: copy M410 worden als het echt dringend wordt, zonder conso met sap backflush

P300 push om bending in orde te krijgen op MES, daarna stilstanden. staat opgezet in MES, maar niet in gebruik. 


Nicolas.Massart@isometall.com - operations manager van Isometall
 
Alois.Verschuere@isometall.com - production manager van Isometall (die staat soms in cc)


 


export const PrintButton = () => (
  <button 
    onClick={() => window.print()}
    className="button button--primary"
    style={{
      marginBottom: '1rem',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px'
    }}>
    <span>🖨️</span> Pagina exporteren naar PDF
  </button>
);

<PrintButton />