'use client';

import { useEffect, useState } from 'react';
import { ReactImageTurntable } from 'react-image-turntable';

const TurntablePage = () => {
  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const preloadImages = async () => {
      setIsLoading(true);
      setError(null);
      
      const imageUrls = Array.from({ length: 49 }, (_, i) => 
        `https://qhagjeeeqxvvxurlnify.supabase.co/storage/v1/object/public/turntable-images/${i+1}.webp`
      );

      try {
        const loadedUrls = await Promise.all(
          imageUrls.map(url =>
            new Promise<string>((resolve, reject) => {
              const img = new Image();
              // img.crossOrigin = 'anonymous'; // Try with CORS headers
              img.onload = () => resolve(url);
              img.onerror = () => reject(`Failed to load ${url}`);
              img.src = url;
            })
          )
        );
        setLoadedImages(loadedUrls);
      } catch (err) {
        console.error('Error loading images:', err);
        setError('Some images failed to load. This might be due to CORS restrictions.');
      } finally {
        setIsLoading(false);
      }
    };

    preloadImages();
  }, []);

  if (isLoading) {
    return (
      <div className="size-full flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mb-4"></div>
          <p>Loading images...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="size-full flex items-center justify-center">
        <div className="text-center text-red-600">
          <p>{error}</p>
          <p className="mt-2 text-sm">
            Try using a proxy server or downloading the images to your public directory.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="size-full relative">
      <ReactImageTurntable
        images={loadedImages}
        autoRotate={{
          disabled: true,
        }}
        draggable
        initialImageIndex={0}
        movementSensitivity={20}
        className="size-full object-contain"
      />
    </div>
  );
};

export default TurntablePage; 