import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const CategoryCard = ({ title, items, icon }) => (
  <div className="col col--4 margin-bottom--lg">
    <div className="card shadow--md" style={{ height: '100%', borderTop: '4px solid #25c2a0' }}>
      <div className="card__header">
        <h3>{icon} {title}</h3>
      </div>
      <div className="card__body">
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {items.map((item, idx) => (
            <li key={idx} style={{ marginBottom: '6px', borderBottom: '1px solid #f2f2f2' }}>
              <Link to={item.url} style={{ fontSize: '0.9rem' }}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default function MESDocumentationPortal() {
 /* const gettingStarted = [
    { label: '2. Sign Up / Access Request', url: '/docs/pages/getting_started/signup' },
    { label: '4. SAP Links & Resources', url: '/docs/pages/getting_started/sap_links' },
    { label: '7. SCADA Flow Overview', url: '/docs/pages/getting_started/scada_flow' },
  ];

  const operatorItems = [
    { label: '3.1 Order Queue', url: '/docs/pages/operator/order_queue' },
    { label: '3.2 Order Prep (General)', url: '/docs/pages/operator/preparation' },
    { label: '└ 3.2.1 Run-in Plates', url: '/docs/pages/operator/prep/run-in' },
    { label: '└ 3.2.2 Stock Plates', url: '/docs/pages/operator/prep/stock' },
    { label: '└ 3.2.3 Inserting HP Plates', url: '/docs/pages/operator/prep/hp-plates' },
    { label: '3.3 Order on Machine', url: '/docs/pages/operator/order_on_machine' },
    { label: '3.4 Order Confirmation', url: '/docs/pages/operator/confirmation' },
    { label: '3.5 Order Rework', url: '/docs/pages/operator/rework' },
    { label: '3.6 Rejects', url: '/docs/pages/operator/rejects' },
  ];

  const supervisorItems = [
    { label: '5.1 KPI Monitor', url: '/docs/pages/supervisor/kpi_mon' },
    { label: '5.2 MES Monitor', url: '/docs/pages/supervisor/mes_mon' },
    { label: '5.3 Production Monitor', url: '/docs/pages/supervisor/production_mon' },
    { label: '5.4 Confirmation Monitor', url: '/docs/pages/supervisor/confirmation_mon' },
    { label: '5.5 Reject Monitor', url: '/docs/pages/supervisor/reject_mon' },
    { label: '5.6 Downtime Management', url: '/docs/pages/supervisor/downtime_mon' },
    { label: '└ 5.6.1 Declare Downtime', url: '/docs/pages/supervisor/downtime/declare' },
    { label: '└ 5.6.2 Split Downtime', url: '/docs/pages/supervisor/downtime/split' },
  ];

  const adminItems = [
    { label: '6.1 Workcenter Config', url: '/docs/pages/admin/workcenter' },
    { label: '6.2 Set up Thin Client', url: '/docs/pages/admin/thin_client' },
    { label: '6.3 Shifts Management', url: '/docs/pages/admin/shifts' },
    { label: '6.4 Downtime Types', url: '/docs/pages/admin/downtime_types' },
  ];*/

  const testItems = [
    { label: '11198 - put pack on location in MES', url: '/docs/pages/user/DevOps/11198', status: 'approval' },
    { label: '13908 - max PACK weight niet toepassen', url: '/docs/pages/user/DevOps/13908', status: 'done' },
    { label: '14698 - Business monitor expand action types', url: '/docs/pages/user/DevOps/14698', status: 'backlog' },
    { label: '15982 - Rollout P010 Bending >1.5mm M097+M135+M011+M482+M484+M485+M415', url: '/docs/pages/user/DevOps/15982', status: 'approval' },
    { label: '15989 - Rollout P010 Accessoires  (M035)+M036+MAHO+MAHS', url: '/docs/pages/user/DevOps/15989', status: 'approval' },
    { label: '17534 - message tracing: Workcenter 1105 ?', url: '/docs/pages/user/DevOps/17534', status: 'backlog' },
    { label: '17649 - BUSINESS MONITOR: PACK WEIGHT EXCEEDED rounding error', url: '/docs/pages/user/DevOps/17649', status: 'new' },
    { label: '18589 - PROFILES= automatisch confirmatie', url: '/docs/pages/user/DevOps/18589', status: 'approval' },
    { label: '20260 - CO 54585465 changed WC => failed', url: '/docs/pages/user/DevOps/20260', status: 'prepare' },
    { label: '20335 - REJECTS kan geen categorie wissen als type leeg is', url: '/docs/pages/user/DevOps/20335', status: 'backlog' },
    
    
    { label: '20454 - REJECTS MONITOR: add searchfield Combined Order', url: '/docs/pages/user/DevOps/20454', status: 'done' },
    { label: '21495 - BALEX MMS add batch of scanned HU to tbl_parameters', url: '/docs/pages/user/DevOps/21495', status: 'done' },
    { label: '21814 - material type check => include material group (P7x cannot scan laminate on coilpos', url: '/docs/pages/user/DevOps/21814', status: 'done' },
    { label: '23015 - MESSAGE TRACING: multiple HU in 1 confirmation not searchable using header', url: '/docs/pages/user/DevOps/23015', status: 'backlog' },
    { label: '23698 - EN1090 label altijd tonen, ongeacht actieve check of niet', url: '/docs/pages/user/DevOps/23698', status: 'done' },
    { label: '23867 - Rollout P010 M033 (virtual profiles) rail machine', url: '/docs/pages/user/DevOps/23867', status: 'approval' },
    { label: '23959 - PROFILES= automatisch confirmatie', url: '/docs/pages/user/DevOps/23959', status: 'approval' },
    { label: '24220 - bijlagen in MES (drawings bending, punching purlins, ventilation + punching profile)', url: '/docs/pages/user/DevOps/24220', status: 'approval' },
    { label: '24378 - EN1090 check', url: '/docs/pages/user/DevOps/24378', status: 'approval' },
    



     
    
     


  ];

  return (
    <Layout title="MES Manual" description="MES System Documentation Portal">
      <main className="container margin-vert--xl">
        {/*<header className="text--center margin-bottom--xl">
          <h1 style={{fontSize: '3rem'}}>MES System Manual</h1>
          <p>Full Operating Procedures, SAP Integration & Administrative Guides</p>
        </header>*/}

        <div className="row">
          {/* Getting Started & Basics */}
          {/*<CategoryCard title="Getting Started" icon="🚀" items={gettingStarted} />*/}

          {/* Operator - Takes more space if needed, but here it fits the grid */}
         {/* <CategoryCard title="Operator Screens" icon="🖥️" items={operatorItems} />*/}

          {/* Supervisor */}
         {/* <CategoryCard title="Supervisor / Monitors" icon="📊" items={supervisorItems} />*/}

          {/* Admin */}
          {/*<CategoryCard title="System Admin" icon="⚙️" items={adminItems} />*/}

          {/* tikets */}
          {/* Kolom 1: Nieuwe taken */}
          <CategoryCard 
            title="New/To-do" 
            icon="🆕" 
            items={testItems.filter(item => item.status === 'new')} 
          />

          {/* Kolom 2: Bezig */}
          <CategoryCard 
            title="Waiting approval" 
            icon="🚧" 
            items={testItems.filter(item => item.status === 'approval')} 
          />

          {/* Kolom 3: prepare Backlog  */}
          <CategoryCard 
            title="Prepare Backlog" 
            icon="🏗️" 
            items={testItems.filter(item => item.status === 'prepare')} 
          />

          {/* Kolom 4: Backlog (Ideeën/Toekomst) */}
          <CategoryCard 
            title="Ready for Backlog" 
            icon="📁" 
            items={testItems.filter(item => item.status === 'backlog')} 
          />

          {/* Kolom 5: Afgerond */}
          <CategoryCard 
            title="Done" 
            icon="✅" 
            items={testItems.filter(item => item.status === 'done')} 
          />
        </div>

        <section className="margin-top--lg text--center" style={{padding: '2rem', backgroundColor: '#f9f9f9', borderRadius: '8px'}}>
          <h2>Need Technical Support?</h2>
          <p>If you encounter <b> Errors</b>, please refer to the Scada Flow or contact the MES DevOps team.</p>
        </section>
      </main>
    </Layout>
  );
}