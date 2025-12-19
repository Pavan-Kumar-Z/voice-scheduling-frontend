import { useState, useEffect, useCallback } from 'react';
import Vapi from '@vapi-ai/web';

export const useVapi = () => {
  const [vapi, setVapi] = useState(null);
  const [isCallActive, setIsCallActive] = useState(false);
  const [messages, setMessages] = useState([]);
  const [callStatus, setCallStatus] = useState('idle'); // idle, connecting, active, ended

  // Initialize VAPI
  useEffect(() => {
    const vapiInstance = new Vapi(import.meta.env.VITE_VAPI_PUBLIC_KEY);
    setVapi(vapiInstance);

    // Setup event listeners
    vapiInstance.on('call-start', () => {
      console.log('Call started');
      setIsCallActive(true);
      setCallStatus('active');
    });

    vapiInstance.on('call-end', () => {
      console.log('Call ended');
      setIsCallActive(false);
      setCallStatus('ended');
    });

    vapiInstance.on('speech-start', () => {
      console.log('User started speaking');
    });

    vapiInstance.on('speech-end', () => {
      console.log('User stopped speaking');
    });

    vapiInstance.on('message', (message) => {
      console.log('Message received:', message);
      
      if (message.type === 'transcript') {
        setMessages((prev) => [...prev, {
          role: message.role,
          text: message.transcript,
          timestamp: new Date(),
        }]);
      }
      
      if (message.type === 'function-call') {
        console.log('Function called:', message);
      }
    });

    vapiInstance.on('error', (error) => {
      console.error('VAPI Error:', error);
      setCallStatus('error');
    });

    return () => {
      vapiInstance.stop();
    };
  }, []);

  const startCall = useCallback(async () => {
    if (!vapi) return;
    
    try {
      setCallStatus('connecting');
      setMessages([]);
      
      await vapi.start(import.meta.env.VITE_VAPI_ASSISTANT_ID);
      
    } catch (error) {
      console.error('Error starting call:', error);
      setCallStatus('error');
    }
  }, [vapi]);

  const endCall = useCallback(() => {
    if (!vapi) return;
    vapi.stop();
    setCallStatus('ended');
  }, [vapi]);

  return {
    startCall,
    endCall,
    isCallActive,
    messages,
    callStatus,
  };
};