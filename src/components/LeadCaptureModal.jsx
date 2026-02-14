import { useState, useEffect, useRef } from 'react'
import { useGirlyBioTracker } from '../hooks/useGirlyBioTracker'

function LeadCaptureModal({
  isOpen,
  onClose,
  onSubmit,
  headline = 'Get Free Access',
  description = 'Enter your details below to continue.',
  buttonText = 'Continue',
}) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', countryCode: '+1' })
  const [errors, setErrors] = useState({})
  const [formStartTime, setFormStartTime] = useState(null)
  const tracker = useGirlyBioTracker()
  const modalOpenTime = useRef(null)

  const countries = [
    // English-speaking countries first
    { code: '+1', name: 'United States', flag: '🇺🇸' },
    { code: '+1', name: 'Canada', flag: '🇨🇦' },
    { code: '+44', name: 'United Kingdom', flag: '🇬🇧' },
    { code: '+61', name: 'Australia', flag: '🇦🇺' },
    { code: '+64', name: 'New Zealand', flag: '🇳🇿' },
    { code: '+353', name: 'Ireland', flag: '🇮🇪' },
    { code: '+65', name: 'Singapore', flag: '🇸🇬' },
    { code: '+27', name: 'South Africa', flag: '🇿🇦' },
    // All other countries alphabetically
    { code: '+93', name: 'Afghanistan', flag: '🇦🇫' },
    { code: '+355', name: 'Albania', flag: '🇦🇱' },
    { code: '+213', name: 'Algeria', flag: '🇩🇿' },
    { code: '+1-684', name: 'American Samoa', flag: '🇦🇸' },
    { code: '+376', name: 'Andorra', flag: '🇦🇩' },
    { code: '+244', name: 'Angola', flag: '🇦🇴' },
    { code: '+1-264', name: 'Anguilla', flag: '🇦🇮' },
    { code: '+672', name: 'Antarctica', flag: '🇦🇶' },
    { code: '+1-268', name: 'Antigua and Barbuda', flag: '🇦🇬' },
    { code: '+54', name: 'Argentina', flag: '🇦🇷' },
    { code: '+374', name: 'Armenia', flag: '🇦🇲' },
    { code: '+297', name: 'Aruba', flag: '🇦🇼' },
    { code: '+43', name: 'Austria', flag: '🇦🇹' },
    { code: '+994', name: 'Azerbaijan', flag: '🇦🇿' },
    { code: '+1-242', name: 'Bahamas', flag: '🇧🇸' },
    { code: '+973', name: 'Bahrain', flag: '🇧🇭' },
    { code: '+880', name: 'Bangladesh', flag: '🇧🇩' },
    { code: '+1-246', name: 'Barbados', flag: '🇧🇧' },
    { code: '+375', name: 'Belarus', flag: '🇧🇾' },
    { code: '+32', name: 'Belgium', flag: '🇧🇪' },
    { code: '+501', name: 'Belize', flag: '🇧🇿' },
    { code: '+229', name: 'Benin', flag: '🇧🇯' },
    { code: '+1-441', name: 'Bermuda', flag: '🇧🇲' },
    { code: '+975', name: 'Bhutan', flag: '🇧🇹' },
    { code: '+591', name: 'Bolivia', flag: '🇧🇴' },
    { code: '+387', name: 'Bosnia and Herzegovina', flag: '🇧🇦' },
    { code: '+267', name: 'Botswana', flag: '🇧🇼' },
    { code: '+55', name: 'Brazil', flag: '🇧🇷' },
    { code: '+246', name: 'British Indian Ocean Territory', flag: '🇮🇴' },
    { code: '+1-284', name: 'British Virgin Islands', flag: '🇻🇬' },
    { code: '+673', name: 'Brunei', flag: '🇧🇳' },
    { code: '+359', name: 'Bulgaria', flag: '🇧🇬' },
    { code: '+226', name: 'Burkina Faso', flag: '🇧🇫' },
    { code: '+257', name: 'Burundi', flag: '🇧🇮' },
    { code: '+855', name: 'Cambodia', flag: '🇰🇭' },
    { code: '+237', name: 'Cameroon', flag: '🇨🇲' },
    { code: '+1', name: 'Canada', flag: '🇨🇦' },
    { code: '+238', name: 'Cape Verde', flag: '🇨🇻' },
    { code: '+1-345', name: 'Cayman Islands', flag: '🇰🇾' },
    { code: '+236', name: 'Central African Republic', flag: '🇨🇫' },
    { code: '+235', name: 'Chad', flag: '🇹🇩' },
    { code: '+56', name: 'Chile', flag: '🇨🇱' },
    { code: '+86', name: 'China', flag: '🇨🇳' },
    { code: '+61', name: 'Christmas Island', flag: '🇨🇽' },
    { code: '+61', name: 'Cocos Islands', flag: '🇨🇨' },
    { code: '+57', name: 'Colombia', flag: '🇨🇴' },
    { code: '+269', name: 'Comoros', flag: '🇰🇲' },
    { code: '+682', name: 'Cook Islands', flag: '🇨🇰' },
    { code: '+506', name: 'Costa Rica', flag: '🇨🇷' },
    { code: '+385', name: 'Croatia', flag: '🇭🇷' },
    { code: '+53', name: 'Cuba', flag: '🇨🇺' },
    { code: '+599', name: 'Curacao', flag: '🇨🇼' },
    { code: '+357', name: 'Cyprus', flag: '🇨🇾' },
    { code: '+420', name: 'Czech Republic', flag: '🇨🇿' },
    { code: '+243', name: 'Democratic Republic of the Congo', flag: '🇨🇩' },
    { code: '+45', name: 'Denmark', flag: '🇩🇰' },
    { code: '+253', name: 'Djibouti', flag: '🇩🇯' },
    { code: '+1-767', name: 'Dominica', flag: '🇩🇲' },
    { code: '+1-809', name: 'Dominican Republic', flag: '🇩🇴' },
    { code: '+670', name: 'East Timor', flag: '🇹🇱' },
    { code: '+593', name: 'Ecuador', flag: '🇪🇨' },
    { code: '+20', name: 'Egypt', flag: '🇪🇬' },
    { code: '+503', name: 'El Salvador', flag: '🇸🇻' },
    { code: '+240', name: 'Equatorial Guinea', flag: '🇬🇶' },
    { code: '+291', name: 'Eritrea', flag: '🇪🇷' },
    { code: '+372', name: 'Estonia', flag: '🇪🇪' },
    { code: '+251', name: 'Ethiopia', flag: '🇪🇹' },
    { code: '+500', name: 'Falkland Islands', flag: '🇫🇰' },
    { code: '+298', name: 'Faroe Islands', flag: '🇫🇴' },
    { code: '+679', name: 'Fiji', flag: '🇫🇯' },
    { code: '+358', name: 'Finland', flag: '🇫🇮' },
    { code: '+33', name: 'France', flag: '🇫🇷' },
    { code: '+689', name: 'French Polynesia', flag: '🇵🇫' },
    { code: '+241', name: 'Gabon', flag: '🇬🇦' },
    { code: '+220', name: 'Gambia', flag: '🇬🇲' },
    { code: '+995', name: 'Georgia', flag: '🇬🇪' },
    { code: '+49', name: 'Germany', flag: '🇩🇪' },
    { code: '+233', name: 'Ghana', flag: '🇬🇭' },
    { code: '+350', name: 'Gibraltar', flag: '🇬🇮' },
    { code: '+30', name: 'Greece', flag: '🇬🇷' },
    { code: '+299', name: 'Greenland', flag: '🇬🇱' },
    { code: '+1-473', name: 'Grenada', flag: '🇬🇩' },
    { code: '+1-671', name: 'Guam', flag: '🇬🇺' },
    { code: '+502', name: 'Guatemala', flag: '🇬🇹' },
    { code: '+44-1481', name: 'Guernsey', flag: '🇬🇬' },
    { code: '+224', name: 'Guinea', flag: '🇬🇳' },
    { code: '+245', name: 'Guinea-Bissau', flag: '🇬🇼' },
    { code: '+592', name: 'Guyana', flag: '🇬🇾' },
    { code: '+509', name: 'Haiti', flag: '🇭🇹' },
    { code: '+504', name: 'Honduras', flag: '🇭🇳' },
    { code: '+852', name: 'Hong Kong', flag: '🇭🇰' },
    { code: '+36', name: 'Hungary', flag: '🇭🇺' },
    { code: '+354', name: 'Iceland', flag: '🇮🇸' },
    { code: '+91', name: 'India', flag: '🇮🇳' },
    { code: '+62', name: 'Indonesia', flag: '🇮🇩' },
    { code: '+98', name: 'Iran', flag: '🇮🇷' },
    { code: '+964', name: 'Iraq', flag: '🇮🇶' },
    { code: '+44-1624', name: 'Isle of Man', flag: '🇮🇲' },
    { code: '+972', name: 'Israel', flag: '🇮🇱' },
    { code: '+39', name: 'Italy', flag: '🇮🇹' },
    { code: '+225', name: 'Ivory Coast', flag: '🇨🇮' },
    { code: '+1-876', name: 'Jamaica', flag: '🇯🇲' },
    { code: '+81', name: 'Japan', flag: '🇯🇵' },
    { code: '+44-1534', name: 'Jersey', flag: '🇯🇪' },
    { code: '+962', name: 'Jordan', flag: '🇯🇴' },
    { code: '+7', name: 'Kazakhstan', flag: '🇰🇿' },
    { code: '+254', name: 'Kenya', flag: '🇰🇪' },
    { code: '+686', name: 'Kiribati', flag: '🇰🇮' },
    { code: '+383', name: 'Kosovo', flag: '🇽🇰' },
    { code: '+965', name: 'Kuwait', flag: '🇰🇼' },
    { code: '+996', name: 'Kyrgyzstan', flag: '🇰🇬' },
    { code: '+856', name: 'Laos', flag: '🇱🇦' },
    { code: '+371', name: 'Latvia', flag: '🇱🇻' },
    { code: '+961', name: 'Lebanon', flag: '🇱🇧' },
    { code: '+266', name: 'Lesotho', flag: '🇱🇸' },
    { code: '+231', name: 'Liberia', flag: '🇱🇷' },
    { code: '+218', name: 'Libya', flag: '🇱🇾' },
    { code: '+423', name: 'Liechtenstein', flag: '🇱🇮' },
    { code: '+370', name: 'Lithuania', flag: '🇱🇹' },
    { code: '+352', name: 'Luxembourg', flag: '🇱🇺' },
    { code: '+853', name: 'Macau', flag: '🇲🇴' },
    { code: '+389', name: 'Macedonia', flag: '🇲🇰' },
    { code: '+261', name: 'Madagascar', flag: '🇲🇬' },
    { code: '+265', name: 'Malawi', flag: '🇲🇼' },
    { code: '+60', name: 'Malaysia', flag: '🇲🇾' },
    { code: '+960', name: 'Maldives', flag: '🇲🇻' },
    { code: '+223', name: 'Mali', flag: '🇲🇱' },
    { code: '+356', name: 'Malta', flag: '🇲🇹' },
    { code: '+692', name: 'Marshall Islands', flag: '🇲🇭' },
    { code: '+222', name: 'Mauritania', flag: '🇲🇷' },
    { code: '+230', name: 'Mauritius', flag: '🇲🇺' },
    { code: '+262', name: 'Mayotte', flag: '🇾🇹' },
    { code: '+52', name: 'Mexico', flag: '🇲🇽' },
    { code: '+691', name: 'Micronesia', flag: '🇫🇲' },
    { code: '+373', name: 'Moldova', flag: '🇲🇩' },
    { code: '+377', name: 'Monaco', flag: '🇲🇨' },
    { code: '+976', name: 'Mongolia', flag: '🇲🇳' },
    { code: '+382', name: 'Montenegro', flag: '🇲🇪' },
    { code: '+1-664', name: 'Montserrat', flag: '🇲🇸' },
    { code: '+212', name: 'Morocco', flag: '🇲🇦' },
    { code: '+258', name: 'Mozambique', flag: '🇲🇿' },
    { code: '+95', name: 'Myanmar', flag: '🇲🇲' },
    { code: '+264', name: 'Namibia', flag: '🇳🇦' },
    { code: '+674', name: 'Nauru', flag: '🇳🇷' },
    { code: '+977', name: 'Nepal', flag: '🇳🇵' },
    { code: '+31', name: 'Netherlands', flag: '🇳🇱' },
    { code: '+687', name: 'New Caledonia', flag: '🇳🇨' },
    { code: '+505', name: 'Nicaragua', flag: '🇳🇮' },
    { code: '+227', name: 'Niger', flag: '🇳🇪' },
    { code: '+234', name: 'Nigeria', flag: '🇳🇬' },
    { code: '+683', name: 'Niue', flag: '🇳🇺' },
    { code: '+850', name: 'North Korea', flag: '🇰🇵' },
    { code: '+1-670', name: 'Northern Mariana Islands', flag: '🇲🇵' },
    { code: '+47', name: 'Norway', flag: '🇳🇴' },
    { code: '+968', name: 'Oman', flag: '🇴🇲' },
    { code: '+92', name: 'Pakistan', flag: '🇵🇰' },
    { code: '+680', name: 'Palau', flag: '🇵🇼' },
    { code: '+970', name: 'Palestine', flag: '🇵🇸' },
    { code: '+507', name: 'Panama', flag: '🇵🇦' },
    { code: '+675', name: 'Papua New Guinea', flag: '🇵🇬' },
    { code: '+595', name: 'Paraguay', flag: '🇵🇾' },
    { code: '+51', name: 'Peru', flag: '🇵🇪' },
    { code: '+63', name: 'Philippines', flag: '🇵🇭' },
    { code: '+64', name: 'Pitcairn', flag: '🇵🇳' },
    { code: '+48', name: 'Poland', flag: '🇵🇱' },
    { code: '+351', name: 'Portugal', flag: '🇵🇹' },
    { code: '+1-787', name: 'Puerto Rico', flag: '🇵🇷' },
    { code: '+974', name: 'Qatar', flag: '🇶🇦' },
    { code: '+242', name: 'Republic of the Congo', flag: '🇨🇬' },
    { code: '+262', name: 'Reunion', flag: '🇷🇪' },
    { code: '+40', name: 'Romania', flag: '🇷🇴' },
    { code: '+7', name: 'Russia', flag: '🇷🇺' },
    { code: '+250', name: 'Rwanda', flag: '🇷🇼' },
    { code: '+590', name: 'Saint Barthelemy', flag: '🇧🇱' },
    { code: '+290', name: 'Saint Helena', flag: '🇸🇭' },
    { code: '+1-869', name: 'Saint Kitts and Nevis', flag: '🇰🇳' },
    { code: '+1-758', name: 'Saint Lucia', flag: '🇱🇨' },
    { code: '+590', name: 'Saint Martin', flag: '🇲🇫' },
    { code: '+508', name: 'Saint Pierre and Miquelon', flag: '🇵🇲' },
    { code: '+1-784', name: 'Saint Vincent and the Grenadines', flag: '🇻🇨' },
    { code: '+685', name: 'Samoa', flag: '🇼🇸' },
    { code: '+378', name: 'San Marino', flag: '🇸🇲' },
    { code: '+239', name: 'Sao Tome and Principe', flag: '🇸🇹' },
    { code: '+966', name: 'Saudi Arabia', flag: '🇸🇦' },
    { code: '+221', name: 'Senegal', flag: '🇸🇳' },
    { code: '+381', name: 'Serbia', flag: '🇷🇸' },
    { code: '+248', name: 'Seychelles', flag: '🇸🇨' },
    { code: '+232', name: 'Sierra Leone', flag: '🇸🇱' },
    { code: '+1-721', name: 'Sint Maarten', flag: '🇸🇽' },
    { code: '+421', name: 'Slovakia', flag: '🇸🇰' },
    { code: '+386', name: 'Slovenia', flag: '🇸🇮' },
    { code: '+677', name: 'Solomon Islands', flag: '🇸🇧' },
    { code: '+252', name: 'Somalia', flag: '🇸🇴' },
    { code: '+82', name: 'South Korea', flag: '🇰🇷' },
    { code: '+211', name: 'South Sudan', flag: '🇸🇸' },
    { code: '+34', name: 'Spain', flag: '🇪🇸' },
    { code: '+94', name: 'Sri Lanka', flag: '🇱🇰' },
    { code: '+249', name: 'Sudan', flag: '🇸🇩' },
    { code: '+597', name: 'Suriname', flag: '🇸🇷' },
    { code: '+47', name: 'Svalbard and Jan Mayen', flag: '🇸🇯' },
    { code: '+268', name: 'Swaziland', flag: '🇸🇿' },
    { code: '+46', name: 'Sweden', flag: '🇸🇪' },
    { code: '+41', name: 'Switzerland', flag: '🇨🇭' },
    { code: '+963', name: 'Syria', flag: '🇸🇾' },
    { code: '+886', name: 'Taiwan', flag: '🇹🇼' },
    { code: '+992', name: 'Tajikistan', flag: '🇹🇯' },
    { code: '+255', name: 'Tanzania', flag: '🇹🇿' },
    { code: '+66', name: 'Thailand', flag: '🇹🇭' },
    { code: '+228', name: 'Togo', flag: '🇹🇬' },
    { code: '+690', name: 'Tokelau', flag: '🇹🇰' },
    { code: '+676', name: 'Tonga', flag: '🇹🇴' },
    { code: '+1-868', name: 'Trinidad and Tobago', flag: '🇹🇹' },
    { code: '+216', name: 'Tunisia', flag: '🇹🇳' },
    { code: '+90', name: 'Turkey', flag: '🇹🇷' },
    { code: '+993', name: 'Turkmenistan', flag: '🇹🇲' },
    { code: '+1-649', name: 'Turks and Caicos Islands', flag: '🇹🇨' },
    { code: '+688', name: 'Tuvalu', flag: '🇹🇻' },
    { code: '+1-340', name: 'U.S. Virgin Islands', flag: '🇻🇮' },
    { code: '+256', name: 'Uganda', flag: '🇺🇬' },
    { code: '+380', name: 'Ukraine', flag: '🇺🇦' },
    { code: '+971', name: 'United Arab Emirates', flag: '🇦🇪' },
    { code: '+598', name: 'Uruguay', flag: '🇺🇾' },
    { code: '+998', name: 'Uzbekistan', flag: '🇺🇿' },
    { code: '+678', name: 'Vanuatu', flag: '🇻🇺' },
    { code: '+379', name: 'Vatican', flag: '🇻🇦' },
    { code: '+58', name: 'Venezuela', flag: '🇻🇪' },
    { code: '+84', name: 'Vietnam', flag: '🇻🇳' },
    { code: '+681', name: 'Wallis and Futuna', flag: '🇼🇫' },
    { code: '+212', name: 'Western Sahara', flag: '🇪🇭' },
    { code: '+967', name: 'Yemen', flag: '🇾🇪' },
    { code: '+260', name: 'Zambia', flag: '🇿🇲' },
    { code: '+263', name: 'Zimbabwe', flag: '🇿🇼' },
  ]

  // Track modal open
  useEffect(() => {
    if (isOpen && tracker) {
      modalOpenTime.current = Date.now()
      tracker.trackModalOpen('lead-capture-modal', 'cta-button')
      tracker.trackFormLoad('lead-capture-form', ['name', 'email', 'phone'])
    }
  }, [isOpen, tracker])

  if (!isOpen) return null

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email'
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validate()) {
      // Track validation errors
      const errorFields = Object.keys(errors)
      const errorMessages = Object.values(errors)
      tracker?.trackFormError('lead-capture-form', errorFields, errorMessages)
      return
    }

    // Track form submission
    const timeToSubmit = formStartTime ? (Date.now() - formStartTime) / 1000 : 0
    tracker?.trackFormSubmit('lead-capture-form', ['name', 'email', 'phone'], timeToSubmit)

    sessionStorage.setItem('tft_lead', JSON.stringify(formData))
    if (onSubmit) onSubmit(formData)
  }

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))

    // Track form start on first interaction
    if (!formStartTime) {
      setFormStartTime(Date.now())
      tracker?.trackFormStart('lead-capture-form', field)
    }
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  const handleClose = () => {
    // Track modal close
    if (modalOpenTime.current && tracker) {
      const timeOpen = (Date.now() - modalOpenTime.current) / 1000
      tracker.trackModalClose('lead-capture-modal', timeOpen)
    }
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        animation: 'modalFadeIn 0.3s ease forwards',
      }}
    >
      <div
        className="relative w-full max-w-[460px] bg-[#000c23] border border-[rgba(238,238,238,0.1)] rounded-[15px] p-6 sm:p-8"
        style={{ animation: 'modalScaleIn 0.3s ease forwards' }}
      >
        {/* Heading */}
        <h2 className="font-['Noto_Sans'] font-semibold text-xl sm:text-2xl text-white mb-2">
          {headline}
        </h2>
        <p className="font-['Commissioner'] font-medium text-sm sm:text-base text-white/60 mb-6">
          {description}
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Your first name"
              value={formData.name}
              onChange={handleChange('name')}
              className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(238,238,238,0.15)] rounded-[10px] px-4 py-3 font-['Commissioner'] text-base text-white placeholder-white/40 outline-none focus:border-[#1b6bfb] transition-colors"
            />
            {errors.name && (
              <p className="font-['Commissioner'] text-xs text-red-400 mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email to Receive Invite"
              value={formData.email}
              onChange={handleChange('email')}
              className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(238,238,238,0.15)] rounded-[10px] px-4 py-3 font-['Commissioner'] text-base text-white placeholder-white/40 outline-none focus:border-[#1b6bfb] transition-colors"
            />
            {errors.email && (
              <p className="font-['Commissioner'] text-xs text-red-400 mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <div className="flex gap-2">
              {/* Country Code Dropdown */}
              <select
                value={formData.countryCode}
                onChange={(e) => setFormData(prev => ({ ...prev, countryCode: e.target.value }))}
                className="bg-[rgba(255,255,255,0.05)] border border-[rgba(238,238,238,0.15)] rounded-[10px] px-2 py-3 font-['Commissioner'] text-sm text-white outline-none focus:border-[#1b6bfb] transition-colors cursor-pointer"
                style={{
                  width: '85px',
                  backgroundPosition: 'right 0.3rem center'
                }}
              >
                {countries.map((country, i) => (
                  <option key={i} value={country.code} className="bg-[#000c23]">
                    {country.flag} {country.code}
                  </option>
                ))}
              </select>

              {/* Phone Number Input */}
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange('phone')}
                className="flex-1 bg-[rgba(255,255,255,0.05)] border border-[rgba(238,238,238,0.15)] rounded-[10px] px-4 py-3 font-['Commissioner'] text-base text-white placeholder-white/40 outline-none focus:border-[#1b6bfb] transition-colors"
              />
            </div>
            {errors.phone && (
              <p className="font-['Commissioner'] text-xs text-red-400 mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            style={{
              background: 'linear-gradient(#2b7fff 0%, #1b6bfb 100%)',
              border: '1px solid rgba(255, 255, 255, 0.35)',
              borderRadius: '99px',
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              padding: '11px 40px',
              width: '100%',
              textDecoration: 'none',
              transition: 'box-shadow 0.2s',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 0 30px rgba(27, 107, 251, 0.4), 0 0 0 4px rgba(27, 107, 251, 0.15), 0 8px 25px rgba(27, 107, 251, 0.45)',
              cursor: 'pointer',
              marginTop: '8px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 40px rgba(27, 107, 251, 0.5), 0 0 0 6px rgba(27, 107, 251, 0.2), 0 10px 30px rgba(27, 107, 251, 0.5)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 30px rgba(27, 107, 251, 0.4), 0 0 0 4px rgba(27, 107, 251, 0.15), 0 8px 25px rgba(27, 107, 251, 0.45)'
            }}
          >
            <span style={{
              color: '#fff',
              letterSpacing: '-0.18px',
              zIndex: 2,
              fontFamily: 'Commissioner, sans-serif',
              fontSize: '18px',
              fontWeight: 600,
              position: 'relative'
            }}>{buttonText}</span>
            <svg width="7" height="14" viewBox="0 0 7 14" fill="none" style={{ zIndex: 2, flexShrink: 0, position: 'relative' }}>
              <path d="M1 1L6 7L1 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Trust text */}
          <div className="text-center mt-3 space-y-1">
            <p className="font-['Inter'] text-xs text-white/40">
              We respect your privacy. No spam. Unsubscribe anytime.
            </p>
            <p className="font-['Inter'] text-xs text-white/50">
              Join 4,200+ students already inside
            </p>
          </div>
        </form>
      </div>

      {/* Inline keyframe styles */}
      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalScaleIn {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  )
}

export default LeadCaptureModal
