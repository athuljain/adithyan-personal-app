// import { useEffect, useState } from "react"
// import workimg1 from "../images/work (1).jpeg"
// import workimg2 from "../images/work (2).jpeg"
// import workimg3 from "../images/work (3).jpeg"
// import workimg4 from "../images/work (4).jpeg"
// import workimg5 from "../images/work (5).jpeg"
// import workimg6 from "../images/works (1).jpeg"
// import workimg7 from "../images/works (2).jpeg"
// import workimg8 from "../images/works (3).jpeg"
// // import workimg9 from "../images/works (4).jpeg"
// import WorkVideo from "../images/workVideo.mp4"


// const MyWorks = () => {

//   const photos = [
//     { id: 1, url: workimg1, title: 'Project One' },
//     { id: 2, url: workimg2, title: 'Project Two' },
//     { id: 3, url: workimg3, title: 'Project Three' },
//     { id: 4, url: workimg4, title: 'Project Four' },
//     { id: 5, url: workimg5, title: 'Project Five' },
//     { id: 6, url: workimg6, title: 'Project Six' },
//     { id: 7, url: workimg7, title: 'Project Seven' },
//     { id: 8, url: workimg8, title: 'Project Eight' },
//     // { id: 9, url: workimg9, title: 'Project Nine' },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Carousel Logic: Change image every 3 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
//     }, 3000);
//     return () => clearInterval(timer);
//   }, [photos.length]);

//  return (
//     <div style={styles.pageContainer}>
//       {/* --- TOP SECTION: CAROUSEL (unchanged) --- */}
//       <div style={styles.carouselContainer}>
//         <h2 style={styles.sectionTitle}>Featured Highlights</h2>
//         <div style={styles.carouselFrame}>
//           <img 
//             src={photos[currentIndex].url} 
//             alt="Carousel" 
//             style={styles.carouselImage} 
//           />
//           <div style={styles.carouselCaption}>{photos[currentIndex].title}</div>
//         </div>
//       </div>

//       <hr style={styles.divider} />

//       {/* --- BOTTOM SECTION: UNIFORM IMAGE GRID --- */}
//       <h2 style={styles.sectionTitle}>Full Gallery</h2>
//       <div style={styles.gridContainer}>
//         {photos.map((photo) => (
//           <div key={photo.id} style={styles.gridCard}>
//             <div style={styles.imageWrapper}>
//               <img 
//                 src={photo.url} 
//                 alt={photo.title} 
//                 style={styles.gridImage} 
//                 className="portfolio-img"
//               />
//             </div>
//             <div style={styles.cardOverlay}>
//               <span>{photo.title}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   pageContainer: { paddingTop: '100px', backgroundColor: '#000', color: '#fff', minHeight: '100vh' },
//   sectionTitle: { textAlign: 'center', marginBottom: '30px', letterSpacing: '3px', textTransform: 'uppercase' },
  
//   // Carousel Styles (unchanged)
//   carouselContainer: { padding: '0 20px', marginBottom: '50px' },
//   carouselFrame: { maxWidth: '1000px', margin: '0 auto', height: '500px', position: 'relative', overflow: 'hidden', borderRadius: '10px' },
//   carouselImage: { width: '100%', height: '100%', objectFit: 'cover' },
//   carouselCaption: { position: 'absolute', bottom: '20px', left: '20px', background: 'rgba(0,0,0,0.6)', padding: '10px 20px', borderRadius: '5px' },

//   // Grid Styles
//   divider: { border: '0.5px solid #333', margin: '50px 0' },
//   gridContainer: { 
//     display: 'grid', 
//     gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
//     gap: '25px', 
//     padding: '0 40px 40px 40px' 
//   },
//   gridCard: {
//     position: 'relative',
//     borderRadius: '12px',
//     overflow: 'hidden',
//     backgroundColor: '#111',
//     cursor: 'pointer',
//     aspectRatio: '1 / 1', // Forces a perfect square card
//   },
//   imageWrapper: {
//     width: '100%',
//     height: '100%',
//     overflow: 'hidden',
//   },
//   gridImage: { 
//     width: '100%', 
//     height: '100%', 
//     objectFit: 'cover', // This is the secret to same-size images
//     transition: 'transform 0.5s ease',
//   },
//   cardOverlay: {
//     position: 'absolute',
//     bottom: 0,
//     width: '100%',
//     padding: '15px',
//     background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
//     textAlign: 'left',
//     fontSize: '0.9rem',
//     fontWeight: '500',
//     opacity: 0.8
//   }
// };

