<script lang="ts">
  import SectionHeader from "../../components/Layout/SectionHeader.svelte";
  import headshot from "../../assets/images/headshot.jpeg";
  import Button from "../../components/Buttons/Button.svelte";
  import TextInput from "../../components/Inputs/TextInput.svelte";
  import TextArea from "../../components/Inputs/TextArea.svelte";
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

    <form action="https://api.web3forms.com/submit" method="POST" id="contact-form">
       <!-- Replace with your Access Key -->
     <input type="hidden" name="access_key" value="fb91f5cf-68c9-4b47-8412-5f26fa3af85c">

      <TextInput id="name" name="Name" label="Name"/>

      <TextInput id="email" name="Email" label="Email"/>
      <!-- <input type="text" name="mail"><br> -->
      <TextArea id="comment" name="comment" label="Message" />
      <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
      <input type="hidden" name="redirect" value="/#/sections/thanks">

      <Button
        type="submit"
        label="Send"
        theme="mdc-button--outline mdc-button--touch"/>
      </form>

  </div>
</div>


