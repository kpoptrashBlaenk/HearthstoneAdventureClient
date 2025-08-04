import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'

const HsPreset = definePreset(Aura, {
  semantic: {
    var: {
      button: {
        backgroundColor: {
          primary: '#8a2bb8',
          hover: '#7323a0',
          active: '#5a1d7a ',
        },
        borderColor: {
          primary: '#b0b0b0',
          hover: '#999999',
          active: '#7a7a7a ',
        },
        shadow: {
          color: '#ff9c00',
          primary: '0 0 4px 2px {var.button.shadow.color}',
          hover: '0 0 10px 5px {var.button.shadow.color}',
          active: '0 0 16px 8px {var.button.shadow.color}',
        },
      },
    },
  },
  components: {
    button: {
      root: {
        borderRadius: '5px',
        raisedShadow: '{var.button.shadow.primary}',
        primary: {
          background: '{var.button.backgroundColor.primary} !important',
          hoverBackground: '{var.button.backgroundColor.hover} !important',
          activeBackground: '{var.button.backgroundColor.active} !important',
          borderColor: '{var.button.borderColor.primary} !important',
          hoverBorderColor: '{var.button.borderColor.hover} !important',
          activeBorderColor: '{var.button.borderColor.active} !important',
        },
      },
    },
  },
})

export default HsPreset
