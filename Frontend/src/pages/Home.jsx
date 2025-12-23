// import React from 'react';
// import { Link } from 'react-router-dom';

// // --- Reusable Card Component (Styled for the PMFBY look) ---
// const FeatureCard = ({ title, description, color, icon, linkTo }) => (
//   <Link to={linkTo} style={{ textDecoration: 'none', color: 'inherit' }}>
//     <div style={{
//       backgroundColor: color,
//       padding: '30px',
//       borderRadius: '15px',
//       margin: '15px',
//       width: '200px',
//       height: '250px',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       textAlign: 'center',
//       boxShadow: '0 8px 15px rgba(0, 0, 0, 0.4)',
//       transition: 'transform 0.2s, box-shadow 0.2s',
//       position: 'relative',
//     }}
//     onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-10px)'} /* Enhanced hover lift */
//     onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
//     >
//       {/* Icon Area */}
//       <div style={{ fontSize: '3em', color: '#101010', marginBottom: '10px' }}>
//         {icon}
//       </div>
//       
//       {/* Title */}
//       <h3 style={{ color: '#101010', fontSize: '1.2em', margin: '0 0 5px' }}>
//         {title}
//       </h3>
//       
//       {/* Description */}
//       <p style={{ fontSize: '0.85em', color: '#555', marginBottom: '15px' }}>
//         {description}
//       </p>

//       {/* Button Look */}
//       <div style={{ 
//           backgroundColor: '#101010', 
//           color: 'white', 
//           padding: '8px 15px', 
//           borderRadius: '8px',
//           width: '100%',
//           fontWeight: 'bold'
//       }}>
//           {title.includes('Calculator') ? 'Calculate' : title.split(' ')[0]}
//       </div>
//     </div>
//   </Link>
// );


// // --- MAIN HOME COMPONENT ---
// function Home() {
//   return (
//     /* CRITICAL FIX: Add the new wrapper class for the green background */
//     <div className="home-page-wrapper" style={{ margin: '0', textAlign: 'center', width: '100%' }}>
//       
//       {/* --- TOP BANNER/GUIDE TEXT (White bar in PMFBY site) --- */}
//       <div style={{ 
//           backgroundColor: '#f0f0f0', 
//           color: '#101010',
//           padding: '15px 30px',
//           borderRadius: '8px',
//           display: 'inline-block',
//           marginTop: '30px', /* This creates the desired space below the header */
//           marginBottom: '30px',
//           fontWeight: '600',
//           boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)'
//       }}>
//         Do you want to know insurance premium before Crop Insurance? Then Click Below!
//       </div>
//       
//       
//       {/* --- FEATURE CARDS GRID --- */}
//       <div style={{ 
//           display: 'flex', 
//           flexWrap: 'wrap', 
//           justifyContent: 'center', 
//           maxWidth: '1300px', 
//           margin: '0 auto', 
//           paddingBottom: '50px' /* Padding above the footer */
//       }}>
//         
//         {/* Row 1: Farmer Corner Card (Cyan) */}
//         <FeatureCard
//           title="Farmer Corner"
//           description="Apply crop insurance yourself."
//           color="#ade2f5" 
//           icon="🚜"
//           linkTo="/register"
//         />

//         {/* Row 2: Premium Calculator Card (Lime Green) */}
//         <FeatureCard
//           title="Insurance Premium Calculator"
//           description="Know your insurance premium before applying."
//           color="#bfff00" 
//           icon="💰"
//           linkTo="/about" /* Placeholder link */
//         />
//         
//         {/* Row 3: Application Status Card (Light Pink) */}
//         <FeatureCard
//           title="Application Status"
//           description="Know your application status on every step."
//           color="#ffe4e1" 
//           icon="📋"
//           linkTo="/login" /* Placeholder link */
//         />

//         {/* Row 4: Grievance/Report Card (Dark Red/Brown) */}
//         <FeatureCard
//           title="Krishi Rakshak Portal"
//           description="Tell us about your grievances & report loss of crop."
//           color="#a3765e" 
//           icon="🌿"
//           linkTo="/dashboard" /* Placeholder link */
//         />
//         
//         {/* Row 5: Learning Management System (Blue) */}
//         <FeatureCard
//           title="Learning Management System"
//           description="Your gateway to smarter farming & insurance learning."
//           color="#add8e6" 
//           icon="🎓"
//           linkTo="/dashboard" /* Placeholder link */
//         />
//         
//         {/* Row 6: Yield Estimation (Purple) */}
//         <FeatureCard
//           title="Yield Estimation System"
//           description="Yield Estimation System based on Technology."
//           color="#e6e6fa" 
//           icon="📈"
//           linkTo="/dashboard" /* Placeholder link */
//         />

