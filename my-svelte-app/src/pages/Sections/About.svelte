<script lang="ts">
  import SectionHeader from "../../components/Layout/SectionHeader.svelte";
  import headshot from "../../assets/images/headshot.jpeg";
  import "../../styles/Sections/about.scss";
</script>

<div class="section">
  <SectionHeader name="<span class='highlight'>About</span> Me" sectionId="about" />
  <div class="section-content">
    <img class="image" src={headshot} alt="Headshot" />
    <div class="text">
      <p>
        I'm a UX engineer specializing in creating accessible digital products that solve real user problems.

        I am a software engineer with a passion for building scalable web
        applications. I have experience in various technologies including
        TypeScript, Svelte, and Node.js.
      </p>
      <p>
        In my free time, I enjoy contributing to open source projects and
        exploring new programming languages.
      </p>
    </div>
  </div>
</div>
