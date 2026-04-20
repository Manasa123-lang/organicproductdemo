import { useState, useEffect } from "react";

/* ─── ROUTER ─────────────────────────────────────────────────────────────── */
function useRoute() {
  const [page, setPage] = useState(() => window.location.hash.replace("#","") || "home");
  useEffect(() => {
    const h = () => setPage(window.location.hash.replace("#","") || "home");
    window.addEventListener("hashchange", h);
    return () => window.removeEventListener("hashchange", h);
  }, []);
  const navigate = (p) => { window.location.hash = p; };
  return { page, navigate };
}

/* ─── ALL UNSPLASH IMAGES ────────────────────────────────────────────────── */
const IMG = {
  /* ── Page heroes ── */
  hero:          "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1800&q=85",
  shopHero:      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=80",
  storyHero:     "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1800&q=80",
  certHero:      "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=1800&q=80",
  blogHero:      "https://images.unsplash.com/photo-1495195134817-aeb325a55b65?w=1800&q=80",
  contactHero:   "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=1800&q=80",
  checkoutHero:  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1800&q=80",
  successBg:     "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1400&q=80",

  /* ── Products ── */
  honey:         "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=700&q=85",
  arganOil:      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=700&q=85",
  ashwa:         "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?w=700&q=85",
  matcha:        "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=700&q=85",
  rosehip:       "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=700&q=85",
  spirulina:     "https://images.unsplash.com/photo-1622484212850-eb596d769edc?w=700&q=85",
  cacao:         "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=700&q=85",
  turmeric:      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=700&q=85",

  /* ── Category banners ── */
  catFood:       "https://images.unsplash.com/photo-1542838132-92c53300491e?w=900&q=80",
  catSkin:       "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=900&q=80",
  catSupp:       "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=900&q=80",

  /* ── Why-us / Feature backgrounds ── */
  whyusBg:       "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=1600&q=80",
  organicBg:     "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=1400&q=80",
  packagingBg:   "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1400&q=80",
  farmDelivery:  "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=900&q=80",
  certsBg:       "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=900&q=80",

  /* ── Our Story / Farmers ── */
  farm1:         "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&q=80",
  farm2:         "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
  farm3:         "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80",
  missionImg:    "https://images.unsplash.com/photo-1701227737269-2b1f60bba620?q=80&w=906",
  sustain1:      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=700&q=80",
  sustain2:      "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=700&q=80",
  sustain3:      "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=700&q=80",
  sustain4:      "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=700&q=80",
  sustain5:      "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=700&q=80",
  sustain6:      "https://images.unsplash.com/photo-1709207513826-10d0b0e289b4?q=80&w=870",

  /* ── Certifications ── */
  cert_usda:     "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&q=80",
  cert_eco:      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80",
  cert_vegan:    "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=600&q=80",
  cert_nongmo:   "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=600&q=80",
  cert_cruelty:  "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&q=80",
  cert_fair:     "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&q=80",

  /* ── Blog ── */
  blog1:         "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=700&q=80",
  blog2:         "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=700&q=80",
  blog3:         "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=700&q=80",
  blog4:         "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700&q=80",
  blog5:         "https://images.unsplash.com/photo-1499728603263-13726abce5fd?w=700&q=80",
  blog6:         "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=700&q=80",

  /* ── Testimonial avatars ── */
  av1:           "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80",
  av2:           "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80",
  av3:           "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80",
  av4:           "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80",

  /* ── Stores / Contact ── */
  store1:        "https://images.unsplash.com/photo-1519996529931-28324d5a630e?w=800&q=80",
  store2:        "https://plus.unsplash.com/premium_photo-1675798983878-604c09f6d154?q=80",
  store3:        "https://images.unsplash.com/photo-1582947696557-8fe84f7c9760?q=80&w=870",
  contactTeam:   "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
  contactMap:    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900&q=80",

  /* ── Newsletter / misc ── */
  newsletter:    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80",
  paymentBg:     "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80",
  qrCode:        "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=200&q=80",
};

/* ─── THEME TOKENS ───────────────────────────────────────────────────────── */
const C = {
  bg:      "#F5F0E8",   bgDeep:  "#EDE6D6",   bgCard:  "#FDFAF4",
  bgDark:  "#1C2B1A",   bgMid:   "#2E4A2B",
  g1:      "#2E5D29",   g2:      "#3E7A38",   g3:      "#5A9E53",   g4: "#A8D5A2",
  t1:      "#B5541A",   t2:      "#D4692A",   t3:      "#E8934A",   t4: "#F5C87A",
  tx1:     "#1A1208",   tx2:     "#4A3728",   tx3:     "#7A6050",   tx4:"#B09A85",
  border:  "#D8CEBF",   shadow:  "rgba(26,18,8,0.10)",
};

/* ─── DATA ───────────────────────────────────────────────────────────────── */
const PRODUCTS = [
  {id:1,  name:"Wild Forest Honey",       price:899,  category:"Food",        badge:"USDA Organic",  rating:4.9, reviews:312, img:IMG.honey,     cert:["USDA","Organic"],         popular:true},
  {id:2,  name:"Cold-Pressed Argan Oil",  price:1499, category:"Skincare",    badge:"Eco-Certified", rating:4.8, reviews:189, img:IMG.arganOil,  cert:["Eco-Certified","Vegan"],  popular:true},
  {id:3,  name:"Ashwagandha Capsules",    price:699,  category:"Supplements", badge:"Organic",       rating:4.7, reviews:245, img:IMG.ashwa,     cert:["Organic","Non-GMO"],      popular:false},
  {id:4,  name:"Matcha Green Tea",        price:1199, category:"Food",        badge:"USDA Organic",  rating:4.9, reviews:401, img:IMG.matcha,    cert:["USDA","Organic"],         popular:true},
  {id:5,  name:"Rosehip Face Serum",      price:1799, category:"Skincare",    badge:"Vegan",         rating:4.6, reviews:156, img:IMG.rosehip,   cert:["Vegan","Cruelty-Free"],   popular:false},
  {id:6,  name:"Spirulina Powder",        price:799,  category:"Supplements", badge:"Organic",       rating:4.8, reviews:298, img:IMG.spirulina, cert:["Organic","Non-GMO"],      popular:true},
  {id:7,  name:"Raw Cacao Nibs",          price:649,  category:"Food",        badge:"Eco-Certified", rating:4.7, reviews:178, img:IMG.cacao,     cert:["Eco-Certified","Organic"],popular:false},
  {id:8,  name:"Turmeric & Ginger Blend", price:749,  category:"Supplements", badge:"USDA Organic",  rating:4.9, reviews:334, img:IMG.turmeric,  cert:["USDA","Organic"],         popular:true},
];

const TESTIMONIALS = [
  {name:"Priya M.",  loc:"Bangalore, KA", text:"Utterly transformed my skincare routine. The argan oil is liquid gold — my skin glows every single day.", avatar:IMG.av1, rating:5},
  {name:"Rahul S.",  loc:"Mumbai, MH",    text:"The honey is unlike anything from a supermarket. You can taste the wildflower difference in every spoonful.", avatar:IMG.av2, rating:5},
  {name:"Anjali K.", loc:"Mysuru, KA",    text:"Full sourcing transparency! I know exactly what I'm putting into my body. This brand is the real deal.", avatar:IMG.av3, rating:5},
  {name:"Dev P.",    loc:"Chennai, TN",   text:"The matcha is ceremonial grade and the price is unbeatable. My morning ritual has become truly sacred.", avatar:IMG.av4, rating:5},
];

const BLOG_POSTS = [
  {id:1, title:"5 Benefits of Switching to Organic Skincare",  cat:"Skincare",    desc:"Organic ingredients can transform your skin without harsh chemicals or hidden toxins.", img:IMG.blog1, date:"Apr 10, 2026"},
  {id:2, title:"The Science Behind Adaptogens",                cat:"Health Tips", desc:"How ashwagandha, reishi & rhodiola help your body adapt to stress naturally.", img:IMG.blog2, date:"Apr 5, 2026"},
  {id:3, title:"Farm-to-Table: Why It Matters More Than Ever", cat:"Nutrition",   desc:"The journey from organic soil to your dinner plate and why every step counts.", img:IMG.blog3, date:"Mar 28, 2026"},
  {id:4, title:"Gut Health & Organic Foods: A Holistic Guide", cat:"Nutrition",   desc:"The deep connection between organic nutrition and a thriving gut microbiome.", img:IMG.blog4, date:"Mar 20, 2026"},
  {id:5, title:"Morning Rituals for a Wellness-Focused Life",  cat:"Health Tips", desc:"Simple sustainable habits rooted in Ayurvedic and modern wellness wisdom.", img:IMG.blog5, date:"Mar 15, 2026"},
  {id:6, title:"Choosing the Right Supplements for Your Body", cat:"Health Tips", desc:"A practitioner's guide to navigating organic supplements safely and effectively.", img:IMG.blog6, date:"Mar 8, 2026"},
];

const CERTS = [
  {name:"USDA Organic",  icon:"🌿", bdr:"#4CAF50", img:IMG.cert_usda,   desc:"Products contain ≥95% organically produced ingredients — USDA certified.", why:"No synthetic pesticides, GMOs, or artificial additives. Guaranteed."},
  {name:"Eco-Certified", icon:"♻️", bdr:"#26A69A", img:IMG.cert_eco,    desc:"Verified sustainable practices verified across the entire supply chain.", why:"Minimal ecological footprint, from seed to your doorstep."},
  {name:"Vegan",         icon:"🌱", bdr:"#8BC34A", img:IMG.cert_vegan,  desc:"100% free from animal products and by-products. Compassionately made.", why:"For those prioritising animal welfare and plant-based living."},
  {name:"Non-GMO",       icon:"🔬", bdr:"#FFB300", img:IMG.cert_nongmo, desc:"Verified by the Non-GMO Project. No genetically modified organisms.", why:"Protects biodiversity and ensures natural, unaltered plant genetics."},
  {name:"Cruelty-Free",  icon:"🐇", bdr:"#E91E63", img:IMG.cert_cruelty,desc:"No animal testing at any stage of product development.", why:"Aligned with ethical consumerism and global animal rights standards."},
  {name:"Fair Trade",    icon:"🤝", bdr:"#7E57C2", img:IMG.cert_fair,   desc:"Farmers receive fair wages and work in safe, ethical conditions.", why:"Your purchase directly empowers small-scale farmers around the globe."},
];

const FARMERS = [
  {name:"Gopalakrishnan & Family", region:"Coorg, Karnataka",      specialty:"Coffee & Spices",    since:"2008", img:IMG.farm1, story:"Three generations of sustainable farming using ancient intercropping methods, enriching soil naturally without a single drop of chemical fertilizer."},
  {name:"Lakshmi Devi",            region:"Nilgiris, Tamil Nadu",  specialty:"Medicinal Herbs",    since:"2012", img:IMG.farm2, story:"Lakshmi grows 40+ varieties of medicinal herbs using traditional Siddha farming wisdom. Her farm is a certified biodiversity hotspot."},
  {name:"The Sharma Collective",   region:"Uttarakhand Himalayas", specialty:"Wild Honey & Herbs", since:"2015", img:IMG.farm3, story:"A cooperative of 12 families ethically harvesting wild honey from Himalayan forests, maintaining bee habitats and forest biodiversity."},
];

