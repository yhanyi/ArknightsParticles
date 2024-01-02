"use client";

import React, { useRef, useEffect } from 'react';
import { MainHandler } from './mainHandler';

export const ArknightsParticles = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!ref.current) { return }
    const mainHandler = new MainHandler(ref.current);
    return mainHandler.unregister;
  }, [ref])

  return <canvas ref={ref} />
}