import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const custom_theme: CustomThemeConfig = {
	name: 'custom_theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': 'var(--color-surface-900)',
		'--theme-font-color-dark': 'var(--color-surface-100)',
		'--theme-rounded-base': '4px',
		'--theme-rounded-container': '4px',
		'--theme-border-base': '2px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '0 0 0',
		// =~= Theme Colors  =~=
		// primary | #37215c
		'--color-primary-50': '225 222 231', // #e1dee7
		'--color-primary-100': '215 211 222', // #d7d3de
		'--color-primary-200': '205 200 214', // #cdc8d6
		'--color-primary-300': '175 166 190', // #afa6be
		'--color-primary-400': '115 100 141', // #73648d
		'--color-primary-500': '55 33 92', // #37215c
		'--color-primary-600': '50 30 83', // #321e53
		'--color-primary-700': '41 25 69', // #291945
		'--color-primary-800': '33 20 55', // #211437
		'--color-primary-900': '27 16 45', // #1b102d
		// secondary | #d2d033
		'--color-secondary-50': '248 248 224', // #f8f8e0
		'--color-secondary-100': '246 246 214', // #f6f6d6
		'--color-secondary-200': '244 243 204', // #f4f3cc
		'--color-secondary-300': '237 236 173', // #edecad
		'--color-secondary-400': '224 222 112', // #e0de70
		'--color-secondary-500': '210 208 51', // #d2d033
		'--color-secondary-600': '189 187 46', // #bdbb2e
		'--color-secondary-700': '158 156 38', // #9e9c26
		'--color-secondary-800': '126 125 31', // #7e7d1f
		'--color-secondary-900': '103 102 25', // #676619
		// tertiary | #D972FF
		'--color-tertiary-50': '249 234 255', // #f9eaff
		'--color-tertiary-100': '247 227 255', // #f7e3ff
		'--color-tertiary-200': '246 220 255', // #f6dcff
		'--color-tertiary-300': '240 199 255', // #f0c7ff
		'--color-tertiary-400': '228 156 255', // #e49cff
		'--color-tertiary-500': '217 114 255', // #D972FF
		'--color-tertiary-600': '195 103 230', // #c367e6
		'--color-tertiary-700': '163 86 191', // #a356bf
		'--color-tertiary-800': '130 68 153', // #824499
		'--color-tertiary-900': '106 56 125', // #6a387d
		// success | #96bb5d
		'--color-success-50': '239 245 231', // #eff5e7
		'--color-success-100': '234 241 223', // #eaf1df
		'--color-success-200': '229 238 215', // #e5eed7
		'--color-success-300': '213 228 190', // #d5e4be
		'--color-success-400': '182 207 142', // #b6cf8e
		'--color-success-500': '150 187 93', // #96bb5d
		'--color-success-600': '135 168 84', // #87a854
		'--color-success-700': '113 140 70', // #718c46
		'--color-success-800': '90 112 56', // #5a7038
		'--color-success-900': '74 92 46', // #4a5c2e
		// warning | #d7d35b
		'--color-warning-50': '249 248 230', // #f9f8e6
		'--color-warning-100': '247 246 222', // #f7f6de
		'--color-warning-200': '245 244 214', // #f5f4d6
		'--color-warning-300': '239 237 189', // #efedbd
		'--color-warning-400': '227 224 140', // #e3e08c
		'--color-warning-500': '215 211 91', // #d7d35b
		'--color-warning-600': '194 190 82', // #c2be52
		'--color-warning-700': '161 158 68', // #a19e44
		'--color-warning-800': '129 127 55', // #817f37
		'--color-warning-900': '105 103 45', // #69672d
		// error | #E07A5F
		'--color-error-50': '250 235 231', // #faebe7
		'--color-error-100': '249 228 223', // #f9e4df
		'--color-error-200': '247 222 215', // #f7ded7
		'--color-error-300': '243 202 191', // #f3cabf
		'--color-error-400': '233 162 143', // #e9a28f
		'--color-error-500': '224 122 95', // #E07A5F
		'--color-error-600': '202 110 86', // #ca6e56
		'--color-error-700': '168 92 71', // #a85c47
		'--color-error-800': '134 73 57', // #864939
		'--color-error-900': '110 60 47', // #6e3c2f
		// surface | #9fd1db
		'--color-surface-50': '241 248 250', // #f1f8fa
		'--color-surface-100': '236 246 248', // #ecf6f8
		'--color-surface-200': '231 244 246', // #e7f4f6
		'--color-surface-300': '217 237 241', // #d9edf1
		'--color-surface-400': '188 223 230', // #bcdfe6
		'--color-surface-500': '159 209 219', // #9fd1db
		'--color-surface-600': '143 188 197', // #8fbcc5
		'--color-surface-700': '119 157 164', // #779da4
		'--color-surface-800': '95 125 131', // #5f7d83
		'--color-surface-900': '78 102 107', // #4e666b
	},
};
