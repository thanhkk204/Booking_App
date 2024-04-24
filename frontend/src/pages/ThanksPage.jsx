import React from 'react'
import { useSearchParams } from 'react-router-dom';

export default function ThanksPage() {
    const [searchParams] = useSearchParams();
    console.log(searchParams.get('partnerCode'));
  return (
    <div>ThanksPage</div>
  )
}
