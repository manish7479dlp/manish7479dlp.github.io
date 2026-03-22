import { useState } from 'react';
import { ImageOff } from 'lucide-react';

export default function FallbackImg({ src, alt, className, style }) {
    const [failed, setFailed] = useState(!src);

    if (failed) {
        return (
            <div
                className={className}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    background: 'rgba(48,54,61,0.4)',
                    color: '#8b949e',
                    fontSize: '0.8rem',
                    width: '100%',
                    height: '100%',
                    ...style,
                }}
                aria-label={alt}
            >
                <ImageOff size={32} style={{ opacity: 0.45 }} />
                <span>Image not found</span>
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className={className}
            style={style}
            onError={() => setFailed(true)}
        />
    );
}
