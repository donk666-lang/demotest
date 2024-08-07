// src/components/data.ts

import img from '@/assets/images/logo.png';

interface DataItem {
  id: number;
  title: string;
  content: string;
  time: string;
  img: string;
}

const generateRandomString = () => Math.random().toString(36).substring(2, 15);

const dataArray: DataItem[] = Array.from({ length: 1000 }, (_, index) => ({
  id: index + 1,
  title: `Title ${generateRandomString()}`,
  content: `Content ${generateRandomString()}`,
  time: `${Math.floor(Math.random() * 10 + 1)}周前`,
  img: img
}));

export default dataArray;