const STORES = [
  {city:"Mysuru",    address:"12 Organic Lane, Vijayanagar, Mysuru KA 570017",     phone:"+91 821 234 5678", hours:"Mon–Sat  9AM–7PM", img:IMG.store1, map:"https://maps.google.com/?q=Mysuru,Karnataka"},
  {city:"Bangalore", address:"45 Green Blvd, Indiranagar, Bangalore KA 560038",    phone:"+91 80 678 9012",  hours:"Mon–Sun  8AM–9PM", img:IMG.store2, map:"https://maps.google.com/?q=Indiranagar,Bangalore"},
  {city:"Chennai",   address:"88 Wellness Street, T. Nagar, Chennai TN 600017",    phone:"+91 44 345 6789",  hours:"Mon–Sat  9AM–7PM", img:IMG.store3, map:"https://maps.google.com/?q=TNagar,Chennai"},
];

/* ─── SHARED UI ATOMS ────────────────────────────────────────────────────── */
const Stars = ({n}) => (
  <span style={{color:C.t3,letterSpacing:1}}>
    {"★".repeat(Math.floor(n))}{"☆".repeat(5-Math.floor(n))}
  </span>
);

const Chip = ({label}) => (
  <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
    style={{background:"#EDF4EC",color:C.g1,border:`1px solid ${C.g4}`}}>
    ✓ {label}
  </span>
);

const SecHead = ({pre,title,sub,light=false}) => (
  <div className="text-center mb-12">
    {pre && <p className="text-xs font-bold uppercase tracking-[0.22em] mb-2"
      style={{color:light?C.g4:C.t2}}>{pre}</p>}
    <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-3"
      style={{color:light?"#fff":C.tx1}}>{title}</h2>
    {sub && <p className="text-sm max-w-xl mx-auto leading-relaxed"
      style={{color:light?"rgba(255,255,255,0.70)":C.tx3}}>{sub}</p>}
  </div>
);

