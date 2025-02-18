import React, { CSSProperties } from 'react';

const Announcements = () => {
  const announcements = [
    { text: 'Call for paper submission is open. Submit your paper ', link: 'here', href: 'https://cmt3.research.microsoft.com/WREC2025' },
    { text: "The proceedings of the WREC'23 Conference were published in Springer LNEE. WREC'25 (applied for Springer)" }
  ];

  const styles: Record<string, CSSProperties> = {
    container: {
      width: '95%',
      margin: '10px auto',
      backgroundColor: '#e3f2fd',
      borderRadius: '12px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      padding: '15px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    },
    announcement: {
      marginBottom: '10px',
      fontSize: '16px',
      fontWeight: '500',
      color: '#333'
    },
    link: {
      color: '#1565c0',
      textDecoration: 'none',
      fontWeight: 'bold'
    }
  };

  return (
    <div style={styles.container}>
      {announcements.map((announcement, index) => (
        <p key={index} style={styles.announcement}>
          {announcement.text}
          {announcement.link && (
            <a href={announcement.href} style={styles.link}>
              {announcement.link}
            </a>
          )}
        </p>
      ))}
    </div>
  );
};

export default Announcements;
