import React, { CSSProperties } from 'react';

const Marquee = () => {
  const announcements = [
    { text: 'Call for paper submission is open. Submit your paper ', link: 'here', href: 'https://cmt3.research.microsoft.com/WREC2025' },
    { text: "The proceedings of the WREC'23 Conference were published in Springer LNEE.. WREC'25 (applied for Springer)"}
  ];

  const styles: Record<string, CSSProperties> = {
    container: {
      width: '100%',
      margin: '0 auto',
      backgroundColor: '#f0f9ff',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      overflow: 'hidden',
      height: '40px'
    },
    marquee: {
      position: 'relative' as const,
      height: '100%',
      display: 'flex',
      alignItems: 'center'
    },
    scroller: {
      position: 'absolute' as const,
      whiteSpace: 'nowrap',
      willChange: 'transform',
      animation: 'marquee 30s linear infinite',
      width: '200%'
    },
    scrollerInner: {
      display: 'inline-block',
      padding: '0 20px'
    },
    link: {
      color: '#2563eb',
      textDecoration: 'underline',
      cursor: 'pointer'
    },
    separator: {
      margin: '0 20px',
      color: '#666'
    }
  };

  const keyframes = `
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `;

  const renderAnnouncement = (announcement: typeof announcements[0]) => (
    <>
      {announcement.text}
      {announcement.link && (
        <a href={announcement.href} style={styles.link}>
          {announcement.link}
        </a>
      )}
      <span style={styles.separator}></span>
    </>
  );

  return (
    <>
      <style>{keyframes}</style>
      <div style={styles.container}>
        <div style={styles.marquee}>
          <div style={styles.scroller}>
            {[1, 2].map((_, i) => (
              <span key={i} style={styles.scrollerInner}>
                {announcements.map((announcement, index) => (
                  <span key={index}>
                    {renderAnnouncement(announcement)}
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Marquee;