import React, { useState, useMemo } from 'react';
import { Select } from './Select';
import { Input } from './Input';
import { Button } from './Button';
import { ResultsView } from './ResultsView';
import { getBeltSpecifications } from '../services/geminiService';
import { CarDetails, GeminiResponse, Language } from '../types';
import { AlertCircle } from 'lucide-react';
import { CAR_DATABASE, CAR_YEARS } from '../data/carData';

interface CatalogProps {
  language: Language;
  t: any;
}

export const Catalog: React.FC<CatalogProps> = ({ language, t }) => {
  const [step, setStep] = useState<'search' | 'results'>('search');
  const [searchMode, setSearchMode] = useState<'database' | 'manual'>('database');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<GeminiResponse | null>(null);

  const [formData, setFormData] = useState<CarDetails>({
    year: '',
    manufacturer: '',
    make: '',
    model: '',
    engine: ''
  });

  const selectedMake = useMemo(() => 
    CAR_DATABASE.find(m => m.name === formData.make), 
  [formData.make]);

  const selectedModel = useMemo(() => 
    selectedMake?.models.find(m => m.name === formData.model), 
  [selectedMake, formData.model]);

  const yearOptions = CAR_YEARS.map(y => ({ value: y, label: y }));
  const makeOptions = CAR_DATABASE.map(m => ({ value: m.name, label: m.name }));
  const modelOptions = selectedMake 
    ? selectedMake.models.map(m => ({ value: m.name, label: m.name }))
    : [];
  const engineOptions = selectedModel 
    ? selectedModel.engines.map(e => ({ value: e, label: e }))
    : [];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { id, value } = e.target;
    
    if (searchMode === 'database') {
      if (id === 'make') {
        setFormData(prev => ({ ...prev, make: value, manufacturer: value, model: '', engine: '' }));
      } else if (id === 'model') {
        setFormData(prev => ({ ...prev, model: value, engine: '' }));
      } else {
        setFormData(prev => ({ ...prev, [id]: value }));
      }
    } else {
      const updates: Partial<CarDetails> = { [id]: value };
      if (id === 'make') updates.manufacturer = value;
      setFormData(prev => ({ ...prev, ...updates }));
    }

    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    if (!formData.make || !formData.model || !formData.engine || !formData.year) {
      setError(t.catalog.errors.incomplete);
      setIsLoading(false);
      return;
    }

    try {
      const result = await getBeltSpecifications(formData, language);
      setData(result);
      setStep('results');
    } catch (err) {
      setError(t.catalog.errors.failed);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setStep('search');
    setData(null);
    setError(null);
    setFormData({
      year: '',
      manufacturer: '',
      make: '',
      model: '',
      engine: ''
    });
  };

  return (
    <div id="catalog" className="w-full bg-prime-bg py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-prime-bg via-amber-50 to-prime-bg pointer-events-none opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
           <h2 className="font-display text-4xl md:text-5xl font-extrabold text-prime-text mb-4 tracking-tight">{t.catalog.title}</h2>
           <p className="text-prime-muted text-lg max-w-2xl mx-auto">{t.catalog.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto bg-prime-card rounded-2xl p-8 md:p-12 shadow-2xl shadow-stone-200 border border-prime-border">
          {step === 'search' && (
            <>
              <div className="flex gap-2 mb-10 bg-prime-bg p-1 rounded-xl w-fit mx-auto border border-prime-border">
                <button
                  onClick={() => setSearchMode('database')}
                  className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                    searchMode === 'database' ? 'bg-white text-prime-text shadow-sm border border-prime-border' : 'text-prime-muted hover:text-prime-text'
                  }`}
                >
                  {t.catalog.quickSearch}
                </button>
                <button
                  onClick={() => setSearchMode('manual')}
                  className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                    searchMode === 'manual' ? 'bg-white text-prime-text shadow-sm border border-prime-border' : 'text-prime-muted hover:text-prime-text'
                  }`}
                >
                  {t.catalog.manualEntry}
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {searchMode === 'database' ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Select id="year" label={t.catalog.labels.year} options={yearOptions} value={formData.year} onChange={handleChange} required />
                      <Select id="make" label={t.catalog.labels.make} options={makeOptions} value={formData.make} onChange={handleChange} required />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Select id="model" label={t.catalog.labels.model} options={modelOptions} value={formData.model} onChange={handleChange} disabled={!formData.make} required />
                      <Select id="engine" label={t.catalog.labels.engine} options={engineOptions} value={formData.engine} onChange={handleChange} disabled={!formData.model} required />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input id="year" label={t.catalog.labels.year} value={formData.year} onChange={handleChange} required />
                      <Input id="make" label={t.catalog.labels.make} value={formData.make} onChange={handleChange} required />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input id="model" label={t.catalog.labels.model} value={formData.model} onChange={handleChange} required />
                      <Input id="engine" label={t.catalog.labels.engine} value={formData.engine} onChange={handleChange} required />
                    </div>
                  </>
                )}

                {error && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-lg flex items-center gap-3 text-sm font-medium border border-red-100">
                    <AlertCircle className="w-5 h-5" />
                    {error}
                  </div>
                )}

                <Button type="submit" isLoading={isLoading} className="mt-8">
                  {t.catalog.submit}
                </Button>
              </form>
            </>
          )}

          {step === 'results' && data && (
            <ResultsView data={data} onReset={handleReset} t={t} />
          )}
        </div>
      </div>
    </div>
  );
};