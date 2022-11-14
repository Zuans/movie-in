import main from './script/main'

if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', async () => main())
}