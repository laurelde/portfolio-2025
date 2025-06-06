<script lang="ts">
  import SectionHeader from "../../components/Layout/SectionHeader.svelte";
  import headshot from "../../assets/images/cartoon-headshot.png";
  import "../../styles/Sections/about.scss";
</script>

<div class="section">
  <SectionHeader name="<span class='highlight'>About</span> Me" sectionId="about" />
  <div class="section-content section-content--text-block-right">
    <img class="image" src={headshot} alt="Headshot" />
    <div class="text-block text-block--about animate">
      <p>
        I'm a UX engineer passionate about building inclusive, intuitive digital experiences. With a background in both User Experience Design and Computer Science from the University of Michigan, I thrive at the intersection of empathy and engineering, translating complex problems into elegant, accessible solutions.
      </p>
        Now based in Nashville, I bring curiosity, collaboration, and a user-first mindset to every project I take on. Whether I’m optimizing frontend performance, refining user flows, or building reusable design systems, I’m always focused on delivering value through thoughtful design and clean code.
      <p>
        When I’m not coding or sketching wireframes, you’ll find me playing competitive volleyball, exploring new hiking trails, or planning my next travel adventure. 
      </p>   
    </div>
  </div>
</div>
