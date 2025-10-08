import Image from "next/image";
import Link from "next/link";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="w-full py-4">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/SplashLogo.png"
              alt="TBreak app icon"
              width={40}
              height={40}
              className="mr-2 rounded-[22%]"
            />
            <Image
              src="/TBreakLogo.png"
              alt="TBreak"
              width={100}
              height={30}
              className="object-contain"
              style={{ filter: "brightness(0) saturate(100%) invert(44%) sepia(85%) saturate(1352%) hue-rotate(126deg) brightness(96%) contrast(87%)" }}
            />
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-green-600 transition-colors mb-8"
        >
          <span className="mr-2">←</span>
          Back to Home
        </Link>

        <h1 className="text-5xl font-bold text-center mb-8 text-[#1e1d1b]">TBreak Privacy Policy</h1>

        <p className="text-gray-500 text-center mb-12 italic">Last Updated: October 2025</p>

        <div className="prose prose-lg max-w-none">
          <p className="mb-8 text-gray-700">
            At TBreak, your privacy is our priority. This Privacy Policy explains what information we collect, how we use it, and the steps we take to protect it. By using TBreak, you agree to the practices described below.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-[#1e1d1b]">1. Information We Collect</h2>
          <p className="mb-4 text-gray-700">We collect the following categories of information when you use TBreak:</p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-[#1e1d1b]">1.1 Personal Information</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Account details such as name, email address, and age.</li>
            <li>Health-related information you voluntarily provide, such as cannabis use history, smoking patterns, and sobriety goals.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-[#1e1d1b]">1.2 Payment and Purchase Information</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Subscription and purchase details (e.g., product type, transaction amount, and status).</li>
            <li>These transactions are processed securely by Apple App Store or Google Play.</li>
            <li>TBreak does not store your full payment information; however, we may log anonymized purchase events (via RevenueCat) for analytics and marketing attribution.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-[#1e1d1b]">1.3 Device and Identifier Data</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Device identifiers such as the Identifier for Advertisers (IDFA) when you grant permission via Apple's App Tracking Transparency (ATT) prompt.</li>
            <li>Device type, operating system, app version, and IP address.</li>
            <li>This information may be shared with third-party SDKs (e.g., Facebook SDK, Firebase) for analytics and advertising attribution.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-[#1e1d1b]">1.4 Usage Data</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>App activity, including streaks, feature usage, and session length.</li>
            <li>Interaction data such as taps, app launches, purchases, or trial activations.</li>
            <li>This data helps us improve app performance and personalize your experience.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-[#1e1d1b]">1.5 Community Contributions</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Posts, comments, and text-based interactions you share within TBreak's community features.</li>
            <li>These may be moderated using automated tools (e.g., Perspective API) and reviewed if flagged for violations.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-[#1e1d1b]">2. How We Use Your Information</h2>
          <p className="mb-4 text-gray-700">We use the data collected to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Provide, personalize, and improve TBreak's functionality.</li>
            <li>Support sobriety tracking, habit-building features, and community engagement.</li>
            <li>Process and manage subscriptions and free trials.</li>
            <li>Measure app performance and user engagement.</li>
            <li>Attribute app installs, purchases, and trials to ad campaigns for performance tracking.</li>
            <li>Show relevant TBreak promotional content on third-party platforms (e.g., Facebook and Instagram).</li>
            <li>Send updates, reminders, and push notifications (where enabled).</li>
            <li>Maintain a safe community environment through moderation.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-[#1e1d1b]">3. Data Sharing</h2>
          <p className="mb-4 text-gray-700 font-semibold">We do not sell or rent your personal information.</p>
          <p className="mb-4 text-gray-700">However, data may be shared in the following limited cases:</p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-[#1e1d1b]">3.1 Service Providers & SDK Partners</h3>
          <p className="mb-3 text-gray-700">We work with trusted partners who assist in delivering key app functionality, including:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li><strong>Analytics:</strong> Firebase (Google LLC), Facebook SDK (Meta Platforms, Inc.).</li>
            <li><strong>Subscription Management:</strong> RevenueCat, Superwall.</li>
            <li><strong>Crash Reporting and Performance:</strong> Firebase Crashlytics.</li>
          </ul>
          <p className="mb-6 text-gray-700">These partners may process limited device and interaction data to measure engagement, purchases, and ad campaign effectiveness.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-[#1e1d1b]">3.2 Advertising and Attribution</h3>
          <p className="mb-3 text-gray-700">If you grant tracking permission through ATT, TBreak and its partners (e.g., Facebook SDK) may collect device identifiers and usage events for:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Advertising measurement and optimization.</li>
            <li>Attribution of app installs, purchases, and trials.</li>
          </ul>
          <p className="mb-6 text-gray-700">You can change your tracking preference anytime in your device settings.</p>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-[#1e1d1b]">3.3 Legal Compliance</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>When required by law or to protect the rights, safety, and property of TBreak, its users, or others.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3 text-[#1e1d1b]">3.4 Business Changes</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-[#1e1d1b]">4. Data Security</h2>
          <p className="mb-6 text-gray-700">
            We use industry-standard safeguards, encryption, and Firebase Security Rules to protect your data. However, no system is entirely secure; while we work to protect your information, we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-[#1e1d1b]">5. Your Rights</h2>
          <p className="mb-4 text-gray-700">Depending on your jurisdiction, you may have the right to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li><strong>Access & Portability:</strong> Request a copy of your data.</li>
            <li><strong>Correction:</strong> Update inaccurate account information.</li>
            <li><strong>Deletion:</strong> Delete your account and associated data.</li>
            <li><strong>Restriction:</strong> Limit how we process certain data.</li>
            <li><strong>Withdraw Consent:</strong> Revoke tracking permissions (e.g., through iOS Settings → Privacy → Tracking).</li>
          </ul>
          <p className="mb-6 text-gray-700">
            To exercise these rights, contact us at <a href="mailto:support@tbreakapp.xyz" className="text-[#1db584] hover:underline">support@tbreakapp.xyz</a>.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-[#1e1d1b]">6. Data Retention</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>We retain personal data only as long as necessary to provide the service.</li>
            <li>If you delete your account, we permanently delete your personal information and community content (unless retention is legally required).</li>
            <li>Aggregated, anonymized analytics data may be retained for performance insights.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-[#1e1d1b]">7. Tracking & Analytics Technologies</h2>
          <p className="mb-4 text-gray-700 font-semibold">TBreak does not use web cookies.</p>
          <p className="mb-3 text-gray-700">However, we use mobile SDKs and device identifiers for analytics and advertising purposes, including:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li><strong>Firebase (Google LLC):</strong> App analytics and crash reporting.</li>
            <li><strong>Facebook SDK (Meta Platforms, Inc.):</strong> Advertising attribution and event tracking (e.g., installs, purchases, trials).</li>
            <li><strong>RevenueCat & Superwall:</strong> Subscription event tracking and paywall performance.</li>
          </ul>
          <p className="mb-6 text-gray-700">
            If you grant tracking permission through Apple's App Tracking Transparency prompt, TBreak may share anonymous device identifiers with Meta for ad measurement. You can revoke permission anytime in your device settings.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-[#1e1d1b]">8. Third-Party Links</h2>
          <p className="mb-6 text-gray-700">
            TBreak may contain links to third-party websites or services. We are not responsible for their privacy practices. Please review their policies before providing any information.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-[#1e1d1b]">9. Updates to this Policy</h2>
          <p className="mb-6 text-gray-700">
            We may update this Privacy Policy periodically. If significant changes occur, we will notify you via the app or email. Continued use of TBreak after updates indicates your acceptance of the revised terms.
          </p>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-[#1e1d1b]">📧 Contact Us</h2>
            <p className="text-gray-700">
              For privacy inquiries, contact:<br />
              <a href="mailto:support@tbreakapp.xyz" className="text-[#1db584] hover:underline">support@tbreakapp.xyz</a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex flex-wrap justify-center gap-6 mb-4">
            <Link href="/blog" className="text-gray-600 hover:text-[#1e1d1b] transition-colors text-sm">Blog</Link>
            <a href="/privacy" className="text-gray-600 hover:text-[#1e1d1b] transition-colors text-sm">Privacy</a>
            <a href="/terms" className="text-gray-600 hover:text-[#1e1d1b] transition-colors text-sm">Terms</a>
            <a href="/contact" className="text-gray-600 hover:text-[#1e1d1b] transition-colors text-sm">Contact</a>
            <a href="/faq" className="text-gray-600 hover:text-[#1e1d1b] transition-colors text-sm">FAQ</a>
          </nav>
          <p className="text-center text-gray-500 text-xs">
            © 2025 TBreak. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}