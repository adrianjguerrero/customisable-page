<script setup>
import { applyStylesFromStore } from '@/helpers'
import { useEditorStore } from '@/stores/editor'

const editor = useEditorStore()

function resetPage() {
  editor.resetStyles()

  applyStylesFromStore(editor)
}
</script>
<template>
  <main>
    <header>
      <div class="jumbotron">Welcome to the basic Website</div>
      <nav class="header-menu">
        <ul>
          <li @click="editor.toggleShowEditor()">Customise</li>
          <li @click="editor.saveStateToLocalStorage()">Save Styles</li>
          <li @click="resetPage">Reset Styles</li>
        </ul>
      </nav>
    </header>
    <section>
      <article>
        <article>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vitae architecto numquam
            asperiores quaerat aspernatur maiores? Quae, consectetur! Facilis rem odit vero
            laudantium omnis maxime, ab consequatur magni voluptatibus quas.
          </p>
        </article>
        <article>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vitae architecto numquam
            asperiores quaerat aspernatur maiores? Quae, consectetur! Facilis rem odit vero
            laudantium omnis maxime, ab consequatur magni voluptatibus quas.
          </p>
        </article>
        <article>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vitae architecto numquam
            asperiores quaerat aspernatur maiores? Quae, consectetur! Facilis rem odit vero
            laudantium omnis maxime, ab consequatur magni voluptatibus quas.
          </p>
        </article>
        <article>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vitae architecto numquam
            asperiores quaerat aspernatur maiores? Quae, consectetur! Facilis rem odit vero
            laudantium omnis maxime, ab consequatur magni voluptatibus quas.
          </p>
        </article>
        <article>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vitae architecto numquam
            asperiores quaerat aspernatur maiores? Quae, consectetur! Facilis rem odit vero
            laudantium omnis maxime, ab consequatur magni voluptatibus quas.
          </p>
        </article>
        <article>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vitae architecto numquam
            asperiores quaerat aspernatur maiores? Quae, consectetur! Facilis rem odit vero
            laudantium omnis maxime, ab consequatur magni voluptatibus quas.
          </p>
        </article>
        <article>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vitae architecto numquam
            asperiores quaerat aspernatur maiores? Quae, consectetur! Facilis rem odit vero
            laudantium omnis maxime, ab consequatur magni voluptatibus quas.
          </p>
        </article>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vitae architecto numquam
          asperiores quaerat aspernatur maiores? Quae, consectetur! Facilis rem odit vero laudantium
          omnis maxime, ab consequatur magni voluptatibus quas.
        </p>
      </article>
      <article>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vitae architecto numquam
          asperiores quaerat aspernatur maiores? Quae, consectetur! Facilis rem odit vero laudantium
          omnis maxime, ab consequatur magni voluptatibus quas.
        </p>
      </article>
      <article>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vitae architecto numquam
          asperiores quaerat aspernatur maiores? Quae, consectetur! Facilis rem odit vero laudantium
          omnis maxime, ab consequatur magni voluptatibus quas.
        </p>
      </article>
      <article>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vitae architecto numquam
          asperiores quaerat aspernatur maiores? Quae, consectetur! Facilis rem odit vero laudantium
          omnis maxime, ab consequatur magni voluptatibus quas.
        </p>
      </article>
    </section>
    <footer>Copyright 2025</footer>
  </main>
</template>

<style></style>
