import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { VoiceInterface } from './components/VoiceInterface';
import { SuccessScreen } from './components/SuccessScreen';
import { useVapi } from './hooks/useVapi';

function App() {
  const [screen, setScreen] = useState('landing'); // landing, voice, success
  const [eventDetails, setEventDetails] = useState(null);
  
  const { startCall, endCall, isCallActive, messages, callStatus } = useVapi();

  const handleGetStarted = () => {
    setScreen('voice');
  };

  const handleStartCall = async () => {
    await startCall();
  };

  const handleEndCall = () => {
    endCall();
    // Check if event was created by looking for success message
    const lastMessages = messages.slice(-5);
    const hasSuccess = lastMessages.some(m => 
      m.text.toLowerCase().includes('event') && 
      m.text.toLowerCase().includes('created')
    );
    
    if (hasSuccess) {
      // Extract event details from conversation
      // This is a simple implementation - you might want to enhance this
      setEventDetails({
        name: 'User',
        date: 'Scheduled',
        time: 'As discussed',
        title: 'Meeting',
        eventLink: null
      });
      setScreen('success');
    }
  };

  const handleBackHome = () => {
    setScreen('landing');
    setEventDetails(null);
  };

  const handleScheduleAnother = () => {
    setScreen('voice');
    setEventDetails(null);
  };

  return (
    <>
      {screen === 'landing' && (
        <LandingPage onGetStarted={handleGetStarted} />
      )}
      
      {screen === 'voice' && (
        <VoiceInterface
          isCallActive={isCallActive}
          callStatus={callStatus}
          messages={messages}
          onStartCall={handleStartCall}
          onEndCall={handleEndCall}
          onBack={handleBackHome}
        />
      )}
      
      {screen === 'success' && (
        <SuccessScreen
          eventDetails={eventDetails}
          onScheduleAnother={handleScheduleAnother}
          onBackHome={handleBackHome}
        />
      )}
    </>
  );
}

export default App;