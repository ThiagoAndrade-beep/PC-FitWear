interface WhatsAppProps {
    phone: string,
    message: string
}

export function linkWhatsapp({message, phone}: WhatsAppProps) {
    return `https://wa.me/${phone}?text=${encodeURIComponent(message ?? '')}`; 
}