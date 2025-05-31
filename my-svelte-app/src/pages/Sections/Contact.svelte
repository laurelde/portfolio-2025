<script lang="ts">
  import SectionHeader from "../../components/Layout/SectionHeader.svelte";
  import headshot from "../../assets/images/headshot.jpeg";
  import LinkButton from "../../components/Buttons/LinkButton.svelte";
  import "../../styles/Sections/contact.scss";
</script>

<div class="section" id="contact-section">
  <SectionHeader name="Let's get <span class='highlight'>connect</span>ed!" sectionId="contact" />
  <div class="section-content">
    <div class="text">
      <p>
        I'm always eager to connect with fellow developers and entrepreneurs.
        Whether you have a question, want to collaborate on a project, or just
        want to chat about technology, feel free to reach out!
      </p>
    </div>

    <LinkButton
      label="Get in touch"
      href="mailto:laureledentinger@gmail.com"
      theme="mdc-button--outline mdc-button--touch"
    />
  </div>
</div>
