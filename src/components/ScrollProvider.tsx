'use client'

import { createContext, useContext, useRef, useCallback } from 'react';

type ScrollContextType = {
  servicesRef: React.RefObject<HTMLDivElement>;
  partnersRef: React.RefObject<HTMLDivElement>;
  brandAndLogoRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
  scrollToServices: () => void;
  scrollToPartners: () => void;
  scrollToBrandAndLogo: () => void;
  scrollToContact: () => void;
  scrollToTop: () => void;
};

const ScrollContext = createContext<ScrollContextType | null>(null);

export const ScrollProvider = ({ children }: { children: React.ReactNode}) => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);
  const brandAndLogoRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToServices = useCallback(() => {
    setTimeout(() => {
      servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100); // Adding a 100ms delay
  }, []);

  const scrollToPartners = useCallback(() => {
    setTimeout(() => {
      partnersRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100); // Adding a 100ms delay
  }, []);

  const scrollToBrandAndLogo = useCallback(() => {
    setTimeout(() => {
      brandAndLogoRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100); // Adding a 100ms delay
  }, []);

  const scrollToContact = useCallback(() => {
    setTimeout(() => {
      contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100); // Adding a 100ms delay
  }, []);

  const scrollToTop = useCallback(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100); // Adding a 100ms delay
  }, []);

  return (
    <ScrollContext.Provider value={{ servicesRef, partnersRef, brandAndLogoRef, contactRef, scrollToServices, scrollToPartners, scrollToBrandAndLogo, scrollToContact, scrollToTop }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};
