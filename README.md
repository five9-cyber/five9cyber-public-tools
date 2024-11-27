# Password Strength Meter

This project is a password strength meter built using [zxcvbn password strength estimator](https://github.com/dropbox/zxcvbn). It provides a visual representation of password strength to help users understand the difference between weak and strong passwords or passphrases.

---

## Features

- **Password Strength Analysis**: Estimates password strength based on common patterns and weaknesses.
- **Crack Time Estimation**: Displays time estimates for cracking passwords under different attack scenarios:
  - Online, no rate limiting
  - Online, rate-limited
  - Offline, fast hashing
  - Offline, slow hashing
- **Local Processing**: All computations are performed locally in the browser. No data is transmitted outside of your browser, ensuring user privacy.
- **Educational Tool**: Helps users learn about the characteristics of strong passwords and the importance of good password hygiene.

---

## Usage

### Live Demo

You can access the tool [here](https://tools.five9cyber.com).

### Running Locally

1. Clone this repository:

   ```bash
   git clone https://github.com/five9-cyber/tools
   cd password-strength-meter
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the application in your browser at `http://localhost:5173`.

### Build for Production

To create a production build:

```bash
npm run build
```

Serve the production build locally:

```bash
npm run preview
```

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Add feature"`).
4. Push the branch (`git push origin feature-name`).
5. Open a pull request.

---

## Acknowledgments

- The [MIT License](LICENSE) for enabling open-source collaboration.
- [Daniel Lowe Wheeler](https://www.usenix.org/conference/usenixsecurity16/technical-sessions/presentation/wheeler) for writing the password strength estimation logic in [zxcvbn](https://github.com/dropbox/zxcvbn).
- [Tailwind CSS](https://tailwindcss.com) for providing their utility-first CSS framework.
- [React](https://reactjs.org/) for providing their user interface library.
- [Vite](https://vitejs.dev/) for providing their fast and modern build tool and development server.
- [Anchore](https://anchore.com/) for providing the Syft CLI used to generate the SBOM.

---

## Disclaimer

This tool is not intended for everyday use. It serves as an educational tool to demonstrate password strength concepts. Keep in mind that no password is truly safe; all passwords can eventually be cracked. Strong password hygiene involves making the process of cracking as challenging as possible for attackers.