//       </div>
//       
//       {/* Status Box */}
//       <div style={{ 
//           marginTop: '0', 
//           padding: '0', 
//           display: 'inline-block',
//           color: '#f0f0f0' 
//       }}>
//           MERN Stack Active
//       </div>
//     </div>
//   );
// }

// export default Home;



import React from 'react';
import { Link } from 'react-router-dom';

// --- Reusable Card Component (Cleaned Styles) ---
const FeatureCard = ({ title, description, color, icon, linkTo }) => (
  <Link to={linkTo} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
    
    
    <div style={{
      backgroundColor: color,
      padding: '15px 10px', 
      borderRadius: '15px',
      width: '100%', 
      height: '210px', 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      textAlign: 'center',
      boxShadow: '0 8px 15px rgba(0, 0, 0, 0.3)',
      transition: 'transform 0.3s, box-shadow 0.3s',
      position: 'relative',
    }}
    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-10px)'} 
    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
    >
      {/* Icon Area */}
      <div style={{ fontSize: '2.5em', color: '#101010', marginBottom: '3px' }}>
        {icon}
      </div>
      
      {/* Title */}
      <h3 style={{ color: '#101010', fontSize: '1em', margin: '0 0 5px', fontWeight: '700', lineHeight: '1.2' }}>
        {title}
      </h3>
      
      {/* Description */}
      <p style={{ fontSize: '0.7em', color: '#555', margin: '0', padding: '0', lineHeight: '1.2' }}>
        {description}
      </p>

      {/* Button Look */}
      <div style={{ 
          backgroundColor: '#101010', 
          color: 'white', 
          padding: '6px 10px', 
          borderRadius: '6px',
          width: '80%', 
          fontWeight: 'bold',
          fontSize: '0.75em',
          marginTop: '8px' 
      }}>
          {title.includes('Calculator') ? 'Calculate' : title.split(' ')[0]}
      </div>
    </div>
  </Link>
);


// --- MAIN HOME COMPONENT ---
function Home() {
  return (
    /* Green Background is applied via .home-page-wrapper in index.css */
    <div className="home-page-wrapper" style={{ margin: '0', textAlign: 'center', width: '100%', paddingBottom: '50px' }}>
      
      {/* --- TOP BANNER/GUIDE TEXT --- */}
      <div style={{ 
          backgroundColor: '#f0f0f0', 
          color: '#101010',
          padding: '15px 30px',
          borderRadius: '8px',
          display: 'inline-block',
          marginTop: '30px', 
          marginBottom: '30px',
          fontWeight: '600',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)'
      }}>
        Do you want to know insurance premium before Crop Insurance? Then Click Below!
      </div>
      
      
      {/* --- FEATURE CARDS GRID (CRITICAL LAYOUT FIX) --- */}
      <div style={{ 
          display: 'grid', 
          /* FORCES 3 COLUMNS PER ROW (3x2 layout) */
          gridTemplateColumns: 'repeat(3, minmax(180px, 1fr))', 
          gap: '50px 15px', 
          maxWidth: '800px', /* Reduced max width to fit 3 cards better */
          margin: '0 auto', 
          padding: '0 10px' 
      }}>
        
        <FeatureCard title="Farmer Corner" description="Apply crop insurance yourself." color="#ade2f5" icon="🚜" linkTo="/register" />
        <FeatureCard title="Insurance Premium Calculator" description="Know your insurance premium before applying." color="#bfff00" icon="💰" linkTo="/about" />
        <FeatureCard title="Application Status" description="Know your application status on every step." color="#ffe4e1" icon="📋" linkTo="/login" />
        
        {/* Second Row Starts Here */}
        <FeatureCard title="Krishi Rakshak Portal" description="Tell us about your grievances & report loss of crop." color="#a3765e" icon="🌿" linkTo="/dashboard" />
        <FeatureCard title="Learning Management System" description="Your gateway to smarter farming & insurance learning." color="#add8e6" icon="🎓" linkTo="/dashboard" />
        <FeatureCard title="Yield Estimation System" description="Yield Estimation System based on Technology." color="#e6e6fa" icon="📈" linkTo="/dashboard" />

      </div>
      
      {/* MERN Stack Active status box
      <div style={{ marginTop: '20px', color: '#f0f0f0', fontSize: '0.8em' }}>
          MERN Stack Active
      </div> */}
    </div>
  );
}

export default Home;