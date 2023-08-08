const email = ref('')

export default () => (
  <div>
    <span class="text-h4">Login</span>
    <q-input $={email} label="Email" />
  </div>
)