/* ─── CART DRAWER ────────────────────────────────────────────────────────── */
function CartDrawer({cart, setCart, open, onClose, onCheckout}) {
  const upd = (id,d) => setCart(c=>c.map(i=>i.id===id?{...i,qty:Math.max(0,i.qty+d)}:i).filter(i=>i.qty>0));
  const rm  = id => setCart(c=>c.filter(i=>i.id!==id));
  const sub   = cart.reduce((s,i)=>s+i.price*i.qty,0);
  const del   = sub>=999?0:79;
  const total = sub+del;
  const cnt   = cart.reduce((s,i)=>s+i.qty,0);
  const pct   = Math.min((sub/999)*100,100);

  return (
    <>
      {/* backdrop */}
      <div onClick={onClose}
        className={`fixed inset-0 z-40 transition-all duration-300 ${open?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"}`}
        style={{background:"rgba(26,18,8,0.58)",backdropFilter:"blur(5px)"}}/>

      {/* panel */}
      <div className={`fixed top-0 right-0 h-full z-50 flex flex-col transition-transform duration-300 ease-out ${open?"translate-x-0":"translate-x-full"}`}
        style={{width:"min(440px,100vw)",background:C.bgCard,borderLeft:`1px solid ${C.border}`,boxShadow:"-12px 0 50px rgba(26,18,8,0.20)"}}>

        {/* header */}
        <div className="flex items-center justify-between px-6 py-5 flex-shrink-0"
          style={{background:C.bgDeep,borderBottom:`1px solid ${C.border}`}}>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-2xl text-white"
              style={{background:`linear-gradient(135deg,${C.g1},${C.g2})`}}>🛒</div>
            <div>
              <h2 className="font-serif text-xl font-bold" style={{color:C.tx1}}>Your Cart</h2>
              <p className="text-xs" style={{color:C.tx4}}>{cnt} item{cnt!==1?"s":""} · ₹{sub.toLocaleString()}</p>
            </div>
          </div>
          <button onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center text-lg font-bold transition-colors hover:bg-red-100 hover:text-red-600"
            style={{color:C.tx3}}>✕</button>
        </div>

        {/* delivery progress */}
        {cart.length>0 && (
          <div className="px-6 py-3 flex-shrink-0"
            style={{background:sub>=999?"#EDF4EC":"#FFF8EE",borderBottom:`1px solid ${C.border}`}}>
            {sub>=999
              ? <p className="text-xs font-bold text-center" style={{color:C.g1}}>🎉 Free delivery unlocked!</p>
              : <>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span style={{color:C.tx3}}>Add <strong style={{color:C.t2}}>₹{(999-sub).toLocaleString()}</strong> for free delivery</span>
                    <span style={{color:C.tx4}}>₹999 min</span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden" style={{background:C.border}}>
                    <div className="h-full rounded-full transition-all duration-500"
                      style={{width:`${pct}%`,background:`linear-gradient(90deg,${C.t2},${C.t3})`}}/>
                  </div>
                </>}
          </div>
        )}

        {/* items */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
          {cart.length===0
            ? <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <img src={IMG.farmDelivery} alt="empty" className="w-32 h-32 rounded-2xl object-cover mb-5 opacity-50"/>
                <p className="font-serif text-xl font-bold mb-2" style={{color:C.tx1}}>Your cart is empty</p>
                <p className="text-sm" style={{color:C.tx4}}>Discover our certified organic products</p>
              </div>
            : cart.map(item=>(
              <div key={item.id} className="flex items-center gap-3 rounded-2xl p-3 border"
                style={{background:C.bg,borderColor:C.border}}>
                {/* product image — always filled */}
                <img src={item.img} alt={item.name}
                  className="w-16 h-16 rounded-xl object-cover flex-shrink-0 border"
                  style={{borderColor:C.border}}/>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm truncate" style={{color:C.tx1}}>{item.name}</p>
                  <p className="text-xs mt-0.5" style={{color:C.t2}}>₹{item.price.toLocaleString()} × {item.qty}</p>
                  <p className="text-sm font-bold mt-0.5" style={{color:C.g1}}>₹{(item.price*item.qty).toLocaleString()}</p>
                </div>
                <div className="flex flex-col items-end gap-2 flex-shrink-0">
                  <button onClick={()=>rm(item.id)}
                    className="text-xs transition-colors hover:text-red-500 flex items-center gap-1"
                    style={{color:C.tx4}}>
                    🗑 remove
                  </button>
                  <div className="flex items-center rounded-xl overflow-hidden border" style={{borderColor:C.border}}>
                    <button onClick={()=>upd(item.id,-1)}
                      className="w-8 h-8 font-bold text-base flex items-center justify-center hover:bg-red-50 transition-colors"
                      style={{color:C.tx3}}>−</button>
                    <span className="w-8 h-8 text-sm font-bold flex items-center justify-center border-x"
                      style={{borderColor:C.border,color:C.tx1}}>{item.qty}</span>
                    <button onClick={()=>upd(item.id,+1)}
                      className="w-8 h-8 font-bold text-base flex items-center justify-center hover:bg-green-50 transition-colors"
                      style={{color:C.g2}}>+</button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

        {/* footer */}
        {cart.length>0 && (
          <div className="flex-shrink-0" style={{borderTop:`1px solid ${C.border}`,background:C.bgDeep}}>
            <div className="px-6 py-4 space-y-2 text-sm" style={{color:C.tx3}}>
              <div className="flex justify-between">
                <span>Subtotal ({cnt} items)</span><span>₹{sub.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span style={{color:del===0?C.g2:C.tx3}}>{del===0?"Free 🎉":`₹${del}`}</span>
              </div>
              <div className="flex justify-between">
                <span>Eco Packaging</span><span style={{color:C.g2}}>Free ♻️</span>
              </div>
              <div className="flex justify-between font-bold text-base pt-2 border-t"
                style={{borderColor:C.border,color:C.tx1}}>
                <span>Total</span>
                <span style={{color:C.g1}}>₹{total.toLocaleString()}</span>
              </div>
            </div>
            <div className="px-6 pb-6 pt-1 space-y-2">
              <button
                onClick={()=>{onClose(); onCheckout();}}
                className="w-full py-4 rounded-2xl font-bold text-white text-sm shadow-xl transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0"
                style={{background:`linear-gradient(135deg,${C.g1},${C.g2})`}}>
                🛒 Proceed to Checkout →
              </button>
              <button onClick={onClose}
                className="w-full py-2.5 text-sm text-center rounded-xl transition-colors hover:bg-gray-100"
                style={{color:C.tx4}}>
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

/* ─── CHECKOUT PAGE ──────────────────────────────────────────────────────── */
function CheckoutPage({cart, setCart, navigate}) {
  const [step,  setStep]  = useState(1);
  const [errs,  setErrs]  = useState({});
  const [placed,setPlaced]= useState(false);
  const [orderId] = useState("PR"+ Math.random().toString(36).substr(2,8).toUpperCase());

  const [form, setFormRaw] = useState({
    name:"", email:"", phone:"", address:"", city:"", state:"Karnataka", pin:"",
    payment:"upi", upi:"", card:"", expiry:"", cvv:"", netbank:"",
  });
  const setF = (k,v) => { setFormRaw(f=>({...f,[k]:v})); setErrs(e=>({...e,[k]:""})); };

  const sub   = cart.reduce((s,i)=>s+i.price*i.qty,0);
  const del   = sub>=999?0:79;
  const total = sub+del;
  const cnt   = cart.reduce((s,i)=>s+i.qty,0);

  /* validation */
  const v1 = () => {
    const e={};
    if(!form.name.trim())         e.name="Name is required";
    if(!form.email.includes("@")) e.email="Valid email required";
    if(form.phone.replace(/\D/g,"").length<10) e.phone="Valid 10-digit phone required";
    if(!form.address.trim())      e.address="Address is required";
    if(!form.city.trim())         e.city="City is required";
    if(form.pin.replace(/\D/g,"").length<6) e.pin="Valid 6-digit PIN required";
    setErrs(e); return !Object.keys(e).length;
  };
  const v2 = () => {
    const e={};
    if(form.payment==="upi"  && !form.upi.includes("@"))          e.upi="Valid UPI ID (eg. name@okaxis)";
    if(form.payment==="card" && form.card.replace(/\D/g,"").length<16) e.card="Enter valid 16-digit number";
    if(form.payment==="card" && !form.expiry.match(/^\d{2}\/\d{2}$/)) e.expiry="Format MM/YY";
    if(form.payment==="card" && form.cvv.length<3)                 e.cvv="3-digit CVV required";
    setErrs(e); return !Object.keys(e).length;
  };

  const placeOrder = () => {
    if(v2()){ setCart([]); setPlaced(true); setStep(3); }
  };

  /* shared field */
  const FI = ({k,label,ph,type="text",half=false,maxLen}) => (
    <div className={half?"flex-1 min-w-0":""}>
      <label className="block text-xs font-bold mb-1.5 uppercase tracking-wider" style={{color:C.tx3}}>{label}</label>
      <input type={type} value={form[k]} maxLength={maxLen}
        onChange={e=>setF(k,e.target.value)} placeholder={ph}
        className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none border-2 transition-all"
        style={{background:C.bg,borderColor:errs[k]?"#ef4444":form[k]?C.g2:C.border,color:C.tx1}}/>
      {errs[k] && <p className="text-xs text-red-500 mt-1 flex items-center gap-1">⚠ {errs[k]}</p>}
    </div>
  );

  /* ── SUCCESS SCREEN ── */
  if(placed && step===3) return (
    <div className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden"
      style={{background:C.bgDeep}}>
      <img src={IMG.successBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20"/>
      <div className="relative z-10 max-w-lg w-full mx-4 rounded-3xl overflow-hidden border shadow-2xl"
        style={{background:C.bgCard,borderColor:C.border}}>
        {/* top green banner */}
        <div className="h-32 relative overflow-hidden flex items-center justify-center"
          style={{background:`linear-gradient(135deg,${C.g1},${C.g2})`}}>
          <img src={IMG.farm1} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20"/>
          <div className="relative text-center">
            <div className="text-5xl mb-1">✅</div>
            <p className="font-serif text-xl font-bold text-white">Order Confirmed!</p>
          </div>
        </div>
        <div className="p-8 text-center">
          <p className="text-sm mb-1" style={{color:C.tx2}}>Thank you, <strong>{form.name}</strong>! Your organic order is on its way 🌿</p>
          <p className="text-xs mb-6" style={{color:C.tx4}}>
            Order ID: <span className="font-mono font-bold" style={{color:C.g2}}>{orderId}</span>
          </p>

          {/* order items recap */}
          <div className="rounded-2xl overflow-hidden border mb-5 text-left" style={{borderColor:C.border}}>
            <div className="px-4 py-3 text-xs font-bold uppercase tracking-wide"
              style={{background:C.bgDeep,color:C.t2}}>Items Ordered</div>
            {cart.length===0
              ? <p className="px-4 py-3 text-sm" style={{color:C.tx3}}>— order saved —</p>
              : cart.map(i=>(
                <div key={i.id} className="flex items-center gap-3 px-4 py-3 border-t" style={{borderColor:C.border}}>
                  <img src={i.img} alt={i.name} className="w-10 h-10 rounded-lg object-cover"/>
                  <div className="flex-1 text-xs" style={{color:C.tx2}}>
                    <p className="font-semibold">{i.name}</p>
                    <p style={{color:C.tx4}}>Qty: {i.qty}</p>
                  </div>
                  <p className="text-xs font-bold" style={{color:C.g1}}>₹{(i.price*i.qty).toLocaleString()}</p>
                </div>
              ))
            }
          </div>

          {/* delivery details */}
          <div className="rounded-2xl p-4 mb-6 text-left space-y-1.5" style={{background:C.bgDeep,border:`1px solid ${C.border}`}}>
            <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{color:C.t2}}>Delivery Details</p>
            <p className="text-sm flex items-start gap-2" style={{color:C.tx2}}>📦 {form.address}, {form.city} — {form.pin}, {form.state}</p>
            <p className="text-sm flex items-center gap-2" style={{color:C.tx2}}>📞 {form.phone}</p>
            <p className="text-sm flex items-center gap-2" style={{color:C.tx2}}>✉️ {form.email}</p>
            <p className="text-sm font-semibold mt-2 flex items-center gap-2" style={{color:C.g2}}>🚚 Estimated delivery: 3–5 business days</p>
            <p className="text-xs" style={{color:C.tx4}}>Total paid: <strong>₹{total.toLocaleString()}</strong> via {form.payment.toUpperCase()}</p>
          </div>

          <div className="flex gap-3 flex-col sm:flex-row">
            <button onClick={()=>navigate("shop")}
              className="flex-1 py-3.5 rounded-2xl font-bold text-white text-sm hover:opacity-90 transition-opacity"
              style={{background:`linear-gradient(135deg,${C.g1},${C.g2})`}}>
              Continue Shopping 🌿
            </button>
            <button onClick={()=>navigate("home")}
              className="flex-1 py-3.5 rounded-2xl font-semibold text-sm border transition-colors hover:bg-gray-50"
              style={{borderColor:C.border,color:C.tx2}}>
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-20" style={{background:C.bg}}>
      {/* hero */}
      <div className="relative h-52 overflow-hidden">
        <img src={IMG.checkoutHero} alt="" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 flex flex-col items-center justify-center"
          style={{background:"rgba(28,43,26,0.80)"}}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{color:C.t4}}>Secure Checkout</p>
          <h1 className="font-serif text-4xl font-bold text-white mb-1">Almost There</h1>
          <p className="text-sm text-white opacity-70">Your organic order is just a few steps away 🌱</p>
        </div>
      </div>

      {/* step indicator */}
      <div className="max-w-3xl mx-auto px-4 py-7">
        <div className="flex items-center">
          {[["1","Delivery Info"],["2","Payment"],["3","Confirmed"]].map(([n,l],i)=>(
            <div key={n} className="flex items-center flex-1">
              <div className="flex items-center gap-2 flex-shrink-0">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all"
                  style={{background:step>i+1?C.g2:step===i+1?C.g1:C.border,
                          color:step>=i+1?"white":C.tx4,
                          boxShadow:step===i+1?`0 0 0 3px ${C.g4}`:undefined}}>
                  {step>i+1?"✓":n}
                </div>
                <span className="text-xs font-semibold hidden sm:block"
                  style={{color:step===i+1?C.g1:C.tx4}}>{l}</span>
              </div>
              {i<2 && <div className="flex-1 h-0.5 mx-3 rounded-full transition-all"
                style={{background:step>i+1?C.g2:C.border}}/>}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-20 grid lg:grid-cols-5 gap-8">

        {/* ── FORMS col ── */}
        <div className="lg:col-span-3 space-y-5">

          {/* STEP 1 — DELIVERY */}
          {step===1 && (
            <div className="rounded-3xl border overflow-hidden" style={{background:C.bgCard,borderColor:C.border}}>
              {/* form hero banner */}
              <div className="relative h-28 overflow-hidden">
                <img src={IMG.farmDelivery} alt="" className="w-full h-full object-cover"/>
                <div className="absolute inset-0 flex items-center px-8"
                  style={{background:"rgba(28,43,26,0.78)"}}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center text-base font-bold text-white mr-3 flex-shrink-0"
                    style={{background:C.t2}}>1</div>
                  <div>
                    <h2 className="font-serif text-xl font-bold text-white">Delivery Information</h2>
                    <p className="text-xs text-white opacity-60">Where should we deliver your order?</p>
                  </div>
                </div>
              </div>
              <div className="p-7 space-y-4">
                <FI k="name"    label="Full Name"       ph="Your full name"/>
                <div className="flex gap-3">
                  <FI k="email" label="Email Address"   ph="you@example.com"    type="email" half/>
                  <FI k="phone" label="Phone Number"    ph="+91 98765 43210"                  half/>
                </div>
                <FI k="address" label="Street Address"  ph="House no., Street, Locality"/>
                <div className="flex gap-3">
                  <FI k="city"  label="City"            ph="Mysuru"              half/>
                  <FI k="pin"   label="PIN Code"        ph="570017" maxLen={6}   half/>
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1.5 uppercase tracking-wider" style={{color:C.tx3}}>State</label>
                  <select value={form.state} onChange={e=>setF("state",e.target.value)}
                    className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none border-2"
                    style={{background:C.bg,borderColor:C.border,color:C.tx1}}>
                    {["Karnataka","Maharashtra","Tamil Nadu","Delhi","Rajasthan","West Bengal","Gujarat","Kerala","Telangana","Uttarakhand","Goa","Punjab"].map(s=><option key={s}>{s}</option>)}
                  </select>
                </div>

                {/* trust strip */}
                <div className="flex gap-3 pt-1">
                  {[["🔒","Secure"],["🚚","Fast Delivery"],["↩️","Easy Returns"]].map(([ic,t])=>(
                    <div key={t} className="flex-1 flex items-center gap-1.5 text-xs rounded-xl p-2.5"
                      style={{background:C.bgDeep,color:C.tx3}}>
                      <span>{ic}</span><span className="font-medium">{t}</span>
                    </div>
                  ))}
                </div>

                <button onClick={()=>v1()&&setStep(2)}
                  className="w-full mt-2 py-4 rounded-2xl font-bold text-white text-sm shadow-lg transition-all hover:opacity-90 hover:-translate-y-0.5"
                  style={{background:`linear-gradient(135deg,${C.g1},${C.g2})`}}>
                  Continue to Payment →
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 — PAYMENT */}
          {step===2 && (
            <div className="rounded-3xl border overflow-hidden" style={{background:C.bgCard,borderColor:C.border}}>
              {/* banner */}
              <div className="relative h-28 overflow-hidden">
                <img src={IMG.paymentBg} alt="" className="w-full h-full object-cover"/>
                <div className="absolute inset-0 flex items-center px-8"
                  style={{background:"rgba(28,43,26,0.80)"}}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center text-base font-bold text-white mr-3 flex-shrink-0"
                    style={{background:C.t2}}>2</div>
                  <div>
                    <h2 className="font-serif text-xl font-bold text-white">Choose Payment</h2>
                    <p className="text-xs text-white opacity-60">100% secure & encrypted</p>
                  </div>
                  <button onClick={()=>setStep(1)}
                    className="ml-auto text-xs font-semibold px-3 py-1.5 rounded-full text-white border border-white/30 hover:bg-white/10 transition-colors">
                    ← Edit Delivery
                  </button>
                </div>
              </div>

              <div className="p-7">
                {/* delivery recap */}
                <div className="flex items-start gap-3 rounded-2xl p-4 mb-5 border"
                  style={{background:C.bgDeep,borderColor:C.border}}>
                  <img src={IMG.store1} alt="" className="w-12 h-12 rounded-xl object-cover flex-shrink-0"/>
                  <div>
                    <p className="text-xs font-bold mb-0.5" style={{color:C.t2}}>📍 Delivering to:</p>
                    <p className="text-sm font-semibold" style={{color:C.tx1}}>{form.name}</p>
                    <p className="text-xs" style={{color:C.tx3}}>{form.address}, {form.city} – {form.pin}, {form.state}</p>
                    <p className="text-xs mt-0.5" style={{color:C.tx4}}>{form.phone} · {form.email}</p>
                  </div>
                </div>

                {/* payment method tabs */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {[
                    {v:"upi",  label:"UPI",         icon:"📱"},
                    {v:"card", label:"Card",         icon:"💳"},
                    {v:"cod",  label:"Cash on Del.", icon:"🤝"},
                  ].map(m=>(
                    <button key={m.v} onClick={()=>setF("payment",m.v)}
                      className="flex flex-col items-center gap-1.5 py-3.5 rounded-2xl border-2 text-sm font-bold transition-all"
                      style={{
                        background:form.payment===m.v?C.g1:"transparent",
                        borderColor:form.payment===m.v?C.g1:C.border,
                        color:form.payment===m.v?"white":C.tx3,
                        boxShadow:form.payment===m.v?`0 4px 16px ${C.shadow}`:undefined,
                      }}>
                      <span className="text-2xl">{m.icon}</span>
                      <span className="text-xs">{m.label}</span>
                    </button>
                  ))}
                </div>

                {/* UPI */}
                {form.payment==="upi" && (
                  <div className="space-y-4">
                    <div className="rounded-2xl overflow-hidden border" style={{borderColor:C.border}}>
                      <div className="flex items-center gap-4 p-4" style={{background:C.bgDeep}}>
                        {/* real QR code image from unsplash */}
                        <img src={IMG.qrCode} alt="QR" className="w-24 h-24 rounded-xl object-cover border" style={{borderColor:C.border}}/>
                        <div>
                          <p className="font-bold mb-1" style={{color:C.tx1}}>Scan to Pay</p>
                          <p className="text-xs leading-relaxed" style={{color:C.tx3}}>Open any UPI app (GPay, PhonePe, Paytm, BHIM) and scan this QR code to pay ₹{total.toLocaleString()}.</p>
                          <p className="text-xs mt-2 font-semibold" style={{color:C.g2}}>UPI ID: pureroots@okaxis</p>
                        </div>
                      </div>
                      <div className="px-4 py-3 text-xs text-center border-t" style={{borderColor:C.border,color:C.tx4}}>
                        OR enter your UPI ID below
                      </div>
                    </div>
                    <FI k="upi" label="Your UPI ID" ph="yourname@okaxis"/>
                  </div>
                )}

                {/* CARD */}
                {form.payment==="card" && (
                  <div className="space-y-4">
                    {/* live card preview */}
                    <div className="relative rounded-2xl overflow-hidden h-40">
                      <img src={IMG.paymentBg} alt="" className="absolute inset-0 w-full h-full object-cover"/>
                      <div className="absolute inset-0 p-5 flex flex-col justify-between"
                        style={{background:`linear-gradient(135deg,rgba(28,43,26,0.90),rgba(46,93,41,0.85))`}}>
                        <div className="flex justify-between items-start">
                          <p className="text-white/50 text-xs uppercase tracking-widest">Debit / Credit Card</p>
                          <p className="text-white text-xl">💳</p>
                        </div>
                        <div>
                          <p className="text-white font-mono text-lg tracking-[0.2em] mb-3">
                            {form.card.replace(/\D/g,"").replace(/(.{4})/g,"$1 ").trim() || "•••• •••• •••• ••••"}
                          </p>
                          <div className="flex justify-between">
                            <div>
                              <p className="text-white/40 text-xs">CARDHOLDER</p>
                              <p className="text-white text-sm font-semibold">{form.name||"YOUR NAME"}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-white/40 text-xs">EXPIRY</p>
                              <p className="text-white text-sm font-semibold">{form.expiry||"MM/YY"}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <FI k="card"   label="Card Number"    ph="1234 5678 9012 3456" maxLen={19}/>
                    <div className="flex gap-3">
                      <FI k="expiry" label="Expiry (MM/YY)" ph="08/27" maxLen={5} half/>
                      <FI k="cvv"    label="CVV"             ph="•••"  maxLen={3} half/>
                    </div>
                  </div>
                )}

                {/* COD */}
                {form.payment==="cod" && (
                  <div className="rounded-2xl overflow-hidden border" style={{borderColor:C.border}}>
                    <img src={IMG.farmDelivery} alt="" className="w-full h-32 object-cover"/>
                    <div className="p-5 text-center">
                      <div className="text-4xl mb-2">💵</div>
                      <h3 className="font-serif text-lg font-bold mb-2" style={{color:C.tx1}}>Cash on Delivery</h3>
                      <p className="text-sm leading-relaxed" style={{color:C.tx3}}>Pay in cash when your organic order arrives at your doorstep. No additional charge. Our delivery partner will collect the amount.</p>
                      <p className="text-xs mt-3 font-semibold" style={{color:C.g2}}>✓ No online payment required · ✓ Pay on arrival</p>
                    </div>
                  </div>
                )}

                {/* security badge */}
                <div className="flex items-center gap-3 mt-5 p-4 rounded-2xl border"
                  style={{background:"#F0FDF4",borderColor:C.g4}}>
                  <img src={IMG.certsBg} alt="" className="w-10 h-10 rounded-lg object-cover flex-shrink-0"/>
                  <p className="text-xs font-semibold" style={{color:C.g1}}>
                    🔒 All transactions are SSL encrypted and 100% secure. We never store your payment details.
                  </p>
                </div>

                {/* PLACE ORDER */}
                <button onClick={placeOrder}
                  className="w-full mt-6 py-5 rounded-2xl font-bold text-white text-base shadow-2xl transition-all duration-200 hover:opacity-95 hover:-translate-y-0.5 active:translate-y-0"
                  style={{background:`linear-gradient(135deg,${C.t1},${C.t2})`}}>
                  ✅ Place Order · ₹{total.toLocaleString()}
                </button>
                <p className="text-xs text-center mt-2" style={{color:C.tx4}}>
                  By placing your order you agree to our Terms & Privacy Policy
                </p>
              </div>
            </div>
          )}
        </div>

        {/* ── ORDER SUMMARY sidebar ── */}
        <div className="lg:col-span-2">
          <div className="rounded-3xl border overflow-hidden sticky top-24" style={{background:C.bgCard,borderColor:C.border}}>
            {/* sidebar header with image */}
            <div className="relative h-24 overflow-hidden">
              <img src={IMG.hero} alt="" className="w-full h-full object-cover"/>
              <div className="absolute inset-0 flex items-center px-5"
                style={{background:"rgba(28,43,26,0.80)"}}>
                <h3 className="font-serif text-lg font-bold text-white">Order Summary</h3>
                <span className="ml-auto text-xs text-white opacity-60">{cnt} item{cnt!==1?"s":""}</span>
              </div>
            </div>

            {/* items list */}
            <div className="max-h-60 overflow-y-auto divide-y" style={{divideColor:C.border}}>
              {cart.map(item=>(
                <div key={item.id} className="flex items-center gap-3 px-4 py-3">
                  <div className="relative flex-shrink-0">
                    <img src={item.img} alt={item.name}
                      className="w-14 h-14 rounded-xl object-cover border" style={{borderColor:C.border}}/>
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-xs font-bold text-white flex items-center justify-center"
                      style={{background:C.t2}}>{item.qty}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold truncate" style={{color:C.tx1}}>{item.name}</p>
                    <p className="text-xs" style={{color:C.tx4}}>₹{item.price.toLocaleString()} ea.</p>
                  </div>
                  <p className="text-sm font-bold flex-shrink-0" style={{color:C.g1}}>
                    ₹{(item.price*item.qty).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>

            {/* totals */}
            <div className="px-5 py-4 border-t space-y-2 text-sm" style={{borderColor:C.border,color:C.tx3}}>
              <div className="flex justify-between"><span>Subtotal</span><span>₹{sub.toLocaleString()}</span></div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span style={{color:del===0?C.g2:C.tx3}}>{del===0?"Free 🎉":`₹${del}`}</span>
              </div>
              <div className="flex justify-between"><span>Eco Packaging</span><span style={{color:C.g2}}>Free ♻️</span></div>
              <div className="flex justify-between font-bold text-base pt-2 border-t"
                style={{borderColor:C.border,color:C.tx1}}>
                <span>Total</span>
                <span style={{color:C.g1}}>₹{total.toLocaleString()}</span>
              </div>
            </div>

            {/* guarantees with images */}
            <div className="px-5 pb-5 space-y-2">
              {[
                {ic:"🔒",t:"100% Secure Payment",  img:IMG.certsBg},
                {ic:"♻️",t:"Compostable Packaging", img:IMG.sustain1},
                {ic:"🚚",t:"Pan-India Delivery",    img:IMG.farmDelivery},
                {ic:"↩️",t:"7-Day Easy Returns",    img:IMG.sustain2},
              ].map(g=>(
                <div key={g.t} className="flex items-center gap-3 rounded-xl p-2.5 border"
                  style={{background:C.bgDeep,borderColor:C.border}}>
                  <img src={g.img} alt={g.t} className="w-8 h-8 rounded-lg object-cover flex-shrink-0"/>
                  <p className="text-xs font-medium" style={{color:C.tx2}}>{g.ic} {g.t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── NAVBAR ─────────────────────────────────────────────────────────────── */
function Navbar({navigate,page,cart,onCartOpen}) {
  const [open,setOpen]       = useState(false);
  const [scrolled,setScrolled] = useState(false);
  useEffect(()=>{
    const h=()=>setScrolled(window.scrollY>20);
    window.addEventListener("scroll",h);
    return ()=>window.removeEventListener("scroll",h);
  },[]);
  const cnt = cart.reduce((s,i)=>s+i.qty,0);
  const links = [
    {l:"Home",id:"home"},{l:"Shop",id:"shop"},{l:"Our Story",id:"story"},
    {l:"Certifications",id:"certifications"},{l:"Blog",id:"blog"},{l:"Contact",id:"contact"},
  ];
  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled?"shadow-lg":""}`}
      style={{background:scrolled?C.bgCard:"rgba(245,240,232,0.95)",backdropFilter:"blur(18px)",
              borderBottom:`1px solid ${scrolled?C.border:"transparent"}`}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={()=>navigate("home")} className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-xl text-white group-hover:scale-105 transition-transform"
              style={{background:C.g2}}>🌿</div>
            <div className="leading-none">
              <div className="font-serif text-lg font-bold" style={{color:C.g1}}>PureRoots</div>
              <div className="text-xs font-semibold tracking-widest uppercase" style={{color:C.t2}}>Organic Living</div>
            </div>
          </button>
          <div className="hidden md:flex items-center gap-0.5">
            {links.map(l=>(
              <button key={l.id} onClick={()=>navigate(l.id)}
                className="px-3.5 py-2 rounded-xl text-sm transition-all"
                style={{color:page===l.id?C.g1:C.tx3,
                        background:page===l.id?"#EDF4EC":"transparent",
                        fontWeight:page===l.id?"700":"500"}}>
                {l.l}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button onClick={onCartOpen}
              className="relative flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all hover:scale-105"
              style={{background:cnt>0?"#EDF4EC":"transparent"}}>
              <span className="text-xl">🛒</span>
              {cnt>0 && (
                <span className="text-xs font-bold text-white px-1.5 py-0.5 rounded-full"
                  style={{background:C.t2}}>{cnt}</span>
              )}
            </button>
            <button className="md:hidden p-2 rounded-xl text-xl" style={{color:C.tx3}}
              onClick={()=>setOpen(!open)}>{open?"✕":"☰"}</button>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t px-4 py-3 flex flex-col gap-1"
          style={{borderColor:C.border,background:C.bgCard}}>
          {links.map(l=>(
            <button key={l.id} onClick={()=>{navigate(l.id);setOpen(false);}}
              className="text-left px-4 py-3 rounded-xl text-sm font-medium"
              style={{color:page===l.id?C.g1:C.tx3,background:page===l.id?"#EDF4EC":"transparent"}}>
              {l.l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ─── FOOTER ─────────────────────────────────────────────────────────────── */
function Footer({navigate}) {
  const [em,setEm]=useState(""); const [done,setDone]=useState(false);
  return (
    <footer style={{background:C.bgDark}} className="pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl bg-white/10">🌿</div>
              <div>
                <div className="font-serif text-xl font-bold text-white">PureRoots</div>
                <div className="text-xs tracking-widest uppercase" style={{color:C.t3}}>Organic Living</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{color:"rgba(200,216,197,0.70)"}}>
              Rooted in nature. Committed to purity. Every product tells the story of the soil it came from.
            </p>
            <div className="flex gap-3">
              {["📘","📸","🐦","▶️"].map((s,i)=>(
                <button key={i} className="w-9 h-9 rounded-full flex items-center justify-center text-sm bg-white/10 hover:bg-white/20 transition-colors">{s}</button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-xs uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2 text-sm" style={{color:"rgba(200,216,197,0.65)"}}>
              {[["Shop","shop"],["Our Story","story"],["Certifications","certifications"],["Blog","blog"],["Contact","contact"]].map(([l,p])=>(
                <li key={p}><button onClick={()=>navigate(p)} className="hover:text-white transition-colors">{l}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-xs uppercase tracking-wider">Our Stores</h4>
            <ul className="space-y-3 text-sm" style={{color:"rgba(200,216,197,0.65)"}}>
              {STORES.map(s=>(
                <li key={s.city} className="flex items-start gap-2">
                  <span className="mt-0.5">📍</span>
                  <div>
                    <p className="font-semibold text-white/80">{s.city}</p>
                    <p className="text-xs">{s.hours}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-xs uppercase tracking-wider">Newsletter</h4>
            <p className="text-sm mb-3" style={{color:"rgba(200,216,197,0.65)"}}>Organic tips, recipes & exclusive offers.</p>
            {done
              ? <p className="text-sm font-semibold" style={{color:C.g4}}>✅ Subscribed! Welcome aboard.</p>
              : <div className="flex flex-col gap-2">
                  <input value={em} onChange={e=>setEm(e.target.value)} placeholder="your@email.com"
                    className="rounded-xl px-4 py-2.5 text-sm focus:outline-none text-white placeholder-green-700"
                    style={{background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.15)"}}/>
                  <button onClick={()=>em&&setDone(true)}
                    className="py-2.5 rounded-xl font-semibold text-sm text-white hover:opacity-90 transition-opacity"
                    style={{background:C.t2}}>Subscribe 🌱</button>
                </div>
            }
          </div>
        </div>
        <div className="border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs"
          style={{borderColor:"rgba(255,255,255,0.10)",color:"rgba(255,255,255,0.35)"}}>
          <span>© 2026 PureRoots Organic. All rights reserved.</span>
          <div className="flex gap-4"><span>Privacy</span><span>Terms</span><span>Shipping</span></div>
        </div>
      </div>
    </footer>
  );
}

/* ─── PRODUCT CARD ───────────────────────────────────────────────────────── */
function ProductCard({p,navigate,addToCart,onCartOpen,wishlist,toggleWishlist}) {
  const [flash,setFlash]=useState(false);
  const add = ()=>{
    addToCart(p); onCartOpen();
    setFlash(true); setTimeout(()=>setFlash(false),1600);
  };
  return (
    <div className="group rounded-3xl overflow-hidden border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 flex flex-col"
      style={{background:C.bgCard,borderColor:C.border,boxShadow:`0 4px 20px ${C.shadow}`}}>
      <div className="relative overflow-hidden">
        <button onClick={()=>toggleWishlist(p.id)}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-transform hover:scale-110 text-base"
          style={{background:"rgba(253,250,244,0.92)"}}>
          {wishlist.includes(p.id)?"❤️":"🤍"}
        </button>
        <img src={p.img} alt={p.name} onClick={()=>navigate(`product-${p.id}`)}
          className="w-full h-56 object-cover cursor-pointer group-hover:scale-105 transition-transform duration-500"/>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-semibold text-sm leading-snug cursor-pointer hover:underline flex-1"
            style={{color:C.tx1}} onClick={()=>navigate(`product-${p.id}`)}>
            {p.name}
          </h3>
          <span className="font-bold text-sm whitespace-nowrap" style={{color:C.g1}}>₹{p.price.toLocaleString()}</span>
        </div>
        <div className="flex items-center gap-1.5 mb-3"><Stars n={p.rating}/><span className="text-xs" style={{color:C.tx4}}>({p.reviews})</span></div>
        <div className="flex items-center justify-between mt-auto">
          <Chip label={p.badge}/>
          <button onClick={add}
            className="text-xs font-bold px-4 py-2 rounded-xl text-white transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{background:flash?C.g1:C.g2}}>
            {flash?"Added ✓":"+ Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── HOME PAGE ──────────────────────────────────────────────────────────── */
function HomePage({navigate,addToCart,onCartOpen,wishlist,toggleWishlist}) {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img src={IMG.hero} alt="Organic farm" className="absolute inset-0 w-full h-full object-cover scale-105"/>
        <div className="absolute inset-0"
          style={{background:"linear-gradient(110deg,rgba(28,43,26,0.92) 0%,rgba(28,43,26,0.60) 55%,rgba(28,43,26,0.10) 100%)"}}/>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold mb-8 border"
              style={{background:"rgba(255,255,255,0.12)",borderColor:"rgba(255,255,255,0.20)",color:"#C8EFC5"}}>
              <span className="w-2 h-2 rounded-full animate-ping" style={{background:C.t3}}/>
              100% Certified Organic · Farm to Door
            </div>
            <h1 className="font-serif font-bold text-white leading-[0.95] mb-6"
              style={{fontSize:"clamp(3rem,8vw,5.5rem)"}}>
              Pure<br/><span style={{color:C.t4}}>Organic</span><br/>Living
            </h1>
            <p className="text-lg leading-relaxed mb-10 max-w-lg" style={{color:"rgba(255,255,255,0.78)"}}>
              From certified organic farms across India to your home — every product nurtured by nature, verified by science, delivered with care.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={()=>navigate("shop")}
                className="font-bold px-8 py-4 rounded-full text-sm text-white shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl"
                style={{background:`linear-gradient(135deg,${C.t1},${C.t2})`}}>
                Shop Now →
              </button>
              <button onClick={()=>navigate("story")}
                className="font-semibold px-8 py-4 rounded-full text-sm text-white border-2 hover:bg-white/10 transition-all"
                style={{borderColor:"rgba(255,255,255,0.35)"}}>
                Our Farm Story 🌾
              </button>
            </div>
            <div className="flex flex-wrap gap-10 mt-14 pt-8 border-t border-white/15">
              {[["500+","Products"],["50K+","Happy Customers"],["40+","Farm Partners"],["6","Certifications"]].map(([n,l])=>(
                <div key={l}>
                  <div className="font-serif text-2xl font-bold text-white">{n}</div>
                  <div className="text-xs mt-0.5" style={{color:"rgba(255,255,255,0.50)"}}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
          <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
          <span className="text-white/40 text-lg">↓</span>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-20" style={{background:C.bgDeep}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SecHead pre="Browse" title="Shop by Category" sub="Curated collections of certified organic products for your wellbeing."/>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {name:"Organic Food",     desc:"Farm-fresh, nutrient-dense foods from certified organic farms", img:IMG.catFood},
              {name:"Natural Skincare", desc:"Plant-powered beauty rituals free from synthetic chemicals",    img:IMG.catSkin},
              {name:"Supplements",      desc:"Adaptogenic herbs and botanicals rooted in Ayurvedic wisdom",  img:IMG.catSupp},
            ].map(cat=>(
              <button key={cat.name} onClick={()=>navigate("shop")}
                className="relative overflow-hidden rounded-3xl text-left group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
                style={{height:300}}>
                <img src={cat.img} alt={cat.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
                <div className="absolute inset-0" style={{background:"linear-gradient(to top,rgba(28,43,26,0.92) 0%,rgba(28,43,26,0.20) 55%,transparent 100%)"}}/>
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <h3 className="font-serif text-2xl font-bold text-white mb-1">{cat.name}</h3>
                  <p className="text-sm leading-snug mb-3" style={{color:"rgba(255,255,255,0.72)"}}>{cat.desc}</p>
                  <span className="inline-flex items-center gap-2 text-xs font-bold text-white px-4 py-1.5 rounded-full border border-white/30">
                    Explore <span className="group-hover:translate-x-1.5 transition-transform inline-block">→</span>
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-20" style={{background:C.bg}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <SecHead pre="Bestsellers" title="Featured Products" sub="Handpicked favourites loved by our organic community."/>
            <button onClick={()=>navigate("shop")} className="text-sm font-bold hidden sm:flex items-center gap-1 hover:gap-2 transition-all mb-12" style={{color:C.g2}}>View All →</button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {PRODUCTS.filter(p=>p.popular).map(p=>(
              <ProductCard key={p.id} p={p} navigate={navigate} addToCart={addToCart} onCartOpen={onCartOpen} wishlist={wishlist} toggleWishlist={toggleWishlist}/>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US — full bg image */}
      <section className="py-20 relative overflow-hidden">
        <img src={IMG.whyusBg} alt="" className="absolute inset-0 w-full h-full object-cover" style={{filter:"brightness(0.18)"}}/>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SecHead pre="Our Promise" title="Why Choose PureRoots?" sub="Transparency, sustainability and quality are non-negotiable here." light/>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {ic:"🌿",t:"100% Organic",     d:"Every ingredient certified organic, free from synthetic pesticides and GMOs.",     img:IMG.organicBg},
              {ic:"📦",t:"Eco Packaging",    d:"Fully compostable and recyclable packaging made from sustainable materials.",       img:IMG.packagingBg},
              {ic:"🚜",t:"Farm to Home",     d:"Direct from certified farms. Full traceability for every single product.",         img:IMG.farmDelivery},
              {ic:"🏆",t:"6 Certifications", d:"USDA, Eco-Certified, Vegan, Non-GMO, Cruelty-Free & Fair Trade — all verified.",  img:IMG.certsBg},
            ].map(f=>(
              <div key={f.t} className="rounded-3xl overflow-hidden border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                style={{background:"rgba(253,250,244,0.07)",borderColor:"rgba(255,255,255,0.12)",backdropFilter:"blur(8px)"}}>
                <img src={f.img} alt={f.t} className="w-full h-32 object-cover opacity-70"/>
                <div className="p-5 text-center">
                  <div className="text-4xl mb-3">{f.ic}</div>
                  <h3 className="font-semibold mb-2 text-sm text-white">{f.t}</h3>
                  <p className="text-xs leading-relaxed" style={{color:"rgba(255,255,255,0.60)"}}>{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20" style={{background:C.bgDeep}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SecHead pre="Reviews" title="What Our Community Says" sub="Real people. Real results. Real organic living."/>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t,i)=>(
              <div key={i} className="rounded-2xl overflow-hidden border transition-all hover:shadow-xl hover:-translate-y-1"
                style={{background:C.bgCard,borderColor:C.border}}>
                {/* reviewer header with avatar */}
                <div className="relative h-24 overflow-hidden">
                  <img src={[IMG.catFood,IMG.catSkin,IMG.catSupp,IMG.blog3][i]} alt="" className="w-full h-full object-cover opacity-60"/>
                  <div className="absolute inset-0" style={{background:`linear-gradient(to top,${C.bgCard},transparent)`}}/>
                  <img src={t.avatar} alt={t.name}
                    className="absolute bottom-3 left-4 w-12 h-12 rounded-full object-cover border-3 border-white shadow-lg"
                    style={{border:`3px solid white`}}/>
                </div>
                <div className="px-4 pb-5 pt-2">
                  <Stars n={t.rating}/>
                  <p className="text-sm leading-relaxed my-3 italic" style={{color:C.tx2}}>"{t.text}"</p>
                  <div className="pt-3 border-t" style={{borderColor:C.border}}>
                    <p className="font-semibold text-sm" style={{color:C.tx1}}>{t.name}</p>
                    <p className="text-xs flex items-center gap-1 mt-0.5" style={{color:C.tx4}}>📍 {t.loc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORES */}
      <section className="py-20" style={{background:C.bg}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SecHead pre="Visit Us" title="Our Organic Stores" sub="Experience PureRoots in person at our flagship stores across India."/>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STORES.map(s=>(
              <div key={s.city} className="rounded-3xl overflow-hidden border group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                style={{background:C.bgCard,borderColor:C.border}}>
                <div className="relative h-48 overflow-hidden">
                  <img src={s.img} alt={s.city} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                  <div className="absolute inset-0" style={{background:"linear-gradient(to top,rgba(28,43,26,0.85),transparent)"}}/>
                  <h3 className="absolute bottom-4 left-5 font-serif text-xl font-bold text-white">📍 {s.city}</h3>
                </div>
                <div className="p-5 space-y-1.5">
                  <p className="text-sm" style={{color:C.tx2}}>{s.address}</p>
                  <p className="text-sm" style={{color:C.tx3}}>📞 {s.phone}</p>
                  <p className="text-sm" style={{color:C.tx3}}>🕒 {s.hours}</p>
                  <a href={s.map} target="_blank" rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-xl hover:opacity-80 transition-opacity"
                    style={{background:"#EDF4EC",color:C.g1}}>🗺️ Get Directions</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-24 relative overflow-hidden">
        <img src={IMG.newsletter} alt="" className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0" style={{background:"rgba(28,43,26,0.86)"}}/>
        <div className="relative max-w-2xl mx-auto px-4 text-center">
          <SecHead pre="Stay Connected" title="Live Organically. Stay Informed." sub="Seasonal recipes, wellness tips & exclusive offers to your inbox." light/>
          <NLForm/>
        </div>
      </section>
    </div>
  );
}

function NLForm() {
  const [em,setEm]=useState(""); const [done,setDone]=useState(false);
  if(done) return (
    <div className="rounded-2xl p-6 text-white text-center" style={{background:"rgba(255,255,255,0.10)",border:"1px solid rgba(255,255,255,0.20)"}}>
      <div className="text-4xl mb-2">✅</div><p className="font-semibold">Welcome to the PureRoots family!</p>
    </div>
  );
  return (
    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input value={em} onChange={e=>setEm(e.target.value)} placeholder="your@email.com"
        className="flex-1 rounded-full px-6 py-3.5 text-sm focus:outline-none text-white placeholder-green-400"
        style={{background:"rgba(255,255,255,0.13)",border:"1px solid rgba(255,255,255,0.22)"}}/>
      <button onClick={()=>em&&setDone(true)}
        className="font-bold px-7 py-3.5 rounded-full text-sm text-white whitespace-nowrap hover:opacity-90 transition-opacity"
        style={{background:`linear-gradient(135deg,${C.t1},${C.t2})`}}>
        Subscribe 🌱
      </button>
    </div>
  );
}

/* ─── SHOP PAGE ──────────────────────────────────────────────────────────── */
function ShopPage({navigate,addToCart,onCartOpen,wishlist,toggleWishlist}) {
  const [cat,setCat]=useState("All"); const [sort,setSort]=useState("popular");
  const [certs,setCerts]=useState([]); const [pmax,setPmax]=useState(2000); const [pg,setPg]=useState(1);
  const PER=6;
  const tog=c=>setCerts(p=>p.includes(c)?p.filter(x=>x!==c):[...p,c]);
  let filt=PRODUCTS.filter(p=>cat==="All"||p.category===cat).filter(p=>certs.length===0||certs.some(c=>p.cert.includes(c))).filter(p=>p.price<=pmax);
  if(sort==="price_asc")  filt=[...filt].sort((a,b)=>a.price-b.price);
  if(sort==="price_desc") filt=[...filt].sort((a,b)=>b.price-a.price);
  if(sort==="popular")    filt=[...filt].sort((a,b)=>b.reviews-a.reviews);
  const pages=Math.ceil(filt.length/PER);
  const paged=filt.slice((pg-1)*PER,pg*PER);
  return (
    <div className="min-h-screen pt-20" style={{background:C.bg}}>
      <div className="relative h-64 overflow-hidden">
        <img src={IMG.shopHero} alt="" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white"
          style={{background:"rgba(28,43,26,0.72)"}}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{color:C.t4}}>Certified Organic</p>
          <h1 className="font-serif text-5xl font-bold mb-2">Our Organic Shop</h1>
          <p className="opacity-70 text-sm">Sustainable · Traceable · Delivered across India</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 flex-shrink-0">
            <div className="rounded-3xl overflow-hidden border sticky top-20"
              style={{background:C.bgCard,borderColor:C.border}}>
              {/* sidebar header image */}
              <div className="relative h-28 overflow-hidden">
                <img src={IMG.catFood} alt="" className="w-full h-full object-cover"/>
                <div className="absolute inset-0 flex items-center justify-center"
                  style={{background:"rgba(28,43,26,0.75)"}}>
                  <p className="font-serif text-lg font-bold text-white">Filter Products</p>
                </div>
              </div>
              <div className="p-5 space-y-6">
                <div>
                  <h3 className="font-bold mb-3 text-xs uppercase tracking-wider" style={{color:C.tx3}}>Category</h3>
                  {["All","Food","Skincare","Supplements"].map(c=>(
                    <button key={c} onClick={()=>{setCat(c);setPg(1);}}
                      className="w-full text-left px-3 py-2.5 rounded-xl text-sm mb-1 font-medium transition-colors"
                      style={{color:cat===c?C.g1:C.tx3,background:cat===c?"#EDF4EC":"transparent"}}>
                      {c==="All"?"🛒 All":c==="Food"?"🍎 "+c:c==="Skincare"?"🧴 "+c:"💊 "+c}
                    </button>
                  ))}
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-xs uppercase tracking-wider" style={{color:C.tx3}}>Max Price: ₹{pmax}</h3>
                  <input type="range" min={300} max={2000} step={100} value={pmax}
                    onChange={e=>{setPmax(+e.target.value);setPg(1);}} className="w-full" style={{accentColor:C.g2}}/>
                  <div className="flex justify-between text-xs mt-1" style={{color:C.tx4}}><span>₹300</span><span>₹2000</span></div>
                </div>
                <div>
                  <h3 className="font-bold mb-3 text-xs uppercase tracking-wider" style={{color:C.tx3}}>Certifications</h3>
                  {["USDA","Organic","Eco-Certified","Vegan","Non-GMO"].map(c=>(
                    <label key={c} className="flex items-center gap-2.5 cursor-pointer mb-2.5 group">
                      <input type="checkbox" checked={certs.includes(c)} onChange={()=>tog(c)} style={{accentColor:C.g2}}/>
                      <span className="text-sm group-hover:text-green-700 transition-colors" style={{color:C.tx3}}>{c}</span>
                    </label>
                  ))}
                </div>
                <button onClick={()=>{setCat("All");setCerts([]);setPmax(2000);setPg(1);}}
                  className="w-full text-xs py-1 text-red-400 hover:text-red-600 transition-colors">Clear All Filters</button>
              </div>
            </div>
          </aside>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm" style={{color:C.tx3}}><strong style={{color:C.tx1}}>{filt.length}</strong> products found</span>
              <select value={sort} onChange={e=>setSort(e.target.value)}
                className="border rounded-xl px-4 py-2.5 text-sm focus:outline-none cursor-pointer"
                style={{borderColor:C.border,background:C.bgCard,color:C.tx2}}>
                <option value="popular">Most Popular</option>
                <option value="price_asc">Price: Low → High</option>
                <option value="price_desc">Price: High → Low</option>
              </select>
            </div>
            {paged.length>0
              ? <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {paged.map(p=><ProductCard key={p.id} p={p} navigate={navigate} addToCart={addToCart} onCartOpen={onCartOpen} wishlist={wishlist} toggleWishlist={toggleWishlist}/>)}
                </div>
              : <div className="text-center py-24">
                  <img src={IMG.sustain1} alt="" className="w-24 h-24 rounded-full object-cover mx-auto mb-4 opacity-40"/>
                  <p className="font-semibold" style={{color:C.tx2}}>No products match your filters</p>
                  <button onClick={()=>{setCat("All");setCerts([]);setPmax(2000);}} className="mt-3 text-sm hover:underline" style={{color:C.g2}}>Clear filters</button>
                </div>
            }
            {pages>1 && (
              <div className="flex justify-center gap-2 mt-10">
                {Array.from({length:pages},(_,i)=>i+1).map(n=>(
                  <button key={n} onClick={()=>setPg(n)}
                    className="w-9 h-9 rounded-full text-sm font-bold border transition-colors"
                    style={{background:pg===n?C.g2:C.bgCard,color:pg===n?"white":C.tx3,borderColor:C.border}}>{n}</button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── PRODUCT DETAIL ─────────────────────────────────────────────────────── */
function ProductDetailPage({id,navigate,addToCart,onCartOpen,wishlist,toggleWishlist}) {
  const p=PRODUCTS.find(x=>x.id===+id);
  const [qty,setQty]=useState(1); const [tab,setTab]=useState("ing");
  const related=PRODUCTS.filter(x=>x.id!==+id&&x.category===p?.category).slice(0,3);
  if(!p) return <div className="pt-28 text-center py-24"><p style={{color:C.tx2}}>Product not found.</p><button onClick={()=>navigate("shop")} className="mt-4 text-sm hover:underline" style={{color:C.g2}}>← Back</button></div>;
  return (
    <div className="min-h-screen pt-20" style={{background:C.bg}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <button onClick={()=>navigate("shop")} className="text-sm font-semibold mb-8 flex items-center gap-1 hover:gap-2 transition-all" style={{color:C.g2}}>← Back to Shop</button>
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="rounded-3xl overflow-hidden border mb-4 shadow-lg" style={{borderColor:C.border}}>
              <img src={p.img} alt={p.name} className="w-full aspect-square object-cover"/>
            </div>
            {/* thumbnail strip — different angles using real images */}
            <div className="grid grid-cols-4 gap-3">
              {[p.img, IMG.farm1, IMG.sustain1, IMG.certsBg].map((src,i)=>(
                <div key={i} className="rounded-2xl overflow-hidden border cursor-pointer hover:border-green-400 transition-colors" style={{borderColor:C.border}}>
                  <img src={src} alt="" className="w-full aspect-square object-cover"/>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap gap-2 mb-4">{p.cert.map(c=><Chip key={c} label={c}/>)}</div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-3" style={{color:C.tx1}}>{p.name}</h1>
            <div className="flex items-center gap-3 mb-4"><Stars n={p.rating}/><span className="text-sm" style={{color:C.tx4}}>{p.rating} · {p.reviews} reviews</span></div>
            <div className="font-serif text-4xl font-bold mb-6" style={{color:C.g1}}>₹{p.price.toLocaleString()}</div>
            <p className="text-sm leading-relaxed mb-6" style={{color:C.tx2}}>Sourced from certified organic farms. Every batch is third-party tested for purity and potency. No synthetic additives, no fillers — pure, honest quality you can trust.</p>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border rounded-2xl overflow-hidden" style={{borderColor:C.border}}>
                <button onClick={()=>setQty(q=>Math.max(1,q-1))} className="px-4 py-3.5 font-bold text-lg hover:bg-gray-50 transition-colors" style={{color:C.tx2}}>−</button>
                <span className="px-5 py-3.5 font-bold text-base border-x" style={{borderColor:C.border,color:C.tx1}}>{qty}</span>
                <button onClick={()=>setQty(q=>q+1)} className="px-4 py-3.5 font-bold text-lg hover:bg-green-50 transition-colors" style={{color:C.g2}}>+</button>
              </div>
              <button onClick={()=>{addToCart(p,qty);onCartOpen();}}
                className="flex-1 font-bold py-4 rounded-2xl text-white shadow-lg hover:opacity-90 transition-opacity"
                style={{background:`linear-gradient(135deg,${C.g1},${C.g2})`}}>
                Add to Cart 🛒
              </button>
              <button onClick={()=>toggleWishlist(p.id)}
                className="w-12 h-12 border rounded-2xl flex items-center justify-center text-xl hover:bg-red-50 transition-colors"
                style={{borderColor:C.border}}>
                {wishlist.includes(p.id)?"❤️":"🤍"}
              </button>
            </div>
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl border" style={{background:C.bgDeep,borderColor:C.border}}>
              {[["🚚","Free Delivery","Above ₹999"],["🔬","Lab Tested","Every Batch"],["↩️","Easy Returns","7-day"]].map(([ic,t,d])=>(
                <div key={t} className="text-center">
                  <div className="text-2xl mb-1">{ic}</div>
                  <div className="text-xs font-bold" style={{color:C.tx1}}>{t}</div>
                  <div className="text-xs" style={{color:C.tx4}}>{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* tabs */}
        <div className="rounded-3xl overflow-hidden border mb-12" style={{background:C.bgCard,borderColor:C.border}}>
          <div className="flex border-b" style={{borderColor:C.border}}>
            {[["ing","🌿 Ingredients"],["src","🚜 Sourcing Story"],["use","📋 Usage Guide"]].map(([t,l])=>(
              <button key={t} onClick={()=>setTab(t)} className="flex-1 py-4 text-sm font-bold transition-colors"
                style={{color:tab===t?C.g1:C.tx4,borderBottom:tab===t?`2px solid ${C.g2}`:"2px solid transparent",background:tab===t?C.bgDeep:"transparent"}}>{l}</button>
            ))}
          </div>
          <div className="p-8">
            {tab==="ing" && (
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  {["Organic Raw Extract / Cold-Pressed Base","No synthetic additives","No artificial preservatives","No GMO-derived ingredients","Sustainably wildcrafted botanicals"].map((x,i)=>(
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 text-white" style={{background:C.g2}}>{i+1}</span>
                      <span className="text-sm" style={{color:C.tx2}}>{x}</span>
                    </li>
                  ))}
                </ul>
                <img src={IMG.sustain4} alt="ingredients" className="rounded-2xl object-cover w-full h-44"/>
              </div>
            )}
            {tab==="src" && (
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-serif text-xl font-bold mb-4" style={{color:C.tx1}}>From Farm to You 🌾</h3>
                  <p className="text-sm leading-relaxed mb-6" style={{color:C.tx2}}>Every ingredient is traced back to a specific farm, harvest date, and batch number. We partner exclusively with small-scale farmers practicing regenerative agriculture — restoring soil health naturally.</p>
                  <div className="grid grid-cols-3 gap-3">
                    {[["🌱","Organic Seed",IMG.sustain2],["🌾","Harvest",IMG.farm1],["📦","To Your Door",IMG.store1]].map(([ic,st,im])=>(
                      <div key={st} className="rounded-2xl overflow-hidden border" style={{borderColor:C.border}}>
                        <img src={im} alt={st} className="w-full h-16 object-cover"/>
                        <div className="p-2 text-center">
                          <div className="text-lg mb-0.5">{ic}</div>
                          <div className="text-xs font-bold" style={{color:C.g1}}>{st}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <img src={IMG.missionImg} alt="sourcing" className="rounded-2xl object-cover w-full h-52"/>
              </div>
            )}
            {tab==="use" && (
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-4">
                  {["Start small — 1 tsp per day or as directed","Best on an empty stomach in the morning for maximum absorption","Store in a cool, dry place away from direct sunlight","Shake or stir gently before every use","Do not exceed the recommended daily intake"].map((x,i)=>(
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 mt-0.5" style={{background:C.t2}}>{i+1}</span>
                      <span className="text-sm" style={{color:C.tx2}}>{x}</span>
                    </li>
                  ))}
                </ul>
                <img src={IMG.sustain5} alt="usage" className="rounded-2xl object-cover w-full h-44"/>
              </div>
            )}
          </div>
        </div>

        {/* related products */}
        {related.length>0 && (
          <div>
            <h2 className="font-serif text-2xl font-bold mb-6" style={{color:C.tx1}}>You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map(rp=>(
                <ProductCard key={rp.id} p={rp} navigate={navigate} addToCart={addToCart} onCartOpen={onCartOpen} wishlist={wishlist} toggleWishlist={toggleWishlist}/>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── STORY PAGE ─────────────────────────────────────────────────────────── */
function StoryPage() {
  return (
    <div className="min-h-screen pt-20" style={{background:C.bg}}>
      <div className="relative h-80 overflow-hidden">
        <img src={IMG.storyHero} alt="" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white"
          style={{background:"rgba(28,43,26,0.72)"}}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{color:C.t4}}>Est. 2018</p>
          <h1 className="font-serif text-5xl font-bold mb-3">Our Farm Story</h1>
          <p className="opacity-75 max-w-xl text-center px-4">Where every seed of trust is planted with purpose and every harvest honours the earth.</p>
        </div>
      </div>

      {/* MISSION */}
      <section className="py-20" style={{background:C.bgDeep}}>
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{color:C.t2}}>Our Mission</p>
            <h2 className="font-serif text-3xl font-bold mb-5" style={{color:C.tx1}}>Food should be exactly what it claims to be.</h2>
            <p className="text-sm leading-relaxed mb-4" style={{color:C.tx2}}>PureRoots was born in 2018 with three small farms in South India. Today we partner with 40+ certified organic farms committed to regenerative farming, fair wages, and ecological stewardship.</p>
            <p className="text-sm leading-relaxed" style={{color:C.tx3}}>Every product on our platform is traceable from soil to shelf. We don't just sell — we verify, educate, and advocate for a purer, more transparent food system.</p>
            <div className="flex gap-6 mt-8">
              {[["40+","Farm Partners"],["6","Certifications"],["100%","Traceable"]].map(([n,l])=>(
                <div key={l}>
                  <p className="font-serif text-2xl font-bold" style={{color:C.g1}}>{n}</p>
                  <p className="text-xs" style={{color:C.tx4}}>{l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={IMG.missionImg} alt="Mission" className="rounded-3xl w-full h-72 object-cover shadow-2xl"/>
            <img src={IMG.sustain3} alt="" className="absolute -bottom-6 -right-6 w-36 h-36 rounded-2xl object-cover border-4 border-white shadow-xl hidden md:block"/>
          </div>
        </div>
      </section>

      {/* FARMERS */}
      <section className="py-20" style={{background:C.bg}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SecHead pre="Our Partners" title="The Farmers Behind Your Food" sub="Meet the extraordinary people who grow your food with love and integrity."/>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FARMERS.map((f,i)=>(
              <div key={i} className="rounded-3xl overflow-hidden border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                style={{background:C.bgCard,borderColor:C.border}}>
                <div className="relative h-60 overflow-hidden">
                  <img src={f.img} alt={f.name} className="w-full h-full object-cover"/>
                  <div className="absolute inset-0" style={{background:"linear-gradient(to top,rgba(28,43,26,0.88),transparent)"}}/>
                  <div className="absolute bottom-0 left-0 p-5">
                    <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{color:C.t4}}>{f.region} · Since {f.since}</p>
                    <h3 className="font-serif text-lg font-bold text-white">{f.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <Chip label={f.specialty}/>
                  <p className="text-sm leading-relaxed mt-3" style={{color:C.tx2}}>{f.story}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY — images on every card */}
      <section className="py-20" style={{background:C.bgDeep}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SecHead pre="Practices" title="Our Sustainability Commitments" sub="We don't just talk green — every practice is documented, verified, and improving."/>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {ic:"🌍",t:"Carbon-Neutral Shipping",  d:"100% of logistics emissions offset via reforestation in the Western Ghats.",          img:IMG.sustain1},
              {ic:"💧",t:"Water Conservation",        d:"Drip irrigation and rainwater harvesting — 60% less water than conventional farming.",  img:IMG.sustain2},
              {ic:"🪱",t:"Composting & Soil Health",  d:"Vermicomposting and cover cropping to actively rebuild soil biodiversity.",            img:IMG.sustain3},
              {ic:"🐝",t:"Pollinator Protection",     d:"Wildflower corridors on every farm to support bee populations naturally.",             img:IMG.sustain4},
              {ic:"📦",t:"Zero-Plastic Packaging",    d:"All packaging compostable, recycled, or refillable. Virgin plastic eliminated 2023.",  img:IMG.sustain5},
              {ic:"👩‍🌾",t:"Women-Led Farms",           d:"60%+ of our farm partners are women-led cooperatives. Gender equity is core.",       img:IMG.sustain6},
            ].map(s=>(
              <div key={s.t} className="rounded-2xl overflow-hidden border transition-all hover:shadow-xl hover:-translate-y-1"
                style={{background:C.bgCard,borderColor:C.border}}>
                <div className="relative h-40 overflow-hidden">
                  <img src={s.img} alt={s.t} className="w-full h-full object-cover"/>
                  <div className="absolute top-3 left-3 text-3xl"
                    style={{filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.5))"}}>{s.ic}</div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold mb-2 text-sm" style={{color:C.tx1}}>{s.t}</h3>
                  <p className="text-xs leading-relaxed" style={{color:C.tx3}}>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── CERTIFICATIONS PAGE ────────────────────────────────────────────────── */
function CertificationsPage() {
  return (
    <div className="min-h-screen pt-20" style={{background:C.bg}}>
      <div className="relative h-72 overflow-hidden">
        <img src={IMG.certHero} alt="" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white"
          style={{background:"rgba(28,43,26,0.76)"}}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{color:C.t4}}>Verified & Trusted</p>
          <h1 className="font-serif text-5xl font-bold mb-3">Our Certifications</h1>
          <p className="opacity-75 max-w-xl text-center px-4">Every badge is a promise. Here's exactly what each one means and why it matters.</p>
        </div>
      </div>

      {/* intro banner with image */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="rounded-3xl overflow-hidden relative h-40">
          <img src={IMG.organicBg} alt="" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 flex items-center px-10"
            style={{background:"rgba(28,43,26,0.72)"}}>
            <div className="text-white max-w-xl">
              <p className="font-serif text-2xl font-bold mb-1">Why Certifications Matter</p>
              <p className="text-sm opacity-75">Third-party verification is the only way to guarantee that what's on the label matches what's in the product. Every cert below is independently audited, annually renewed, and fully traceable.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTS.map(c=>(
            <div key={c.name} className="rounded-3xl overflow-hidden border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5"
              style={{background:C.bgCard,borderColor:C.border}}>
              <div className="relative h-48 overflow-hidden">
                <img src={c.img} alt={c.name} className="w-full h-full object-cover"/>
                <div className="absolute inset-0 flex flex-col items-center justify-center"
                  style={{background:`rgba(28,43,26,0.65)`}}>
                  <div className="text-6xl mb-2">{c.icon}</div>
                  <h3 className="font-serif text-xl font-bold text-white">{c.name}</h3>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1" style={{background:c.bdr}}/>
              </div>
              <div className="p-6">
                <p className="text-sm leading-relaxed mb-4" style={{color:C.tx2}}>{c.desc}</p>
                <div className="rounded-2xl p-4" style={{background:C.bgDeep,border:`1px solid ${C.border}`}}>
                  <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{color:C.t2}}>Why It Matters</p>
                  <p className="text-sm" style={{color:C.tx2}}>{c.why}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── BLOG PAGE ──────────────────────────────────────────────────────────── */
function BlogPage() {
  const [cat,setCat]=useState("All");
  const cats=["All","Health Tips","Nutrition","Skincare"];
  const posts=cat==="All"?BLOG_POSTS:BLOG_POSTS.filter(b=>b.cat===cat);
  return (
    <div className="min-h-screen pt-20" style={{background:C.bg}}>
      <div className="relative h-72 overflow-hidden">
        <img src={IMG.blogHero} alt="" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white"
          style={{background:"rgba(28,43,26,0.72)"}}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{color:C.t4}}>Knowledge & Wellness</p>
          <h1 className="font-serif text-5xl font-bold mb-3">Wellness Blog</h1>
          <p className="opacity-75">Science-backed wisdom. Rooted in nature.</p>
        </div>
      </div>

      {/* featured article banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4">
        <div className="rounded-3xl overflow-hidden relative h-52 mb-10">
          <img src={IMG.blog1} alt="Featured" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 flex items-end p-8"
            style={{background:"linear-gradient(to top,rgba(28,43,26,0.90),rgba(28,43,26,0.30) 60%,transparent)"}}>
            <div>
              <span className="text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block"
                style={{background:C.t2,color:"white"}}>Featured</span>
              <h2 className="font-serif text-2xl font-bold text-white mb-1">{BLOG_POSTS[0].title}</h2>
              <p className="text-sm text-white opacity-70">{BLOG_POSTS[0].desc}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {cats.map(c=>(
            <button key={c} onClick={()=>setCat(c)}
              className="px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200"
              style={{background:cat===c?C.g1:C.bgCard,color:cat===c?"white":C.tx2,
                      border:`1.5px solid ${cat===c?C.g1:C.border}`,
                      boxShadow:cat===c?`0 4px 16px ${C.shadow}`:"none"}}>
              {c}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(b=>(
            <div key={b.id} className="rounded-3xl overflow-hidden border group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 flex flex-col"
              style={{background:C.bgCard,borderColor:C.border}}>
              <div className="overflow-hidden h-52 relative">
                <img src={b.img} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                <div className="absolute inset-0" style={{background:"linear-gradient(to top,rgba(28,43,26,0.35),transparent)"}}/>
                <span className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full"
                  style={{background:"rgba(253,250,244,0.92)",color:C.g1}}>{b.cat}</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs mb-3" style={{color:C.tx4}}>{b.date}</p>
                <h3 className="font-serif text-lg font-bold mb-3 leading-snug flex-1" style={{color:C.tx1}}>{b.title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{color:C.tx3}}>{b.desc}</p>
                <button className="text-sm font-bold flex items-center gap-1.5 group/btn" style={{color:C.g2}}>
                  Read More <span className="group-hover/btn:translate-x-1.5 transition-transform inline-block">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── CONTACT PAGE ───────────────────────────────────────────────────────── */
function ContactPage() {
  const [form,setForm]=useState({name:"",email:"",phone:"",message:""});
  const [sent,setSent]=useState(false);
  const set=(k,v)=>setForm(f=>({...f,[k]:v}));
  return (
    <div className="min-h-screen pt-20" style={{background:C.bg}}>
      <div className="relative h-72 overflow-hidden">
        <img src={IMG.contactHero} alt="" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white"
          style={{background:"rgba(28,43,26,0.72)"}}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{color:C.t4}}>We'd Love to Hear From You</p>
          <h1 className="font-serif text-5xl font-bold mb-3">Get in Touch</h1>
          <p className="opacity-75">We're here to help. Reach out anytime.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* team photo */}
        <div className="rounded-3xl overflow-hidden relative h-56 mb-16">
          <img src={IMG.contactTeam} alt="Our team" className="w-full h-full object-cover"/>
          <div className="absolute inset-0 flex items-center justify-center"
            style={{background:"rgba(28,43,26,0.65)"}}>
            <div className="text-center text-white">
              <p className="font-serif text-2xl font-bold mb-1">Our team is ready to assist you 🌿</p>
              <p className="text-sm opacity-70">Average response time: under 2 hours</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* form */}
          <div className="rounded-3xl overflow-hidden border" style={{background:C.bgCard,borderColor:C.border}}>
            {/* form header image */}
            <div className="relative h-28 overflow-hidden">
              <img src={IMG.newsletter} alt="" className="w-full h-full object-cover"/>
              <div className="absolute inset-0 flex items-center px-8"
                style={{background:"rgba(28,43,26,0.78)"}}>
                <div>
                  <h2 className="font-serif text-xl font-bold text-white">Send Us a Message</h2>
                  <p className="text-xs text-white opacity-60">We reply within 24 hours</p>
                </div>
              </div>
            </div>
            {sent
              ? <div className="text-center py-16 px-8">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-5"
                    style={{background:"#EDF4EC"}}>✅</div>
                  <h3 className="font-serif text-xl font-bold mb-2" style={{color:C.tx1}}>Message Received!</h3>
                  <p style={{color:C.tx3}}>We'll get back to you within 24 hours.</p>
                  <button onClick={()=>setSent(false)} className="mt-5 text-sm font-semibold hover:underline" style={{color:C.g2}}>Send another message</button>
                </div>
              : <div className="p-7 space-y-4">
                  {[{k:"name",l:"Full Name",p:"Your name",t:"text"},{k:"email",l:"Email Address",p:"you@example.com",t:"email"},{k:"phone",l:"Phone Number",p:"+91 98765 43210",t:"tel"}].map(f=>(
                    <div key={f.k}>
                      <label className="block text-xs font-bold mb-1.5 uppercase tracking-wider" style={{color:C.tx3}}>{f.l}</label>
                      <input type={f.t} value={form[f.k]} onChange={e=>set(f.k,e.target.value)} placeholder={f.p}
                        className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none border-2 transition-colors"
                        style={{background:C.bg,borderColor:form[f.k]?C.g3:C.border,color:C.tx1}}/>
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs font-bold mb-1.5 uppercase tracking-wider" style={{color:C.tx3}}>Message</label>
                    <textarea rows={5} value={form.message} onChange={e=>set("message",e.target.value)} placeholder="How can we help you?"
                      className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none border-2 resize-none transition-colors"
                      style={{background:C.bg,borderColor:form.message?C.g3:C.border,color:C.tx1}}/>
                  </div>
                  <button onClick={()=>form.name&&form.email&&form.message&&setSent(true)}
                    className="w-full font-bold py-4 rounded-2xl text-white shadow-lg hover:opacity-90 transition-opacity"
                    style={{background:`linear-gradient(135deg,${C.g1},${C.g2})`}}>
                    Send Message 🌿
                  </button>
                </div>
            }
          </div>

          {/* contact info */}
          <div className="space-y-5">
            <div className="rounded-3xl overflow-hidden border" style={{background:C.bgCard,borderColor:C.border}}>
              <div className="relative h-24 overflow-hidden">
                <img src={IMG.contactMap} alt="" className="w-full h-full object-cover"/>
                <div className="absolute inset-0 flex items-center px-6" style={{background:"rgba(28,43,26,0.75)"}}>
                  <h3 className="font-serif text-xl font-bold text-white">Contact Information</h3>
                </div>
              </div>
              <div className="p-6">
                {[["📍","Address","12 Organic Lane, Vijayanagar, Mysuru, KA 570017"],["📞","Phone","+91 98765 43210"],["✉️","Email","hello@pureroots.in"],["🕒","Hours","Mon–Sat: 9AM–6PM IST"]].map(([ic,l,v])=>(
                  <div key={l} className="flex gap-4 mb-5 last:mb-0">
                    <span className="text-2xl flex-shrink-0">{ic}</span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide mb-0.5" style={{color:C.t2}}>{l}</p>
                      <p className="text-sm" style={{color:C.tx2}}>{v}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden border" style={{background:C.bgCard,borderColor:C.border}}>
              <img src={IMG.farm2} alt="WhatsApp" className="w-full h-28 object-cover opacity-70"/>
              <div className="p-6 text-center">
                <div className="text-4xl mb-3">💬</div>
                <h4 className="font-serif text-xl font-bold mb-2" style={{color:C.tx1}}>Quick WhatsApp Chat</h4>
                <p className="text-sm mb-5" style={{color:C.tx3}}>Get answers from our team in under 5 minutes.</p>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
                  className="inline-block font-bold text-sm px-8 py-3.5 rounded-full text-white hover:opacity-90 transition-opacity"
                  style={{background:"#25D366"}}>
                  💬 Open WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* stores */}
        <SecHead pre="Locations" title="Find Our Stores" sub="Visit us in person at our flagship organic stores across India."/>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {STORES.map(s=>(
            <div key={s.city} className="rounded-3xl overflow-hidden border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              style={{background:C.bgCard,borderColor:C.border}}>
              <div className="relative h-44 overflow-hidden">
                <img src={s.img} alt={s.city} className="w-full h-full object-cover"/>
                <div className="absolute inset-0" style={{background:"linear-gradient(to top,rgba(28,43,26,0.85),transparent)"}}/>
                <h3 className="absolute bottom-4 left-5 font-serif text-xl font-bold text-white">📍 {s.city}</h3>
              </div>
              <div className="p-5 space-y-1.5">
                <p className="text-sm" style={{color:C.tx2}}>{s.address}</p>
                <p className="text-sm" style={{color:C.tx3}}>📞 {s.phone}</p>
                <p className="text-sm" style={{color:C.tx3}}>🕒 {s.hours}</p>
                <a href={s.map} target="_blank" rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-xl hover:opacity-80 transition-opacity"
                  style={{background:"#EDF4EC",color:C.g1}}>🗺️ Get Directions</a>
              </div>
            </div>
          ))}
        </div>

        {/* map embed */}
        <div className="rounded-3xl overflow-hidden border shadow-2xl" style={{borderColor:C.border}}>
          <div className="flex flex-wrap items-center gap-3 px-6 py-4 border-b"
            style={{background:C.bgCard,borderColor:C.border}}>
            <img src={IMG.store1} alt="" className="w-10 h-10 rounded-xl object-cover"/>
            <div className="flex-1">
              <h3 className="font-semibold" style={{color:C.tx1}}>PureRoots Mysuru — Flagship Store</h3>
              <p className="text-xs" style={{color:C.tx4}}>12 Organic Lane, Vijayanagar, Mysuru, Karnataka 570017</p>
            </div>
            <a href="https://maps.google.com/?q=Mysuru,Karnataka" target="_blank" rel="noopener noreferrer"
              className="text-xs font-bold px-4 py-2 rounded-xl text-white hover:opacity-90"
              style={{background:C.g2}}>Open in Google Maps →</a>
          </div>
          <iframe title="PureRoots Mysuru" loading="lazy"
            src="https://www.openstreetmap.org/export/embed.html?bbox=76.55%2C12.28%2C76.75%2C12.38&layer=mapnik&marker=12.3052%2C76.6552"
            className="w-full" style={{height:400,border:"none",display:"block"}}/>
          <div className="px-6 py-3 text-xs flex justify-between"
            style={{background:C.bgDeep,color:C.tx4,borderTop:`1px solid ${C.border}`}}>
            <span>Map © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer" className="underline">OpenStreetMap</a> contributors</span>
            <span>Zoom in for exact store pin</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── ROOT APP ───────────────────────────────────────────────────────────── */
export default function App() {
  const {page,navigate} = useRoute();
  const [cart,     setCart]     = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product,qty=1) =>
    setCart(prev=>{
      const ex=prev.find(i=>i.id===product.id);
      if(ex) return prev.map(i=>i.id===product.id?{...i,qty:i.qty+qty}:i);
      return [...prev,{...product,qty}];
    });

  const toggleWishlist = id => setWishlist(p=>p.includes(id)?p.filter(x=>x!==id):[...p,id]);

  useEffect(()=>{ window.scrollTo(0,0); setCartOpen(false); },[page]);

  const shared = {navigate,addToCart,onCartOpen:()=>setCartOpen(true),wishlist,toggleWishlist};

  const render = () => {
    if(page==="home")            return <HomePage {...shared}/>;
    if(page==="shop")            return <ShopPage {...shared}/>;
    if(page.startsWith("product-")) return <ProductDetailPage id={page.split("-")[1]} {...shared}/>;
    if(page==="story")           return <StoryPage/>;
    if(page==="certifications")  return <CertificationsPage/>;
    if(page==="blog")            return <BlogPage/>;
    if(page==="contact")         return <ContactPage/>;
    if(page==="checkout")        return <CheckoutPage cart={cart} setCart={setCart} navigate={navigate}/>;
    return <HomePage {...shared}/>;
  };

  return (
    <div className="font-sans antialiased" style={{background:C.bg}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,500&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        .font-serif{font-family:'Playfair Display',Georgia,serif !important}
        .font-sans{font-family:'DM Sans','Poppins',sans-serif}
        *{box-sizing:border-box}
        html{scroll-behavior:smooth}
        ::-webkit-scrollbar{width:5px}
        ::-webkit-scrollbar-track{background:${C.bgDeep}}
        ::-webkit-scrollbar-thumb{background:${C.g2};border-radius:99px}
      `}</style>

      <CartDrawer
        cart={cart} setCart={setCart}
        open={cartOpen} onClose={()=>setCartOpen(false)}
        onCheckout={()=>navigate("checkout")}
      />
      <Navbar navigate={navigate} page={page} cart={cart} onCartOpen={()=>setCartOpen(true)}/>
      <main>{render()}</main>
      {page!=="checkout" && <Footer navigate={navigate}/>}
    </div>
  );
}