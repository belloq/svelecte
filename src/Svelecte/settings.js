const settings = {

  /** ************************************ sub-component props */
  /* HTML related */
  name: null, // if name is defined, <select> element is created as well
  
  required: false,
  multiple: false,
  collapseSelection: false, // enable collapsible multiple selection
  searchable: true,
  disabled: false,
  creatable: false,
  creatablePrefix: '*',
  clearable: false,
  selectOnTab: false,
  placeholder: 'Select',
  valueField: null,
  labelField: null,
  max: 0,
  delimiter: ',',
  sortRemoteResults: true,
  virtualList: false,
  vlItemSize: null,
  vlHeight: null,
  i18n: {
    empty: 'No options',
    nomatch: 'No matching options',    
    max: num => `Maximum items ${num} selected`,
    fetchBefore: 'Type to search',
    fetchEmpty: 'No data related to your search',
    collapsedSelection: count => `${count} selected`
  },
  collapseSelectionFn: function(selectionCount, selection) {
    return settings.i18n.collapsedSelection(selectionCount);
  }
}

export default settings;
