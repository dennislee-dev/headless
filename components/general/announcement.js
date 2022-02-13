import { annonce_message } from '../../lib/config';

function Announcement() {
  return (
    <section className="font-semibold z-[2] h-10 bg-[#f6f6f6] sticky top-0 w-full text-black text-center items-center justify-center text-[15px] flex">
      <p>
         {annonce_message} <span role="img" aria-label="sheep">🎁</span>
      </p>
    </section>
  );
}
export default Announcement;
