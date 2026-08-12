import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Smile, Frown, Check, Loader2, ArrowRight, MapPin } from 'lucide-react';

const ISSUE_OPTIONS = [
  'Floor/Toilet requires cleaning',
  'Bad odour',
  'No water',
  'No handwash/soap',
  'No tissue',
  'Dustbin needs attention',
  'Maintenance required',
  'Other'
];

export default function WashroomFeedback() {
  const [searchParams] = useSearchParams();
  const outletName = searchParams.get('outlet') || 'Our Outlet';

  // State management
  const [condition, setCondition] = useState<'satisfactory' | 'needs-attention' | null>(null);
  const [selectedIssues, setSelectedIssues] = useState<string[]>([]);
  const [customIssue, setCustomIssue] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Handlers
  const handleConditionChange = (value: 'satisfactory' | 'needs-attention') => {
    setCondition(value);
    setError('');
    // Reset issues if changing back to satisfactory
    if (value === 'satisfactory') {
      setSelectedIssues([]);
      setCustomIssue('');
    }
  };

  const toggleIssue = (issue: string) => {
    setError('');
    if (selectedIssues.includes(issue)) {
      setSelectedIssues(selectedIssues.filter((i) => i !== issue));
      if (issue === 'Other') setCustomIssue('');
    } else {
      setSelectedIssues([...selectedIssues, issue]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!condition) {
      setError('Please select how the washroom condition was.');
      return;
    }

    if (condition === 'needs-attention' && selectedIssues.length === 0) {
      setError('Please select at least one issue that needs attention.');
      return;
    }

    if (condition === 'needs-attention' && selectedIssues.includes('Other') && !customIssue.trim()) {
      setError('Please specify the issue in the provided text field.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    // Mock API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setCondition(null);
    setSelectedIssues([]);
    setCustomIssue('');
    setComment('');
    setSubmitted(false);
    setError('');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-0 sm:p-6 text-slate-800 animate-fade-in">
      <div className="w-full max-w-md bg-white sm:rounded-3xl sm:shadow-xl sm:border sm:border-slate-100 min-h-screen sm:min-h-[auto] flex flex-col overflow-hidden transition-all duration-300">
        
        {/* Decorative Top Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-amber-500" />

        {/* Header */}
        <div className="flex flex-col items-center justify-center pt-8 pb-6 px-6 bg-gradient-to-b from-emerald-50/20 to-transparent">
          <img 
            src="https://i.ibb.co/k24Wgbd7/thf-logo.avif" 
            alt="THF Logo" 
            className="h-16 w-auto object-contain mb-2 filter drop-shadow-sm" 
          />
          <span className="text-[10px] tracking-[0.2em] text-emerald-800/80 font-bold uppercase">
            Cleanliness & Maintenance
          </span>
        </div>

        {/* Content Area */}
        <div className="flex-grow px-6 pb-8 flex flex-col justify-between">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex-grow flex flex-col justify-between">
              <div>
                {/* Outlet Name Display */}
                <div className="mb-6 p-4 bg-emerald-50/40 border border-emerald-100/60 rounded-2xl flex items-center gap-3">
                  <div className="bg-emerald-600 text-white p-2.5 rounded-xl shadow-sm shadow-emerald-600/10">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-wider text-emerald-800/60 font-extrabold">
                      Selected Outlet
                    </p>
                    <p className="text-sm font-bold text-slate-800">
                      {outletName}
                    </p>
                  </div>
                </div>

                {/* Question 2: Condition */}
                <div className="mb-6">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                    How was the washroom condition? <span className="text-rose-500 font-bold">*</span>
                  </label>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {/* Satisfactory Option */}
                    <button
                      type="button"
                      onClick={() => handleConditionChange('satisfactory')}
                      className={`p-4 rounded-2xl border-2 flex flex-col items-center justify-center gap-2.5 transition-all duration-300 ${
                        condition === 'satisfactory'
                          ? 'border-emerald-600 bg-emerald-50/40 shadow-lg shadow-emerald-100/40 scale-[1.02]'
                          : 'border-slate-100 bg-slate-50/50 hover:border-slate-200'
                      }`}
                    >
                      <div className={`p-2.5 rounded-full transition-colors duration-300 ${
                        condition === 'satisfactory' 
                          ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20' 
                          : 'bg-white text-slate-400 shadow-sm'
                      }`}>
                        <Smile className="w-7 h-7" />
                      </div>
                      <span className={`font-bold text-xs uppercase tracking-wider transition-colors ${
                        condition === 'satisfactory' ? 'text-emerald-800' : 'text-slate-500'
                      }`}>
                        Satisfactory
                      </span>
                    </button>

                    {/* Needs Attention Option */}
                    <button
                      type="button"
                      onClick={() => handleConditionChange('needs-attention')}
                      className={`p-4 rounded-2xl border-2 flex flex-col items-center justify-center gap-2.5 transition-all duration-300 ${
                        condition === 'needs-attention'
                          ? 'border-amber-500 bg-amber-50/30 shadow-lg shadow-amber-100/30 scale-[1.02]'
                          : 'border-slate-100 bg-slate-50/50 hover:border-slate-200'
                      }`}
                    >
                      <div className={`p-2.5 rounded-full transition-colors duration-300 ${
                        condition === 'needs-attention' 
                          ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20' 
                          : 'bg-white text-slate-400 shadow-sm'
                      }`}>
                        <Frown className="w-7 h-7" />
                      </div>
                      <span className={`font-bold text-xs uppercase tracking-wider transition-colors ${
                        condition === 'needs-attention' ? 'text-amber-800' : 'text-slate-500'
                      }`}>
                        Needs Attention
                      </span>
                    </button>
                  </div>
                </div>

                {/* Question 3: Issues (Conditional) */}
                <div 
                  className={`transition-all duration-300 overflow-hidden ${
                    condition === 'needs-attention' 
                      ? 'max-h-[1000px] opacity-100 mb-6' 
                      : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                >
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                    What issue did you notice? <span className="text-rose-500 font-bold">*</span>
                  </label>

                  <div className="grid grid-cols-1 gap-2">
                    {ISSUE_OPTIONS.map((issue) => {
                      const isSelected = selectedIssues.includes(issue);
                      return (
                        <button
                          key={issue}
                          type="button"
                          onClick={() => toggleIssue(issue)}
                          className={`px-4 py-3 rounded-xl border text-left flex items-center justify-between transition-all duration-200 text-sm font-medium ${
                            isSelected
                              ? 'border-amber-500 bg-amber-50/20 text-amber-900 shadow-sm'
                              : 'border-slate-100 bg-slate-50/30 text-slate-700 hover:border-slate-200'
                          }`}
                        >
                          <span className={isSelected ? 'font-semibold' : 'font-normal'}>{issue}</span>
                          <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                            isSelected ? 'bg-amber-500 border-amber-500 text-white' : 'border-slate-300 bg-white'
                          }`}>
                            {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Custom Issue Input */}
                  <div 
                    className={`transition-all duration-300 overflow-hidden ${
                      selectedIssues.includes('Other') 
                        ? 'max-h-[100px] opacity-100 mt-3' 
                        : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
                  >
                    <label className="block text-[10px] font-bold text-amber-800 uppercase tracking-wider mb-1">
                      Please specify the issue <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={customIssue}
                      onChange={(e) => setCustomIssue(e.target.value)}
                      placeholder="Specify issue detail..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 bg-slate-50/50"
                      maxLength={80}
                    />
                  </div>
                </div>

                {/* Question 5: Additional Comments */}
                <div className="mb-6">
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Any additional comment? <span className="text-slate-400 font-normal lowercase">(optional)</span>
                  </label>
                  <textarea
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write your feedback here..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/10 focus:border-emerald-600 bg-slate-50/30 resize-none transition-all"
                    maxLength={200}
                  />
                </div>

                {/* Error Banner */}
                {error && (
                  <div className="mb-6 p-3 bg-rose-50 border border-rose-100 rounded-xl text-rose-700 text-xs font-semibold flex items-center gap-2 animate-fade-in">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !condition || (condition === 'needs-attention' && selectedIssues.length === 0)}
                className={`w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wider text-white shadow-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                  !condition || (condition === 'needs-attention' && selectedIssues.length === 0)
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                    : 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/10 active:scale-[0.98]'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Submitting Feedback...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Feedback</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </>
                )}
              </button>
            </form>
          ) : (
            /* Success Screen */
            <div className="flex-1 flex flex-col items-center justify-center py-12 text-center animate-fade-in">
              <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6 border border-emerald-100/60 shadow-inner">
                <Check className="w-9 h-9 text-emerald-600 stroke-[3]" />
              </div>
              
              <h2 className="text-xl font-bold text-slate-800 mb-2">
                Thank You for Your Feedback
              </h2>
              
              <p className="text-sm text-slate-500 max-w-[280px] leading-relaxed mb-8">
                Your response helps us maintain clean and hygienic spaces at <span className="font-bold text-slate-700">{outletName}</span>.
              </p>

              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-2.5 border border-emerald-600 text-emerald-600 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-emerald-50 active:bg-emerald-100 transition-colors"
              >
                Submit New Report
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
