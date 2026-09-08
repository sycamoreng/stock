export function useSignupModal() {
  const isOpen = useState('signup-modal-open', () => false)

  function open() {
    isOpen.value = true
  }

  function close() {
    isOpen.value = false
  }

  return { isOpen, open, close }
}
