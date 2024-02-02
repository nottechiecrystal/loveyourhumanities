<template>
  <main id="site-main" class="site-main outer">
    <div class="inner">
      <article class="post-full post" :class="{ 'no-image': !current.image }">
        <header class="post-full-header">
          <section class="post-full-tags" v-if="primaryTag">
            <a :href="$withBase(`/tags/${primaryTag}`)">{{ primaryTag }}</a>
          </section>
          <h1 class="post-full-title">{{ current.title }}</h1>
          <p class="post-full-custom-excerpt" v-if="current.excerpt">
            {{ striptags(current.excerpt) }}
          </p>

          <div class="post-full-byline">
            <section class="post-full-byline-content">
              <section class="post-full-byline-meta">
                <div class="byline-meta-content">
                  <time
                    v-if="datetime"
                    class="byline-meta-date"
                    :datetime="datetime"
                    >{{ localeDate }}</time
                  >
                </div>
              </section>
            </section>
          </div>
        </header>

        <figure v-if="current.image" class="post-full-image">
          <img sizes="(max-width: 800px) 400px, (max-width: 1170px) 1170px, 2000px" :src="$withBase(current.image)" :alt="current.title" />
        </figure>

        <section class="post-full-content">
        <h2>Steps:</h2>
          <Content class="post-content" slot-key="default"/>
        </section>

        <section class="post-full-tags" v-if="primaryTag">
          <p>Tags:</p>&ensp;
          <p v-for="(tag, index) in this.current.tags" :key="index" >
            <a :href="$withBase(`/tags/${tag}`)">{{ tag }}</a>&ensp;|&ensp;   
          </p>
        </section>

        <section class="post-full-tags" v-if="primaryCategories">
          <p>Categories:</p>&ensp;
          <p v-for="(tag, index) in this.current.categories" :key="index" >
            <a :href="$withBase(`/category/${tag}`)">{{ tag }}</a>&ensp;|&ensp;   
          </p>
        </section>        
      </article>
    </div>
  </main>
</template>

<script>
import striptags from "striptags";
import { mapGetters } from "vuex";
import { head, kebabCase } from "lodash";

export default {
  computed: {
    ...mapGetters(["current"]),

    datetime() {
      return (
        this.current.publish && new Date(this.current.publish).toISOString()
      );
    },

    localeDate() {
      return (
        this.current.publish &&
        new Date(this.current.publish).toLocaleDateString()
      );
    },

    primaryTag() {
      if (!this.current.tags || this.current.tags.length === 0) {
        return null;
      }

      return head(this.current.tags);
    },

    primaryCategories(){
      if (!this.current.categories || this.current.categories.length === 0){
        return null;
      }

      return head(this.current.categories);
    },

    backgroundImage() {
      return {
        "background-image": `url(${this.$withBase(this.current.image)})`
      };
    }
  },
  methods: {
    kebabCase,
    striptags
  }
};
</script>
