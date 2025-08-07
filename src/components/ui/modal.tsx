import React from "react";

interface ModalProps { onClose: () => void; children: React.ReactNode; }

export const Modal: React.FC<ModalProps> = ({ onClose, children }) => ( <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"> <div className="bg-white rounded-lg shadow-lg p-4 relative min-w-[300px]"> <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose} aria-label="Close" > × </button> {children} </div> </div> );