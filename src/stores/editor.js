import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useEditorStore = defineStore('editor', () => {
  const showEditor = ref(true)
  const customStyles = ref({
    mainColor: {
      value: '#5c5c5c',
      selector: null,
    },
    textColor: {
      value: '#ffffff',
      selector: null,
    },
    jumbotronBackgroundColor: {
      value: '#5c5c5c',
      selector: 'header .jumbotron',
    },
    jumbotronTextColor: {
      value: '#ffffff',
      selector: 'header .jumbotron',
    },
  })

  function toggleShowEditor() {
    showEditor.value = !showEditor.value
  }

  function setCustomStyles(newStyles) {
    customStyles.value = { ...customStyles.value, ...newStyles }
  }

  function saveStateToLocalStorage() {
    window.localStorage.setItem('styles', JSON.stringify(customStyles.value))
  }

  function fetchFromLocalStorage() {
    customStyles.value = JSON.parse(window.localStorage.getItem('styles')) || defaultStyles()
  }

  function defaultStyles() {
    return {
      mainColor: {
        value: '#5c5c5c',
        selector: null,
      },
      textColor: {
        value: '#ffffff',
        selector: null,
      },
      jumbotronBackgroundColor: {
        value: '#5c5c5c',
        selector: 'header .jumbotron',
      },
      jumbotronTextColor: {
        value: '#ffffff',
        selector: 'header .jumbotron',
      },
    }
  }

  function resetStyles() {
    customStyles.value = defaultStyles()
  }

  return {
    toggleShowEditor,
    showEditor,
    customStyles,
    setCustomStyles,
    saveStateToLocalStorage,
    fetchFromLocalStorage,
    resetStyles,
  }
})
