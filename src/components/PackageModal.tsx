import React from "react";
import { FaTimes, FaMapMarkedAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { Package } from "@/data/mockData";

interface PackageModalProps {
  selectedPackage: Package | null;
  onClose: () => void;
}

export default function PackageModal({ selectedPackage, onClose }: PackageModalProps) {
  if (!selectedPackage) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 border border-slate-100 relative animate-scale-in shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-650 p-1.5 rounded-full"
        >
          <FaTimes />
        </button>
        <div>
          <span className="text-[10px] text-primary font-bold uppercase tracking-wider block">{selectedPackage.budget} tour</span>
          <h3 className="text-lg font-black text-slate-900 mt-1">{selectedPackage.name}</h3>
          <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
            <FaMapMarkedAlt className="text-xs text-slate-400" /> {selectedPackage.destination}
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="font-bold text-xs text-slate-800">Overview</h4>
          <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-150">
            {selectedPackage.overview}
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="font-bold text-xs text-slate-800">Inclusions</h4>
          <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
            {selectedPackage.inclusions.map((inc, i) => (
              <li key={i}>{inc}</li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div>
            <span className="text-[10px] text-slate-400 block">Price Starting At</span>
            <span className="text-lg font-bold text-slate-800">{selectedPackage.price}</span>
          </div>
          <div className="flex gap-2">
            <a
              href="tel:+15551239988"
              className="bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 text-xs font-bold px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5"
            >
              <FaPhoneAlt />
              <span>Call Us</span>
            </a>
            <a
              href={`https://wa.me/15551239988?text=I%20am%20interested%20in%2520booking%20the%20${encodeURIComponent(selectedPackage.name)}`}
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 shadow-md shadow-emerald-500/10"
            >
              <FaWhatsapp />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
