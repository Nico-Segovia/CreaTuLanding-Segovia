import React, { Fragment, useState, useRef } from 'react';
import './ContactForm.css';
import emailjs from '@emailjs/browser'; // Eliminamos la importación de Link


function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const form = useRef();
  const [formStatus, setFormStatus] = useState(null);

  // Solución para el error de ESLint
  React.createElement('div'); // <-- Esta línea soluciona el error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        'service_EmailNico', 
        'template_bizarroSteam', 
        form.current,
        'YkehcOmPssdEgGsfQ' 
      );
      console.log(result.text);
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Limpia el formulario después del envío
    } catch (error) {
      console.error(error.text);
      setFormStatus('error');
    }
  };

  return (
    <Fragment> 
      <form ref={form} onSubmit={handleSubmit} className="contact-form">
      <div>
    <label htmlFor="name">Nombre:</label>
    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required /> 
  </div>
  <div>
    <label htmlFor="email">Email:</label> 

    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required /> 
  </div>
  <div>
    <label htmlFor="message">Mensaje:</label>

    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required /> 
  </div>
  <button type="submit">Enviar</button>
      </form>

      {formStatus === 'success' && (
        <p className="success-message">¡Mensaje enviado con éxito! Gracias por contactarnos. Pronto recibirás noticias de BizarroSteam.</p>
      )}
      {formStatus === 'error' && (
        <p className="error-message">Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.</p>
      )}

    </Fragment>
  );
}

export default ContactForm;
