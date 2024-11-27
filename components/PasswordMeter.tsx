import clsx from "clsx";
import zxcvbn from "zxcvbn";
import { useState } from "react";

function formatLargeNumber(number: number) {
  if (number < 1e6) {
    return number.toLocaleString();
  }

  const units = [
    { value: 1e33, suffix: "undecillion" },
    { value: 1e30, suffix: "decillion" },
    { value: 1e27, suffix: "nonillion" },
    { value: 1e27, suffix: "octillion" },
    { value: 1e24, suffix: "septillion" },
    { value: 1e21, suffix: "sextillion" },
    { value: 1e18, suffix: "quintillion" },
    { value: 1e15, suffix: "quadrillion" },
    { value: 1e12, suffix: "trillion" },
    { value: 1e9, suffix: "billion" },
    { value: 1e6, suffix: "million" },
  ];

  for (const unit of units) {
    if (number >= unit.value) {
      const formatted = (number / unit.value).toFixed();
      return `${formatted} ${unit.suffix}`;
    }
  }

  return number.toString();
}

function bgTintColor(score: number) {
  switch (score) {
    case 0:
      return "bg-red-200";
    case 1:
      return "bg-red-200";
    case 2:
      return "bg-red-200";
    case 3:
      return "bg-orange-100";
    case 4:
      return "bg-emerald-100";
  }
}

export function PasswordMeter() {
  const [password, setPassword] = useState("");
  const {
    score,
    guesses,
    crack_times_display: {
      online_no_throttling_10_per_second,
      online_throttling_100_per_hour,
      offline_slow_hashing_1e4_per_second,
      offline_fast_hashing_1e10_per_second,
    },
  } = zxcvbn(password);
  const isPasswordEmpty = password.length < 1;
  const bgTint = isPasswordEmpty ? "bg-white" : bgTintColor(score);
  const nGuesses = formatLargeNumber(guesses);

  return (
    <div className="flex flex-grow items-center w-4/5 sm:w-1/2 m-auto">
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <label
            htmlFor="password"
            className="text-white block text-sm/6 font-medium"
          >
            Password Strength Meter
          </label>
          <div className="mb-6 mt-4">
            <input
              onChange={(e) => setPassword(e.currentTarget.value)}
              id="password"
              name="password"
              placeholder="enter a password or passhphrase"
              className="focus:ring-ocean-800 text-ocean-600 placeholder:text-ocean-700 ring-ocean-base/20 block w-full rounded-lg border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm/6"
            />
          </div>
        </form>
        <div className="ring-ocean-base/20 rounded-lg bg-white ring-1">
          <div className="mx-auto max-w-7xl rounded-lg">
            <div className="mx-auto max-w-2xl rounded-lg lg:max-w-none">
              <dl className="bg-ocean-base/20 mx-auto grid grid-cols-1 gap-px rounded-lg sm:grid-cols-2">
                <div
                  className={clsx(
                    bgTint,
                    "flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 rounded-t-lg px-4 py-10 sm:rounded-tl-lg sm:rounded-tr-none sm:px-6 xl:px-8"
                  )}
                >
                  <dt className="text-ocean-500 text-sm/6 font-medium">
                    Password strength
                  </dt>
                  <dd className="text-ocean-600 w-full flex-none text-3xl/10 font-medium tracking-tight">
                    {isPasswordEmpty ? "--" : `${score}/4`}
                  </dd>
                </div>
                <div
                  className={clsx(
                    bgTint,
                    "flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 px-4 py-10 sm:rounded-tr-lg sm:px-6 xl:px-8"
                  )}
                >
                  <dt className="text-ocean-500 text-sm/6 font-medium">
                    Estimated guesses needed
                  </dt>
                  <dd className="text-ocean-600 w-full flex-none text-3xl/10 font-medium tracking-tight">
                    {isPasswordEmpty ? "--" : nGuesses}
                  </dd>
                </div>
                <div
                  className={clsx(
                    bgTint,
                    "flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 px-4 py-10 sm:px-6 xl:px-8"
                  )}
                >
                  <dt className="text-ocean-500 text-sm/6 font-medium">
                    Crack time online, no rate limit
                  </dt>
                  <dd className="text-ocean-600 w-full flex-none text-3xl/10 font-medium tracking-tight">
                    {isPasswordEmpty
                      ? "--"
                      : online_no_throttling_10_per_second}
                  </dd>
                </div>
                <div
                  className={clsx(
                    bgTint,
                    "flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 px-4 py-10 sm:px-6 xl:px-8"
                  )}
                >
                  <dt className="text-ocean-500 text-sm/6 font-medium">
                    Crack time online, rate limited
                  </dt>
                  <dd className="text-ocean-600 w-full flex-none text-3xl/10 font-medium tracking-tight">
                    {isPasswordEmpty ? "--" : online_throttling_100_per_hour}
                  </dd>
                </div>
                <div
                  className={clsx(
                    bgTint,
                    "flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 px-4 py-10 sm:rounded-bl-lg sm:px-6 xl:px-8"
                  )}
                >
                  <dt className="text-ocean-500 text-sm/6 font-medium">
                    Crack time offline, slow hashing
                  </dt>
                  <dd className="text-ocean-600 w-full flex-none text-3xl/10 font-medium tracking-tight">
                    {isPasswordEmpty
                      ? "--"
                      : offline_slow_hashing_1e4_per_second}
                  </dd>
                </div>
                <div
                  className={clsx(
                    bgTint,
                    "flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 rounded-br-lg px-4 py-10 sm:px-6 xl:px-8"
                  )}
                >
                  <dt className="text-ocean-500 text-sm/6 font-medium">
                    Crack time offline, fast hashing
                  </dt>
                  <dd className="text-ocean-600 w-full flex-none text-3xl/10 font-medium tracking-tight">
                    {isPasswordEmpty
                      ? "--"
                      : offline_fast_hashing_1e10_per_second}
                  </dd>
                </div>
              </dl>
              <div className="border-ocean-base/20 rounded-b-lg border-y p-4">
                <p className="text-sm text-gray-500">
                  Crack time online: estimated time to crack on the web.
                </p>
                <p className="text-sm text-gray-500">
                  Crack time offline: estimated time to crack with physical
                  access to hashed password.
                </p>
                <p className="text-sm text-gray-500">
                  Rate limiting: slows attackers by limiting attempts per hour.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white mt-10 w-4/5">
          <p>
            This password strength meter is designed to provide a visual
            representation of password strength to help users understand the
            difference between weak and strong passwords and passphrases. It is
            not intended for every day use. Keep in mind that no password is
            truly safe and all passwords can eventually be cracked. Strong
            password hygiene is a matter of making that exercise as difficult as
            possible for attackers.
          </p>
          <br />
          <p>
            This tool runs locally in your browser. No password data is
            transmitted.
          </p>
        </div>
      </div>
    </div>
  );
}
