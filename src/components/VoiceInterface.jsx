import { useState } from 'react';
import { Mic, MicOff, Phone, Loader2 } from 'lucide-react';
import { TranscriptMessage } from './TranscriptMessage';

export const VoiceInterface = ({ 
  isCallActive, 
  callStatus, 
  messages, 
  onStartCall, 
  onEndCall,
  onBack 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Voice Scheduling Assistant
          </h2>
          <p className="text-gray-600">
            {callStatus === 'idle' && 'Click the microphone to start'}
            {callStatus === 'connecting' && 'Connecting...'}
            {callStatus === 'active' && 'Listening... Speak naturally'}
            {callStatus === 'ended' && 'Call ended'}
          </p>
        </div>

        {/* Main Card */}
        <div className="card max-w-2xl mx-auto">
          {/* Microphone Button */}
          <div className="flex justify-center mb-8">
            {!isCallActive ? (
              <button
                onClick={onStartCall}
                disabled={callStatus === 'connecting'}
                className="relative group"
              >
                <div className="w-32 h-32 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center transition-all duration-200 shadow-2xl group-hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
                  {callStatus === 'connecting' ? (
                    <Loader2 className="w-16 h-16 text-white animate-spin" />
                  ) : (
                    <Mic className="w-16 h-16 text-white" />
                  )}
                </div>
                {callStatus === 'idle' && (
                  <div className="absolute inset-0 w-32 h-32 bg-primary-400 rounded-full animate-ping opacity-20" />
                )}
              </button>
            ) : (
              <button
                onClick={onEndCall}
                className="relative group"
              >
                <div className="w-32 h-32 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-200 shadow-2xl group-hover:scale-105">
                  <Phone className="w-16 h-16 text-white transform rotate-135" />
                </div>
                <div className="absolute inset-0 w-32 h-32 bg-red-400 rounded-full animate-pulse-slow opacity-20" />
              </button>
            )}
          </div>

          {/* Status Indicator */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className={`w-3 h-3 rounded-full ${
              isCallActive ? 'bg-green-500 animate-pulse' : 'bg-gray-300'
            }`} />
            <span className="text-sm font-medium text-gray-700">
              {isCallActive ? 'Connected' : 'Not Connected'}
            </span>
          </div>

          {/* Transcript Area */}
          <div className="bg-gray-50 rounded-lg p-4 min-h-[300px] max-h-[400px] overflow-y-auto">
            {messages.length === 0 ? (
              <div className="text-center text-gray-400 py-12">
                <Mic className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>Your conversation will appear here...</p>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <TranscriptMessage key={index} message={message} />
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex gap-3 justify-center">
            {!isCallActive && (
              <button onClick={onBack} className="btn-secondary">
                ← Back to Home
              </button>
            )}
          </div>
        </div>

        {/* Tips */}
        {!isCallActive && callStatus === 'idle' && (
          <div className="mt-8 text-center text-sm text-gray-600 max-w-xl mx-auto">
            <p className="mb-2">💡 <strong>Tips:</strong></p>
            <p>Say something like: "Schedule a meeting for John tomorrow at 3pm called Team Sync"</p>
          </div>
        )}
      </div>
    </div>
  );
};
