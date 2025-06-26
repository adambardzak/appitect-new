import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    
    // Get locale from query params
    const locale = searchParams.get('locale') || 'en';
    
    // Text based on locale - keeping the exact same text as in the example
    const title = locale === 'en' ? 'Web applications and websites tailored to your needs' : 
                  locale === 'de' ? 'Webanwendungen und Webseiten maßgeschneidert für Ihre Bedürfnisse' :
                  'Webové aplikace a weby na míru';
                  
    const subtitle = locale === 'en' ? 'Clean code. Honest communication. Products that work.' : 
                     locale === 'de' ? 'Sauberer Code. Ehrliche Kommunikation. Produkte, die funktionieren.' :
                     'Čistý kód. Upřímná komunikace. Produkty, které fungují.';

    // Use Arial font to match your website
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
            backgroundColor: '#FFFFFF',
            color: '#111111',
            padding: '80px 100px',
            fontFamily: 'Arial, Helvetica, sans-serif',
          }}
        >
          {/* Top content section */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            marginTop: '20px'
          }}>
            <div style={{ 
              display: 'flex',
              flexDirection: 'row',
            }}>
              {/* Left border accent matching the example precisely */}
              <div style={{
                width: '4px',
                backgroundColor: '#E0E0E0',
                marginRight: '30px',
                height: '160px'
              }} />
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                {/* Main heading - larger and more prominent */}
                <div style={{ 
                  fontSize: '46px', 
                  fontWeight: 'bold', 
                  marginBottom: '25px',
                  letterSpacing: '-0.02em',
                  lineHeight: '1.2',
                  maxWidth: '900px',
                  color: '#000000'
                }}>
                  {title}
                </div>
                
                {/* Subtitle with lower opacity for visual hierarchy */}
                <div style={{ 
                  fontSize: '26px', 
                  opacity: 0.7, 
                  lineHeight: '1.4',
                  color: '#444444',
                  fontWeight: 'normal'
                }}>
                  {subtitle}
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer with subtle separator line and logo */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            borderTop: '1px solid #EEEEEE',
            paddingTop: '30px',
            marginTop: '40px'
          }}>
            <div style={{ 
              fontSize: '28px', 
              fontWeight: 'normal',
              letterSpacing: '-0.01em'
            }}>
              appitect
            </div>
            <div style={{ 
              fontSize: '18px',
              opacity: 0.5,
              fontWeight: 'normal'
            }}>
              appitect.eu
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        headers: {
          'content-type': 'image/png',
          'cache-control': 'public, max-age=31536000, immutable'
        }
      }
    );
  } catch (e) {
    console.error(`Error generating OG image: ${e}`);
    return new Response('Error generating image', { status: 500 });
  }
}
