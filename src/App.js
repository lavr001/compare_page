import React, {Component} from 'react';
import Tabs from './components/Tabs/Tabs';
import Plan from './components/Plan/Plan';
import Highlights from './components/Highlights/Highlights';
import Doctors from './components/Doctors/Doctors';
import Drugs from './components/Drugs/Drugs';
import Hospital from './components/Hospital/Hospital';
import './App.scss';

class App extends Component {

  state = {
    plans: {
      aetna: {
        name: 'Aetna Medicare Plus Plan (HMO)',
        highlights: ['Monthly premium', '$0 + Part B premium', 'Annual in-network deductible', '$0', 'Out-of-pocket maximum', '$4,500', 'Your doctors in network', '3 of 3 covered', 'Your annual drug costs', '$9,378', 'Acute inpatient hospital stay', '$0 - Unlimited days', 'OTC allowance', '$150', 'Eyewear allowance', '$275 per year', 'Hearing aid allowance', '$1,250 per year, per ear', 'Dental allowance', '$1,275 per year', 'Dental services', '$0'],
        doctors: ['Primary doctor visit copay', '$0', 'Specialist visit copay', '$0', 'Your doctors (3 of 3 covered)', 'Amy Smith Covered', 'Robert M. Smith, Jr Covered', 'Danielle Oberman Covered'],
        drugs: ['Prescription drug deductible', '$0', 'Your potential drug savings', '$0', 'Your pharmacy', 'CVS Pharmacy #02801, 8607 Santa Monica Blvd (Changing pharmacies may affect your drug costs.)', 'In-network', 'Covered', 'Preferred pharmacy pricing', '(Not covered)', 'Your annual estimated drug costs', '$9,378', 'Your drugs (3 of 10 covered)', 'Omniprazole', '$1,227 covered, tier 2', 'Stalevo 100', '$192 covered, tier 1', 'Monodox', '$1,227 (not covered)', 'Albenza', '$192 (not covered)', 'Drizalma Sprinkle', '$1,227 (not covered)', 'Pedipred', '$192 covered, tier 4', 'T.E.D. Anti-Embolism Stocking', '$1,227 (not covered)', 'bupropion HCI XL', '$192 (not covered)', 'RadiaPlexRx', '$1,227 (not covered)', 'Q-Care Rx Q2', '$192 (not covered)', 'Initial Drug Coverage Copay (30-day supply)', 'Preferred retail cost-sharing', 'Tier 1 (preferred generic)', '$15', 'Tier 2 (generic)', '$20', 'Tier 3 (generic)', '$47', 'Tier 4 (non-preferred)', '$100', 'Tier 5 (specialty)', '33% coinsurance', 'border', 'Standard retail cost-sharing', 'Tier 1 (preferred generic)', '$15', 'Tier 2 (generic)', '$20', 'Tier 3 (generic)', '$47', 'Tier 4 (non-preferred)', '$100', 'Tier 5 (specialty)', '33% coinsurance', 'border', 'Preferred mail order cost-sharing', 'Tier 1 (preferred generic)', '$0', 'Tier 2 (generic)', '$0', 'Tier 3 (generic)', '$42', 'Tier 4 (non-preferred)', '$99', 'Tier 5 (specialty)', '33% coinsurance', 'Coverage GAP (Donut Hole)', 'Generic drugs', 'See summary of benefits', 'Brand-name drugs', 'See summary of benefits', 'Catastrophic Coverage', '', 'Generic drugs', '5% coinsurance OR $3.60 copay*', 'Brand-name drugs', '5% coinsurance OR $8.95 copay*', 'OTC allowance', 'Covered'],
        hospital: ['Copays', '', 'Emergency room visit', '$90 If you are admitted to the hospital, you do not have to pay your share of the cost for emergency room.', 'Ambulance service', '$225 for ground or air services', 'Urgently needed services', '$10', 'Outpatient mental health', 'Covered', 'Skilled nursing facilities (SNF)', 'Up to 100 days', '$0/day copay days 1-20', '$50/day copay days 21-100', 'border', '', 'Outpatient surgery', 'Covered', 'Hospital', '$0', 'Ambulatory surgical center', '$0', 'border', '', 'Outpatient Rehabilitation', 'Covered', 'Cardiac rehabilitation', '$0', 'Intensive cardiac rehabilitation', '$0', 'Pulmonary rehabilitation', '$0', 'Exercise therapy', '$0', 'Occupational therapy', '$0', 'Physical and speech therapy', '$0', 'border', '', 'Outpatient lab / radiology / x-ray', 'Covered', 'Diagnostic procedures and tests', '$0', 'Lab services', '$0', 'Diagnostic or therapeutic radiology services', '$0-50*', 'border', '', 'Inpatient hospital coverage', 'Covered', 'Acute', '$0 - Unlimited days', 'Psychiatric', '$0']
      },
      kaiser: {
        name: 'Kaiser Permanente Senior Advantage LA, Orange Co. (HMO)',
        highlights: ['Monthly premium', '$0 + Part B premium', 'Annual in-network deductible', '$0', 'Out-of-pocket maximum', '$5,000', 'Your doctors in network', '2 of 3 covered', 'Your annual drug costs', '$2,098', 'Acute inpatient hospital stay', '$235/day for days 1-7', 'OTC allowance', '(Not covered)', 'Eyewear allowance', '$40 every 2 years', 'Hearing aid allowance', '$40 every 2 years', 'Dental allowance', '$925 per year', 'Dental services', '$5-15*'],
        doctors: ['Primary doctor visit copay', '$0', 'Specialist visit copay', '$0', 'Your doctors (2 of 3 covered)', 'Amy Smith Covered', 'Robert M. Smith, Jr Covered', 'Danielle Oberman (Not covered)'],
        drugs: ['Prescription drug deductible', '$10', 'Your potential drug savings', '$0', 'Your pharmacy', 'CVS Pharmacy #02801, 8607 Santa Monica Blvd (Changing pharmacies may affect your drug costs.)', 'In-network', '(Not covered)', 'Preferred pharmacy pricing', '(Not covered)', 'Your annual estimated drug costs', '$2,098', 'Your drugs (6 of 10 covered)', 'Omniprazole', '$187 covered, tier 2', 'Stalevo 100', '$1,208 (not covered)', 'Monodox', '$187 covered, tier 5', 'Albenza', '$1,208 covered, tier 4', 'Drizalma Sprinkle', '$187 covered, tier 2', 'Pedipred', '$1,208 covered, tier 4', 'T.E.D. Anti-Embolism Stocking', '$187 covered, tier 2', 'bupropion HCI XL', '$1,208 (not covered)', 'RadiaPlexRx', '$187 (not covered)', 'Q-Care Rx Q2', '$1,208 (not covered)', 'Initial Drug Coverage Copay (30-day supply)', 'Preferred retail cost-sharing', 'Tier 1 (preferred generic)', '(Not covered)', 'Tier 2 (generic)', '(Not covered)', 'Tier 3 (generic)', '(Not covered)', 'Tier 4 (non-preferred)', '(Not covered)', 'Tier 5 (specialty)', '(Not covered)', 'border', 'Standard retail cost-sharing', 'Tier 1 (preferred generic)', '$3', 'Tier 2 (generic)', '$15', 'Tier 3 (generic)', '$47', 'Tier 4 (non-preferred)', '$100', 'Tier 5 (specialty)', '33% coinsurance', 'border', 'Preferred mail order cost-sharing', 'Tier 1 (preferred generic)', '(Not covered)', 'Tier 2 (generic)', '(Not covered)', 'Tier 3 (generic)', '(Not covered)', 'Tier 4 (non-preferred)', '(Not covered)', 'Tier 5 (specialty)', '(Not covered)', 'Coverage GAP (Donut Hole)', 'Generic drugs', 'See summary of benefits', 'Brand-name drugs', 'See summary of benefits', 'Catastrophic Coverage', '', 'Generic drugs', 'See summary of benefits', 'Brand-name drugs', 'See summary of benefits', 'OTC allowance', '(Not covered)'],
        hospital: ['Copays', '', 'Emergency room visit', '$120 If you are admitted to the hospital within 24 hours you do not have to pay your share of the cost for emergency room.', 'Ambulance service', '20% coinsurance for ground or air services', 'Urgently needed services', '$5', 'Outpatient mental health', 'Covered', 'Skilled nursing facilities (SNF)', 'Up to 100 days', '$0/day copay days 1-20', '$50/day copay days 21-100', 'border', '', 'Outpatient surgery', 'Covered', 'Hospital', '$200', 'Ambulatory surgical center', '$200', 'border', '', 'Outpatient Rehabilitation', 'Covered', 'Cardiac rehabilitation', '$0', 'Intensive cardiac rehabilitation', '$0', 'Pulmonary rehabilitation', '$0', 'Exercise therapy', '$0', 'Occupational therapy', '$0', 'Physical and speech therapy', '$0', 'border', '', 'Outpatient lab / radiology / x-ray', 'Covered', 'Diagnostic procedures and tests', '$20', 'Lab services', '$20', 'Diagnostic or therapeutic radiology services', '$30-215*', 'border', '', 'Inpatient hospital coverage', 'Covered', 'Acute', '$235/day for days 1-7', '$0/day thereafter unlimited', '', 'Psychiatric', '$230/day for days 1-7', '$0/day thereafter unlimited']
      },
      anthem: {
        name: 'Anthem MediBlue StartSmart Plus (HMO)',
        highlights: ['Monthly premium', '$0 + Part B premium', 'Annual in-network deductible', '$0', 'Out-of-pocket maximum', '$3,750', 'Your doctors in network', '2 of 3 covered', 'Your annual drug costs', '$3,326', 'Acute inpatient hospital stay', '$125/day for days 1-5', 'OTC allowance', '$365 every 3 months', 'Eyewear allowance', '$350 every 2 years', 'Hearing aid allowance', '$1,000 every 3 years', 'Dental allowance', '$750 per year', 'Dental services', '$5-20*'],
        doctors: ['Primary doctor visit copay', '$0', 'Specialist visit copay', '$0', 'Your doctors (2 of 3 covered)', 'Amy Smith (Not covered)', 'Robert M. Smith, Jr Covered', 'Danielle Oberman Covered'],
        drugs: ['Prescription drug deductible', '$8', 'Your potential drug savings', '$0', 'Your pharmacy', 'CVS Pharmacy #02801, 8607 Santa Monica Blvd (Changing pharmacies may affect your drug costs.)', 'In-network', 'Covered', 'Preferred pharmacy pricing', '(Not covered)', 'Your annual estimated drug costs', '$3,326', 'Your drugs (6 of 10 covered)', 'Omniprazole', '$0 covered, tier 2', 'Stalevo 100', '$21 covered, tier 1', 'Monodox', '$0 (not covered)', 'Albenza', '$21 covered, tier 4', 'Drizalma Sprinkle', '$0 covered, tier 2', 'Pedipred', '$21 covered, tier 4', 'T.E.D. Anti-Embolism Stocking', '$187 covered, tier 2', 'bupropion HCI XL', '$1,089 (not covered)', 'RadiaPlexRx', '$187 (not covered)', 'Q-Care Rx Q2', '$1,089 (not covered)', 'Initial Drug Coverage Copay (30-day supply)', 'Preferred retail cost-sharing', 'Tier 1 (preferred generic)', '(Not covered)', 'Tier 2 (generic)', '(Not covered)', 'Tier 3 (generic)', '(Not covered)', 'Tier 4 (non-preferred)', '(Not covered)', 'Tier 5 (specialty)', '(Not covered)', 'border', 'Standard retail cost-sharing', 'Tier 1 (preferred generic)', '$5', 'Tier 2 (generic)', '$14.50', 'Tier 3 (generic)', '$45', 'Tier 4 (non-preferred)', '$95', 'Tier 5 (specialty)', '33% coinsurance', 'border', 'Preferred mail order cost-sharing', 'Tier 1 (preferred generic)', '(Not covered)', 'Tier 2 (generic)', '(Not covered)', 'Tier 3 (generic)', '(Not covered)', 'Tier 4 (non-preferred)', '(Not covered)', 'Tier 5 (specialty)', '(Not covered)', 'Coverage GAP (Donut Hole)', 'Generic drugs', '25% coinsurance', 'Brand-name drugs', '25% coinsurance', 'Catastrophic Coverage', '', 'Generic drugs', '5% coinsurance OR $3.60 copay*', 'Brand-name drugs', '5% coinsurance OR $8.95 copay*', 'OTC allowance', '$0 copay - Up to $365 every 3 months'],
        hospital: ['Copays', '', 'Emergency room visit', '$90 If you are admitted to the hospital within 24 hours you do not have to pay your share of the cost for emergency room.', 'Ambulance service', '$100 for ground or air services', 'Urgently needed services', '$20', 'Outpatient mental health', 'Covered', 'Skilled nursing facilities (SNF)', 'Up to 100 days', '$0/day copay days 1-20', '$50/day copay days 21-100', 'border', '', 'Outpatient surgery', 'Covered', 'Hospital', '$0-100*', 'Ambulatory surgical center', '$0-50*', 'border', '', 'Outpatient Rehabilitation', 'Covered', 'Cardiac rehabilitation', '$20', 'Intensive cardiac rehabilitation', '$20', 'Pulmonary rehabilitation', '$20', 'Exercise therapy', '$20', 'Occupational therapy', '$20', 'Physical and speech therapy', '$0-20*', 'border', '', 'Outpatient lab / radiology / x-ray', 'Covered', 'Diagnostic procedures and tests', '$0', 'Lab services', '$0', 'Diagnostic or therapeutic radiology services', '$0-150*', 'border', '', 'Inpatient hospital coverage', 'Covered', 'Acute', '$125/day for days 1-5', '$0/day for days 6-270', '', 'Psychiatric', '$125/day for days 1-5', '$0/day for days 6-270']
      },
    },
    current_plan: 'aetna',
  }

