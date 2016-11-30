export const data = {
  'group1-perm1': true,
  'group1-perm2': false,
  'group2-perm1': false,
  'group2-perm2': true,
  'perm3': true,
  'perm4': false
}

export const goal = {
  group1: [
    { value: 'group1-perm1', checked: true, 'label': 'perm1'},
    { value: 'group1-perm2', checked: false, 'label': 'perm2'} ],
  group2: [
    { value: 'group2-perm1', checked: false, 'label': 'perm1'},
    { value: 'group2-perm2', checked: true, 'label': 'perm2'} ],
  general: [
    { value: 'perm3', checked: true, 'label': 'perm3'},
    { value: 'perm4', checked: false, 'label': 'perm4'} ]
}
