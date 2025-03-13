import React, { CSSProperties } from 'react';

const Announcements = () => {
  const styles: Record<string, CSSProperties> = {
    container: {
      width: '90%',
      maxWidth: '100%',
      margin: '10px auto',
      backgroundColor: '#F4F8FC',
      borderRadius: '12px',
      boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
      padding: '15px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    },
    announcement: {
      marginBottom: '15px',
      fontSize: '16px',
      fontWeight: '500',
      color: '#333',
      lineHeight: '1.5'
    },
    link: {
      color: '#1565c0',
      textDecoration: 'none',
      fontWeight: 'bold'
    },
    imageSection: {
      marginTop: '25px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    image: {
      width: '60%',
      maxWidth: '200px',
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      display: 'block'
    },
    heading: {
      fontSize: '26px',
      fontWeight: 'bold',
      color: '#0D47A1',
      marginBottom: '12px',
      textAlign: 'center'
    },
    subText: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#D32F2F',
      textAlign: 'center',
      marginTop: '10px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageSection}>
        <h1 style={styles.heading}>Proceedings Publication</h1>
        <img src='/LNEE.jpg' alt="Proceedings Publication" style={styles.image} />
        <p style={styles.subText}>SCOPUS Indexed Springer Book Series, "Lecture Notes in Networks and Systems"</p>
      </div>
    </div>
  );
};

export default Announcements;
