import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const DataDeletion = () => {
    const [identifier, setIdentifier] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!identifier.trim()) {
            setError('Please enter your email or phone number');
            return;
        }
        // Dummy success response
        setSubmitted(true);
        setError('');
    };

    return (
        <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto">
                <div className="mb-8">
                    <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                        <ArrowLeft className="mr-2" size={20} />
                        Back to Home
                    </Link>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Data Deletion Request</h1>

                    {!submitted ? (
                        <>
                            <p className="text-gray-600 mb-8">
                                To request deletion of your data from WaitWhiz, please enter your registered email address or phone number below.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="identifier" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address or Phone Number
                                    </label>
                                    <input
                                        type="text"
                                        id="identifier"
                                        value={identifier}
                                        onChange={(e) => setIdentifier(e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                        placeholder="e.g., sandeep@waitwhiz.in or +91 9876543210"
                                    />
                                    {error && (
                                        <div className="flex items-center mt-2 text-red-600 text-sm">
                                            <AlertCircle size={16} className="mr-1" />
                                            {error}
                                        </div>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity"
                                >
                                    Submit Request
                                </button>
                            </form>
                        </>
                    ) : (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle size={32} className="text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Request Received</h2>
                            <p className="text-gray-600 mb-6">
                                Your data deletion request for <strong>{identifier}</strong> has been successfully recorded.
                            </p>
                            <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600 text-left">
                                <p className="mb-2"><strong>Reference ID:</strong> #{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                                <p>We will process your request within 7-30 working days. You will receive a confirmation once the deletion is complete.</p>
                            </div>
                            <button
                                onClick={() => {
                                    setSubmitted(false);
                                    setIdentifier('');
                                }}
                                className="mt-8 text-blue-600 hover:text-blue-700 font-medium"
                            >
                                Submit another request
                            </button>
                        </div>
                    )}
                </div>

                <div className="mt-8 text-center text-sm text-gray-500">
                    <p>
                        For any issues, please contact <a href="mailto:sandeep@waitwhiz.in" className="text-blue-600 hover:underline">sandeep@waitwhiz.in</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DataDeletion;
