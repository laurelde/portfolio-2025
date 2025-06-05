<script lang="ts">
  import SectionHeader from "../../components/Layout/SectionHeader.svelte";
  import headshot from "../../assets/images/cartoon-headshot.png";
  import Button from "../../components/Buttons/Button.svelte";
  import "../../styles/Sections/about.scss";
</script>
<Header></Header>
<div class="main-layout">
  <main>
    <div class="section" id="thanks-section">
      <SectionHeader name="<span class='highlight'>Thanks</span> for reaching out!" sectionId="thanks" />
      <div class="section-content section-content--text-block-right">
        <img class="image" src={headshot} alt="Headshot" />
        <div class="text-block text-block--about animate">
          <p>
            Thanks for reaching out! I'll get back to you as soon as possible. In the meantime, feel free to check out my portfolio or connect with me on social media.
          </p>
          <Button
            type="link"
            label="View Portfolio"
            href="/#/work"
            theme="mdc-button--outline mdc-button--touch" />
        </div>
      </div>
    </div>
  </main>
  <Footer></Footer>
</div>