// export default MyWorks;



import { useEffect, useState } from "react"
import workimg1 from "../images/work (1).jpeg"
import workimg2 from "../images/work (2).jpeg"
import workimg3 from "../images/work (3).jpeg"
import workimg4 from "../images/work (4).jpeg"
import workimg5 from "../images/work (5).jpeg"
import workimg6 from "../images/works (1).jpeg"
import workimg7 from "../images/works (2).jpeg"
import workimg8 from "../images/works (3).jpeg"
import WorkVideo from "../images/workVideo.mp4"

const MyWorks = () => {
  const photos = [
    { id: 1, url: workimg1, title: 'Project One' },
    { id: 2, url: workimg2, title: 'Project Two' },
    { id: 3, url: workimg3, title: 'Project Three' },
    { id: 4, url: workimg4, title: 'Project Four' },
    { id: 5, url: workimg5, title: 'Project Five' },
    { id: 6, url: workimg6, title: 'Project Six' },
    { id: 7, url: workimg7, title: 'Project Seven' },
    { id: 8, url: workimg8, title: 'Project Eight' },
  ];

  // Note: We removed the "currentIndex" logic because the video 
  // handles the visual movement now.

  return (
    <div style={styles.pageContainer}>
      {/* --- TOP SECTION: VIDEO SHOWCASE --- */}
      <div style={styles.carouselContainer}>
        <h2 style={styles.sectionTitle}>Featured Highlights</h2>
        <div style={styles.carouselFrame}>
          <video 
            src={WorkVideo} 
            autoPlay 
            loop 
            muted 
            playsInline 
            style={styles.carouselVideo} 
          />
          <div style={styles.carouselCaption}>Showcase Reel</div>
        </div>
      </div>

      <hr style={styles.divider} />

      {/* --- BOTTOM SECTION: UNIFORM IMAGE GRID --- */}
      <h2 style={styles.sectionTitle}>Full Gallery</h2>
      <div style={styles.gridContainer}>
        {photos.map((photo) => (
          <div key={photo.id} style={styles.gridCard}>
            <div style={styles.imageWrapper}>
              <img 
                src={photo.url} 
                alt={photo.title} 
                style={styles.gridImage} 
              />
            </div>
            <div style={styles.cardOverlay}>
              <span>{photo.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  pageContainer: { paddingTop: '100px', backgroundColor: '#000', color: '#fff', minHeight: '100vh' },
  sectionTitle: { textAlign: 'center', marginBottom: '30px', letterSpacing: '3px', textTransform: 'uppercase' },
  
  // Video Styles
  carouselContainer: { padding: '0 20px', marginBottom: '50px' },
  carouselFrame: { maxWidth: '1000px', margin: '0 auto', height: '500px', position: 'relative', overflow: 'hidden', borderRadius: '10px' },
  carouselVideo: { width: '100%', height: '100%', objectFit: 'cover' }, // Keeps video filling the frame
  carouselCaption: { position: 'absolute', bottom: '20px', left: '20px', background: 'rgba(0,0,0,0.6)', padding: '10px 20px', borderRadius: '5px' },

  // Grid Styles
  divider: { border: '0.5px solid #333', margin: '50px 0' },
  gridContainer: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
    gap: '25px', 
    padding: '0 40px 40px 40px' 
  },
  gridCard: {
    position: 'relative',
    borderRadius: '12px',
    overflow: 'hidden',
    backgroundColor: '#111',
    cursor: 'pointer',
    aspectRatio: '1 / 1',
  },
  imageWrapper: { width: '100%', height: '100%', overflow: 'hidden' },
  gridImage: { width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' },
  cardOverlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: '15px',
    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
    textAlign: 'left',
    fontSize: '0.9rem',
    fontWeight: '500',
    opacity: 0.8
  }
};

export default MyWorks;