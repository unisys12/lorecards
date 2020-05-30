<template>
  <Layout>
    <main>
      <header>
        <h1>Daily Halo Lore Entry</h1>
      </header>
      <section class="card">
        <div class="card-header">
          <h2>{{ $page.allHaloLore.edges[0].node.Event }}</h2>
          <sub>
            <b>Year: </b>
            <span>{{ $page.allHaloLore.edges[0].node.Year }}</span>
          </sub>
          <sub>
            <b>Month: </b>
            <span>{{ $page.allHaloLore.edges[0].node.Month }}</span>
          </sub>
          <sub>
            <b>Day: </b>
            <span>{{ $page.allHaloLore.edges[0].node.Day }}</span>
          </sub>
        </div>
        <article class="card-body">
          <p>{{ $page.allHaloLore.edges[0].node.Notes }}</p>
        </article>
        <footer class="card-footer">
          <h3>{{ $page.allHaloLore.edges[0].node.Source }}</h3>
          <a v-bind:href="$page.allHaloLore.edges[0].node.Halopedia_Page">
            <h3>
              {{ $page.allHaloLore.edges[0].node.Halopedia_Page }}
            </h3>
          </a>
        </footer>
      </section>
    </main>
  </Layout>
</template>

<page-query>
query {
  allHaloLore(filter: { 
    Month: { eq: "May" } 
  	Day: { eq: "29" }	
  }
  ) {
    edges {
      node {
        id
        Year
        Month
        Day
        Event
        Source
        Halopedia_Page
        Notes
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Daily Halo Entry",
  },
};
</script>
