import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useEditorStore = defineStore('editor', () => {
  const showEditor = ref(true)
  const customStyles = ref({
    mainColor: {
      value: '',
      selecttor: '',
    },
    textColor: {
      value: '',
      selecttor: '',
    },
    jumbotronBackgroundColor: {
      value: '',
      selecttor: '',
    },
    jumbotronTextColor: {
      value: '',
      selecttor: '',
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
      mainColor: '#5c5c5c',
      textColor: '#ffffff',
      jumbotronBackgroundColor: '',
      jumbotronTextColor: '',
    }
  }

  return {
    toggleShowEditor,
    showEditor,
    customStyles,
    setCustomStyles,
    saveStateToLocalStorage,
    fetchFromLocalStorage,
  }
})
