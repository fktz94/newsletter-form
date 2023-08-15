import { useState } from 'react';

function ListItem({ children }) {
  return (
    <li>
      <img
        src="https://img.icons8.com/?size=512&id=11695&format=png"
        alt="tick icon"
        className="h-4 inline pr-1"
      />
      {children}
    </li>
  );
}

export default function Form({ email, handleEmail, handleSubscription }) {
  const [error, setError] = useState('');
  const [firstTry, setFirstTry] = useState(true);

  const validateEmail = (inputEmail) => {
    if (!inputEmail.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      if (firstTry) setFirstTry(false);
      return setError('Valid email required');
    }
    setError('');
    return true;
  };

  const handleChange = (e) => {
    if (!firstTry) validateEmail(e.target.value);
    handleEmail(e.target.value);
  };

  const handleSubmit = (e, { handleSubscription }) => {
    e.preventDefault();
    if (!validateEmail(email)) return;
    setFirstTry(true);
    handleSubscription(true);
  };

  return (
    <div className="grid grid-cols-2 w-[680px] h-[450px] rounded-2xl bg-amber-200 text-blue-950">
      <div className="flex items-center mx-10">
        <form
          className="flex flex-col gap-6 text-xs"
          onSubmit={(e) => handleSubmit(e, { handleSubscription })}>
          <h2 className="text-4xl font-bold">Stay updated!</h2>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul className="flex flex-col gap-2">
            <ListItem>Product discovery and building what matters</ListItem>
            <ListItem>Measuring to ensure updates are a success</ListItem>
            <ListItem>And much more!</ListItem>
          </ul>
          <label htmlFor="user-email" className="relative">
            <small>
              <b>Email adress:</b>
            </small>
            <input
              type="text"
              name="user-email"
              id="user-email"
              value={email}
              onChange={handleChange}
              placeholder="email@company.com"
              className={`w-full p-2 mt-1 outline-none border rounded-sm focus:border-cyan-400 ${
                error ? 'focus:border-red-500 border-red-500 bg-red-200' : 'border-neutral-400 '
              }`}
            />
            {error && (
              <small className="absolute top-0 right-0 font-bold text-red-500">{error}</small>
            )}
          </label>
          <button
            type="submit"
            className="py-3 w-full rounded outline-none text-neutral-50 bg-blue-950 hover:bg-gradient-to-br from-yellow-600 to-yellow-900 hover:shadow-[1px_8px_50px_6px_rgb(200,100,18,0.7)] ">
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
      <div className="m-4">
        <img
          src="https://img.freepik.com/free-vector/graphic-design-geometric-wallpaper_52683-34399.jpg?w=2000"
          alt="form"
          className="object-cover h-full rounded-2xl"
        />
      </div>
    </div>
  );
}
