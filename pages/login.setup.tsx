const email = ref('')

export default () => (
  <div>
    <span class="text-h4">Login</span>
    <q-input v-model={email} label="Email" />
  </div>
)
