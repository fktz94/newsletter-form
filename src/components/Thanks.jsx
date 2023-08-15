export default function Thanks({ email, handleSubscription }) {
  return (
    <div className="flex flex-col gap-6 max-w-[380px] p-12 rounded-2xl bg-amber-200 text-blue-950">
      <img src="https://img.icons8.com/?size=512&id=108633&format=png" className="w-28" alt="" />
      <h2 className="text-4xl font-bold">Thanks for subscribing!</h2>
      <small>
        A confirmation email has been sent to <b>{email}</b>. Please open it and click the button
        inside to confirm your subscription
      </small>
      <button
        type="button"
        className="py-2 w-full rounded outline-none text-sm text-neutral-50 bg-blue-950 hover:bg-gradient-to-br from-yellow-600 to-yellow-900 hover:shadow-[1px_8px_40px_1px_rgb(200,100,18,0.7)] "
        onClick={() => handleSubscription(false)}>
        Dismiss message
      </button>
    </div>
  );
}
