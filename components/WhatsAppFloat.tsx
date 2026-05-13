const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=919310685448&text=Hello%0AWelcome+to+SHWAASTIKA+WELLNESS.%0A%0AThank+you+for+reaching+out+through+our+website.%0APlease+tell+us+how+we+can+help+you+today.%0A%0AYou+can+share%3A%0A-+Your+concern+or+goal%0A-+Preferred+service%0A-+Suitable+time+for+a+call%2Fsession%0A%0AOur+team+will+respond+shortly&type=phone_number&app_absent=0";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Shwaastika Wellness on WhatsApp"
      className="fixed bottom-5 right-5 z-[90] flex h-16 w-16 items-center justify-center rounded-full bg-[#25d366] text-white shadow-xl shadow-[#1b5f37]/25 transition hover:-translate-y-1 hover:bg-[#1fbd5a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25d366] focus-visible:ring-offset-4 focus-visible:ring-offset-[#fbf8f1] sm:bottom-7 sm:right-7"
    >
      <span className="absolute right-1.5 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-red-500" />
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="h-8 w-8"
        fill="currentColor"
      >
        <path d="M16.02 4.8A11.1 11.1 0 0 0 6.5 21.62L5.1 27l5.51-1.36A11.1 11.1 0 1 0 16.02 4.8Zm0 2.05a9.05 9.05 0 0 1 7.67 13.87 9.06 9.06 0 0 1-12.57 2.84l-.38-.23-3.13.77.79-3.05-.25-.4A9.05 9.05 0 0 1 16.02 6.85Zm-4.06 4.18c-.2 0-.52.07-.79.36-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.07 3.32 5.1 4.52 2.52 1 3.04.8 3.59.75.55-.05 1.78-.73 2.03-1.43.25-.7.25-1.31.18-1.43-.08-.13-.28-.2-.58-.35-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.5-.89-.8-1.5-1.79-1.67-2.09-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.24-.24-.58-.49-.5-.68-.51h-.58Z" />
      </svg>
    </a>
  );
}
