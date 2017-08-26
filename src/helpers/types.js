export const typeMapping = [
  { value: 'tent', icon: require('assets/icons/tent'), label: 'Tente' },
  {
    value: 'sleeping-bag',
    icon: require('assets/icons/sleeping-bag'),
    label: 'Duvet',
  },
  {
    value: 'mattress',
    icon: require('assets/icons/mattress'),
    label: 'Matelas',
  },
  { value: 'chair', icon: require('assets/icons/chair'), label: 'Chaise' },
]

export const qualityMapping = [
  {
    value: 'recycle',
    icon: require('assets/icons/recycle'),
    label: 'A recycler',
  },
  { value: 'bad', icon: require('assets/icons/sadface'), label: 'Usé' },
  { value: 'used', icon: require('assets/icons/used'), label: 'Passable' },
  { value: 'good', icon: require('assets/icons/check'), label: 'Bon' },
]

export const getTypeLabel = (type = 'tent') =>
  typeMapping.find(t => t.value === type).label

export const getTypeIcon = (type = 'tent') =>
  typeMapping.find(t => t.value === type).icon

export const getQualityLabel = (type = 'tent') =>
  qualityMapping.find(q => q.value === type).label

export const getQualityIcon = (type = 'tent') =>
  qualityMapping.find(q => q.value === type).icon
