<template>
  <router-link :to="to" :class="cls">
    <slot>{{ page.title }}</slot>
  </router-link>
</template>
<script>
import { resolvePage } from '@theme/util'

export default {
  props: ['to'],
  computed: {
    fm: ({ page: { frontmatter } }) => frontmatter || {},
    page: ({ $site: { pages }, to }) => resolvePage(pages, to),
    cls: ({ fm: { wip } }) => ({ wip }),
  },
}
</script>

