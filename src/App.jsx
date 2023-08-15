import { useState } from 'react';
import Form from './components/Form';
import Thanks from './components/Thanks';

function App() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleEmail = (value) => {
    setEmail(value);
  };

  const handleSubscription = (bool) => {
    if (!bool) setEmail('');
    setIsSubscribed(bool);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-neutral-800 text-neutral-100">
      {!isSubscribed ? (
        <Form handleSubscription={handleSubscription} email={email} handleEmail={handleEmail} />
      ) : (
        <Thanks email={email} handleSubscription={handleSubscription} />
      )}
    </div>
  );
}

export default App;
