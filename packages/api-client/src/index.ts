export class ApiClient {
  constructor(private readonly baseUrl: string, private readonly token?: string) {}
  private headers() {
    return {
      'Content-Type': 'application/json',
      ...(this.token ? { Authorization: `Bearer ${this.token}` } : {}),
    };
  }

  async login(email: string, password: string) {
    const res = await fetch(`${this.baseUrl}/v1/auth/login/password`, { method: 'POST', headers: this.headers(), body: JSON.stringify({ email, password }) });
    if (!res.ok) throw new Error('Login failed');
    return res.json();
  }
}
