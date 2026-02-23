---
title: MII => MES 
sidebar_label: MII => MES 
sidebar_position: 1
authors: Alexander
tags: [MII => MES]
description: MII => MES 
---

---
<div style={{ minWidth: '1800px', marginLeft: '-300px', overflowX: 'auto' }}>
| Plant | Machine / Workcenter | Status | Planned Go-Live | Virtual/Int | Staff Trained | Remarks |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **P010** | M146 (vieo edge) | 🟡 In Progress | ? | Integrated | yes | geen communicatie met machine, scada bestaat |
| **P010** | M035 | 🟡 In Progress | ? | Integrated | yes | 22390 - geen communicatie met machine, scada bestaat. te testen waarom het bericht faalt in MES. MMS aanpassen om consumptie uit te lezen zonder HU (materiaal wordt geconsumeert uit 1100), nieuwe machine pas in april geleverd |
| **P010** | M037 | 🟡 In Progress | ? | Integrated | yes | 22081 - Db is voorzien op de 032. nick volgt op met Jan & Frederiek (probleem met overconsumpties)|
| **P010** | M146 | 🟡 In Progress | 20/02/2026 | Integrated | yes | 22390 -  |
| **P010** | M097+M135+M011+M482+M484+M485+M415+M086 | 🟡 In Progress | ? | Integrated | yes | M086 aanmaken, enkele bugs (24918 + 24894) |
| **P020** | M402 | ⚪ Scheduled | ? | Integrated | no | wachten op maintenance voor opschakelen SQL connectie |
| **P200** | M230 - slitting | ⚪ Scheduled | ? | Integrated | no | scada not ready, PLC moet vervangen worden |
| **P214** | M242 - slitting | ⚪ Scheduled | ? | Integrated | no | scada not ready, PLC moet vervangen worden |
| **P240** | M245 - slitting | ⚪ Scheduled | ? | Integrated | no | scada not ready, PLC moet vervangen worden |
| **P300** | Bending | ⚪ Scheduled | 01/03/2026 | Virtual | no | samen met slitting |
| **P300** | slitting | ⚪ Scheduled | 01/03/2026 | Virtual | no | samen met bending |
| **P300** | profiles | ⚪ Scheduled | 08/03/2026 | Virtual | no | week na slitting/bending |
| **P714** | M734 | ⚪ Scheduled | ? | ? | no | 14825 - waiting for test results PL |
| **P714** | M739 | ⚪ Scheduled | ? | ? | no | nagevraagd bij Jezior |
</div>


 **MII => MES**
| Plant | Machine / Workcenter | Status | Planned Go-Live | Virtual/Int | Staff Trained | Remarks |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **P010** | M031 - Purlin | ⚪ Scheduled | voor eind 2027 | Integrated | no | 15981 & 23142 - mach comm outdated => jan vdv |
| **P010** | M032 - Purlin | ⚪ Scheduled | voor eind 2027 | Integrated | no | 15981 & 23142 - mach comm outdated => jan vdv |
| **P010** | M034 - Purlin | ⚪ Scheduled | voor eind 2027 | Integrated | no | 15981, 23142 & 23867 - mach comm outdated => jan vdv |
| **P010** | M024 - Panels (full) | ⚪ Scheduled | voor eind 2027 | Integrated | no | 15980 |
| **P010** | M025 - Panels (full) | ⚪ Scheduled | voor eind 2027 | Integrated | no |  |
| **P010** | M151 - Panels (full) | ⚪ Scheduled | voor eind 2027 | Integrated | no |  |
| **P010** | M152 - Panels (full) | ⚪ Scheduled | voor eind 2027 | Integrated | no |  |
| **P010** | M023 - Panels (rejects & DT) | ⚪ Scheduled | voor eind 2027 | Integrated | no |  |
| **P010** | M500 - Panels (rejects & DT) | ⚪ Scheduled | voor eind 2027 | Integrated | no |  |
| **P300** | M345 - Panels (DT) | ⚪ Scheduled | voor eind 2027 | Integrated | no |  |
| **P300** | M346 - Panels (DT) | ⚪ Scheduled | voor eind 2027 | Integrated | no |  |


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