'use client'
import { ContactForm } from '@/types'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from './ErrorMessage'
import { toast } from 'react-toastify'
import { ContactIcon } from './icons'

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null)

  const initialValues: ContactForm = {
    user_name: '',
    user_email: '',
    message: ''
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactForm>({ defaultValues: initialValues })

  const handleSendEmail = async (formData: ContactForm) => {
    if (!form.current) return
    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY!
      )
      toast.success('Correo enviado con éxito!')
      reset()
    } catch (error) {
      toast.error('Error al enviar el correo!')
    }
  }
  return (
    <div>
      <div className='mb-10'>
        <h2 className='flex items-center mb-2 text-3xl md:text-4xl font-bold gap-x-3 text-black/80 dark:text-white'>
          <ContactIcon />
          ¿Tenés una idea o proyecto?
        </h2>
        <p className='text-lg text-gray-600 dark:text-gray-400'>Hablemos y lo construimos.</p>
      </div>
      <form className='mx-auto' onSubmit={handleSubmit(handleSendEmail)} ref={form}>
        <div className='mb-5'>
          <label
            htmlFor='name'
            className='block mb-2 text-sm md:text-lg font-medium text-gray-900 dark:text-white'>
            Tu nombre
          </label>
          <input
            type='text'
            id='name'
            placeholder='Como te llamas'
            className='bg-white/5 border border-white/10 text-gray-900 text-sm md:text-lg rounded-xl block w-full p-2.5 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition'
            {...register('user_name', {
              required: 'El Nombre es obligatorio'
            })}
          />
          {errors.user_name && <ErrorMessage>{errors.user_name.message}</ErrorMessage>}
        </div>
        <div className='mb-5'>
          <label
            htmlFor='email'
            className='block mb-2 text-sm md:text-lg font-medium text-gray-900 dark:text-white'>
            Tu email
          </label>
          <input
            type='email'
            id='email'
            {...register('user_email', {
              required: 'El Email es obligatorio',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'E-mail no válido'
              }
            })}
            className='bg-white/5 border border-white/10 text-gray-900 text-sm md:text-lg rounded-xl block w-full p-2.5 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition'
            placeholder='nombre@gmail.com'
          />
          {errors.user_email && <ErrorMessage>{errors.user_email.message}</ErrorMessage>}
        </div>
        <div className='mb-5'>
          <label
            htmlFor='message'
            className='block mb-2 text-sm md:text-lg font-medium text-gray-900 dark:text-white'>
            Tu mesaje
          </label>
          <textarea
            id='message'
            {...register('message', {
              required: 'El mensaje es obligatorio',
              minLength: {
                value: 10,
                message: 'El mensaje debe tener al menos 10 caracteres'
              }
            })}
            className='block p-2.5 w-full text-sm md:text-lg text-gray-900 bg-white/5 rounded-xl border border-white/10 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition resize-none'
            placeholder='Deja un mensaje...'></textarea>
          {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
        </div>
        <div className='flex justify-center '>
          <button
            type='submit'
            className='mt-5 px-8 py-2.5 text-base font-semibold bg-green-500 text-black rounded-xl hover:bg-green-400 transition-all w-full sm:w-auto text-center'>
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}
