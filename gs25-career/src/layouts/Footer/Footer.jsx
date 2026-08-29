const SOCIALS = [
  {
    label: 'Facebook',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M14.5 8.5V6.8c0-.7.5-1.1 1.2-1.1h1.3V3h-2.3C11.8 3 11 5 11 6.6v1.9H9v2.8h2V21h3.5v-9.7h2.3l.3-2.8h-2.6Z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <rect x="4" y="4" width="16" height="16" rx="4.5" />
        <circle cx="12" cy="12" r="3.6" />
        <circle cx="16.7" cy="7.3" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M14.6 3c.3 2.4 1.7 4.2 4 4.6v2.6c-1.4 0-2.7-.4-4-1.2v6.7c0 3.4-2.6 6.1-6.2 6.1S2.2 19.1 2.2 15.7c0-3.3 2.6-6 6-6.1.3 0 .6 0 .9.1v2.8c-.3-.1-.6-.2-.9-.2-1.8 0-3.2 1.5-3.2 3.3s1.4 3.3 3.2 3.3 3.2-1.5 3.2-3.3V3h3.2Z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    icon: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden>
        <path d="M21.6 7.4c-.2-.9-.9-1.6-1.8-1.8C18.1 5.2 12 5.2 12 5.2s-6.1 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 9.1 2 12 2 12s0 2.9.4 4.6c.2.9.9 1.6 1.8 1.8 1.7.4 7.8.4 7.8.4s6.1 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.7.4-4.6.4-4.6s0-2.9-.4-4.6ZM10.2 15.2V8.8L15.6 12l-5.4 3.2Z" />
      </svg>
    ),
  },
]

const NAV_COLUMNS = [
  {
    title: 'Chính sách',
    items: ['Chính sách chung', 'Chính sách dữ liệu cá nhân'],
  },
  {
    title: 'Hàng độc quyền',
    items: ['YOUUS', 'MOOMOOSSI'],
  },
  {
    title: 'Đối tác',
    items: ['Dịch vụ', 'Nhượng quyền', 'Chào hàng', 'Mặt bằng'],
  },
  {
    title: 'Thông tin',
    items: ['Về chúng tôi', 'Liên hệ', 'Tìm cửa hàng', 'Tin tức'],
  },
  {
    title: 'Thành viên',
    items: ['Ứng dụng GS25 VN', 'Quyền lợi thành viên'],
  },
]

function FooterLogo() {
  return (
    <svg
      viewBox="0 0 600 207.432"
      className="h-10 w-auto sm:h-12 lg:h-[52px]"
      role="img"
      aria-label="GS25"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#FFFFFF"
        d="M163.136,177.632V92.548H89.904l5.132,32.143h30.343v31.121
        c-7.071,3.851-13.935,5.611-23.563,5.611c-30.152,0-45.315-23.086-45.315-55.966c0-32.698,14.651-54.979,44.826-54.979
        c18.012,0,33.437,6.582,46.586,14.939l5.84-37.725C139.811,19.824,121.832,14.78,100.3,14.78
        c-53.964,0-87.138,36.68-87.138,90.911c0,53.972,30.66,90.439,86.129,90.439C123.359,196.13,144.895,189.556,163.136,177.632z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#FFFFFF"
        d="M305.547,140.134c0-27.847-15.163-41.018-53.147-54.964
        c-21.807-8.335-26.646-12.645-26.646-21.565c0-8.097,6.345-13.587,19.552-13.587c13.38,0,29.864,5.019,45.556,14.122
        l6.589-36.447c-15.231-7.342-29.889-11.656-52.692-11.656c-33.418,0-59.753,17.942-59.753,51.66
        c0,28.863,15.176,40.289,50.136,53.687c24.586,9.402,29.634,13.982,29.634,23.83c0,10.381-8.609,15.707-21.042,15.707
        c-17.46,0-37.44-6.598-55.452-16.189l-6.323,36.957c17.745,8.095,37.494,13.129,61.014,13.129
        C277.702,194.816,305.547,178.137,305.547,140.134z"
      />
      <path
        fill="#7EE8F0"
        d="M393.9,131.931c20.166-13.259,47.554-30.507,47.554-63.344c0-36.055-30.548-52.474-58.929-52.474
        c-42.341,0-59.414,33.659-61.817,38.912l32.67,15.286c2.037-3.646,11.126-18.187,26.321-18.187
        c9.818,0,19.398,8.062,19.398,20.597c0,10.096-11.374,17.715-25.535,27.366c-22.446,15.297-50.375,34.328-50.375,73.447
        c0,5.129,0.578,10.826,1.819,17.891h116.487V156.39H369.64C369.64,148.712,380.78,140.552,393.9,131.931z"
      />
      <path
        fill="#4483FF"
        d="M532.391,104.478c-9.252,0-16.777-7.524-16.777-16.78c0-9.249,7.525-16.773,16.777-16.773
        s16.78,7.524,16.78,16.773C549.171,96.954,541.643,104.478,532.391,104.478z"
      />
      <path
        fill="#7EE8F0"
        d="M542.61,69.361c-2.246-0.731-6.213-1.812-10.22-1.812c-11.13,0-20.151,9.022-20.151,20.148
        c0,7.568,4.011,14.034,10.34,17.598c2.787,1.571,9.874,3.704,11.868,4.77c8.47,4.529,14.23,13.457,14.23,23.735
        c0,14.858-12.046,26.913-26.909,26.913c-14.095,0-25.656-10.849-26.807-24.648l-36.055,7.839
        c5.877,29.77,32.117,52.226,63.614,52.226c35.814,0,64.85-29.031,64.85-64.85C587.371,102.469,568.603,77.813,542.61,69.361z
        M532.391,101.103c-7.39,0-13.401-6.012-13.401-13.405c0-7.385,6.012-13.398,13.401-13.398c7.394,0,13.404,6.013,13.404,13.398
        C545.795,95.09,539.784,101.103,532.391,101.103z"
      />
      <path
        fill="#7EE8F0"
        d="M470.164,18.523l-7.104,80.951h36.271l4.625-45.998h41.658c24.641,0,33.6-19.98,33.6-34.953H470.164z"
      />
    </svg>
  )
}

