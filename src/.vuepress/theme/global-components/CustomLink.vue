<template>
  <li v-if="!hide">
    <router-link :to="to" :class="cls">
      <slot>{{ page.title }}</slot>
    </router-link>
  </li>
</template>
<script>
import { resolvePage } from '@theme/util'

export default {
  props: ['to'],
  computed: {
    fm: ({ page: { frontmatter } }) => frontmatter || {},
    page: ({ $site: { pages }, to }) => resolvePage(pages, to),
    cls: ({ fm: { wip } }) => ({ wip }),
    hide: ({ fm: { hide } }) => hide && !ADMIN,
  },
}
</script>

