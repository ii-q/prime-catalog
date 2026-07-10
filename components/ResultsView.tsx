import React from 'react';
import { GeminiResponse, BeltType } from '../types';
import { Cog, Activity, Disc, CheckCircle2, RefreshCw, ClipboardList } from 'lucide-react';
import { Button } from './Button';

interface ResultsViewProps {
  data: GeminiResponse;
  onReset: () => void;
  t: any;
}

const BeltIcon = ({ type }: { type: BeltType }) => {
  switch (type) {
    case BeltType.TIMING:
      return <Activity className="w-6 h-6 text-prime-orange" />;
    case BeltType.SERPENTINE:
      return <Cog className="w-6 h-6 text-prime-orange" />;
    case BeltType.VBELT:
      return <Disc className="w-6 h-6 text-prime-orange" />;
    default:
      return <Cog className="w-6 h-6 text-prime-orange" />;
  }
};

export const ResultsView: React.FC<ResultsViewProps> = ({ data, onReset, t }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Vehicle Summary Header */}
      <div className="bg-prime-bg border border-prime-border text-prime-text p-8 rounded-2xl mb-8 relative overflow-hidden">
        <div className={`absolute top-0 ${document.dir === 'rtl' ? 'left-0' : 'right-0'} w-64 h-64 bg-prime-orange opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2`}></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4 text-prime-orange">
             <CheckCircle2 className="w-5 h-5" />
             <span className="font-bold uppercase tracking-wider text-xs">{t.results.vehicleIdentified}</span>
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-2 text-prime-text">{t.results.specificationsFound}</h3>
          <p className="text-prime-muted leading-relaxed max-w-2xl">{data.vehicleSummary}</p>
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 gap-6 mb-10">
        {data.belts.map((belt, index) => (
          <div 
            key={index}
            className="group bg-white rounded-xl p-6 border border-prime-border hover:border-prime-orange transition-colors duration-300 shadow-sm hover:shadow-md"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              
              {/* Icon & Title */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-prime-bg border border-prime-border group-hover:border-prime-orange/30 transition-colors">
                  <BeltIcon type={belt.type} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-prime-text mb-1">{belt.name}</h4>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-prime-bg text-prime-muted border border-prime-border">
                    {t.beltTypes[belt.type] || belt.type}
                  </span>
                </div>
              </div>

              {/* Specs */}
              <div className="flex-1 md:text-end space-y-3">
                <div>
                   <span className="block text-xs font-bold text-prime-muted uppercase tracking-wider mb-1">{t.results.specification}</span>
                   <span className="font-mono text-lg font-bold text-prime-text bg-prime-bg px-3 py-1 rounded border border-prime-border inline-block" dir="ltr">
                     {belt.specification}
                   </span>
                </div>
                
                {belt.partNumberReference && (
                  <div>
                    <span className="text-xs text-prime-muted mx-2">{t.results.refPart}</span>
                    <span className="font-medium text-prime-text" dir="ltr">{belt.partNumberReference}</span>
                  </div>
                )}
              </div>

            </div>

            {/* Notes Footer */}
            {belt.notes && (
              <div className="mt-6 pt-4 border-t border-dashed border-prime-border flex items-start gap-2">
                <ClipboardList className="w-4 h-4 text-prime-orange mt-0.5 flex-shrink-0" />
                <p className="text-sm text-prime-muted italic">{belt.notes}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Button variant="outline" onClick={onReset} className="w-auto px-8 gap-2">
          <RefreshCw className="w-4 h-4" />
          {t.catalog.reset}
        </Button>
      </div>
    </div>
  );
};
