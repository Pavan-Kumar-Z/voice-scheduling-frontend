import { CheckCircle, Calendar, ExternalLink, Plus } from 'lucide-react';

export const SuccessScreen = ({ eventDetails, onScheduleAnother, onBackHome }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Success Icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Event Created Successfully!
          </h2>
          <p className="text-gray-600">
            Your meeting has been added to Google Calendar
          </p>
        </div>

        {/* Event Details Card */}
        {eventDetails && (
          <div className="card mb-6">
            <div className="flex items-start gap-4 mb-6">
              <Calendar className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {eventDetails.title || 'Meeting'}
                </h3>
                
                <div className="space-y-2 text-gray-600">
                  <p><strong>Name:</strong> {eventDetails.name}</p>
                  <p><strong>Date:</strong> {eventDetails.date}</p>
                  <p><strong>Time:</strong> {eventDetails.time}</p>
                  {eventDetails.eventLink && (
                    <a 
                      href={eventDetails.eventLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium mt-2"
                    >
                      View in Google Calendar
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
              <button onClick={onScheduleAnother} className="btn-primary flex-1 flex items-center justify-center gap-2">
                <Plus className="w-5 h-5" />
                Schedule Another Event
              </button>
              <button onClick={onBackHome} className="btn-secondary flex-1">
                Back to Home
              </button>
            </div>
          </div>
        )}

        {/* Additional Info */}
        <div className="text-center text-sm text-gray-600">
          <p>You should receive a calendar notification shortly.</p>
        </div>
      </div>
    </div>
  );
};
