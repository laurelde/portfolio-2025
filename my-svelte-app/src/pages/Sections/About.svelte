<script lang="ts">
  import SectionHeader from "../../components/Layout/SectionHeader.svelte";
  import headshot from "../../assets/images/headshot.jpeg";
  import "../../styles/Sections/about.scss";
</script>

<div class="section">
  <SectionHeader name="<span class='highlight'>About</span> Me" sectionId="about" />
  <div class="section-content section-content--text-block-right">
    <img class="image" src={headshot} alt="Headshot" />
    <div class="text-block text-block--about ">
      <p>
        I'm a UX engineer specializing in creating accessible digital products that solve real user problems. I graduated from the University of Michigan with a degree in User Experience Design and Computer Science, and now live in Nashville, Tennessee. 
      </p>
      <p>
        In my free time, I enjoy playing volleyball, hiking, and travelling.
      </p>
    </div>
  </div>
</div>
