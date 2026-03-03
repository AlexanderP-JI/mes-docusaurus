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