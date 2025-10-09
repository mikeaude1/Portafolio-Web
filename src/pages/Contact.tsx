import { useState } from 'react'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      // Simula envío por ahora. Podemos integrar Formspree o EmailJS.
      await new Promise((res) => setTimeout(res, 800))
      setStatus('sent')
      setEmail('')
      setMessage('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="page center">
      <div style={{width:'100%', display:'grid', placeItems:'center'}}>
        <div style={{maxWidth: '520px', width:'100%'}}>
          <h2>Contacto</h2>
          <p>Déjame tu correo y mensaje. Te responderé lo antes posible.</p>
          <form onSubmit={handleSubmit} style={{display:'grid', gap:'0.75rem'}}>
            <label>
              Correo electrónico
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="tu@email.com"
                style={{width:'100%', padding:'0.6rem', borderRadius:'8px', border:'1px solid rgba(255,255,255,0.2)', background:'rgba(255,255,255,0.06)', color:'inherit'}}
              />
            </label>
            <label>
              Mensaje
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Escribe tu mensaje..."
                rows={5}
                style={{width:'100%', padding:'0.6rem', borderRadius:'8px', border:'1px solid rgba(255,255,255,0.2)', background:'rgba(255,255,255,0.06)', color:'inherit'}}
              />
            </label>
            <button type="submit" disabled={status==='sending'}>
              {status==='sending' ? 'Enviando...' : status==='sent' ? '¡Enviado!' : 'Enviar'}
            </button>
            {status==='error' && <small style={{color:'salmon'}}>Ocurrió un error, intenta nuevamente.</small>}
          </form>
        </div>
      </div>
    </section>
  )
}