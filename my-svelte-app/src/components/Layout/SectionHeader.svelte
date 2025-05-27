<script lang="ts">
  interface SectionHeaderProps {
    name: string;
    sectionId?: string;
  }
  let { name, sectionId }: SectionHeaderProps = $props();
  import "../../styles/Components/sectionHeader.scss";
</script>

<div class="section-header" id={sectionId}>
  <h2>
    {name}
  </h2>
</div>