  activate_tab = (event, name) => {
    this.setState({ current_plan: name });
    document.querySelectorAll('[data-active]').forEach(a => a.setAttribute('data-active', 'false'));
    event.target.setAttribute('data-active', 'true');
    document.querySelector('[data-plan]').setAttribute('data-plan', name)
  }

  onScroll = () => {
    let tabs_bottom = document.querySelector('[data-tabs]').getBoundingClientRect().bottom;
    let highlights_section_top = document.querySelector('[data-section-highlights]').getBoundingClientRect().top;
    let doctors_section_top = document.querySelector('[data-section-doctors]').getBoundingClientRect().top;
    let drugs_section_top = document.querySelector('[data-section-drugs]').getBoundingClientRect().top;
    let hospital_section_top = document.querySelector('[data-section-hospital]').getBoundingClientRect().top;

    if (tabs_bottom >= highlights_section_top) {
      document.querySelector('[data-section-highlights]').setAttribute('data-section-highlights', 'sticky');
    } else {
      document.querySelector('[data-section-highlights]').setAttribute('data-section-highlights', 'true');
    }

    if (tabs_bottom >= doctors_section_top) {
      document.querySelector('[data-section-doctors]').setAttribute('data-section-doctors', 'sticky');
    } else {
      document.querySelector('[data-section-doctors]').setAttribute('data-section-doctors', 'true');
    }

    if (tabs_bottom >= drugs_section_top) {
      document.querySelector('[data-section-drugs]').setAttribute('data-section-drugs', 'sticky');
    } else {
      document.querySelector('[data-section-drugs]').setAttribute('data-section-drugs', 'true');
    }

    if (tabs_bottom >= hospital_section_top) {
      document.querySelector('[data-section-hospital]').setAttribute('data-section-hospital', 'sticky');
    } else {
      document.querySelector('[data-section-hospital]').setAttribute('data-section-hospital', 'true');
    }
  }

  render() {
    return (
      <div className="container" onScroll={this.onScroll}>
        <a href="https://compare-plan.vercel.app/">Back to plans</a>
        <Tabs clicked={(event, name) => this.activate_tab(event, name)} />
        <Plan name={this.state.plans[`${this.state.current_plan}`].name} />
        <main>
          <Highlights content={this.state.plans[`${this.state.current_plan}`].highlights} />
          <Doctors content={this.state.plans[`${this.state.current_plan}`].doctors} />
          <Drugs content={this.state.plans[`${this.state.current_plan}`].drugs} />
          <Hospital content={this.state.plans[`${this.state.current_plan}`].hospital} />
        </main>
      </div>
    )
  }
}

export default App;