function ContactBlock({ label, children }) {
  return (
    <div className="space-y-1">
      <p className="text-[13px] font-bold leading-snug sm:text-sm">{label}</p>
      <div className="text-[13px] font-normal leading-relaxed text-white/95 sm:text-sm">{children}</div>
    </div>
  )
}

function NavColumn({ title, items }) {
  return (
    <div>
      <h3 className="mb-3 text-[13px] font-bold leading-snug sm:mb-4 sm:text-sm">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item}>
            <button
              type="button"
              className="text-left text-[13px] leading-snug text-white/95 transition-opacity hover:opacity-80 sm:text-sm"
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-[#4483FF] text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <FooterLogo />

          <div className="flex flex-wrap items-center gap-3 sm:justify-end">
            <p className="text-[13px] font-medium sm:text-sm">Theo dõi GS25 Vietnam</p>
            <div className="flex items-center gap-2.5">
              {SOCIALS.map((social) => (
                <button
                  key={social.label}
                  type="button"
                  aria-label={social.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white text-white transition-colors hover:bg-white/10"
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:mt-12 lg:grid-cols-[minmax(280px,1.6fr)_repeat(5,minmax(0,1fr))] lg:gap-x-8 lg:gap-y-10">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <h3 className="mb-4 text-[13px] font-bold uppercase tracking-wide sm:text-sm">
              Công ty TNHH GS25 Vietnam
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
              <div className="space-y-5">
                <ContactBlock label="Email liên hệ">
                  <p>hello@gs25.com.vn</p>
                  <p>cskh@gs25.com.vn</p>
                </ContactBlock>
                <ContactBlock label="Hotline CSKH">
                  <p>1900 63 60 78</p>
                </ContactBlock>
              </div>
              <div className="space-y-5">
                <ContactBlock label="Địa chỉ">
                  <p>138-142 Hai Bà Trưng, Phường Sài Gòn, TP. HCM</p>
                </ContactBlock>
                <ContactBlock label="Email nhượng quyền">
                  <p>franchise@gs25.com.vn</p>
                </ContactBlock>
              </div>
            </div>
          </div>

          {NAV_COLUMNS.map((column) => (
            <NavColumn key={column.title} title={column.title} items={column.items} />
          ))}
        </div>

        <div className="mt-10 border-t border-white/80 pt-8 lg:mt-12 lg:pt-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
            <div className="w-full max-w-sm">
              <p className="mb-4 text-[15px] font-semibold sm:text-base">
                Đăng ký nhận thông tin mới từ GS25
              </p>
              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  className="flex h-12 w-full items-center justify-center rounded-md bg-white text-sm font-semibold text-[#4483FF] transition-opacity hover:opacity-90"
                >
                  Nhắn tin ngay
                </button>
                <button
                  type="button"
                  className="flex h-12 w-full items-center justify-center rounded-md bg-gradient-to-r from-[#2AD4C8] to-[#7EE8F0] text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Tải app GS25
                </button>
              </div>
            </div>

            <div className="max-w-xl space-y-2 text-[13px] leading-relaxed sm:text-sm">
              <p className="font-bold">
                Giấy CNĐKKD số 0314658576 cấp lần đầu ngày 03/10/2017 tại Sở kế hoạch đầu tư TP. Hồ
                Chí Minh
              </p>
              <p>GS25 Vietnam - Chuỗi cửa hàng tiện lợi đến từ Hàn Quốc - Mở cửa 24/7.</p>
              <p className="pt-1">Copyright © 2026 by GS25 Vietnam</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
