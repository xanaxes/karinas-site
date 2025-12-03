
<script>
        /**
        * ==================================================================================
        * USER CONFIGURATION SECTION - EDIT THIS DATA TO CUSTOMIZE YOUR WEBSITE
        * ==================================================================================
        */
        const PROFILE_DATA = {
            // --- Basic Info ---
            name: "Genna Swallows",
        tagline: "The Ultimate Indulgence & Fetish Specialist",
        location: "Winnipeg, MB (In-call & Out-call)",
        phone: "2045999446"

        // --- Social Links (leave empty string "" if not applicable) ---
        social: {
            twitter: "https://twitter.com",
        instagram: "https://instagram.com"
            },

        // --- Theme Colors ---
        // Suggestions: 'rose', 'fuchsia', 'purple', 'amber', 'red'
        themeColor: "rose",

        // --- Biography ---
        // You can add multiple paragraphs here.
        bio: [
        "Welcome to my world. I am Raven, an independent companion specializing in bringing your deepest fantasies to life. With a passion for the psychological and the sensual, I offer an experience that transcends the ordinary.",
        "My style is elegant yet commanding. Whether you are looking for a dinner date to turn heads or a private session to explore your hidden desires, I provide a safe, non-judgmental, and discreet environment.",
        "I pride myself on my intellect and conversation as much as my physical attributes. Let's create a memory that lingers long after you leave."
        ],

        // --- Statistics ---
        stats: [
        {label: "Age", value: "24" },
        {label: "Height", value: "5'7\"" },
        {label: "Hair", value: "Raven Black" },
        {label: "Eyes", value: "Emerald Green" },
        {label: "Bust", value: "34D" },
        {label: "Dress Size", value: "4" },
        {label: "Ethnicity", value: "Mixed" },
        {label: "Orientation", value: "Bisexual" },
        ],

        // --- Fetishes & Specialties ---
        // Add as many tags as you like.
        fetishes: [
        "Roleplay",
        "Costumes/Cosplay",
        "Sensual Massage",
        "Light Bondage",
        "Foot Worship",
        "Femdom (Soft)",
        "Girlfriend Experience",
        "Couples"
        ],

        // --- Rates / Donation ---
        rates: [
        {duration: "1 Hour", price: "300", type: "In-call" },
        {duration: "2 Hours", price: "550", type: "In-call" },
        {duration: "Overnight", price: "1500", type: "In-call/Out-call" },
        {duration: "Dinner Date", price: "400", type: "4 Hours" },
        ],

        // --- Gallery Images ---
        // Replace these URLs with links to your actual photos.
        images: {
            // Main Hero Image
            main: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
        // Grid Images
        gallery: [
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1485230405346-71acb9518d9c?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
        ]
            }
        };

        /**
         * ==================================================================================
         * APPLICATION LOGIC (DO NOT EDIT BELOW THIS LINE UNLESS YOU KNOW JS)
         * ==================================================================================
         */
        document.addEventListener('DOMContentLoaded', () => {
            const data = PROFILE_DATA;
        const theme = data.themeColor;

            // 1. Update Theme Colors
            const updateThemeColor = (id, classPrefix, removePrefix = true) => {
                const el = document.getElementById(id);
        if (!el) return;
        // Simple approach: reset classes that might conflict (not exhaustive but works for this template)
        if (removePrefix) {
            el.className = el.className.replace(/text-\w+-500/g, '').replace(/bg-\w+-600/g, '').replace(/border-\w+-500/g, '');
                }
        el.classList.add(`${classPrefix}-${theme}-500`);
        if (classPrefix === 'bg') el.classList.remove(`${classPrefix}-${theme}-500`), el.classList.add(`${classPrefix}-${theme}-600`);
            };

        // Apply theme to specific elements
        document.getElementById('hero-tagline').className = `text-xl md:text-2xl font-light tracking-wide text-${theme}-500`;
        document.getElementById('btn-book').className = `px-8 py-3 bg-${theme}-600 text-white uppercase tracking-widest hover:opacity-90 transition-all text-sm font-medium`;
        document.getElementById('hero-frame').className = `absolute inset-0 border border-${theme}-500/30 transform translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2`;
        document.getElementById('hero-bg-gradient').className = `absolute inset-0 bg-gradient-to-b from-${theme}-900/20 to-neutral-950`;

            // Section Headers
            ['bio-header', 'gallery-header', 'rates-header'].forEach(id => {
            document.getElementById(id).className = `text-3xl md:text-4xl font-light uppercase tracking-widest text-${theme}-500 mb-8 border-b border-${theme}-900/50 pb-4`;
            });

        // Icons & Accents
        document.getElementById('stats-title').className = `text-xl font-serif text-white mb-6 flex items-center gap-2 text-${theme}-500`;
        document.getElementById('fetish-title').className = `text-xl font-serif text-white mb-6 flex items-center gap-2 text-${theme}-500`;
        document.getElementById('contact-bar').className = `absolute top-0 left-0 w-full h-1 bg-${theme}-600`;
        document.getElementById('phone-icon-box').className = `p-3 bg-neutral-800 rounded-full text-${theme}-500`;
        document.getElementById('mail-icon-box').className = `p-3 bg-neutral-800 rounded-full text-${theme}-500`;

        // 2. Populate Text & Basic Info
        document.getElementById('nav-name').textContent = data.name.toUpperCase();
        document.getElementById('hero-name').textContent = data.name;
        document.getElementById('hero-tagline').textContent = data.tagline;
        document.getElementById('hero-location').textContent = data.location;
        document.getElementById('contact-phone').textContent = data.phone;
        document.getElementById('contact-email').textContent = data.email;
        document.getElementById('copyright-name').textContent = data.name;
        document.getElementById('copyright-year').textContent = new Date().getFullYear();

        document.getElementById('hero-image').src = data.images.main;

        // 3. Render Stats
        const statsList = document.getElementById('stats-list');
            data.stats.forEach(stat => {
                const li = document.createElement('li');
        li.className = "flex justify-between border-b border-neutral-800 pb-2 last:border-0";
        li.innerHTML = `<span class="text-neutral-500 uppercase">${stat.label}</span><span class="text-white font-medium">${stat.value}</span>`;
        statsList.appendChild(li);
            });

        // 4. Render Fetishes
        const fetishesList = document.getElementById('fetishes-list');
            data.fetishes.forEach(tag => {
                const span = document.createElement('span');
        span.className = `px-3 py-1 bg-neutral-950 border border-neutral-800 text-xs uppercase tracking-wider hover:text-${theme}-400 transition-colors`;
        span.textContent = tag;
        fetishesList.appendChild(span);
            });

        // 5. Render Bio
        const bioContent = document.getElementById('bio-content');
            data.bio.forEach(para => {
                const p = document.createElement('p');
        p.textContent = para;
        bioContent.appendChild(p);
            });

        // 6. Render Gallery
        const galleryGrid = document.getElementById('gallery-grid');
            data.images.gallery.forEach((url, idx) => {
                const div = document.createElement('div');
        div.className = "group relative aspect-[3/4] overflow-hidden bg-neutral-900 cursor-pointer";
        div.innerHTML = `
        <img src="${url}" alt="Gallery ${idx + 1}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <span class="text-sm uppercase tracking-widest text-${theme}-500">View Full</span>
        </div>
        `;
        galleryGrid.appendChild(div);
            });

        // 7. Render Rates
        const ratesGrid = document.getElementById('rates-grid');
            data.rates.forEach(rate => {
                const div = document.createElement('div');
        div.className = "bg-neutral-900 border border-neutral-800 p-8 text-center hover:border-neutral-600 transition-colors group";
        div.innerHTML = `
        <div class="text-sm uppercase tracking-widest text-neutral-500 mb-2">${rate.type}</div>
        <div class="text-3xl font-serif text-white mb-2">${rate.duration}</div>
        <div class="text-2xl text-${theme}-500 font-light">$${rate.price}</div>
        `;
        ratesGrid.appendChild(div);
            });

        // 8. Social Links
        if (data.social.twitter) {
                const el = document.getElementById('social-twitter');
        el.href = data.social.twitter;
        el.classList.remove('hidden');
            }
        if (data.social.instagram) {
                const el = document.getElementById('social-instagram');
        el.href = data.social.instagram;
        el.classList.remove('hidden');
            }

        // 9. Mobile Menu Logic
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

            menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
                // Toggle icon between chevron-down and chevron-up is tricky with Lucide replace, 
                // but we can just toggle visibility or simple logic. Kept simple for now.
            });

            mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
            });

        // 10. Initialize Icons
        lucide.createIcons();
        });
    </script>